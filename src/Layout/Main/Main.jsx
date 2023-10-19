import Footer from "../../Components/Footer"
import BannerMain from "./BannerMain"
import ContentMain from "./ContentMain"
import NavigationMain from "./NavigationMain"
const Main = () => {
  return (
    <div className="bg-black">
      {/* <NavigationMain></NavigationMain>
      <BannerMain></BannerMain> */}
      <ContentMain></ContentMain>
      <Footer></Footer>
    </div>
  )
}

export default Main
