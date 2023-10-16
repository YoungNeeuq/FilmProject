import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BiLogoFacebookCircle, BiLogoTelegram } from "react-icons/bi"
import { BsApple } from "react-icons/bs"
import { FaGooglePlay } from "react-icons/fa6"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown, faGlobe, faLanguage } from "@fortawesome/free-solid-svg-icons"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
const Footer = () => {
  return (
    <div className="bg-black mt-10">
      <div
        className="flex text-gray-400 lg:text-2xl md:text-xl sm:text-lg text-xs lg:gap-5 md:gap-5 sm:gap-4 gap-3 w-fit mx-auto 
      lg:my-16  md:my-12 sm:my-8 my-4"
      >
        <AiOutlineInstagram></AiOutlineInstagram>
        <AiOutlineTwitter></AiOutlineTwitter>
        <BiLogoFacebookCircle></BiLogoFacebookCircle>
        <BiLogoTelegram></BiLogoTelegram>
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
      <div className="flex justify-between text-white lg:py-16 md:py-12 sm:py-8 py-6 lg:mx-36 md:mx-20 sm:mx-14 mx-3">
        <div className=" border-none">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex w-fit justify-center gap-1 rounded-md bg-stone-900 lg:px-2 md:px-2 sm:px-1 px-1 lg:py-2 md:py-2 sm:py-1 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 text-white">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className=" lg:mr-1 md:mr-1 lg:w-4 md:w-4 sm:w-3 w-2 lg:mt-0 md:mt-0 my-auto"
                />
                <p className="lg:text-xs md:text-xs text-[8px]">English</p>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className=" lg:w-5 md:w-4 sm:w-3 w-[5px] lg:-mt-[1px] md:-mb-1 mt-[2px]"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item className=" font-semibold">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block lg:px-2 lg:py-1 lg:text-xs text-[7px]"
                        )}
                      >
                        Tiếng Việt
                        <FontAwesomeIcon icon={faLanguage} className="ml-2 w-4" />
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
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
