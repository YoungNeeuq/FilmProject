import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BiLogoFacebookCircle, BiLogoTelegram } from "react-icons/bi"
import { BsApple } from "react-icons/bs"
import { FaGooglePlay } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { AiFillCaretDown, AiOutlineGlobal } from "react-icons/ai"
// eslint-disable-next-line react/prop-types, no-unused-vars
const Footer = ({ language, onLanguageChange }) => {
  const countries = [
    { name: "English", independent: false },
    { name: "Vietnamese", independent: false },
    { name: "Chines", independent: false }
  ]

  const [inputValue, setInputValue] = useState("")
  const [selected, setSelected] = useState(language)
  useEffect(() => {
    setSelected(language)
  }, [language])
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-black mt-10">
      <div
        className="flex text-gray-400 lg:text-2xl md:text-xl sm:text-lg text-xs lg:gap-5 md:gap-5 sm:gap-4 gap-3 w-fit mx-auto 
      lg:my-16  md:my-12 sm:my-8 my-4 "
      >
        <AiOutlineInstagram className="hover:cursor-pointer hover:text-[#4c6aa7] "></AiOutlineInstagram>
        <AiOutlineTwitter className="hover:cursor-pointer hover:text-[#4c6aa7] "></AiOutlineTwitter>
        <BiLogoFacebookCircle className="hover:cursor-pointer hover:text-[#4c6aa7] "></BiLogoFacebookCircle>
        <BiLogoTelegram className="hover:cursor-pointer hover:text-[#4c6aa7] "></BiLogoTelegram>
      </div>
      <div className="lg:mx-auto md:mx-auto sm:mx-12 mx-16 w-fit lg:my-5 my-5">
        <ul className="flex text-gray-400 lg:gap-10 gap-6 lg:text-xl md:text-lg sm:text-base text-xs flex-wrap justify-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#">Jobs</a>
          </li>
          <li>
            {" "}
            <a href="#">Info</a>
          </li>
          <li>
            {" "}
            <a href="#">Support</a>
          </li>
          <li>
            {" "}
            <a href="#">Contact us</a>
          </li>
          <li>
            {" "}
            <a href="#">FAQ</a>
          </li>
          <li>
            {" "}
            <a href="#">Account</a>
          </li>
          <li>
            {" "}
            <a href="#">Help Center</a>
          </li>
        </ul>
      </div>
      <div className="flex lg:gap-5 md:gap-4 gap-3 text-gray-400 mx-auto w-fit lg:mt-14 md:mt-10 sm:mt-6 mt-4">
        <div className="flex bg-[#1B1E27] lg:rounded-lg rounded-md lg:py-2 md:py-2 py-1 lg:px-7 md:px-5 sm:px-4 px-3 h-fit">
          <BsApple className="lg:text-4xl md:text-3xl sm:text-2xl text-xl my-auto lg:mr-2 md:mr-2 mr-1"></BsApple>
          <div className="my-auto">
            <p className="lg:text-base md:text-md sm:text-sm text-[10px]">Upload to</p>
            <h4 className="lg:text-xl md:text-lg sm:text-sm text-[11px] ">App Store</h4>
          </div>
        </div>
        <div className="flex bg-[#1B1E27] lg:rounded-lg rounded-md lg:py-2 md:py-2 py-1 lg:px-7 md:px-5 sm:px-4 px-3 h-fit">
          <FaGooglePlay className="lg:text-4xl md:text-3xl sm:text-2xl text-xl my-auto lg:mr-2 md:mr-2 mr-1"></FaGooglePlay>
          <div className="my-auto">
            <p className="lg:text-base md:text-md sm:text-sm text-[10px]">Upload to</p>
            <h4 className="lg:text-xl md:text-lg sm:text-sm text-[11px] ">App Store</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white lg:py-16 md:py-12 sm:py-8 py-6 lg:mx-36 md:mx-20 sm:mx-14 mx-3 cursor-pointer ">
        <div className=" border-none ">
          <div className="w-fit font-medium my-auto">
            <div
              onClick={() => setOpen(!open)}
              className={`bg-stone-900  border-[0.001px] w-fit lg:py-2 md:py-2 py- lg:px-3 md:px-2 px-2 flex items-center text-white lg:gap-2 gap-1 lg:rounded-lg rounded-md ${
                !selected && "text-white"
              }`}
            >
              <AiOutlineGlobal className="-ml-1 h-5 lg:w-5 w-3 lg:text-xs" />
              <p className="lg:text-base text-[7px]">
                {selected ? (selected?.length > 25 ? selected?.substring(0, 25) + "..." : selected) : "1"}{" "}
              </p>
              <AiFillCaretDown lg:size={20} md:size={17} sm:size={13} size={10} className={`${open && "rotate-180"}`} />
            </div>
            <ul className={`bg-white text-black rounded-md overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}>
              {countries?.map(country => (
                <li
                  key={country?.name}
                  className={`p-2 lg:text-sm text-[7px] hover:bg-sky-600 hover:text-white
            ${country?.name?.toLowerCase() === selected?.toLowerCase() && "bg-sky-600 text-white"}
            ${country?.name?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
                  onClick={() => {
                    if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                      setSelected(country?.name)
                      setOpen(false)
                      setInputValue("")
                    }
                  }}
                >
                  {country?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex lg:gap-2 md:gap-2 gap-1 text-end text-gray-400">
          <h3 className="lg:text-xl md:text-base sm:text-md text-xs text-transparent bg-clip-text bg-gradient-to-r from-llogo2 to-llogo1 font-bold my-auto">
            PlayOn
          </h3>
          <h3 className=" my-auto bottom-0 lg:text-base md:text-md sm:text-xs text-[10px]">Los-Angeles</h3>{" "}
        </div>
      </div>
    </div>
  )
}

export default Footer
