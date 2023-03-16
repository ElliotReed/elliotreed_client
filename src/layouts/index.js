import React from "react"

import DeveloperLayout from "./developer"
import MusicianLayout from "./musician"
import PortalLayout from "./portal"

export default function layouts({ children, pageContext }) {
  if (pageContext.layout === "developer") {
    return <DeveloperLayout>{children}</DeveloperLayout>
  }
  if (pageContext.layout === "musician") {
    return <MusicianLayout>{children}</MusicianLayout>
  }
  return <PortalLayout>{children}</PortalLayout>
}
