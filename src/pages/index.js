import * as React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial. Ajmo mi cijevi vidit</p>
      <StaticImage
        alt='Image description'
        src='../images/E1oMV3QVgAIr1NT.jpg'
      />
    </Layout>
  )
}

export default IndexPage