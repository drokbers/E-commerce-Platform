import CategoryGrid from '@/components/categoryGrid'
import Header from '@/components/header'
import ProductCarousel from '@/components/productCarousel'
import Slider from '@/components/slider'
import ProductGrid from '@/components/productGrid'


export default function Home() {
  return (
    <div>
      <Header />
      <Slider/>
      <ProductCarousel/>
      <CategoryGrid/>
      <ProductGrid/>
    </div>
  )
}
