"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CreateGroupFormProps {
    closeModal: () => void;
}

export function CreateGroupForm({ closeModal }: CreateGroupFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to create the group can go here

        // Close the modal after form submission
        closeModal();
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}> {/* Wrap content in form and attach handleSubmit */}
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Create a group</CardTitle>
                    <CardDescription>
                        Enter the following information to create your group
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Group Name</Label>
                        <Input id="group_name" type="name" placeholder="m@example.com" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Please include all information relevant to your issue."
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type="submit">Create group</Button>
                </CardFooter>
            </form>
        </Card>
    );
}
