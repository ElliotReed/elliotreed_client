import React from "react";

import { Link } from "gatsby";

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
          <Link
            to="/musician/about"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            About
          </Link>
        </li>
        {/* <li>
          <Link
            to="/musician/performances"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            Performances
          </Link>
        </li> */}
        <li>
          <Link
            to="/musician/lessons"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            Lessons
          </Link>
        </li>
        <li>
          <Link
            to="/musician/contact"
            activeClassName={styles.navList__linkActive}
            className={styles.navList__link}
          >
            Contact
          </Link>
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
              <Link
                to="/musician/abbeyroad"
                activeClassName={styles.navList__linkActive}
                className={styles.navList__link}
              >
                Abbey Road
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </nav>
  )
}