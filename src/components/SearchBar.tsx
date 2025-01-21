import Form from "next/form";

export default function SearchBar() {
  return (
    <Form action='/search' className='w-11/12 gap-1.5 flex'>
      <input name='query' className='w-11/12 border-2 border-slate-800' />
      <button type='submit'>Submit</button>
    </Form>
  );
}
