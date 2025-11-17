
import { Flex, Text, Button } from "@radix-ui/themes";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <div className="flex min-h-screen p-1  m-2 bg-slate-200">
         <Header/>
         </div>
         <div>
         <Flex direction="column" gap="2">
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
  </div>
    </div>
  );
}
