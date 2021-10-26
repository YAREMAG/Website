import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    document.body.style.backgroundColor= "White",
    <Layout pageTitle="Home Page">
      <p>Welcome to my website</p>
      <StaticImage
        alt="Evanka and Yarema Apple Picking"
        src="../images/evanka&i.jpg"
      />
      <StaticImage
      alt="Yarem and nephew Hunter"
      src="../images/hunter&me.jpg"
      />
    </Layout>
  )
}
export default IndexPage