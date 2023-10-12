import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/20/solid"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
const Navigation = () => {
  return (
    <div className=" flex justify-between bg-black fixed top-0 left-0 right-0 p-6">
      <div>
        <h1 className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-llogo2 to-llogo1 p-1">
          PlayOn
        </h1>
      </div>
      <div className="flex gap-6 justify-center mt-2">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-stone-900 px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-white">
              <GlobeAltIcon className="-mr-1 h-5 w-5 text-white mr-1" aria-hidden="true" />
              English
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                      Việt Nam
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Trung Quốc
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Hàn Quốc
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <button className="text-white bg-bgrbtsignin font-semibold px-5 rounded-md h-h">Sign in</button>
      </div>
    </div>
  )
}

export default Navigation
