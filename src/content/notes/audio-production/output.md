---
author: "ChatGPT"
category: "audio-production"
cover: "@images/recording/close-up-mixer_bw.jpg"
coverAltText: "selective grayscale photography of mixing console"
coverCredit: "Leo Wieling"
coverCreditLink: "https://unsplash.com/@leowieling"
description: "Recording output information."
publishedDate: 2025-05-17
updatedDate: 
tags: ["daw", "plug-ins", "settings", "recording"]
title: "Recording Output"
---

## Loudness Meter

📝 Basic steps to use one:
Insert it on the Master Bus (or output track)
→ Load the loudness meter plugin (e.g., Youlean, iZotope Insight, Waves WLM) on your DAW’s master channel.
→ If using standalone software, route your audio output into it.

Play your full track or mix
→ Hit play from start to finish to let the meter capture the integrated loudness over the entire piece.
→ Watch the momentary, short-term, and integrated readings:

Momentary LUFS (M): ~400ms window (quick changes)

Short-term LUFS (S): 3-second average

Integrated LUFS (I): entire track average

Check your target level
→ Compare the Integrated LUFS to your goal (e.g., Spotify recommends around -14 LUFS, broadcast TV around -24 LUFS).
→ Adjust mix/master volume or compression to meet target.

Check the True Peak (TP) reading
→ Ensures you’re not clipping above 0 dBTP (digital inter-sample peaks). Some platforms (like Apple Music) may reject audio peaking above -1 dBTP.

Reset meter and re-check if needed
→ After changes, reset and re-run the meter to confirm.

🧐 Example use: mastering for Spotify
👉 Insert Youlean Loudness Meter on the master
👉 Play entire track, check Integrated LUFS
👉 Aim for around -14 LUFS
👉 Confirm True Peak ≤ -1 dBTP
👉 If too loud/quiet, adjust limiter, compression, or gain, then check again

🚩 Key things to avoid:
❌ Only looking at momentary or short-term values → focus on Integrated for overall loudness
❌ Ignoring true peak → could cause distortion on streaming
❌ Metering only loud parts → must measure the whole song

### Waves WLM

✅ Spotify Loudness Target
Integrated LUFS: ~-14 LUFS

True Peak: ≤ -1.0 dBTP

No hard requirement, but exceeding this causes loudness normalization (Spotify turns it down).

🎛️ Waves WLM Setup for Spotify
1. Load WLM
Insert WLM on your master bus/output channel as the last plugin in your chain.

2. Select Preset
WLM doesn’t have a direct "Spotify" preset, but here’s what to use:

Preset:

Go to Presets → Select EBU R128 (this follows European broadcast loudness norms but is close to what Spotify uses).

Now, modify it slightly:

3. Manual Settings (Modify the EBU Preset)
Target Loudness (LKFS): Change from -23 to -14

True Peak Limit: Set to -1.0 dBTP

Short Term Integration Time: 3s (leave default)

Momentary Integration Time: 400ms (leave default)

💡 LUFS = LKFS (they're effectively the same for WLM purposes)

4. Use "Trim" Button (Optional)
WLM has a Trim button that tells you how much gain to add/subtract to hit your target loudness.

After a full playthrough, click "Reset", play your full track.

At the end, WLM shows the needed gain adjustment to hit -14 LUFS.

Apply this adjustment manually (in your DAW) or let WLM do it by enabling "Trim".

5. Read the Meter
After playback, note these:

Integrated Loudness: Should be ≈ -14 LUFS

True Peak: Should be ≤ -1.0 dBTP

Range: This is your dynamics range (don’t compress too much just to hit loudness)

🛠️ Summary Settings for Spotify in WLM
Setting	Value
Target Loudness	-14 LUFS
True Peak Limit	-1.0 dBTP
Preset	EBU R128 + adjust
Trim	Optional
Measurement Range	Leave default

Would you like screenshots or help configuring this for a DAW like Ableton, 