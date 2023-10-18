const NavigationMain = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-200 p-6">
      {/* Logo and User */}
      <div className="w-full md:w-auto md:flex md:items-center">
        <div className="flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight">Logo</span>
        </div>
        <div className="w-full md:w-auto md:flex md:items-center">
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">
            User
          </a>
        </div>
      </div>

      {/* Login and Language */}
      <div className="w-full md:w-auto md:flex md:items-center md:ml-auto flex-col md:flex-row md:space-x-4">
        <div className="text-sm">
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">
            Login
          </a>
        </div>
        <div className="text-sm">
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">
            Language
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavigationMain
