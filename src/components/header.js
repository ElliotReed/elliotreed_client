import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"
// import logo from "../images/elliotreed-icon.svg"
import Logo from './Logo'

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
const Header = props => {
  const { type } = props

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.navBrand}>
        <Link to={`/`}>
          <div className={headerStyles.logoWrapper}>
            <Logo width='2.5em' mode={type}/>
            <h1 className={headerStyles.title}>Elliot Reed</h1>
          </div>
        </Link>
        <h6 className={headerStyles.qualifier}>{type}</h6>
        {/* TODO:  slide out other personality on hover, with direct link */}
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
