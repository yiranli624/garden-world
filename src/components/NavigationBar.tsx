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
    <ul className='flex gap-2 mx-4 justify-center'>
      {allNavItems.map((navItem) => (
        <li className='cursor-pointer text-2xl' key={navItem.label}>
          <a
            id={navItem.name}
            className={classNames(
              "flex h-16 items-center px-4 hover:text-emerald-800",
              // bg-[#ebd4d4]
              {
                "bg-slate-100 rounded-t border-t border-l border-r border-slate-300":
                  chosenNavItemName === navItem.name
              }
            )}
            onClick={() => handleVegiClick(navItem.name)}
          >
            {navItem.label}
          </a>
          <div
            // bg-[linear-gradient(to_left,#8077d0_0px,transparent_1px,transparent_100%)] bg-[length:calc(100%/3)]
            className={classNames(
              "absolute bg-slate-100 border border-slate-300 z-10 rounded-b text-base font-light p-4 gap-x-8 grid-cols-[repeat(3,max-content)]",
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
