/* Remove the solid black background from raw app screenshots and export
   trimmed, transparent PNGs that float on a light background.
   Source: a folder of raw black-background screenshots.
   Usage: node scripts/process-screens.mjs <srcDir> */
import sharp from "sharp";
import path from "node:path";

const SRC = process.argv[2] || path.join(process.env.HOME, "Downloads/APPImages");
const OUT = "public/screens";
const T = 20; // background brightness threshold (bg is pure black)
const PAD = 8;

const map = {
  "1.png": "app-home.png",
  "2.png": "app-categories.png",
  "3.png": "app-order-again.png",
  "5.png": "app-cart.png",
  "6.png": "app-settings.png",
  "7.png": "app-orders.png",
  "8.png": "app-order-details.png",
};

for (const [raw, out] of Object.entries(map)) {
  const inPath = path.join(SRC, raw);
  const { width: W, height: H } = await sharp(inPath).metadata();
  const { data } = await sharp(inPath).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const bri = (idx) => { const i = idx * 4; return Math.max(data[i], data[i + 1], data[i + 2]); };

  /* Flood fill the connected black background from the borders */
  const isBg = new Uint8Array(W * H);
  const stack = [];
  const pushIf = (x, y) => {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const idx = y * W + x;
    if (isBg[idx]) return;
    if (bri(idx) <= T) { isBg[idx] = 1; stack.push(idx); }
  };
  for (let x = 0; x < W; x++) { pushIf(x, 0); pushIf(x, H - 1); }
  for (let y = 0; y < H; y++) { pushIf(0, y); pushIf(W - 1, y); }
  while (stack.length) {
    const idx = stack.pop(); const x = idx % W, y = (idx - x) / W;
    pushIf(x + 1, y); pushIf(x - 1, y); pushIf(x, y + 1); pushIf(x, y - 1);
  }

  /* Apply transparency + compute the phone bounding box */
  let minX = W, minY = H, maxX = 0, maxY = 0;
  for (let idx = 0; idx < W * H; idx++) {
    if (isBg[idx]) { data[idx * 4 + 3] = 0; continue; }
    const x = idx % W, y = (idx - x) / W;
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  minX = Math.max(0, minX - PAD); minY = Math.max(0, minY - PAD);
  maxX = Math.min(W - 1, maxX + PAD); maxY = Math.min(H - 1, maxY + PAD);
  const cw = maxX - minX + 1, chh = maxY - minY + 1;

  await sharp(Buffer.from(data), { raw: { width: W, height: H, channels: 4 } })
    .extract({ left: minX, top: minY, width: cw, height: chh })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, out));
  console.log(`${out}  ${cw}x${chh}`);
}
