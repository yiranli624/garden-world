import ExpressPay from "@/components/ExpressPay";

export default function CheckoutPage() {
  return (
    <div className='border-t-2 flex h-screen'>
      <div className='w-3/5 pl-60 pr-10 py-10 border-r-4 flex flex-col gap-10'>
        <ExpressPay />
        <div>contact</div>
        <div>Delivery</div>
        <div>payment</div>
        <div>
          <button>Pay now</button>
        </div>
      </div>
      <div className='w-2/5 p-10 bg-beige'>I'm a cart</div>
    </div>
  );
}
