import { AvColors } from '../../components/availableColors/AvColors'
import { Customers } from '../../components/customers/Customers'
// import { Exp } from '../../components/exp/Exp'
import Gallery from '../../components/gallery/Gallery'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products2/Products2'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Customers />
        <Products />
        <Gallery />
        <AvColors />
        {/* <Exp /> */}
      </div>
    </div>
  )
}

export default Home
