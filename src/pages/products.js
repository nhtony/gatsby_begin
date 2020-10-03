import React from "react"
import { graphql } from "gatsby"
import { BaseLayout } from '../components'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const ComponentName = ({ data }) => {
    const { allContentfulProduct: { nodes: products } } = data

    return (<BaseLayout>
        <section className="products-page">
            {products.map(product => {
                return (
                    <article key={product.id}>
                        <Image fluid={product.image.fluid} alt={product.title} />
                        <h3>{product.title}</h3>
                        <span>{product.price}</span>
                        <Link to={`/products/${product.slug}`}>More detail</Link>
                    </article>
                )
            })}
        </section>
    </BaseLayout>)
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
