import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import PageHeading from '../../components/PageHeading/PageHeading'
import section_img from "../../assets/media/about-page.png"

const AboutPage = () => {
  return (
   <PageHeading title={"About us"} img={section_img}/>
  )
}

export default AboutPage
