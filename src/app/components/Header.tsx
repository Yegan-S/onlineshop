import React from "react";
import { TabNav } from "@radix-ui/themes";

export default function Header(){
    return(
        <div className="flex w-full bg-slate-200 p-3 fixed top-0 left-0 z-50">

        <TabNav.Root>

	<TabNav.Link href="#">Account</TabNav.Link>
	<TabNav.Link href="#">Documents</TabNav.Link>
	<TabNav.Link href="#">Settings</TabNav.Link>
     
     </TabNav.Root>

        </div>
    );

}