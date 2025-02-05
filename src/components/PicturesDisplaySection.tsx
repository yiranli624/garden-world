"use client";
import { Product } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { generateImgUrl, generateVideoUrl } from "./helpers";

type Asset = {
  type: "image" | "video";
  name: string;
};

export default function PicturesDisplaySection({
  product
}: {
  product: Product;
}) {
  const imgAssets: Asset[] = product.imagesUrls.map((img) => ({
    type: "image",
    name: img
  }));
  const videoAssets: Asset[] =
    product.videoIds?.map((video) => ({
      type: "video",
      name: video
    })) ?? [];
  const assets = [...imgAssets, ...videoAssets];
  const [chosenAsset, setChosenAsset] = useState<Asset>(assets[0]);

  // TODO: add index to picture to determain order, then sort here before display

  return (
    <div className='flex-none h-full w-[45%]'>
      {chosenAsset.type === "video" ? (
        <iframe
          src={generateVideoUrl(chosenAsset.name, "embed")}
          title='product introduction video'
          width={384}
          height={384}
          className='bg-contain'
          allowFullScreen
          referrerPolicy='strict-origin-when-cross-origin'
        />
      ) : (
        <Image
          src={generateImgUrl(chosenAsset.name)}
          alt='picture of the product'
          width={384}
          height={384}
          priority
        />
      )}

      <ul className='flex flex-wrap gap-2 py-4 overflow-auto'>
        {assets.map((asset) => (
          <a
            key={asset.name}
            className='cursor-pointer hover:opacity-70'
            onClick={() => setChosenAsset(asset)}
          >
            <Image
              src={
                asset.type === "image"
                  ? generateImgUrl(asset.name)
                  : generateVideoUrl(asset.name, "img")
              }
              alt='small picture of the product'
              width={88}
              height={88}
              className={classNames("w-auto h-[88px]", {
                "border-2 border-stone-700 opacity-70":
                  chosenAsset.name === asset.name,
                "border-2 border-slate-200": chosenAsset.name !== asset.name
              })}
            />
          </a>
        ))}
      </ul>
    </div>
  );
}
