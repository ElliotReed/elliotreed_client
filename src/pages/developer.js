import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import developerStyles from "./developer.module.scss"
import MaxWidthContainer from "../components/UI/maxWidthContainer"
import Login from "../components/LoginForm"
import ProfileImage from "../components/UI/ProfileImage"
import ProfileInfo from "../components/UI/ProfileInfo"

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
        <MaxWidthContainer>
          <ProfileImage
            image={this.state.profileImage}
            imageText={this.state.imageText}
          />
        </MaxWidthContainer>
        <section className={developerStyles.background}>
          <MaxWidthContainer>
            Et qui commodo ut commodo laboris. Laborum ipsum veniam cupidatat
            sit occaecat occaecat incididunt labore est. Cupidatat et Lorem anim
            eiusmod labore minim veniam anim cillum sunt deserunt in nulla.
          </MaxWidthContainer>
        </section>
        <MaxWidthContainer>
          <ProfileInfo type={"developer"} />
        </MaxWidthContainer>
        <Login />
      </Layout>
    )
  }
}

export default DeveloperPage
