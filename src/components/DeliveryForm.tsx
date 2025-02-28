import Image from "next/image";
const States_Array = [
  { name: "Alabama", code: "AL" },
  { name: "Alaska", code: "AK" },
  { name: "Arizona", code: "AZ" },
  { name: "Arkansas", code: "AR" },
  { name: "California", code: "CA" },
  { name: "Colorado", code: "CO" },
  { name: "Connecticut", code: "CT" },
  { name: "Delaware", code: "DE" },
  { name: "Florida", code: "FL" },
  { name: "Georgia", code: "GA" },
  { name: "Hawaii", code: "HI" },
  { name: "Idaho", code: "ID" },
  { name: "Illinois", code: "IL" },
  { name: "Indiana", code: "IN" },
  { name: "Iowa", code: "IA" },
  { name: "Kansas", code: "KS" },
  { name: "Kentucky", code: "KY" },
  { name: "Louisiana", code: "LA" },
  { name: "Maine", code: "ME" },
  { name: "Maryland", code: "MD" },
  { name: "Massachusetts", code: "MA" },
  { name: "Michigan", code: "MI" },
  { name: "Minnesota", code: "MN" },
  { name: "Mississippi", code: "MS" },
  { name: "Missouri", code: "MO" },
  { name: "Montana", code: "MT" },
  { name: "Nebraska", code: "NE" },
  { name: "Nevada", code: "NV" },
  { name: "New Hampshire", code: "NH" },
  { name: "New Jersey", code: "NJ" },
  { name: "New Mexico", code: "NM" },
  { name: "New York", code: "NY" },
  { name: "North Carolina", code: "NC" },
  { name: "North Dakota", code: "ND" },
  { name: "Ohio", code: "OH" },
  { name: "Oklahoma", code: "OK" },
  { name: "Oregon", code: "OR" },
  { name: "Pennsylvania", code: "PA" },
  { name: "Rhode Island", code: "RI" },
  { name: "South Carolina", code: "SC" },
  { name: "South Dakota", code: "SD" },
  { name: "Tennessee", code: "TN" },
  { name: "Texas", code: "TX" },
  { name: "Utah", code: "UT" },
  { name: "Vermont", code: "VT" },
  { name: "Virginia", code: "VA" },
  { name: "Washington", code: "WA" },
  { name: "West Virginia", code: "WV" },
  { name: "Wisconsin", code: "WI" },
  { name: "Wyoming", code: "WY" }
];

export default function DeliveryForm() {
  return (
    <div className='flex flex-col gap-4'>
      <form className='flex flex-col gap-4'>
        <h3 className='text-xl font-bold'>Delivery</h3>
        <div className='relative'>
          <label className='absolute top-1 left-3.5 text-slate-500'>
            country/Region
          </label>
          <select
            name='countryCode'
            className='w-full h-15 border-2 rounded appearance-none pb-1.5 pl-3 pt-5.5 focus:border-olive focus:outline-none'
          >
            <option value='US'>United States</option>
          </select>
          <Image
            src='/assets/arrow-down.svg'
            alt='arrow down image'
            width={10}
            height={10}
            className='absolute bottom-5 right-3'
          />
        </div>
        <div className='flex gap-4 h-15'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            className='w-1/2 border-2 rounded pl-3 focus:border-olive focus:outline-none'
          ></input>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='w-1/2 border-2 rounded pl-3 focus:border-olive focus:outline-none'
          ></input>
        </div>
        <input
          type='text'
          name='address1'
          placeholder='Address'
          className='w-full h-15 border-2 rounded pl-3 focus:border-olive focus:outline-none'
        ></input>
        <input
          type='text'
          name='address2'
          placeholder='Apartment, suite, etc. (optional)'
          className='w-full h-15 border-2 rounded pl-3 focus:border-olive focus:outline-none'
        ></input>
        <div className='flex gap-4 h-15'>
          <input
            type='text'
            name='city'
            placeholder='City'
            className='w-1/3 border-2 rounded pl-3 focus:border-olive focus:outline-none'
          ></input>
          <div className='relative w-1/3'>
            <label className='absolute top-1 left-3.5 text-slate-500'>
              State
            </label>
            <select
              name='stateCode'
              className='w-full h-full border-2 rounded appearance-none pb-1.5 pl-3 pt-5.5 focus:border-olive focus:outline-none'
            >
              {States_Array.map((state) => (
                <option value={state.code}>{state.name}</option>
              ))}
            </select>
            <Image
              src='/assets/arrow-down.svg'
              alt='arrow down image'
              width={10}
              height={10}
              className='absolute bottom-5 right-3'
            />
          </div>
          <input
            type='text'
            name='postalCode'
            placeholder='ZIP code'
            className='w-1/3 border-2 rounded pl-3 focus:border-olive focus:outline-none'
          ></input>
        </div>
      </form>

      <div className='flex flex-col gap-4'>
        <h2 className='text-lg font-bold'>Shipping method</h2>
        <div className='h-15 flex justify-center items-center bg-neutral-100 text-slate-500'>
          <p>Enter your shipping address to view available shipping methods.</p>
        </div>
      </div>
    </div>
  );
}
