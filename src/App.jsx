import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./Layout/Home/Home"
import Main from "./Layout/Main/Main"
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/main" element={<Main></Main>} />
      </Routes>
    </>
  )
}
