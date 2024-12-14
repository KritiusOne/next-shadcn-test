import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggleButton";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center gaap-2 gap-2">
      <Button variant={"default"}>click</Button>
      <Button variant={"destructive"}>click</Button>
      <Button variant={"link"}>click</Button>
      <Button variant={"secondary"}>click</Button>
      <Button variant={"outline"}>click</Button>
      <Button variant={"ghost"}>click</Button>
      <Link href="/" className={ buttonVariants() } > go to home page</Link>
      <ModeToggle />
    </div>
  );
}
