import Image from "next/image";

export default function PicturesDisplaySection({ imgUrl }: { imgUrl: string }) {
  return (
    <div className='flex-none h-full'>
      <Image
        src={imgUrl}
        alt='picture of the selling item'
        width={384}
        height={384}
        className='mb-6'
        priority
      />
      <div className='h-36 border-4 border-slate-600'>
        smaller window section
      </div>
    </div>
  );
}
