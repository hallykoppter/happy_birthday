"use client"
import Header from "./Components/Header"
import Timeline from "./Components/Timeline"
import Intro from "./Components/Intro"

const Page = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Intro />
      <Timeline />
    </div>
  )
}

export default Page
