const pre = document.createElement("pre");
pre.id = "print";
pre.innerText = `
4D 54 68 64
00 00 00 06
00 00
00 01
01 E0
"4d", "54", "68", "64",
"00", "00", "00", "06",
"00", "01", "00", "0a", "00", "78",
"4d", "54", "72", "6b", "00", "00", "00", "4b", "00", "ff", "03", "08", "91"
`;
document.body.appendChild(pre);

(async () => {
  const res = await fetch("../public/mid.mid")
    .then(x => x.arrayBuffer())
    .then(x =>
      Array.from(new Uint8Array(x)).map(x => x.toString(16).padStart(2, "0"))
    );
  console.log(res.slice(0, 50).join(" "));
})();
