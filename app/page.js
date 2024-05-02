import Navbar from "@/components/navbar";
import Content from "@/components/content";

export default function Home() {
  return (
   <main className={"w-[90%] m-auto bg-white"}>
       <Navbar></Navbar>
       <Content></Content>
   </main>
  );
}
