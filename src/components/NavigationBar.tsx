"use client";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { NavItems } from "./NavigationWrapper";

export default function NavigationBar({
  allNavItems
}: {
  allNavItems: NavItems[];
}) {
  const [chosenNavItemName, setChosenNavItemName] = useState<null | string>(
    null
  );

  const handleNavItemClick = (event: React.MouseEvent, itemName: string) => {
    event.stopPropagation();
    setChosenNavItemName((prev) => (prev === itemName ? null : itemName));
  };

  useEffect(() => {
    const listenToNavClick = (event: MouseEvent) => {
      setChosenNavItemName(null);
    };
    window.addEventListener("click", listenToNavClick);

    return () => {
      window.removeEventListener("click", listenToNavClick);
    };
  }, []);

  return (
    <ul className='flex gap-2 mx-4 justify-center'>
      <Link className='cursor-pointer text-2xl' key='home' href={"/"}>
        <li className='flex h-16 items-center px-4 hover:text-emerald-800'>
          Home
        </li>
      </Link>
      {allNavItems.map((navItem) => (
        <li className='cursor-pointer text-2xl' key={navItem.slug}>
          <a
            className={classNames(
              "flex h-16 items-center px-4 hover:text-emerald-800",
              {
                "bg-slate-100 rounded-t border-t border-l border-r border-slate-300":
                  chosenNavItemName === navItem.slug
              }
            )}
            onClick={(event) => handleNavItemClick(event, navItem.slug)}
          >
            {navItem.label}
          </a>
          <div
            // bg-[linear-gradient(to_left,#8077d0_0px,transparent_1px,transparent_100%)] bg-[length:calc(100%/3)]
            className={classNames(
              "absolute bg-slate-100 border border-slate-300 z-10 rounded-b text-base font-light p-4 gap-x-8 grid-cols-[repeat(2,max-content)]",
              {
                grid: chosenNavItemName === navItem.slug,
                hidden: chosenNavItemName !== navItem.slug
              }
            )}
          >
            {navItem.menu
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((menuItem) => (
                <Link
                  key={menuItem.slug}
                  className='divide-x'
                  href={
                    menuItem.slug === "/"
                      ? menuItem.slug
                      : `/collections/${menuItem.slug}`
                  }
                >
                  {menuItem.label}
                </Link>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
