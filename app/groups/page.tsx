import { Metadata } from "next"
import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "@/components/ui/card"
import "../globals.css";


import { MainNav } from "../dashboard/components/main-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import CardOptions from "./components/card-options";
import CardActions from "./components/card-actions";

export const metadata: Metadata = {
    title: "Groups",
    description: "Group page to see what groups you belong to.",
}

export default function GroupPage() {

    let groups = []

    return (
        <>
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6" />
                </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Groups</h2>
                    <div className="flex items-center space-x-2">
                        <Button>Create a group</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between space-y-4 pb-2">
                <Card className="w-1/4 ml-8">
                    <CardHeader className="flex justify-start">
                        <CardTitle className="text-sm font-medium">
                            Group 1
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        {/* <div className="flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/01.png" />
                                    <AvatarFallback>MH</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">Malik Hawkins</p>
                                    <p className="text-sm text-muted-foreground">mh@example.com</p>
                                </div>
                            </div>
                        </div> */}
                        <CardOptions />
                        <div className="flex justify-end">
                            <CardActions />
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-1/4">
                    <CardHeader className="flex justify-start">
                        <CardTitle className="text-sm font-medium">
                            Group 2
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/01.png" />
                                    <AvatarFallback>KH</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">Kaleb Holley</p>
                                    <p className="text-sm text-muted-foreground">kh@example.com</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-1/4 mr-8">
                    <CardHeader className="flex justify-start">
                        <CardTitle className="text-sm font-medium">
                            Group 3
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/01.png" />
                                    <AvatarFallback>KH</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">Karl Holley Jr</p>
                                    <p className="text-sm text-muted-foreground">kjh@example.com</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}


{/* <Card className="w-1/4 mr-8">
                    <CardHeader className="flex-1 flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Group 3
                        </CardTitle>
                    </CardHeader> */}