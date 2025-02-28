export default function Subscription() {
  return (
    <form className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl font-bold'>contact</h3>
        <input
          type='email'
          placeholder='Email'
          className='w-full h-15 border-2 rounded p-4 focus:border-olive focus:outline-none'
        ></input>
      </div>
      <div className='ml-1'>
        <label>
          <input
            type='checkbox'
            defaultChecked
            className='mr-2 text-sm accent-olive border-white scale-150 checked:border-white '
          ></input>
          Email me with news and offers
        </label>
      </div>
    </form>
  );
}
