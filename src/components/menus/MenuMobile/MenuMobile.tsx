import "./MenuMobile.css";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IMenuItem } from "../../../types/MenuTypes";
import DropdownContent from "./Subcomponents/DropDown";

interface MenuMobileDropdownProps {
  items: IMenuItem[];
  onClick: () => void;
}

export default function MenuMobileDropdown({ items }: MenuMobileDropdownProps): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuClasses = `menu-mobile ${isDropdownOpen ? "active" : ""}`;

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={menuClasses}>
      <HiMenu aria-label="Toggle Menu" className="menu-icon" onClick={toggleDropdown} />
      {isDropdownOpen && (
        <>
          <DropdownContent items={items} onClick={toggleDropdown} />
          <div className="cursor" onClick={toggleDropdown}></div>
        </>
      )}
    </div>
  );
}
