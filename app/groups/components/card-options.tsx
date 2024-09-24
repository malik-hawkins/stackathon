import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";



export default function CardOptions() {
    return (
        <div className="flex items-center justify-between space-x-4">
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
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                        Owner{" "}
                        <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="end">
                    <Command>
                        <CommandList>
                            <CommandEmpty>No roles found.</CommandEmpty>
                            <CommandGroup>
                                <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                    <p>Owner</p>
                                    <p className="text-sm text-muted-foreground">
                                        Admin-level access to all resources.
                                    </p>
                                </CommandItem>
                                <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                    <p>Viewer</p>
                                    <p className="text-sm text-muted-foreground">
                                        Can view and comment.
                                    </p>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
