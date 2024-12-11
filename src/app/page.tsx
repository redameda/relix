import { Button } from "@/components/ui/button";
import Image from "next/image";
import Wel from "../acomp/Wel";

export default function Home() {
  return (
   <>
   <nav className="border-b flex p-2">
    <h1 className="text-3xl font-bold p-2">Relix</h1>
    <div className="ml-auto flex gap-2 p-2">
    <Button>Sign up</Button>
    <Button variant={'secondary'}>Log In</Button>
    </div>
   </nav>
   <Wel/>
   </>
  );
}
