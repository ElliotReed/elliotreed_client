import React from "react";

import { ContextProviderComponent } from '../context/Context'

interface PortalLayoutProps {
  children: React.ReactNode,
}

export default function PortalLayout({ children }: Readonly<PortalLayoutProps>) {
  return (
    <ContextProviderComponent>
      {children}
    </ContextProviderComponent>
  )
}
