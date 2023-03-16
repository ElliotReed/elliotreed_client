import React, { useState, useRef, useEffect, useContext } from "react"
import { Link } from "gatsby"

import classnames from "classnames"
import gsap from "gsap"

import Logo from "../components/Logo"
import { GlobalStateContext } from "../context/GlobalContextProvider"

import * as styles from "./header.module.scss"

const MusicianNav = () => {
  const [displayShowList, setDisplayShowList] = useState(false)

  const hideDropdownMenu = () => {
    setDisplayShowList(false)
  }

  useEffect(() => {
    if (displayShowList) {
      window.addEventListener("click", hideDropdownMenu)
    }

    return () => {
      window.removeEventListener("click", hideDropdownMenu)
    }
  }, [displayShowList])

  const showDropdownMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
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
            to="/musician/performances"
            activeClassName={styles.activeNavItem}
          >
            Performances
          </Link>
        </li>
        <li>
          <Link to="/musician/contact" activeClassName={styles.activeNavItem}>
            Contact
          </Link>
        </li>
        <li className={styles.showListLink}>
          <button type="button" onClick={showDropdownMenu}>
            &#8942;
          </button>
          <ul
            className={classnames(styles.showList, {
              [styles.rollDown]: displayShowList,
            })}
          >
            <li>
              <p>Show Notes</p>
            </li>
            <li>
              <Link
                to="/musician/abbeyroad"
                activeClassName={styles.activeNavItem}
              >
                Abbey Road
              </Link>
            </li>
          </ul>
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
          <Link
            to="/developer/portfolio"
            activeClassName={styles.activeNavItem}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/developer/contact" activeClassName={styles.activeNavItem}>
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
            <Logo width="2.5rem" mode={type} animation={logoAnimation()} />
            <p className={styles.title}>Elliot Reed</p>
          </div>
        </Link>
        <div
          className={styles.aspect}
          role="banner"
          onMouseLeave={() => {
            hideAspectMenu.play()
            setSwitchQualifier(false)
          }}
        >
          <p
            className={classnames(styles.qualifierText, styles.pointer)}
            onMouseEnter={() => {
              showAspectMenu.play()
              setSwitchQualifier(true)
            }}
          >
            {currentFacet}
          </p>

          <div
            ref={(element) => {
              aspectMenuDiv = element
            }}
            className={classnames(styles.aspectMenu)}
            onClick={() => {
              setSwitchQualifier(false)
            }}
          >
            <Link to={`/${otherFacet}`}>
              <p className={classnames(styles.qualifierText)}>{otherFacet}</p>
            </Link>
          </div>
        </div>
      </div>

      {type === "developer" && (
        <DeveloperNav />
      )}
      {type === "musician" && (
        <MusicianNav />
      )}
    </header>
  )
}

export default Header
