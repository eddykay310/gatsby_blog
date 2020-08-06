import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

// export default function Home() {
//   return <div>Hello world!</div>
// }

const IndexPage = () => {
  return (
   <Layout>
     <h1> Hello!! </h1> 
      <h2> I 'm a full-stack web developer</h2>
      <p>Need a developer</p>
      <Link to='/contact' >Contact me here</Link>
   </Layout>
  )
}

export default IndexPage
