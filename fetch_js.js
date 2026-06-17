const https = require("https");
const fs = require("fs");

// Load slowAES from existing solver
const solverCode = fs.readFileSync("D:/Downloads/Mosuela---Personal-Website/solve3.js", "utf8");
const aesMatch = solverCode.match(/var slowAES = (\{[\s\S]*?\});/);
if (aesMatch) {
    eval("var slowAES = " + aesMatch[1]);
    // Re-initialize all the functions
    slowAES.aes.rotate = function(i){for(var t=i[0],r=0;r<3;r++)i[r]=i[r+1];return i[3]=t,i};
    slowAES.aes.core = function(i,t){i=this.rotate(i);for(var r=0;r<4;++r)i[r]=this.sbox[i[r]];return i[0]=i[0]^this.Rcon[t],i};
    slowAES.aes.expandKey = function(i,t){for(var r=16*(this.numberOfRounds(t)+1),o=0,n=1,s=[],e=[],a=0;a<r;a++)e[a]=0;for(var h=0;h<t;h++)e[h]=i[h];for(o+=t;o<r;){for(var u=0;u<4;u++)s[u]=e[o-4+u];if(o%t==0&&(s=this.core(s,n++)),t==this.keySize.SIZE_256&&o%t==16)for(var f=0;f<4;f++)s[f]=this.sbox[s[f]];for(var l=0;l<4;l++)e[o]=e[o-t]^s[l],o++}return e};
    slowAES.aes.addRoundKey = function(i,t){for(var r=0;r<16;r++)i[r]^=t[r];return i};
    slowAES.aes.createRoundKey = function(i,t){for(var r=[],o=0;o<4;o++)for(var n=0;n<4;n++)r[4*n+o]=i[t+4*o+n];return r};
    slowAES.aes.subBytes = function(i,t){for(var r=0;r<16;r++)i[r]=(t?this.rsbox:this.sbox)[i[r]];return i};
    slowAES.aes.shiftRows = function(i,t){for(var r=0;r<4;r++)i=this.shiftRow(i,4*r,r,t);return i};
    slowAES.aes.shiftRow = function(i,t,r,o){for(var n=0;n<r;n++)if(o){for(var s=i[t+3],e=3;0<e;e--)i[t+e]=i[t+e-1];i[t]=s}else{for(s=i[t],e=0;e<3;e++)i[t+e]=i[t+e+1];i[t+3]=s}return i};
    slowAES.aes.galois_multiplication = function(i,t){for(var r=0,o=0;o<8;o++){1==(1&t)&&(r^=i),256<r&&(r^=256);var n=128&i;256<(i<<=1)&&(i^=256),128==n&&(i^=27),256<i&&(i^=256),256<(t>>=1)&&(t^=256)}return r};
    slowAES.aes.mixColumns = function(i,t){for(var r=[],o=0;o<4;o++){for(var n=0;n<4;n++)r[n]=i[4*n+o];r=this.mixColumn(r,t);for(var s=0;s<4;s++)i[4*s+o]=r[s]}return i};
    slowAES.aes.mixColumn = function(i,t){for(var r=[],r=t?[14,9,13,11]:[2,1,1,3],o=[],n=0;n<4;n++)o[n]=i[n];return i[0]=this.galois_multiplication(o[0],r[0])^this.galois_multiplication(o[3],r[1])^this.galois_multiplication(o[2],r[2])^this.galois_multiplication(o[1],r[3]),i[1]=this.galois_multiplication(o[1],r[0])^this.galois_multiplication(o[0],r[1])^this.galois_multiplication(o[3],r[2])^this.galois_multiplication(o[2],r[3]),i[2]=this.galois_multiplication(o[2],r[0])^this.galois_multiplication(o[1],r[1])^this.galois_multiplication(o[0],r[2])^this.galois_multiplication(o[3],r[3]),i[3]=this.galois_multiplication(o[3],r[0])^this.galois_multiplication(o[2],r[1])^this.galois_multiplication(o[1],r[2])^this.galois_multiplication(o[0],r[3]),i};
    slowAES.aes.round = function(i,t){return i=this.subBytes(i,!1),i=this.shiftRows(i,!1),i=this.mixColumns(i,!1),i=this.addRoundKey(i,t)};
    slowAES.aes.invRound = function(i,t){return i=this.shiftRows(i,!0),i=this.subBytes(i,!0),i=this.addRoundKey(i,t),i=this.mixColumns(i,!0)};
    slowAES.aes.main = function(i,t,r){i=this.addRoundKey(i,this.createRoundKey(t,0));for(var o=1;o<r;o++)i=this.round(i,this.createRoundKey(t,16*o));return i=this.subBytes(i,!1),i=this.shiftRows(i,!1),i=this.addRoundKey(i,this.createRoundKey(t,16*r))};
    slowAES.aes.invMain = function(i,t,r){i=this.addRoundKey(i,this.createRoundKey(t,16*r));for(var o=r-1;0<o;o--)i=this.invRound(i,this.createRoundKey(t,16*o));return i=this.shiftRows(i,!0),i=this.subBytes(i,!0),i=this.addRoundKey(i,this.createRoundKey(t,0))};
    slowAES.aes.numberOfRounds = function(i){var t;switch(i){case this.keySize.SIZE_128:t=10;break;case this.keySize.SIZE_192:t=12;break;case this.keySize.SIZE_256:t=14;break;default:return null}return t};
    slowAES.aes.encrypt = function(i,t,r){for(var o=[],n=[],s=this.numberOfRounds(r),e=0;e<4;e++)for(var a=0;a<4;a++)n[e+4*a]=i[4*e+a];for(var r=this.expandKey(t,r),n=this.main(n,r,s),h=0;h<4;h++)for(var u=0;u<4;u++)o[4*h+u]=n[h+4*u];return o};
    slowAES.aes.decrypt = function(i,t,r){for(var o=[],n=[],s=this.numberOfRounds(r),e=0;e<4;e++)for(var a=0;a<4;a++)n[e+4*a]=i[4*e+a];for(var r=this.expandKey(t,r),n=this.invMain(n,r,s),h=0;h<4;h++)for(var u=0;u<4;u++)o[4*h+u]=n[h+4*u];return o};
    slowAES.modeOfOperation = {OFB:0,CFB:1,CBC:2};
    slowAES.getBlock = function(i,t,r,o){return 16<r-t&&(r=t+16),i.slice(t,r)};
    slowAES.decrypt = function(t,r,o,n){var s=o.length;if(n.length%16)throw new Error("iv length must be 128 bits.");var e,a=[],h=[],u=[],f=[],l=!0;if(null!==t){for(var c=0;c<Math.ceil(t.length/16);c++){var d=16*c,p=16*c+16;if(16*c+16>t.length&&(p=t.length),e=this.getBlock(t,d,p,r),r==this.modeOfOperation.CFB){for(l?(h=this.aes.encrypt(n,o,s),l=!1):h=this.aes.encrypt(a,o,s),var ii=0;ii<16;ii++)u[ii]=h[ii]^e[ii];for(var v=0;v<p-d;v++)f.push(u[v]);a=e}else if(r==this.modeOfOperation.OFB){for(l?(h=this.aes.encrypt(n,o,s),l=!1):h=this.aes.encrypt(a,o,s),ii=0;ii<16;ii++)u[ii]=h[ii]^e[ii];for(v=0;v<p-d;v++)f.push(u[v]);a=h}else if(r==this.modeOfOperation.CBC){for(h=this.aes.decrypt(e,o,s),ii=0;ii<16;ii++)u[ii]=(l?n:a)[ii]^h[ii];l=!1;for(v=0;v<p-d;v++)f.push(u[v]);a=e}}r==this.modeOfOperation.CBC&&this.unpadBytesOut(f)}return f};
    slowAES.padBytesIn = function(i){for(var t=16-i.length%16,r=0;r<t;r++)i.push(t)};
    slowAES.unpadBytesOut = function(i){var t=0,r=-1;if(16<i.length){for(var o=i.length-1;o>=i.length-1-16&&i[o]<=16;o--){if(-1==r&&(r=i[o]),i[o]!=r){t=0;break}if(++t==r)break}0<t&&i.splice(i.length-t,t)}};
}

