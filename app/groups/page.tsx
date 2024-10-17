"use client"

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
import { useEffect, useRef, useState } from "react";
import { CreateGroupForm } from "./components/create-group-form";

export default function GroupPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const openModal = () => {
        console.log("Opening Modal");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        console.log("Closing Modal");
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                        <Button onClick={openModal}>Create a group</Button>
                    </div>
                </div>
            </div>


            {isModalOpen && (
                <>

                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={closeModal}
                    ></div>

                    {/* Modal content */}
                    <div className="fixed z-50 inset-0 flex items-center justify-center">
                        <div
                            ref={modalRef}
                            className="bg-white p-6 rounded shadow-lg relative"
                        >
                            <CreateGroupForm closeModal={closeModal} />
                        </div>
                    </div>
                </>
            )}

            <div className="flex flex-row items-center justify-between space-y-4 pb-2">
                <Card className="w-1/4 ml-8">
                    <CardHeader className="flex justify-start">
                        <CardTitle className="text-sm font-medium">Group 1</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        {/* Additional content */}
                        <CardOptions />
                        <div className="flex justify-end">
                            <CardActions />
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-1/4">
                    <CardHeader className="flex justify-start">
                        <CardTitle className="text-sm font-medium">Group 2</CardTitle>
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
                        <CardTitle className="text-sm font-medium">Group 3</CardTitle>
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
    );
}
