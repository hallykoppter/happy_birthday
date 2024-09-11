"use client"
import { Typewriter } from "react-simple-typewriter"

const Header = () => {
  const word = [
    "Selamat ulang tahun, Sayang",
    "Semoga sehat selalu",
    "Semoga semua yang diharapkan",
    "bisa terkabul",
  ]

  return (
    <div className="flex justify-center align-middle min-w-[100vw] bg-primary p-3 py-5 mb-5">
      <div className="text-white font-titan">
        - <Typewriter words={word} typeSpeed={100} loop={false} /> -
      </div>
    </div>
  )
}

export default Header
