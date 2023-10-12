import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown, faGlobe, faLanguage } from "@fortawesome/free-solid-svg-icons"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
const Navigation = () => {
  return (
    <div className=" flex justify-between bg-black fixed top-0 left-0 right-0 lg:p-6 md:p-4 sm:p-2 p-1 z-20">
      <div>
        <h1 className=" lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-llogo2 to-llogo1 p-1">
          PlayOn
        </h1>
      </div>
      <div className="flex lg:gap-6 md:gap:4 sm:gap:2 gap-1 justify-center lg:mt-2 md:mt-2 sm:mt-1.5 mt-1.5 my-auto">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex w-full justify-center gap-x-1.5 rounded-md bg-stone-900 lg:px-5 md:px-4 sm:px-3 px-2 lg:py-2 md:py-2 sm:py-1 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-white">
              <FontAwesomeIcon icon={faGlobe} className="-ml-1 h-5 w-5 text-xs" />
              <p>English</p>
              <FontAwesomeIcon icon={faSortDown} className="-mr-1 w-4" />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item className=" font-semibold">
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
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

        <button className="text-white bg-bgrbtsignin font-semibold lg:px-5 md:px-4 sm:px-3 px-2 rounded-md">
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Navigation
