import React, { useState } from 'react'
import "./ServicesPage.css"
import PageHeading from '../../components/PageHeading/PageHeading';
import section_img from "../../assets/media/services-page.jpg"

const ServicesPage = () => {
  return (
    <>
      <PageHeading title={"Services"} img={section_img}/>
    </>
  );
}

export default ServicesPage
