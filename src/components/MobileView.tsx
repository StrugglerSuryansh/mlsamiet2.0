"use client";

import NavbarItem from "./NavbarItem";

type MobileMenuProps = {
  visible?: boolean;
};

const MobileView = ({ visible }: MobileMenuProps) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-[72px] z-50 md:hidden">
      <div className="bg-gradient-to-b from-[#042179] to-[#949fc0] px-4 py-4 shadow-lg">
        <div className="mx-auto max-w-[1920px]">
          <NavbarItem href="/events" mobileView={true}>
            Events
          </NavbarItem>

          <NavbarItem href="/members" mobileView={true}>
            Members
          </NavbarItem>
          <NavbarItem href="/gallery" mobileView={true}>
            Gallery
          </NavbarItem>
          <NavbarItem href="/joinus" type="button" mobileView={true}>
            Join Us
          </NavbarItem>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
