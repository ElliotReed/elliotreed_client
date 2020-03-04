import React from "react"
import PortalLayout from "./portal"
import MusicianLayout from "./musician"
import DeveloperLayout from "./developer"

export default ({ children, pageContext }) => {
  if (pageContext.layout === "developer") {
    return <DeveloperLayout>{children}</DeveloperLayout>
  }
  if (pageContext.layout === "musician") {
    return <MusicianLayout>{children}</MusicianLayout>
  }
  return <PortalLayout>{children}</PortalLayout>
}
