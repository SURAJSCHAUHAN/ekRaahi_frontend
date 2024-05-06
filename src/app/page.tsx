import BestSellers from '@/components/BestSellers'
import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'
import ServicesIcon from '@/components/ServicesIcon'
import SideMenu from '@/components/SideMenu'
import TopCategories from '@/components/TopCategories'
import React from 'react'


const page = () => {
  return (
    <div>
      <SideMenu/>
      <Hero/>
      <TopCategories/>
      <NewArrivals/>
      <ServicesIcon/>
      <BestSellers/>
    </div>
  )
}

export default page