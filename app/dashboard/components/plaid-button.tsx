import { useState, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import {
    DropdownMenuItem,
    DropdownMenuShortcut
} from "@/components/ui/dropdown-menu"

interface PlaidButtonProps {
    linkToken: string | null;
}

const PlaidButton: React.FC<PlaidButtonProps> = ({ linkToken }) => {
    const bearerToken = 'PLACE_JWT_HERE'

    const onSuccess = useCallback(async (publicToken: any, metadata: any) => {
        try {
            console.log('Plaid Link onSuccess:', publicToken, metadata);
            const response = await fetch('http://localhost:8080/api/publicTokenExchange', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${bearerToken}`,
                },
                body: JSON.stringify({ publicToken }),
            });
            const data = await response.json();
            console.log('Access Token:', data.accessToken);
        } catch (error) {
            console.error('Error exchanging public token:', error);
        }
    }, []);

    const onExit = useCallback((error: any, metadata: any) => {
        console.error('Plaid Link exit', error, metadata);
        console.log('An error has occurred please reload the page')
    }, []);

    const config = {
        token: linkToken,
        onSuccess,
        onExit
    };

    const { open, ready } = usePlaidLink(config);

    const handleButtonClick = () => {
        console.log(config)
        try {
            if (ready) {
                open();
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div>
            <DropdownMenuItem onClick={handleButtonClick}>
                Add Account
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
        </div>
    );
};

export default PlaidButton;