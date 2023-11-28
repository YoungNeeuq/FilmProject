import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./Layout/Home/Home"
import Main from "./Layout/Main/Main"
import { useState, useEffect } from "react"
import Preloader from "./Layout/Preloader/Preloader"
export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1300)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <Preloader active={loading}></Preloader>
      <Routes style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease-in-out" }}>
        <Route path="/" element={<Home></Home>} />
        <Route path="/main" element={<Main></Main>} />
      </Routes>
    </>
  )
}
