import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import styled from "styled-components"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`



const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Gianni's thoughts</h1>
        <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key= {node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{ node.frontmatter.title } - {node.frontmatter.date }</BlogTitle>
              </BlogLink>
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`