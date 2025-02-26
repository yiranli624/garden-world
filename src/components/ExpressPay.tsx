import Image from "next/image";

export default function ExpressPay() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-lg text-slate-500 text-center'>Express checkout</h1>
      <div className='flex w-full h-12 gap-4'>
        <a className='w-1/3 bg-[#ffc439] rounded flex justify-center cursor-pointer'>
          <Image
            src='/assets/paypal.svg'
            alt='paypal logo'
            width={45}
            height={45}
            className='scale-200'
          />
        </a>
        <a className='w-1/3 bg-[#008CFF] rounded flex justify-center cursor-pointer'>
          <Image
            src='/assets/venmo.svg'
            alt='venmo logo'
            width={45}
            height={45}
            className='scale-200'
          />
        </a>
        <a className='w-1/3 bg-black rounded flex justify-center cursor-pointer'>
          <Image
            src='/assets/google-pay.svg'
            alt='google pay logo'
            width={45}
            height={45}
            className='scale-150'
          />
        </a>
      </div>
    </div>
  );
}
