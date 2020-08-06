import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
        return ( 
            <Layout>
                <h1> About </h1>  
                <h2> I am a self - taught web developer and machine learning engineer </h2>  
                <p>Contact me <Link to='/contact'>here</Link></p>
            </Layout>
       )
    }

export default AboutPage