import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import Head from "../components/head"

import * as styles from "./index.module.scss"

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.splitScreen = React.createRef()
    this.state = {
      leftHoverProperty: {},
      rightHoverProperty: {},
    }
  }

  mouseEnterHandler = event => {
    let name = event.target.getAttribute("name")
    let screenSize = this.splitScreen.current.offsetWidth
    let elementDimension
    let leftValue
    let rightValue
    let leftObject = {}
    let rightObject = {}

    if (screenSize <= 576) {
      elementDimension = "height"
    } else {
      elementDimension = "width"
    }

    if (name === "left") {
      leftValue = "61.8%"
      rightValue = "38.2%"
    } else {
      rightValue = "61.8%"
      leftValue = "38.2%"
    }

    leftObject[elementDimension] = leftValue
    rightObject[elementDimension] = rightValue

    this.setState({
      leftHoverProperty: leftObject,
      rightHoverProperty: rightObject,
    })
  }

  pageResizeHandler = () => {
    let screenSize = this.splitScreen.current.offsetWidth
    let leftHoverProperty = this.state.leftHoverProperty
    let rightHoverProperty = this.state.rightHoverProperty
    const leftHOP = leftHoverProperty.hasOwnProperty("height")
    const rightHOP = rightHoverProperty.hasOwnProperty("height")
    let elementDimension
    let leftValue
    let rightValue
    let leftObject = {}
    let rightObject = {}

    if (!leftHoverProperty.hasOwnProperty("width") && !leftHOP) {
      return
    }

    if (screenSize <= 576 && !leftHOP && !rightHOP) {
      elementDimension = "height"
      leftValue = leftHoverProperty["width"]
      rightValue = rightHoverProperty["width"]
    } else if (screenSize <= 576 && leftHOP && rightHOP) {
      elementDimension = "height"
      leftValue = leftHoverProperty["height"]
      rightValue = rightHoverProperty["height"]
    }

    if (screenSize > 576 && !leftHOP && !rightHOP) {
      elementDimension = "width"
      leftValue = leftHoverProperty["width"]
      rightValue = rightHoverProperty["width"]
    } else if (screenSize > 576 && leftHOP && rightHOP) {
      elementDimension = "width"
      leftValue = leftHoverProperty["height"]
      rightValue = rightHoverProperty["height"]
    }

    leftObject[elementDimension] = leftValue
    rightObject[elementDimension] = rightValue

    this.setState({
      leftHoverProperty: leftObject,
      rightHoverProperty: rightObject,
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.pageResizeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.pageResizeHandler)
    this.setState({
      leftHoverProperty: {},
      rightHoverProperty: {},
    })
  }

  render() {
    return (
      <div className={styles.landingContainer} ref={this.splitScreen}>
        <Head title="Developer | Musician" />
        <div
          role="dialog"
          name="left"
          onMouseEnter={this.mouseEnterHandler}
          className={classNames({
            [styles.split]: true,
            [styles.left]: true,
          })}
          style={this.state.leftHoverProperty}
        >
          <h1>The Developer</h1>
          <Link to="/developer" className={styles.button}>
            Learn More!
          </Link>
        </div>
        <div
          role="dialog"
          name="right"
          className={classNames({
            [styles.split]: true,
            [styles.right]: true,
          })}
          onMouseEnter={this.mouseEnterHandler}
          style={this.state.rightHoverProperty}
        >
          <h1>The Musician</h1>
          <Link to="/musician" className={styles.button}>
            Learn More!
          </Link>
        </div>
      </div>
    )
  }
}

export default LandingPage
