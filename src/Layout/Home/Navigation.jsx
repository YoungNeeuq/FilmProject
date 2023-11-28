import { useState } from "react"
import { AiFillCaretDown, AiOutlineGlobal } from "react-icons/ai"
// eslint-disable-next-line react/prop-types, no-unused-vars
const Navigation = ({ language, onLanguageChange }) => {
  const countries = [
    { name: "English", independent: false },
    { name: "Vietnamese", independent: false },
    { name: "Chines", independent: false }
  ]
  const [inputValue, setInputValue] = useState("")
  const [selected, setSelected] = useState(language)
  const [open, setOpen] = useState(false)
  const handleLanguageChange = selected => {
    onLanguageChange(selected)
    console.log(selected)
  }
  return (
    <div className=" flex justify-between bg-black fixed top-0 left-0 right-0 lg:p-6 md:p-4 sm:p-2 p-1 z-20 lg:h-24 md:h-20 h-16">
      <div>
        <h1 className=" lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-llogo2 to-llogo1 p-1">
          PlayOn
        </h1>
      </div>
      <div className="flex lg:gap-6 md:gap:4 sm:gap:2 gap-1 justify-center  my-auto cursor-pointer ">
        <div className="w-fi font-medium ">
          <div
            onClick={() => setOpen(!open)}
            onChange={handleLanguageChange(selected)}
            className={`bg-stone-900 border-[0.001px] w-fit lg:py-2 md:py-2 py-1 lg:px-3 md:px-2 px-2 flex items-center text-white lg:gap-2 gap-1 rounded-lg ${
              !selected && "text-white"
            }`}
          >
            <AiOutlineGlobal className="-ml-1 h-5 w-5 text-xs" />
            {selected ? (selected?.length > 25 ? selected?.substring(0, 25) + "..." : selected) : language}
            <AiFillCaretDown size={20} className={`${open && "rotate-180"}`} />
          </div>
          <ul
            className={`bg-white border-1 border-black rounded-md mt-2 overflow-y-auto ${
              open ? "max-h-60" : "max-h-0"
            } `}
          >
            {countries?.map(country => (
              <li
                key={country?.name}
                className={`p-2 text-sm hover:bg-black hover:text-white
            ${country?.name?.toLowerCase() === selected?.toLowerCase() && "bg-black text-white"}
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
        <button className="text-white bg-bgrbtsignin font-semibold lg:px-5 md:px-4 sm:px-3 px-2 rounded-md lg:h-[42px] md:h-[42px] sm:h-[34px] h-[34px] ">
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Navigation
