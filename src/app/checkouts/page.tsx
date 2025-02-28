import DeliveryForm from "@/components/DeliveryForm";
import ExpressPay from "@/components/ExpressPay";
import Subscription from "@/components/Subscription";

export default function CheckoutPage() {
  return (
    <div className='border-t-2 flex h-full'>
      <div className='w-3/5 pl-60 pr-10 py-10 border-r-4 flex flex-col gap-10'>
        <ExpressPay />
        <Subscription />
        <DeliveryForm />
        <div>payment</div>
        <div>
          <button>Pay now</button>
        </div>
      </div>
      <div className='w-2/5 p-10 bg-neutral-100'>I'm a cart</div>
    </div>
  );
}
