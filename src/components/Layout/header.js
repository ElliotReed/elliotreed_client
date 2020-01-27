import React, { useState, useRef, useEffect, useContext } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import gsap from "gsap"

import { GlobalStateContext } from "../../context/GlobalContextProvider"

import Logo from "../Logo"
import styles from "./header.module.scss"

const MusicianNav = () => {
  const [displayShowList, setDisplayShowList] = useState(false)

  const onMouseEnter = () => {
    setDisplayShowList(!displayShowList)
  }

  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link to="/musician" activeClassName={styles.activeNavItem}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="musician/performances"
            activeClassName={styles.activeNavItem}
          >
            Performances
          </Link>
        </li>
        <li>
          <Link to="musician/contact" activeClassName={styles.activeNavItem}>
            Contact
          </Link>
        </li>
        <li
          className={styles.showListLink}
          onClick={onMouseEnter}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseEnter}
        >
          {displayShowList && (
            <ul className={styles.showList}>
              <li>Show Notes</li>
              <li onClick={onMouseEnter}>
                <Link
                  to="musician/abbeyroad"
                  activeClassName={styles.activeNavItem}
                >
                  Abbey Road
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  )
}

const DeveloperNav = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link to="/developer" activeClassName={styles.activeNavItem}>
            About
          </Link>
        </li>
        <li>
          <Link to="developer/portfolio" activeClassName={styles.activeNavItem}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="developer/contact" activeClassName={styles.activeNavItem}>
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
    let animation
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

    return animation
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
    <header className={styles.header}>
      <div className={styles.navBrand}>
        <Link to={`/`}>
          <div className={styles.logoWrapper}>
            <Logo width="2.5em" mode={type} animation={logoAnimation()} />
            <h1 className={styles.title}>Elliot Reed</h1>
          </div>
        </Link>
        <div
          className={styles.aspect}
          onMouseLeave={() => {
            hideAspectMenu.play()
            setSwitchQualifier(false)
          }}
        >
          <h6
            className={classnames(styles.qualifierText, styles.pointer)}
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
            className={classnames(styles.aspectMenu)}
            onClick={() => {
              setSwitchQualifier(false)
            }}
          >
            <Link to={`/${otherFacet}`}>
              <h6 className={classnames(styles.qualifierText)}>{otherFacet}</h6>
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
