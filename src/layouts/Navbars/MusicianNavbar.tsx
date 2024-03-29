import React from "react";

import { Link } from "gatsby";

import NavigationHeaderLink from "../../components/NavigationHeaderLink";

import * as styles from "./navbars.module.scss";

export default function MusicianNavbar() {
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
          <NavigationHeaderLink to="/about">
            About
          </NavigationHeaderLink>
        </li>
        {/* <li>
          <NavigationHeaderLink
            to="/musician/performances"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            Performances
          </NavigationHeaderLink>
        </li> */}
        <li>
          <NavigationHeaderLink to="/lessons">
            Lessons
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/contact">
            Contact
          </NavigationHeaderLink>
        </li>
        {/* <li className={styles.showListLink}>
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
              <NavigationHeaderLink
                to="/musician/abbeyroad"
                activeClassName={styles.navList__linkActive}
                className={styles.navList__link}
              >
                Abbey Road
              </NavigationHeaderLink>
            </li>
          </ul>
        </li> */}
      </ul>
    </nav>
  )
}