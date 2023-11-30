import { MdOutlineFileDownload } from "react-icons/md"
import { HiHeart } from "react-icons/hi"
import { FaBookmark } from "react-icons/fa"
import { useState } from "react"
import "./behance.css"

const BannerBehance = () => {
  const [love, setLove] = useState(true)
  const [flat, setFlat] = useState(null)
  const handleLove = () => {
    setLove(!love)
  }
  const handleRate = () => {
    setFlat(1)
    console.log(flat)
  }

  return (
    <div className="xl:flex block mt-14 justify-around flex-row-reverse mx-8 ml-20  gap-1 ">
      <div className=" relative">
        <img className=" " src="../../assets/img/behance/banner.png" alt="" />
        <div className=" circlePosition lg:w-[250px] lg:h-[140%] w-[150px] h-[100px] bg-black rounded-full absolute -top-20 -left-20 lg:blur-[55px] blur-[20px] z-0"></div>
        <img
          className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2"
          src="../../assets/img/behance/play.png"
          alt=""
        />
      </div>
      <div className=" relative z-10">
        <img className=" max-w-[150%] w-[130%] h-auto" src="../../assets/img/behance/title.png" alt="" />
        <p className=" text-bgrbtsignin  xl:text-[92px] font-extrabold absolute -right-28 top-42 transform -translate-x-1/2 -translate-y-1/2 rotate-6">
          3
        </p>
        <div className="flex gap-4 text-[#474A51] ml-8 text-sm mt-2">
          <p className=" hover:bg-bgrbtsignin hover:text-white text-white bg-[#474A51] font-bold px-2 rounded-md cursor-pointer h-fit">
            8.5
          </p>
          <p className=" font-semibold">2023</p>
          <p className=" font-semibold">Action movies</p>
          <p className=" font-semibold">2:30</p>
          <p className=" font-semibold">16+</p>
          <MdOutlineFileDownload className="text-white my-auto text-2xl" />
        </div>
        <p className="text-white whitespace-normal xl:mt-4 w-[125%] absolute text-[15.5px]">
          Peter Quill cannot come to terms with the loss of Gamora in any way and now, together with the Guardians of
          the Galaxy, he is forced to go on another mission to protect the universe.
        </p>
        <div className="flex text-[#474A51] gap-2 absolute xl:mt-[105px]">
          <p className=" font-semibold">Director:</p>
          <p className="text-white">James Gunn</p>
        </div>

        <div className="flex text-[#474A51] gap-2 absolute  xl:mt-[143px]">
          <p className=" font-semibold">Actors:</p>
          <p className="text-white text-[15.5px]">
            Chris Pratt, Karen Gillan, Pom Klementieff Dave Batista, Zoe Saldana, Chukudi Iwuji
          </p>
        </div>
        <div className="flex justify-between  xl:mt-[217px]">
          <button className="text-white bg-[#474A51] py-3 px-10 xl:rounded-md font-semibold hover:bg-bgrbtsignin">
            {" "}
            Trailer
          </button>
          <div className="flex gap-4 items-end">
            <HiHeart
              className={` heart xl:text-3xl cursor-pointer ${love ? "text-white" : "text-bgrbtsignin"} ${
                love ? "" : "is-liked is-flashing"
              }`}
              onClick={handleLove}
            />
            <FaBookmark className={` text-bgrbtsignin cursor-pointer xl:text-2xl mb-[2px]`} />
          </div>
        </div>
        <div className="xl:mt-5">
          <p className="text-white font-semibold ">Rating movie</p>
          <div className="flex gap-4 right-0">
            <p className="text-white z-100 cursor-pointer" onClick={handleRate}>
              1
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerBehance
