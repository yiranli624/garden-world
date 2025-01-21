"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export default function PicturesDisplaySection({
  imagesUrls
}: {
  imagesUrls: string[];
}) {
  const [chosenImage, setChosenImage] = useState(0);
  // TODO: add index to picture to determain order, then sort here before display

  return (
    <div className='flex-none h-full'>
      <Image
        src={imagesUrls[chosenImage]}
        alt='picture of the selling item'
        width={384}
        height={384}
        priority
      />
      <ul className='grid grid-cols-4 h-32 gap-2 py-4 overflow-auto'>
        {imagesUrls.map((imgUrl, ind) => (
          <a
            key={imgUrl}
            className='cursor-pointer hover:opacity-70'
            onClick={() => setChosenImage(ind)}
          >
            <Image
              src={imgUrl}
              alt='small picture of the selling item'
              width={88}
              height={88}
              className={classNames({
                "border-2 border-stone-700": chosenImage === ind,
                "border-2 border-slate-200": chosenImage !== ind
              })}
            />
          </a>
        ))}
      </ul>
    </div>
  );
}
