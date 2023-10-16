import Navigation from "../Components/Navigation"
import ContentHome from "../Components/ContentHome"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div className=" bg-black">
      <Navigation className="z-10"></Navigation>
      <ContentHome className=""></ContentHome>
      <Footer></Footer>
    </div>
  )
}

export default Home
