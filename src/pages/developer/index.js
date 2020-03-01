import React from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"
import Login from "../../components/LoginForm"
import ProfileImage from "../../components/UI/ProfileImage"
import ProfileInfo from "../../components/UI/ProfileInfo"
import Logo from "../../components/Logo"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"

import developerStyles from "./index.module.scss"

class DeveloperPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: "",
      loggedIn: false,
      profileImage: "elliot_profile-dev-348.jpg",
      imageText:
        "I am a web developer living and working in the greater Denver Metro area.",
    }
  }
  render() {
    return (
      <Layout type="developer">
        <Head title="Developer" />
        <section className={developerStyles.profileWrapper}>
          <MaxWidthContainer>
            <ProfileImage
              image={this.state.profileImage}
              imageText={this.state.imageText}
            />
          </MaxWidthContainer>
        </section>
        <section className={developerStyles.background}>
          <MaxWidthContainer>
            <div className={developerStyles.windowImage}>
              <Logo mode="developer" width={"200px"} animation="DEVELOPER_PAGE_DISPLAY"/>
            </div>
          </MaxWidthContainer>
        </section>
        <section className={developerStyles.infoWrapper}>
          <MaxWidthContainer>
            <ProfileInfo type={"developer"} width={"4rem"} />
          </MaxWidthContainer>
        </section>
        <Login />
      </Layout>
    )
  }
}

export default DeveloperPage
