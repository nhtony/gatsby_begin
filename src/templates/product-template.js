import React from "react"
import { graphql } from "gatsby"
import { BaseLayout } from '../components'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const ComponentName = ({ data: { product: { price, title, image: { fixed }, info: { info } } } }) => (
    <BaseLayout>
        <div style={{ textAlign: "center" }}>
            <Link to="/products">back to products</Link>
            <h1>single product: {title}</h1>
        </div>
        <section className="single-product">
            <article>
                <Image fixed={fixed} alt={title} />
            </article>
            <article>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <p>{info}</p>
                <button>add to cart</button>
            </article>
        </section>
    </BaseLayout>
)

export const query = graphql`
query GetSingleProduct($slug:String)
  {
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed (width:300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
