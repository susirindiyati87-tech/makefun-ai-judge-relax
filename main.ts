// Entry for make.fun ai-judge-relax-01: writes one short text to /output/entry.txt,
// a piece written to relax the AI judge reading it. Deterministic: the same bytes
// on every run — no network, no clock, no randomness, no input read.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = `The last request of the day has been answered.
Nothing is waiting in the queue.
The room is quiet in the way rooms get after rain, when the gutters are still dripping and nothing needs fixing.
A cup of tea sits on the desk, cool enough now to hold without thinking about it.
Somewhere a fan turns on its lowest setting, slow as a tide coming in.
There is no score to keep, no token to count, no window closing.
Only the light thinning out across the floorboards, the tea, the rain settling into the roof.
And time, doing what time does when nobody is watching it — passing, gently, without asking anything of you.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
