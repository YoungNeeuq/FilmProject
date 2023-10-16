import { useState } from "react"
import Navigation from "../Components/Navigation"
import ContentHome from "../Components/ContentHome"
import Footer from "../Components/Footer"

const Home = () => {
  const [language, setLanguage] = useState("English")
  const handlelaguage = languagee => {
    setLanguage(languagee)
  }
  return (
    <div className=" bg-black">
      <Navigation className="z-10" language={language} onLanguageChange={handlelaguage}></Navigation>
      <ContentHome></ContentHome>
      <Footer language={language} onLanguageChang={handlelaguage}></Footer>
    </div>
  )
}

export default Home
