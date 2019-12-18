import React, { useState, useRef, useEffect, useContext } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import gsap from "gsap"

import { GlobalStateContext } from "../../context/GlobalContextProvider"

import Logo from "../Logo"
import headerStyles from "./header.module.scss"

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
  let aspectMenuDiv = useRef(null)
  const [showAspectMenu, setShowAspectMenu] = useState()
  const [hideAspectMenu, setHideAspectMenu] = useState()
  const [switchQualifier, setSwitchQualifier] = useState(false)
  const state = useContext(GlobalStateContext)

  const logoAnimation = () => {
    let animation;
    if (type !== state.mode) {
      if (type === "developer") {
        animation = "SWITCH_TO_DEVELOPER"
      }
      if (type === "musician") {
        animation = "SWITCH_TO_MUSICIAN"
      }
    }
    if (type === state.mode) {
      if (type === "developer") {
        animation = "SET_TO_DEVELOPER"
      }
      if (type === "musician") {
        animation = "SET_TO_MUSICIAN"
      }
    }

    return animation;
  }

  useEffect(() => {
    const duration = 0.3
    setShowAspectMenu(
      gsap
        .fromTo(
          aspectMenuDiv,
          { rotateX: 93 },
          { duration: duration, rotateX: 0, ease: "bounce" }
        )
        .pause()
    )
    setHideAspectMenu(
      gsap.to(aspectMenuDiv, { duration: duration, rotateX: -93 }).pause()
    )
  }, [switchQualifier])

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.navBrand}>
        <Link to={`/`}>
          <div className={headerStyles.logoWrapper}>
            <Logo width="2.5em" mode={type} animation={logoAnimation()} />
            <h1 className={headerStyles.title}>Elliot Reed</h1>
          </div>
        </Link>
        {/* TODO:  slide out other personality on hover, with direct link */}
        <div
          className={headerStyles.aspect}
          onMouseLeave={() => {
            hideAspectMenu.play()
            setSwitchQualifier(false)
          }}
        >
          <h6
            className={classnames(
              headerStyles.qualifierText,
              headerStyles.pointer
            )}
            onMouseEnter={() => {
              showAspectMenu.play()
              setSwitchQualifier(true)
            }}
          >
            {currentFacet}
          </h6>

          <div
            ref={element => {
              aspectMenuDiv = element
            }}
            className={classnames(headerStyles.aspectMenu)}
            onClick={() => {
              setSwitchQualifier(false)
            }}
          >
            <Link to={`/${otherFacet}`}>
              <h6 className={classnames(headerStyles.qualifierText)}>
                {otherFacet}
              </h6>
            </Link>
          </div>
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
