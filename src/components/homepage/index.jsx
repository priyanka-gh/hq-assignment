import React from 'react'
import Introduction from "../../pages/introduction/index"
import MainFeatures from "../../pages/mainfeatures/index"
import AdditionalFeatures from "../../pages/additionalfeatures/index"
import Reviews from "../../pages/reviews/index"
import Plans from "../../pages/plans/index"
import Faq from "../../pages/faq/index"
import Footer from "../../pages/footer/index"

const index = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Introduction/>
        <MainFeatures/>
        <AdditionalFeatures/>
        <Reviews/>
        <Plans/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default index