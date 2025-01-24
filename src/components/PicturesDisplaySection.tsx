"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { ProductItem } from "./testData";

const generateVideoSrc = (videoId: string, srcType: "img" | "embed") => {
  return srcType === "img"
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://www.youtube.com/embed/${videoId}?rel=0`;
};

export default function PicturesDisplaySection({
  product
}: {
  product: ProductItem;
}) {
  const imagesUrls = product.videoIds
    ? [...product.imagesUrls, ...product.videoIds]
    : product.imagesUrls;
  const [chosenImage, setChosenImage] = useState<string>(imagesUrls[0]);

  const isVideo =
    product.videoIds &&
    product.videoIds.length > 0 &&
    !chosenImage.includes("assets");

  // TODO: add index to picture to determain order, then sort here before display

  return (
    <div className='flex-none h-full'>
      {isVideo ? (
        <iframe
          src={generateVideoSrc(chosenImage, "embed")}
          title='product introduction video'
          width={384}
          height={384}
          className='bg-contain'
          allowFullScreen
          referrerPolicy='strict-origin-when-cross-origin'
        />
      ) : (
        <Image
          src={chosenImage}
          alt='picture of the product'
          width={384}
          height={384}
          priority
        />
      )}

      <ul className='grid grid-cols-4 h-32 gap-2 py-4 overflow-auto'>
        {imagesUrls.map((imgUrl) => (
          <a
            key={imgUrl}
            className='cursor-pointer hover:opacity-70'
            onClick={() => setChosenImage(imgUrl)}
          >
            <Image
              src={
                imgUrl.includes("assets")
                  ? imgUrl
                  : generateVideoSrc(imgUrl, "img")
              }
              alt='small picture of the product'
              width={88}
              height={88}
              className={classNames({
                "border-2 border-stone-700 opacity-70": chosenImage === imgUrl,
                "border-2 border-slate-200": chosenImage !== imgUrl
              })}
            />
          </a>
        ))}
      </ul>
    </div>
  );
}
