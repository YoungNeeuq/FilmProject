import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
const ContentHome = () => {
  return (
    <div className="lg:mt-24 md:mt-[76px] sm:mt-[60px] mt-12  font-poppins z-1 bg-black">
      {/* Start banner */}
      <div className=" lg:flex md:block sm:block block xl:gap-10 lg:gap-2 md:gap-8 lg:mx-12 md:mx-8 sm:mx-4 mx-2 rounded-3xl  bg-gradient-to-r from-banner1 to-banner2 relative overflow-hidden xl:h-[650px] lg:h-[550px]  md:h-[1250px] h-[700px] sm:h-[1000px]">
        <div className="xl:p-12 basis-3/5 lg:p-4 md:p-8 sm:p-5 p-1 z-10 relative">
          <div className=" xl:block lg:block md:hidden sm:hidden hidden  circlePosition w-[450px] h-[350px] bg-[#24324F] rounded-full absolute -bottom-32 -left-32 blur-[60px] -z-10"></div>
          <h1 className=" xl:text-banner lg:text-6xl xl:leading-none md:text-4xl sm:text-4xl text-[35px] text-white font-bold lg:mb-10 md:mb-8 sm:mb-7 md-5">
            Your personal cinema on your devices
          </h1>
          <h3 className=" xl:text-4xl lg:text-3xl md:text-2xl sm:textxl text-base  text-white font-bold ">
            All news in one place
          </h3>
          <h4 className=" xl:text-text lg:text-xl md:text-xl sm:text-lg text-[10px] text-white lg:mt-16 md:mt-9 sm:mt-6 mt-4 lg:mb-6 md:mb-4 sm:mb-2 mb-1">
            Ready to watch ? Enter your phone number to register
          </h4>
          <div className="lg:flex table-caption gap-5">
            <input
              className=" bg-black xl:p-3 lg:p-2 md:p-2 sm:p-2 p-2 border rounded-md xl:py-4 lg:py-0 md:py-3 sm:py-2 py-2 xl:pr-52 lg:pr-16 md:pr-40 sm:pr-32 pr-16 xl:text-xl lg:text-base 
              md:text-lg sm:text-base text-sm  lg:mb-0 md:mb-4 sm:mb-2 mb-2 text-white"
              type="text"
              name=""
              id=""
              placeholder="Phone number"
            />
            <NavLink
              to="/main"
              className="bg-bgrbtsignin text-white font-bold rounded-lg lg:px-5 md:px-4 sm:px-3 px-2 xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl md:py-[10px] text-lg border-bgrbtsignin border-4 py-1 my-auto"
            >
              {" "}
              Get Started <FontAwesomeIcon icon={faCaretRight} className="lg:ml-1 md:ml-1 sm:ml-0 ml-0" />
            </NavLink>
          </div>
        </div>
        <div className=" basis-2/5 grid grid-cols-2 z-0 gap-7 lg:gap-3 relative ">
          <div className="z-10">
            <img className=" rounded-2xl mb-7" src="../../assets/img/conjuring-3.webp" alt="" />
            <img className=" rounded-2xl" src="../../assets/img/ave.jpeg" alt="" />
          </div>
          <div className="z-10">
            <img className=" rounded-2xl mb-7" src="../../assets/img/fate-the-winx-saga.jpg" alt="" />
            <img className=" rounded-2xl" src="../../assets/img/behom.jpg" alt="" />
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
            <img src="../../assets/img/anh.png" alt="" />
            <div className=" circlePosition lg:w-[550px] lg:h-[350px] w-[150px] h-[100px] bg-[#24324F] rounded-full absolute top-0 right-0 lg:blur-[40px] blur-[20px] -z-10"></div>
            <div className=" circlePosition lg:w-[550px] lg:h-[350px] w-[150px] h-[100px] bg-[#440F37] rounded-full absolute bottom-0 -left-10  lg:blur-[90px] blur-[40px] -z-10"></div>
          </div>
        </div>
        {/* End Conntent 1 */}

        {/* Start Conntent 2 */}
        <div className=" flex relative lg:pt-16 md:pt-12 sm:pt-8 pt-2">
          <div className=" basis-1/2 w-3/4  z-0 relative lg:pl-40">
            <img src="../../assets/img/ave2.png" alt="" className="lg:w-[78%] w-[75%]" />
            <div className=" circlePosition lg:w-[550px] lg:h-[550px] w-[150px] h-[250px] bg-[#24324F] rounded-full absolute -top-32 left-0 lg:blur-[60px] blur-[20px] -z-10"></div>
            <div className=" circlePosition lg:w-[350px] lg:h-[350px] w-[150px] h-[100px] bg-[#9b3ea9] rounded-full absolute bottom-0 right-0  lg:blur-[90px] blur-[40px] -z-10"></div>
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

        {/* Start Conntent 3 */}
        <div className=" flex relative lg:pt-16 md:pt-12 sm:pt-8 pt-2">
          <div className=" basis-1/2 lg:p-12 md:p-8 sm:p-4 p-2 z-1 my-auto z-10 lg:ml-8">
            <h1 className=" lg:text-6xl md:text-4xl sm:text-2xl text-base text-white font-bold ">Account for kids</h1>
            <p className=" lg:text-3xl md:text-xl sm:text-md text-[10px] text-white lg:mt-10 md:mt-7 sm:mt-3 mt-1 mb-5">
              {" "}
              Content restriction fpr children. Player blocking function
            </p>
          </div>
          <div className=" basis-1/2 z-0 relative">
            <img src="../../assets/img/tiger.png" alt="" className="" />
            <div className=" circlePosition lg:w-[550px] lg:h-[550px] w-[150px] h-[250px] bg-[#24324F] rounded-full absolute top-10 left-0 lg:blur-[60px] blur-[20px] -z-10"></div>
            <div className=" circlePosition lg:w-[350px] lg:h-[350px] w-[150px] h-[100px] bg-[#9b3ea9] rounded-full absolute top-0 right-0  lg:blur-[90px] blur-[40px] -z-10"></div>
          </div>
        </div>
        {/* End Conntent 3 */}

        {/* Start Conntent 4 */}
        <div className=" flex relative lg:pt-16 md:pt-12 sm:pt-8 pt-2 lg:mb-10">
          <div className=" basis-1/2 z-0 relative">
            <img src="../../assets/img/computer.png" alt="" className="" />
            <div className=" circlePosition lg:w-[350px] lg:h-[550px] w-[150px] h-[250px] bg-[#24324F] rounded-full absolute bottom-10 left-0 lg:blur-[60px] blur-[20px] -z-10"></div>
            <div className=" circlePosition lg:w-[350px] lg:h-[350px] w-[150px] h-[100px] bg-[#9b3ea9] rounded-full absolute top-0 left-0  lg:blur-[90px] blur-[40px] -z-10"></div>
          </div>

          <div className=" basis-1/2 lg:p-12 md:p-8 sm:p-4 p-2 z-1 my-auto z-10">
            <h1 className=" lg:text-6xl md:text-4xl sm:text-2xl text-base text-white font-bold ">
              Online cinema on TV
            </h1>
            <p className=" lg:text-3xl md:text-xl sm:text-md text-[10px] text-white lg:mt-10 md:mt-7 sm:mt-3 mt-1 mb-5">
              {" "}
              Watch on Smart TV, Playstation, Apple TV, and more
            </p>
          </div>
        </div>
        {/* End Conntent 4 */}

        {/* Start Conntent 5 */}
        <div className=" flex relative lg:pt-16 md:pt-12 sm:pt-8 pt-2 lg:mb-10">
          <div className=" basis-1/2 lg:p-12 md:p-8 sm:p-4 p-2 z-1 my-auto z-10 lg:ml-8">
            <h1 className=" lg:text-6xl md:text-4xl sm:text-2xl text-base text-white font-bold ">Family account</h1>
            <p className=" lg:text-3xl md:text-xl sm:text-md text-[10px] text-white lg:mt-10 md:mt-7 sm:mt-3 mt-1 mb-5">
              {" "}
              Connect up to 3 accounts in one subcription
            </p>
          </div>

          <div className=" basis-1/2 z-0 relative">
            <img src="../../assets/img/3animal.png" alt="" className="" />
            <div className=" circlePosition lg:w-[250px] lg:h-[350px] w-[100px] h-[50px] bg-[#ad6b45] rounded-full absolute lg:top-0 lg:right-48 top-0 right-10 lg:blur-[100px] blur-[40px] -z-10"></div>
            <div className=" circlePosition lg:w-[350px] lg:h-[140px] w-[150px] h-[50px] bg-[#9b3ea9] rounded-full absolute -top-10 right-0  lg:blur-[130px] blur-[50px] -z-10"></div>
          </div>
        </div>
        {/* End Conntent 5 */}

        {/* Start Conntent 6 */}
        <div className=" flex relative lg:pt-16 md:pt-12 sm:pt-8 pt-2 lg:mb-10">
          <div className=" basis-1/2 z-0 relative lg:pl-16">
            <img src="../../assets/img/home-phone.png" alt="" className="lg:w-[95%]" />
            <div className=" circlePosition lg:w-[250px] lg:h-[350px] w-[100px] h-[50px] bg-[#ad6b45] rounded-full absolute lg:-top-32 lg:right-48 top-0 right-10 lg:blur-[120px] blur-[40px] -z-10"></div>
            <div className=" circlePosition lg:w-[400px] lg:h-[340px] w-[150px] h-[50px] bg-[#24324F] rounded-full absolute lg:-top-32 -left-10 top-0  lg:blur-[55px] blur-[20px] -z-10"></div>
          </div>
          <div className=" basis-1/2 lg:p-12 md:p-8 sm:p-4 p-2 z-1 lg:my-auto md:my-auto mt-3 z-10">
            <h1 className=" lg:text-6xl md:text-4xl sm:text-2xl text-base text-white font-bold ">
              Please do not disturb
            </h1>
            <p className="lg:text-3xl md:text-xl sm:text-md text-[11px] text-white lg:mt-10 md:mt-7 sm:mt-3 mt-1 mb-5">
              {" "}
              Missing commercials while watching
            </p>
          </div>
        </div>
        {/* End Conntent 6 */}

        {/* Start Button Buy*/}
        <div className="text-center lg:p-12 p-7">
          <button className="text-white bg-bgrbtsignin lg:py-5 lg:px-10 lg:text-2xl lg:rounded-xl md:text-lg md:py-3 md:px-8 sm:text-base sm:py-2 sm:px-6 py-1 px-5 text-[14px] rounded-md ">
            Buy for 50$
          </button>
        </div>
        {/* End Button Buy*/}
      </div>
    </div>
  )
}

export default ContentHome
