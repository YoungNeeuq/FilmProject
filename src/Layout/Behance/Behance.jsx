import { useState } from "react"
import NavigationMain from "../Main/NavigationMain"
import Footer from "../../Components/Footer"
import BannerBehance from "./BannerBehance"
import ContentBahance from "./ContentBahance"
const Behance = () => {
  const [language, setLanguage] = useState("English")
  const handlelaguage = languagee => {
    setLanguage(languagee)
  }
  const [search, setSearch] = useState(false)
  const handlesearch = search => {
    setSearch(search)
  }
  return (
    <div className="bg-black">
      <NavigationMain
        className=" z-50"
        language={language}
        onLanguageChange={handlelaguage}
        search={search}
        handlesearch={handlesearch}
      ></NavigationMain>
      <BannerBehance search={search} handlesearch={handlesearch}></BannerBehance>
      <ContentBahance className="mt-10 z-0"></ContentBahance>
      <Footer language={"English"}></Footer>
    </div>
  )
}

export default Behance
