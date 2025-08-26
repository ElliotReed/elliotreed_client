---
author: Elliot Reed
cover: "@images/scores/musescore.png"
title: MuseScore Tips
description: Learn the basics of scoring in MuseScore
publishedDate: 2025-04-06
updatedDate: 2025-06-23
category: "notation"
tags: ["notation", "scoring", "musescore"]
---

## Contents

- [Note Entry](#note-entry)
- [Swing Playback](#enable-swing-playback)

## MuseScore 4: Enable Swing Playback

### Apply Swing to Entire Score

1. Go to **Format > Style > Score**
2. Scroll to **Swing Settings**
3. Set:

   * **Swing ratio** (e.g., `60%` for light swing, `67%` for triplet feel)
   * Apply to **all voices** or a **specific voice**

### Apply Swing Locally Using System Text

1. Select the first **note or measure** of the swing passage
2. Go to **Add > Text > System Text** (or press `Ctrl+Shift+T`)
3. Type: `Swing`
4. Select the text, open **Properties > Playback**
5. Enable **"Swing"**
6. (Optional) Adjust **swing ratio** for custom feel

### Disable Swing Later

* Add another **System Text** at the point you want to return to straight time
* Type: `Straight`
* Enable in **Properties > Playback**, then **disable swing**

## Note Entry

### Multiple Staves to One

1. Select parts to combine
2. Use Implode to combine
3. If moving to another track, copy the combined part to the clipboard, then undo to retun the parts to uncombined state.
4. Paste from the clipboard to the new stave.

[https://www.youtube.com/watch?v=8DwIhWNmWH4&t=113s](https://www.youtube.com/watch?v=8DwIhWNmWH4&t=113s)


## Auto Placement

If an object has been moved, `Ctrl + R` will reset the placement to auto. 