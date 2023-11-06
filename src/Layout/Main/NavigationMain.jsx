import { useState } from "react"
import { AiFillCaretDown, AiOutlineGlobal } from "react-icons/ai"
;("use client")
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci"
import { NavLink } from "react-router-dom"
import { AiOutlineClose, AiOutlineLine } from "react-icons/ai"
// eslint-disable-next-line react/prop-types, no-unused-vars
const Navigation = ({ language, onLanguageChange, search, handlesearch }) => {
  const [isExpanded, setExpanded] = useState(search)
  const expandSearch = () => {
    setExpanded(true)
    handlesearch(true)
  }
  const collapseSearch = () => {
    setExpanded(false)
    handlesearch(false)
  }

  // const countries = [
  //   { name: "E", independent: false },
  //   { name: "V", independent: false },
  //   { name: "C", independent: false }
  // ]
  // const [inputValue, setInputValue] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState(language)
  const [open, setOpen] = useState(false)
  const handleLanguageChange = sea => {
    onLanguageChange(sea)
  }

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const normalLink = "hover:text-slate-600 transition hover:border-fuchsia-600 cursor-pointer"
  const activeLink = "text-slate-400 transition border-b-2 border-slate-900"
  const content = (
    <>
      <div className=" lg:hidden block absolute top-16 left-0 right-0 bg-slate-900 transition">
        <ul className=" text-center text-xl p-5">
          <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
            <a href="/layout-tailwind/home">Trang chủ</a>
          </li>
          <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
            <a href="/layout-tailwind/infor">Giới thiệu</a>
          </li>
          <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
            <a href="/layout-tailwind/contact">Liên hệ</a>
          </li>
        </ul>
      </div>
    </>
  )

  return (
    <div className=" flex justify-between bg-black fixed top-0 left-0 right-0 xl:px-10 lg:p-6 md:p-4 sm:p-2 p-1 z-20 lg:h-24 md:h-20 h-16">
      <div className="flex xl:gap-14 lg:gap-10">
        <h1 className=" lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-llogo2 to-llogo1 p-1">
          PlayOn
        </h1>

        <div className=" flex z-50 text-white lg:py-5 py-4" path="/">
          <div className=" lg:flex md:flex sm:flex flex-1 items-center justify-end font-normal hidden xl:text-xl lg:text-lg font-poppins ">
            {!isExpanded ? (
              <ul className=" flex xl:gap-16 lg:gap-10">
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    Series
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    Top
                  </NavLink>
                </li>
              </ul>
            ) : null}
          </div>
          <div>{click && content}</div>
          <button className="block sm:hidden transition text-2xl" onClick={handleClick}>
            {" "}
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </div>
      <div className="flex lg:gap-6 md:gap:4 sm:gap:2 gap-1 justify-center  my-auto cursor-pointer ">
        <div className="w-fi font-medium mt-1 ">
          <div
            onClick={() => setOpen(!open)}
            onChange={handleLanguageChange(selected)}
            className={`bg-stone-900 border-[0.001px] w-fit lg:py-2 md:py-2 py-1 lg:px-3 md:px-2 px-2 flex items-center text-white lg:gap-2 gap-1 rounded-lg ${
              !selected && "text-white"
            }`}
          >
            <AiOutlineGlobal className="-ml-1 h-5 w-5 text-xs" />
            <AiFillCaretDown size={20} className={`${open && "rotate-180"}`} />
          </div>

          {/* <ul className={`bg-white rounded-md mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}>
            {countries?.map(country => (
              <li
                key={country?.name}
                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
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
          </ul> */}
        </div>
        <div className="my-auto">
          {/* <img className="-mr-3 xl:-mr-3 xl:w-full lg:w-full w-[75%]" src="../../assets/img/icon/search.png" alt="" /> */}
          <div className="flex items-center">
            <div className="relative">
              {!isExpanded ? (
                <div className="cursor-pointer" onClick={expandSearch}>
                  <img
                    className="-mr-3 xl:-mr-3 xl:w-full lg:w-full w-[75%]"
                    src="../../assets/img/icon/search.png"
                    alt="Search Icon"
                  />
                </div>
              ) : null}
              {isExpanded ? (
                <div className="flex items-center">
                  <img className="lg:w-[4%] xl:w-[3%] " src="../../assets/img/icon/search.png" alt="Search Icon" />
                  <input
                    type="text"
                    className="border-none border-black rounded-md p-2 bg-black lg:w-[900px] text-lg text-gray-300 ml-2 focus:outline-none px-5"
                    placeholder="Movie/series name or actor/director name"
                  />
                  <div className="cursor-pointer" onClick={collapseSearch}>
                    <AiOutlineClose className=" text-[#989A9D] text-4xl"></AiOutlineClose>
                  </div>
                  <div style={{ transform: "rotate(90deg)" }} className="text-[#989A9D] text-4xl ml-3">
                    <AiOutlineLine />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <button className="text-white bg-bgrbtsignin font-semibold lg:px-5 md:px-4 sm:px-3 px-4 rounded-md lg:h-[45px] md:h-[45px] sm:h-[30px] h-[30px] xl:text-base lg:text-base text-xs ">
          Buy for 50$
        </button>
        <div className="my-auto xl:block lg:block hidden">
          <img className=" w-8/12 " src="../../assets/img/icon/noti.png" alt="" />
        </div>
        <div className="my-auto xl:mx-0 lg:mx-0 ml-3">
          <img className="xl:w-full lg:w-full w-[65%]" src="../../assets/img/icon/user.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navigation
