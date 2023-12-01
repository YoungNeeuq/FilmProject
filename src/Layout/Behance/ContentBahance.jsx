import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import axios from "axios"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
;("use client")

// eslint-disable-next-line react/prop-types
const ScrollAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px 0px"
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  }
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
const ContentBahance = () => {
  const [resemblings, setResembling] = useState([])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://652604c767cfb1e59ce7d148.mockapi.io/Content")
        const data = response.data
        const resemblingData = []

        data.forEach(item => {
          if (item.page === "bahence") {
            if (item.type === "content") {
              resemblingData.push(item)
            }
          }
        })

        setResembling(resemblingData)
      } catch (error) {
        // Xử lý lỗi tại đây
      }
    }

    fetchData()
  }, [])
  return (
    <ScrollAnimation>
      <div
        className="xl:ml-20 lg:ml-10 md:ml-8 carousel-wrapper xl:mb-20 lg:mb-16 md:mb-12 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 py-4 bg-[#0e0e14] xl:rounded-2xl "
        draggable="true"
      >
        <div className="xl:ml-5">
          <h4 className="text-white xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold xl:mb-4 lg:mb-3 md:mb-2 mb-2 xl:mx-4">
            Resembing
          </h4>
          <Carousel showDots={true} responsive={responsive}>
            {resemblings.map(resembling => (
              <div
                className=" before: self-center hover:scale-110 transition-transform z-10 relative group xl:mx-4 mx-1"
                key={resembling.id}
              >
                <img src={resembling.image} className=" rounded-lg w-full h-full " alt={`movie-${resembling.id}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100">
                  <div className="animate-slideIn mb-2 font-bold xl:text-base lg:text-base text-[8px]">
                    {resembling.title}
                  </div>
                  <div className="animate-slideIn xl:text-base lg:text-base text-[6px]">{resembling.time}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default ContentBahance
