const https = require("https");
const fs = require("fs");
const crypto = require("crypto");

function toHex(bytes) {
    return Array.from(bytes).map(b => b.toString(16).padStart(2, "0")).join("");
}

function fromHex(hex) {
    return Buffer.from(hex, "hex");
}

// The slowAES uses a custom unpadding. Let me try using Node.js with auto padding disabled
// and handle the padding manually.

function solveChallenge(cHex) {
    const key = fromHex("f655ba9d09a112d4968c63579db590b4");
    const iv = fromHex("98344c2eee86c3994890592585b49f80");
    const ciphertext = fromHex(cHex);
    
    // Try with auto padding first
    try {
        const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
        decipher.setAutoPadding(true);
        let decrypted = decipher.update(ciphertext);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return toHex(decrypted);
    } catch(e) {
        console.log("Auto-padding decryption failed:", e.message);
        // Try without padding
        try {
            const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
            decipher.setAutoPadding(false);
            let decrypted = decipher.update(ciphertext);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            console.log("No-padding raw bytes:", toHex(decrypted));
            // The first 16 bytes of decrypted might contain the actual data
            // with custom PKCS7 padding
            return toHex(decrypted);
        } catch(e2) {
            console.log("No-padding also failed:", e2.message);
            return null;
        }
    }
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
        console.log("Requesting: " + reqUrl + " (cookie: " + (cookie || "none") + ")");
        const resp = await fetchPage(reqUrl, cookie);
        console.log("Status: " + resp.status + ", Body len: " + resp.body.length);
        
        if (resp.body.includes("slowAES.decrypt")) {
            const searchStr = 'c=toNumbers("';
            const idx = resp.body.indexOf(searchStr);
            if (idx >= 0) {
                const start = idx + searchStr.length;
                const end = resp.body.indexOf('")', start);
                const cHex = resp.body.substring(start, end);
                console.log("Found ciphertext: " + cHex);
                cookie = solveChallenge(cHex);
                console.log("Cookie: " + cookie);
            } else {
                console.log("Could not find ciphertext pattern");
                console.log("Body snippet:", resp.body.substring(0, 500));
                break;
            }
        } else {
            console.log("GOT ACTUAL CONTENT! Length: " + resp.body.length);
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
