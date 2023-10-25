import Footer from "../../Components/Footer"
import BannerMain from "./BannerMain"
import { useState } from "react"
import ContentMain from "./ContentMain"
import NavigationMain from "./NavigationMain"
const Main = () => {
  const [language, setLanguage] = useState("English")
  const handlelaguage = languagee => {
    setLanguage(languagee)
  }
  return (
    <div className="bg-black">
      <NavigationMain className="z-10" language={language} onLanguageChange={handlelaguage}></NavigationMain>
      <BannerMain></BannerMain>
      <ContentMain className="mt-20"></ContentMain>
      <Footer language={"English"}></Footer>
    </div>
  )
}

export default Main
