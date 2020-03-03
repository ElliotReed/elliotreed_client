import React from "react"
import PortalLayout from "./portal"
import MusicianLayout from "./musician"
import DeveloperLayout from "./developer"

export default ({ children, pageContext }) => {
  if (pageContext.layout === "portal") {
    return <PortalLayout>{children}</PortalLayout>
  }
  if (pageContext.layout === "developer") {
    return <DeveloperLayout>{children}</DeveloperLayout>
  }
  if (pageContext.layout === "musician") {
    return <MusicianLayout>{children}</MusicianLayout>
  }
}
