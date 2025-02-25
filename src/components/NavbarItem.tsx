import Link from "next/link"
import type React from "react"

interface NavbarItemProps {
  children: React.ReactNode
  href: string
  type?: "button" | "link"
  className?: string
  mobileView?: boolean
  external?: boolean
  onClick?: () => void // Added onClick prop
}

const NavbarItem = ({
  children,
  href,
  type = "link",
  className = "",
  mobileView,
  external = false,
  onClick, // Destructured onClick
}: NavbarItemProps) => {
  if (type === "button") {
    return (
      <Link href={href} target={external ? "_blank" : "_self"}>
        <button
          className={`rounded-full bg-gradient-to-r from-[#0070C5] to-[#3BABCF] hover:from-[#1e00c7] hover:to-[#52a8ff] transition-colors
          ${mobileView ? "text-white px-4 py-2 w-full text-lg" : "text-white px-6 py-1.5 text-md"}`}
          onClick={onClick} // Handle click event
        >
          {children}
        </button>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : "_self"}
      className={`relative group ${mobileView ? "w-full text-center" : ""}`}
      onClick={onClick} // Handle click event
    >
      <div className={`flex flex-col items-center ${mobileView ? "py-2" : ""}`}>
        <span
          className={`text-md font-medium transition-colors secondary 
          ${mobileView ? "text-white text-lg" : "text-black hover:text-blue-600"}
          ${className}`}
        >
          {children}
        </span>
        <div className="h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  )
}

export default NavbarItem