function toNumbers(d){var e=[];d.replace(/(..)/g,function(d){e.push(parseInt(d,16))});return e}
function toHex(){for(var d=[],d=1==arguments.length&&arguments[0].constructor==Array?arguments[0]:arguments,e="",f=0;f<d.length;f++)e+=(16>d[f]?"0":"")+d[f].toString(16);return e.toLowerCase()}

const KEY = "f655ba9d09a112d4968c63579db590b4";
const IV = "98344c2eee86c3994890592585b49f80";
function solveChallenge(cHex) {
    var key = toNumbers(KEY);
    var iv = toNumbers(IV);
    var ct = toNumbers(cHex);
    var decrypted = slowAES.decrypt(ct, 2, key, iv);
    return toHex(decrypted);
}

function fetchPage(url, cookie) {
    return new Promise(function(resolve, reject) {
        const u = new URL(url);
        const opts = {
            hostname: u.hostname, port: 443, path: u.pathname + u.search,
            method: "GET", rejectUnauthorized: false,
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
        };
        if (cookie) { opts.headers["Cookie"] = "__test=" + cookie; }
        const req = https.request(opts, function(res) {
            let data = "";
            res.on("data", function(chunk) { data += chunk; });
            res.on("end", function() { resolve({ status: res.statusCode, headers: res.headers, body: data }); });
        });
        req.on("error", reject);
        req.end();
    });
}

async function fetchWithChallenge(url) {
    let cookie = null;
    for (let i = 1; i <= 30; i++) {
        const reqUrl = url + (url.indexOf("?") >= 0 ? "&" : "?") + "i=" + i;
        const resp = await fetchPage(reqUrl, cookie);
        if (resp.body.indexOf("slowAES.decrypt") >= 0) {
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
    const js = await fetchWithChallenge("https://richardportfolio.free.nf/script.js");
    if (js) {
        fs.writeFileSync("D:/Downloads/Mosuela---Personal-Website/script.js", js);
        console.log("=== script.js content (length: " + js.length + ") ===");
        console.log(js);
    } else {
        console.log("Failed to fetch script.js");
    }
}
main().catch(console.error);
