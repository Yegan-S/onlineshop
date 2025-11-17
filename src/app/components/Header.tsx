import React from "react";
import { TabNav } from "@radix-ui/themes";

export default function Header(){
    return(
        <div>
            <TabNav.Root>
	<TabNav.Link href="#">
		Account
	</TabNav.Link>
	<TabNav.Link href="#">Documents</TabNav.Link>
	<TabNav.Link href="#">Settings</TabNav.Link>
</TabNav.Root>

        </div>
    );

}