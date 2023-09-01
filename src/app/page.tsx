import Header from '@/components/header'
import ProductCarousel from '@/components/productCarousel'
import Slider from '@/components/slider'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <Slider/>
      <ProductCarousel/>
    </div>
  )
}
