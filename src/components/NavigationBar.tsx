"use client";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { NavItems } from "./constants";

export default function NavigationBar({
  allNavItems
}: {
  allNavItems: NavItems[];
}) {
  const [chosenNavItemName, setChosenNavItemName] = useState(null);

  const handleVegiClick = (itemName: string) => {
    setChosenNavItemName((prev) => (prev === itemName ? null : itemName));
  };

  useEffect(() => {
    const listenToNavClick = (event) => {
      if (!event.target.id) {
        setChosenNavItemName(null);
      }
    };
    window.addEventListener("click", listenToNavClick);

    return () => {
      window.removeEventListener("click", listenToNavClick);
    };
  }, []);

  return (
    <ul className='flex gap-2 mx-4'>
      {allNavItems.map((navItem) => (
        <li className='cursor-pointer rounded text-2xl' key={navItem.label}>
          <a
            id={navItem.name}
            className={classNames(
              "flex h-16 items-center hover:text-emerald-800 rounded px-4",
              {
                "bg-[#ebd4d4]": chosenNavItemName === navItem.name
                // "mt-4": chosenNavItemName === navItem.name
              }
            )}
            onClick={() => handleVegiClick(navItem.name)}
          >
            {navItem.label}
          </a>
          <div
            className={classNames(
              "absolute bg-[#ebd4d4] rounded text-base p-4 gap-x-8 grid-cols-[repeat(3,max-content)] bg-[linear-gradient(to_left,#8077d0_0px,transparent_1px,transparent_100%)] bg-[length:calc(100%/3)]",
              {
                grid: chosenNavItemName === navItem.name,
                hidden: chosenNavItemName !== navItem.name
              }
            )}
          >
            {navItem.menu.sort().map((seed) => (
              <a key={seed} className='divide-x'>
                {seed}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
