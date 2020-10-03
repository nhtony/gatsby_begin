import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
query FirstQuery {
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
export default function Header() {
  const { site: { info: { title, person: { name } } } } = useStaticQuery(getData)
  return (
    <div>
      <h2>title: {title}</h2>
      <h2>name: {name}</h2>
    </div>
  )
}
