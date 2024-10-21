"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";


// Going to change this to accept user prop maybe
export default function CardOptions() {
    const router = useRouter();

    const handleDeleteButtonClick = () => {
        // Implement delete group, option should only be available if current user is owner of the group
    }

    const hanleLeaveButtonClick = () => {
        // Implement leave group, option should only be available if current user is not owner of the group
    }

    const handleViewButtonClick = () => {
        router.push("/graph")
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem onClick={handleViewButtonClick}>View</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Leave
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
