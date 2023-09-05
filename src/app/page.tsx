import CategoryGrid from '@/components/categoryGrid'
import Header from '@/components/header'
import ProductCarousel from '@/components/productCarousel'
import Slider from '@/components/slider'
import ProductGrid from '@/components/productGrid'
import { FeatureSectionVideo, FeatureSectionPhoto } from '@/components/featureSection';

import TestimonialBlock from '@/components/testimonialBlock'
// import Newsletter from '@/components/newsletter'


export default function Home() {
  return (
    <div className='flex flex-col '>
      <Header />
      <Slider/>
      <ProductCarousel/>
      <CategoryGrid/>
      <ProductGrid/>
      <FeatureSectionPhoto/>
      <TestimonialBlock />
     {/* <Newsletter/> */}
      
    </div>
  )
}
