"use client";

import { useCallback } from "react";
import NavbarItem from "./NavbarItem";

type MobileMenuProps = {
  visible?: boolean;
  onClose: () => void;
};

const MobileView = ({ visible, onClose }: MobileMenuProps) => {
  if (!visible) return null;

  const handleClick = useCallback(() => {
    onClose(); // Close menu on item click
  }, [onClose]);

  return (
    <div className="fixed inset-x-0 top-[38px] z-50 md:hidden">
      <div className="h-screen px-4 py-4 shadow-lg backdrop-blur-lg">
        <div className="mx-auto max-w-[1920px]">
          <NavbarItem href="https://mlsamiet.vercel.app/" mobileView={true} className="text-primary font-extrabold" onClick={handleClick}>
            Home
          </NavbarItem>
          <NavbarItem href="/knowmore" mobileView={true} className="text-primary font-extrabold" onClick={handleClick}>
            About Us
          </NavbarItem>
          <NavbarItem href="/events" mobileView={true} className="text-primary font-extrabold" onClick={handleClick}>
            Events
          </NavbarItem>
          <NavbarItem href="/gallery" mobileView={true} className="text-primary font-extrabold" onClick={handleClick}>
            Gallery
          </NavbarItem>
          <NavbarItem href="/members" mobileView={true} className="text-primary font-extrabold" onClick={handleClick}>
            Team
          </NavbarItem>
          <NavbarItem href="/contactus" mobileView={true} className="text-primary font-extrabold" onClick={handleClick}>
            Contact Us
          </NavbarItem>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
