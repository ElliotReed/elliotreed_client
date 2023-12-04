import React from "react";

import DeveloperLayout from "./DeveloperLayout/DeveloperLayout";
import DesignLayout from "./DesignLayout";
import MusicianLayout from "./MusicianLayout/MusicianLayout";
import PortalLayout from "./PortalLayout/PortalLayout";

export default function layouts({ children, pageContext }) {
  if (pageContext.layout === "developer") {
    return <DeveloperLayout>{children}</DeveloperLayout>
  }
  if (pageContext.layout === "design") {
    return <DesignLayout>{children}</DesignLayout>
  }
  if (pageContext.layout === "musician") {
    return <MusicianLayout>{children}</MusicianLayout>
  }
  return <PortalLayout>{children}</PortalLayout>
}
