import { MdOutlineFileDownload } from "react-icons/md"
import { HiHeart } from "react-icons/hi"
import { FaBookmark } from "react-icons/fa"
import { useState } from "react"
import { FaCircle } from "react-icons/fa"
import "./behance.css"

const BannerBehance = () => {
  const [love, setLove] = useState(true)

  const handleLove = () => {
    setLove(!love)
  }
  const [visibleButton, setVisibleButton] = useState(1)

  const handleNumberClick = number => {
    setVisibleButton(number)
  }

  return (
    <div className="xl:mt-14 mt-8 xl:mx-8 xl:ml-20 mr-4  xl:mb-20">
      <div className=" xl:absolute relative right-0 xl:mr-10">
        <img className=" " src="../../assets/img/behance/banner.png" alt="" />
        <div className=" circlePosition lg:w-[250px] lg:h-[140%] w-[120px] h-[130%] bg-black rounded-full absolute xl:-top-20 -top-12 xl:-left-20 -left-24 lg:blur-[40px] blur-[25px] z-0"></div>
        <img
          className="absolute xl:w-[7%] w-[10%] top-1/2 left-1/2 xl:left-[60%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          src="../../assets/img/behance/play.png"
          alt=""
        />
      </div>
      <div className=" z-10 -top-14 xl:top-0 relative xl:w-[33%] w-[100%] xl:mx-0 mx-auto">
        <img className=" w-[110%] h-auto xl:ml-4" src="../../assets/img/behance/title.png" alt="" />
        <p className=" text-bgrbtsignin  xl:text-[80px] text-7xl font-extrabold absolute xl:-right-2 -right-1 top-42 transform -translate-x-1/2 -translate-y-1/2 rotate-6">
          3
        </p>
        <div className="flex xl:gap-4 gap-3 text-[#474A51] xl:w-[100%] xl:ml-14 ml-8 xl:text-base text-[13px] mt-2">
          <p className=" hover:bg-bgrbtsignin hover:text-white text-white bg-[#474A51] font-bold px-2 rounded-md cursor-pointer h-fit">
            8.5
          </p>
          <p className=" font-semibold">2023</p>
          <p className=" font-semibold">Action movies</p>
          <p className=" font-semibold">2:30</p>
          <p className=" font-semibold">16+</p>
          <MdOutlineFileDownload className="text-white my-auto text-2xl" />
        </div>
        <p className="text-white whitespace-normal xl:mt-3  xl:text-[16px] text-[13px] ml-4 mt-2">
          Peter Quill cannot come to terms with the loss of Gamora in any way and now, together with the Guardians of
          the Galaxy, he is forced to go on another mission to protect the universe.
        </p>
        <div className="flex text-[#474A51] gap-2  xl:mt-5 mt-4 ml-4 xl:text-[16px] text-[13px]">
          <p className=" font-semibold">Director:</p>
          <p className="text-white">James Gunn</p>
        </div>

        <div className="flex text-[#474A51] gap-2  xl:mt-5 mt-4 ml-4 text-[13px] xl:text-[16px]">
          <p className=" font-semibold">Actors:</p>
          <p className="text-white text-[15.5px] xl:text-[17px] xl:w-[75%]">
            Chris Pratt, Karen Gillan, Pom Klementieff Dave Batista, Zoe Saldana, Chukudi Iwuji
          </p>
        </div>
        <div className="flex justify-between  xl:mt-7  mt-7 ">
          <button className="text-white bg-[#474A51] xl:py-3 py-[10px] xl:px-10 px-9 rounded-md ml-4 font-semibold hover:bg-bgrbtsignin">
            {" "}
            Trailer
          </button>
          <div className="flex gap-4 items-end">
            <HiHeart
              className={` heart xl:text-3xl text-4xl cursor-pointer ${love ? "text-white" : "text-bgrbtsignin"} ${
                love ? "" : "is-liked is-flashing"
              }`}
              onClick={handleLove}
            />
            <FaBookmark className={` text-bgrbtsignin cursor-pointer xl:text-2xl text-3xl mb-[2px]`} />
          </div>
        </div>
        <div className="xl:mt-5 ml-4 mt-7 ">
          <p className="text-white font-semibold xl:text-lg text-sm ">Rating movie</p>
          <div>
            <div className="number-container xl:gap-9 gap-[26px]  text-lg xl:mt-5 mx-2 mt-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                <div key={number} className="text-center">
                  <span onClick={() => handleNumberClick(number)} className="font-bold text-[#5c5e61] hover:text-white">
                    {number}
                  </span>

                  <span
                    className={`
                     ${
                       visibleButton === number
                         ? "active text-bgrbtsignin block rounded-full text-[17px] absolute mt-[2px] -ml-1"
                         : "text-base absolute hidden"
                     }
                        ${number === 10 ? "ml-1" : ""}
                    `}
                  >
                    {" "}
                    <FaCircle />
                  </span>
                </div>
              ))}
            </div>
            <div className=" bg-opacity-40 bg-white px-2 py-[10px] xl:rounded-md rounded-[5px] xl:-mb-5 ">
              <div className="w-full py-[1.7px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerBehance
