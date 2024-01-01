import React from "react";

import MusicianLayout from "./MusicianLayout/MusicianLayout";

export default function layouts({ children, pageContext }) {
  return <MusicianLayout>{children}</MusicianLayout>
}
