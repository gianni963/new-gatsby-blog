import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"




const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Gianni's thoughts</h1>
        <h4>{ data.allMarkdownRemark.totalCount }</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key= {node.id}>
              <span>{ node.frontmatter.title } - {node.frontmatter.date }</span>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}



export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            date
            description
            title
          }
          headings {
            id
          }
          excerpt
        }
      }
    }
  }
`