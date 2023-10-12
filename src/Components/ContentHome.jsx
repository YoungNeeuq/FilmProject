import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faDownload } from "@fortawesome/free-solid-svg-icons"
const ContentHome = () => {
  return (
    <div className="lg:mt-24 md:mt-[76px] sm:mt-[60px] mt-12  font-poppins z-1 bg-black">
      {/* Start banner */}
      <div className=" lg:flex md:flex sm:block block gap-10 lg:mx-12 md:mx-8 sm:mx-4 mx-2 rounded-3xl  bg-gradient-to-r from-banner1 to-banner2 relative overflow-hidden h-[700px]">
        <div className=" basis-3/5 lg:p-12 md:p-8 sm:p-5 p-1 z-10 relative">
          <div className=" xl:block lg:block md:block sm:hidden hidden  circlePosition w-[450px] h-[350px] bg-[#24324F] rounded-full absolute -bottom-32 -left-32 blur-[60px] -z-10"></div>
          <h1 className=" lg:text-[64px] md:text-6xl sm:text-5xl text-[35px] text-white font-bold">
            Your personal cinema on your devices
          </h1>
          <h3 className=" lg:text-4xl md:text-2xl sm:textxl text-base  text-white font-bold ">All news in one place</h3>
          <h4 className=" lg:text-text md:text-xl sm:text-lg text-[10px] text-white lg:mt-16 md:mt-12 sm:mt-8 mt-4 lg:mb-6 md:mb-4 sm:mb-2 mb-1">
            Ready to watch ? Enter your phone number to register
          </h4>
          <div className="lg:flex md:flex sm:block block gap-5">
            <input
              className=" bg-black lg:p-3 md:p-2 sm:p-2 p-2 border rounded-md lg:py-4 md:py-4 sm:py-3 py-2 lg:pr-52 md:pr-40 sm:pr-32 pr-16 lg:text-xl 
              md:text-lg sm:text-base text-sm  lg:mb-0 md:mb-0 sm:mb-5 mb-2"
              type="text"
              name=""
              id=""
              placeholder="Phone number"
            />
            <button className="bg-bgrbtsignin text-white font-bold rounded-lg lg:px-5 md:px-4 sm:px-3 px-2 lg:text-3xl md:text-2xl sm:text-xl text-lg border-bgrbtsignin border py-1">
              {" "}
              Get Started <FontAwesomeIcon icon={faCaretRight} className="lg:ml-1 md:ml-1 sm:ml-0 ml-0" />
            </button>
          </div>
        </div>
        <div className=" basis-2/5 grid grid-cols-2 z-0 gap-7 relative ">
          <div className="z-10">
            <img className=" rounded-2xl mb-7" src="img/conjuring-3.webp" alt="" />
            <img className=" rounded-2xl" src="img/ave.jpeg" alt="" />
          </div>
          <div className="z-10">
            <img className=" rounded-2xl mb-7" src="img/fate-the-winx-saga.jpg" alt="" />
            <img className=" rounded-2xl" src="img/behom.webp" alt="" />
          </div>
          <div className=" circlePosition w-[250px] h-[500px] bg-[#24324F] rounded-full absolute lg:top-0 lg:-left-32 -top-36 -right-36  lg:blur-[40px] blur-[20px] z-0"></div>
          <div className=" circlePosition w-[550px] h-[450px] bg-[#440F37] rounded-full absolute -bottom-32 -left-48 blur-[70px] z-0"></div>
        </div>
      </div>
      {/* End banner */}

      <div className="lg:mx-12 md:mx-8 sm:mx-4 mx-2 mt-10 rounded-3xl bg-gradient-to-r from-banner1 to-banner2 overflow-hidden">
        {/* Start Conntent 1 */}
        <div className=" flex relative lg:pt-16 md:pt-12 sm:pt-8 pt-2 ">
          <div className=" basis-1/2 lg:p-20 md:p-8 sm:p-4 p-2 z-1 my-auto z-10">
            <h1 className=" lg:text-6xl md:text-4xl sm:text-2xl text-base text-white font-bold ">Watch everywhere</h1>
            <p className=" lg:text-4xl md:text-xl sm:text-md text-[10px] text-white lg:mt-10 md:mt-7 sm:mt-3 mt-1 mb-5">
              {" "}
              Play movies and series on all your devices: laptop,tablet,phone
            </p>
          </div>
          <div className=" basis-1/2  z-0 my-auto relative">
            <img src="img/anh.png" alt="" />
            <div className=" circlePosition lg:w-[550px] lg:h-[350px] w-[150px] h-[100px] bg-[#24324F] rounded-full absolute top-0 right-0 lg:blur-[40px] blur-[20px] -z-10"></div>
            <div className=" circlePosition lg:w-[550px] lg:h-[350px] w-[150px] h-[100px] bg-[#440F37] rounded-full absolute bottom-0 -left-10  lg:blur-[90px] blur-[40px] -z-10"></div>
          </div>
        </div>
        {/* End Conntent 1 */}

        {/* Start Conntent 2 */}
        <div className=" flex relative lg:pt-16 md:pt-12 sm:pt-8 pt-2">
          <div className=" basis-1/2 w-3/4  z-0 relative lg:pl-40">
            <img src="img/ave2.png" alt="" className="lg:w-[78%]" />
            <div className=" circlePosition lg:w-[550px] lg:h-[550px] w-[150px] h-[100px] bg-[#24324F] rounded-full absolute -top-32 left-0 lg:blur-[60px] blur-[20px] -z-10"></div>
            <div className=" circlePosition lg:w-[350px] lg:h-[350px] w-[150px] h-[100px] bg-[#9b3ea9] rounded-full absolute bottom-0 right-0  lg:blur-[90px] blur-[40px] -z-10"></div>
            <div className="flex gap-6 lg:h-32  w-fit bg-[#73668b] rounded-xl border-2 ">
              <img src="img/endgame.jfif" alt="" className=" rounded-2xl p-3" />
              <div className="my-auto">
                <h4 className=" text-white text-2xl mb-1">Avengers end game</h4>
                <p className=" text-red-400 text-xl">Downloading... 15%</p>
              </div>
              <FontAwesomeIcon icon={faDownload} className="text-white my-auto ml-5 text-3xl p-3" />
            </div>
          </div>
          <div className=" basis-1/2 lg:p-12 md:p-8 sm:p-4 p-2 z-1 my-auto z-10">
            <h1 className=" lg:text-6xl md:text-4xl sm:text-2xl text-base text-white font-bold ">
              Download and watch online
            </h1>
            <p className=" lg:text-3xl md:text-xl sm:text-md text-[10px] text-white lg:mt-10 md:mt-7 sm:mt-3 mt-1 mb-5">
              {" "}
              Available with a subcription
            </p>
          </div>
        </div>
        {/* End Conntent 2 */}
      </div>
    </div>
  )
}

export default ContentHome
