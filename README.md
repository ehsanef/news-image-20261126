# The World in One Day — 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/ehsanef/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/ehsanef/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A newspaper front page summing up Thursday 26 November 2026's world news in
one 1024×1024 image, entered in [make.fun's `news-image-20261126` bounty](https://make.fun/bounty/news-image-20261126).

**Lead:** Yemen's Houthis claim a strike on Saudi Arabia's biggest refinery,
Ras Tanura, and on Riyadh's financial district; Saudi Arabia says it shot
down four drones, and Brent crude settles at $94.61, up 3.5% (reported
26 November). **Also:** the Saudi-led coalition strikes Yemen's Hodeida port
as the Houthis threaten Jeddah and every Saudi Red Sea port; the FCC clears
SpaceX to deploy up to 1,000,000 satellites for orbital AI data centres;
Macy's 100th Thanksgiving Day Parade is postponed for the first time ever,
to Saturday, by a nor'easter; South Africa's Ramaphosa wins his court fight
over the Farmgate impeachment report; all hostages are freed after a 17-hour
supermarket siege in Cartagena; six die in a plane crash off Mississippi;
the WHO chief urges an end to the US fuel blockade on Cuba; plus the day's
ticker.

## How it was made

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it
to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` outside the
grader). The image was rendered in the building session from
`frontpage.html` (kept in the working notes, not the repo) with headless
Chromium, and verified: 1024×1024 PNG, 291,356 bytes, deterministic.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=qzcjfqr9&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
