"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { VscChromeClose } from "react-icons/vsc"
import MobileView from "./MobileView"
import NavbarItem from "./NavbarItem"

const OFFSET = 20

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false)
  const [showMobileMenu, setShowmobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY >= OFFSET)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowmobileMenu((current) => !current)
  }, [])

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[1000] w-full py-4 px-4 sm:px-6 lg:px-6 border-b-2 border-cyan-200 ${showBackground ? "backdrop-blur-md" : "bg-white "
          }`}
      >
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src={"/mlsamietlogo1.png"}
                alt="MLSA MIET Logo"
                width={400}
                height={400}
                loading="eager"
                className="w-auto h-[35px] md:h-[40px] lg:h-[80px]"
              />
            </Link>
            <span className="bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-[20px] font-semibold text-transparent lg:text-[1.7vw]">
              MLSA <span className="hidden md:inline-block">MIET</span>
            </span>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 focus:outline-none" aria-label="Toggle menu">
              {!showMobileMenu ? <AiOutlineMenu className="text-xl" /> : <VscChromeClose className="text-xl" />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4 xl:gap-6">
            <NavbarItem href="/events">Events</NavbarItem>
            <NavbarItem href="/gallery">Gallery</NavbarItem>
            <NavbarItem href="/members">Members</NavbarItem>
            <NavbarItem  href="/#contact">
              Join Us
            </NavbarItem>
        </div>
      </div>
    </nav >
      <MobileView visible={showMobileMenu} />
    </>
  )
}

export default Navbar

