import Dashboard from "./dashboard/page";
import CreateForm from "./createform/page"
import FormSubmit from '@/app/testimonial/page'

export default function Home() {
  return (
    <div className="">
        <Dashboard />
        {/* <CreateForm/> */}
        <FormSubmit />
    </div>
  );
}
