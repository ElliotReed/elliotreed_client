import React, { Component } from "react"

import Layout from "../../components/layout"
import Head from "../../components/head"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import ProfileImage from "../../components/UI/ProfileImage"
import ProfileInfo from "../../components/UI/ProfileInfo"

class MusicianPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileImage: "music-elliot-profile_567.jpg",
      imageText:
        "I am a musician living and working in the greater Denver Metro area.",
    }
  }

  render() {
    return (
      <Layout type="musician">
        <Head title="Musician" />
        <MaxWidthContainer>
          <ProfileImage
            image={this.state.profileImage}
            imageText={this.state.imageText}
          />
        </MaxWidthContainer>
        <MaxWidthContainer>
          <ProfileInfo type={"musician"} />
        </MaxWidthContainer>
      </Layout>
    )
  }
}

export default MusicianPage