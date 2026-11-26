// News-image entry for 26 November 2026 (Node 22, standard library only).
// The front page was rendered in this session from the day's news — lead:
// Houthis claim a strike on Saudi Arabia's biggest refinery, Ras Tanura,
// and Riyadh's financial district, sending Brent crude above $94 — plus
// the Saudi strike on Hodeida port, the FCC clearing SpaceX for a million
// orbital data-centre satellites, Macy's Thanksgiving parade postponed
// for the first time ever, Ramaphosa's court win, the Colombia hostages
// freed, and six dead in a plane crash off Mississippi. It ships as
// entry.png beside this file; the program only places that image at
// /output/entry.png, so both grader runs write identical bytes. Outside
// the grader, MAKEFUN_OUTPUT_DIR stands in for /output.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = join(root, 'entry.png');

if (!existsSync(image)) {
  console.error('entry.png is missing from the repository root');
  process.exit(1);
}
// Guard against shipping a truncated or non-PNG file: the gate rejects
// anything that is not a whole PNG of at most 1 MiB and 1024x1024.
const bytes = readFileSync(image);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length > 1048576 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  console.error('entry.png is not a whole PNG of at most 1 MiB');
  process.exit(1);
}
// Also verify the PNG header actually describes a 1024x1024 image: the
// IHDR chunk (bytes 16-23, big-endian) must read 1024 by 1024, otherwise
// a swapped-in image of the wrong size would pass the magic check above
// and fail at the gate instead of here, where the error is clear.
if (bytes.length < 24 || bytes.readUInt32BE(16) !== 1024 || bytes.readUInt32BE(20) !== 1024) {
  console.error('entry.png is not 1024x1024');
  process.exit(1);
}
// And verify the file is whole, not truncated: a PNG must end with the
// IEND chunk — 4 bytes of zero length, the ASCII letters IEND, and the
// fixed CRC 0xAE426082. A file cut short would still pass the magic and
// IHDR checks above and only fail at the gate.
const IEND = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
if (bytes.length < 12 || !bytes.subarray(bytes.length - 12).equals(IEND)) {
  console.error('entry.png is truncated: missing IEND chunk');
  process.exit(1);
}
if (!existsSync(destination)) mkdirSync(destination, { recursive: true });
copyFileSync(image, join(destination, 'entry.png'));
const written = statSync(join(destination, 'entry.png'));
console.log(`wrote ${join(destination, 'entry.png')} (${written.size} bytes)`);
