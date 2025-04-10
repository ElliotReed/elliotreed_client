import * as React from "react";

import MusicianLayout from "./MusicianLayout";
import DesignLayout from "./DesignLayout";

export default function layouts({ children, pageContext }) {
  if (pageContext.layout === "design") {
    return <DesignLayout>{children}</DesignLayout>
  }

  return <MusicianLayout>{children}</MusicianLayout>
}
