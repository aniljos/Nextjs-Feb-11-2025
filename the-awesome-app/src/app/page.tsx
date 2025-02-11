import { Counter } from "@/components/Counter";
//import { Message } from "@/components/Message";

export default function Home() {
  return (
    <div>
      <h3>Next.js Application</h3>

      {/* <Message text="React" color="blue"/>
      <Message text="Next.js" color="green"/> */}

      <Counter initialValue={5}/>
      {/* <Counter initialValue={10}/> */}
    </div>
  );
}
