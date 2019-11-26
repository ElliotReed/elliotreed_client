import React, { useState } from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import headerStyles from "./header.module.scss"
import Logo from "../Logo"

const MusicianNav = () => {
  return (
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link to="/musician" activeClassName={headerStyles.activeNavItem}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="musician/performances"
            activeClassName={headerStyles.activeNavItem}
          >
            Performances
          </Link>
        </li>
        <li>
          <Link
            to="musician/contact"
            activeClassName={headerStyles.activeNavItem}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="musician/charts"
            activeClassName={headerStyles.activeNavItem}
          >
            Charts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const DeveloperNav = () => {
  return (
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link to="/developer" activeClassName={headerStyles.activeNavItem}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="developer/portfolio"
            activeClassName={headerStyles.activeNavItem}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="developer/contact"
            activeClassName={headerStyles.activeNavItem}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
const Header = ({ type }) => {
  const currentFacet = type
  const otherFacet = type === "developer" ? "musician" : "developer"
  const [switchQualifier, setSwitchQualifier] = useState(false)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.navBrand}>
        <Link to={`/`}>
          <div className={headerStyles.logoWrapper}>
            <Logo width="2.5em" mode={type} />
            <h1 className={headerStyles.title}>Elliot Reed</h1>
          </div>
        </Link>
        {/* TODO:  slide out other personality on hover, with direct link */}
        <div
          className={headerStyles.qualifier}
          onMouseEnter={() => {
            setSwitchQualifier(true)
          }}
          onMouseLeave={() => {
            setSwitchQualifier(false)
          }}
        >
          <h6
            className={classnames(
              headerStyles.qualifierText,
              headerStyles.currentFacet,
              switchQualifier ? headerStyles.hideFacet : headerStyles.showFacet
            )}
          >
            {currentFacet}
          </h6>
          <Link to={`/${otherFacet}`}>
            <h6
              className={classnames(
                headerStyles.qualifierText,
                headerStyles.otherFacet,
                switchQualifier
                  ? headerStyles.showFacet
                  : headerStyles.hideFacet
              )}
            >
              {otherFacet}
            </h6>
          </Link>
        </div>
      </div>
      {type === "developer" && (
        <DeveloperNav alink="Musician" qualifier="Developer" />
      )}
      {type === "musician" && (
        <MusicianNav alink="Developer" qualifier="Musician" />
      )}
    </header>
  )
}

export default Header
