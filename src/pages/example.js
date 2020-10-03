import React from 'react'
import Header from '../example/Header'
import HeaderStatic from '../example/HeaderStatic'
import { BaseLayout } from '../components'
import { graphql } from 'gatsby'

function example({ data }) {

    const { site: { info: { author } } } = data

    return (
        <BaseLayout>
            <p>hello from example page</p>
            <Header />
            <HeaderStatic />
            <h5>{author}</h5>
        </BaseLayout>
    )
}

export const data = graphql`
query {
    site {
      info:siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default example