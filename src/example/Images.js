import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import img from '../images/image-3.jpg'
import Image from 'gatsby-image'

const getData = graphql`
{
    fixed: file(relativePath: {eq:"image-1.jpg"}){
      childImageSharp {
        fixed(width: 300, height: 400){
            ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq:"image-2.jpg"}){
      childImageSharp {
        fluid {
         ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: {eq:"image-2.jpg"}){
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
  }
`

export default function Images() {
    const data = useStaticQuery(getData)
    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic image</h3>
                <img src={img} width="100%" alt="q4" />
            </article>
            <article className="single-image">
                <h3>Fixed image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} alt="q" />
            </article>
            <article className="single-image">
                <h3>Fluid image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} alt="f" />
                <div className="small">
                    <Image fluid={data.fluid.childImageSharp.fluid} alt="r" />
                </div>
                <Image fluid={data.example.childImageSharp.fluid} alt="3" />
            </article>
        </section>
    )
}
