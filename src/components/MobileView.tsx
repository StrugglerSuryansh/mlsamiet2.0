"use client";

import NavbarItem from "./NavbarItem";

type MobileMenuProps = {
  visible?: boolean;
};

const MobileView = ({ visible }: MobileMenuProps) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-[38px] z-50 md:hidden">
      <div className="h-screen px-4 py-4 shadow-lg backdrop-blur-lg">
        <div className="mx-auto max-w-[1920px]">
          <NavbarItem href="/" mobileView={true} className="text-primary font-extrabold">
            Home
          </NavbarItem>
          <NavbarItem href="/knowmore" mobileView={true} className="text-primary font-extrabold">
            About Us
          </NavbarItem>
          <NavbarItem href="/events" mobileView={true} className="text-primary font-extrabold">
            Events
          </NavbarItem>
          <NavbarItem href="/gallery" mobileView={true} className="text-primary font-extrabold">
            Gallery
          </NavbarItem>
          <NavbarItem href="/members" mobileView={true} className="text-primary font-extrabold">
            Team
          </NavbarItem>
          <NavbarItem href="/contactus" mobileView={true} className="text-primary font-extrabold">
            Contact Us
          </NavbarItem>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
