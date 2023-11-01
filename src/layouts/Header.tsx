import * as React from "react"
import { Link } from "gatsby"

import classnames from "classnames"
import { gsap } from "gsap"

import Logo from "../components/Logo"
import { GlobalStateContext } from "../context/GlobalContextProvider"

import CollapsibleHeader from "./CollapsibleHeader";

import * as styles from "./header.module.scss"

function logoAnimation(type: string, mode: string) {
  let animation
  if (type !== mode) {
    if (type === "developer") {
      animation = "SWITCH_TO_DEVELOPER"
    }
    if (type === "musician") {
      animation = "SWITCH_TO_MUSICIAN"
    }
  }
  if (type === mode) {
    if (type === "developer") {
      animation = "SET_TO_DEVELOPER"
    }
    if (type === "musician") {
      animation = "SET_TO_MUSICIAN"
    }
  }

  return animation
}

const MusicianNav = () => {
  const [displayShowList, setDisplayShowList] = React.useState(false)

  const hideDropdownMenu = () => {
    setDisplayShowList(false)
  }

  React.useEffect(() => {
    if (displayShowList) {
      window.addEventListener("click", hideDropdownMenu)
    }

    return () => {
      window.removeEventListener("click", hideDropdownMenu)
    }
  }, [displayShowList])

  const showDropdownMenu = (e: React.MouseEvent) => {
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
          <Link to="/musician/lessons" activeClassName={styles.activeNavItem}>
            Lessons
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

function Aspect({ type }: { type: string }) {
  const aspectMenuDiv = React.useRef<HTMLDivElement | null>(null)
  const currentFacet = type
  const otherFacet = type === "developer" ? "musician" : "developer"
  const duration = 0.3

  const handleMouseEnter = () => {
    gsap
      .fromTo(
        aspectMenuDiv.current,
        { rotateX: 93 },
        { duration: duration, rotateX: 0, ease: "bounce" }
      )
  }

  const handleMouseLeave = () => {
    gsap.to(aspectMenuDiv.current, { duration: duration, rotateX: -93 })
  }

  return (
    <div
      className={styles.aspect}
      role="banner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={classnames(styles.qualifierText, styles.pointer)}>
        {currentFacet}
      </p>

      <div
        ref={(element) => {
          aspectMenuDiv.current = element
        }}
        className={classnames(styles.aspectMenu)}

      >
        <Link
          className={classnames(styles.qualifierText)}
          to={`/${otherFacet}`}
        >
          {otherFacet}
        </Link>
      </div>
    </div>
  )
}

const Header = ({ type }: { type: string }) => {
  const state = React.useContext(GlobalStateContext)

  return (
    <CollapsibleHeader>
      <header className={styles.header}>
        <div className={styles.navBrand}>
          <Link to={`/`}>
            <div className={styles.logoWrapper}>
              <Logo width="2.5rem" mode={type} animation={logoAnimation(type, state.mode)} />
              <p className={styles.title}>Elliot Reed</p>
            </div>
          </Link>

          <Aspect type={type} />
        </div>

        {type === "developer" && (<DeveloperNav />)}
        {type === "musician" && (<MusicianNav />)}
      </header>
    </CollapsibleHeader>
  )
}

export default Header
