const https = require("https");
const fs = require("fs");
const crypto = require("crypto");

function toHex(bytes) {
    return Array.from(bytes).map(b => b.toString(16).padStart(2, "0")).join("");
}

function fromHex(hex) {
    return Buffer.from(hex, "hex");
}

function solveChallenge(cHex) {
    const key = fromHex("f655ba9d09a112d4968c63579db590b4");
    const iv = fromHex("98344c2eee86c3994890592585b49f80");
    const ciphertext = fromHex(cHex);
    
    const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
    decipher.setAutoPadding(true);
    let decrypted = decipher.update(ciphertext);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return toHex(decrypted);
}

function fetchPage(url, cookie) {
    return new Promise((resolve, reject) => {
        const u = new URL(url);
        const opts = {
            hostname: u.hostname, port: 443, path: u.pathname + u.search,
            method: "GET", rejectUnauthorized: false,
            headers: { "User-Agent": "Mozilla/5.0" }
        };
        if (cookie) { opts.headers["Cookie"] = "__test=" + cookie; }
        const req = https.request(opts, (res) => {
            let data = "";
            res.on("data", chunk => data += chunk);
            res.on("end", () => resolve({ status: res.statusCode, body: data }));
        });
        req.on("error", reject);
        req.end();
    });
}

async function fetchWithChallenge(url) {
    let cookie = null;
    for (let i = 1; i <= 30; i++) {
        const reqUrl = url + (url.includes("?") ? "&" : "?") + "i=" + i;
        const resp = await fetchPage(reqUrl, cookie);
        if (resp.body.includes("slowAES.decrypt")) {
            const idx = resp.body.indexOf('c=toNumbers("');
            if (idx >= 0) {
                const start = idx + 13;
                const end = resp.body.indexOf('")', start);
                const cHex = resp.body.substring(start, end);
                cookie = solveChallenge(cHex);
            }
        } else {
            return resp.body;
        }
    }
    return null;
}

async function main() {
    console.log("Fetching script.js...");
    const js = await fetchWithChallenge("https://richardportfolio.free.nf/script.js");
    if (js) {
        fs.writeFileSync("D:/Downloads/Mosuela---Personal-Website/script.js", js);
        console.log("=== script.js (length: " + js.length + ") ===");
        console.log(js);
    } else {
        console.log("Failed to fetch script.js");
    }
}
main().catch(console.error);
