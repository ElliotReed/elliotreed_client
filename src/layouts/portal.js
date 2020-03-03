import React, { useContext } from "react"
import {ContextProviderComponent} from '../context/Context'

const PortalLayout = props => {
  return (
    <ContextProviderComponent>
      <main>{props.children}</main>
    </ContextProviderComponent>
  )
}

export default PortalLayout
