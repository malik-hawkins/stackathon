import { useEffect, useState, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import {
    DropdownMenuItem,
    DropdownMenuShortcut
} from "@/components/ui/dropdown-menu"

export default function PlaidButton() {
    const [linkToken, setLinkToken] = useState(null);
    let bearerToken = '<INSERT JWT HERE>'

    useEffect(() => {
        // Function to create a link token
        const createLinkToken = async () => {
            const response = await fetch('http://localhost:8080/api/createLinkToken', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${bearerToken}`
                },
            });
            const data = await response.json();
            setLinkToken(data.link_token);
        };

        // Generate the link token when the component mounts
        createLinkToken();
    }, []);

    const onSuccess = async (public_token: any, metadata: any) => {
        // Send the public_token to your server
        const response = await fetch('http://localhost:8080/api/publicTokenExchange', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ public_token }),
        });
        const data = await response.json();
        console.log('Access Token:', data.access_token);
    };

    const onExit = useCallback((error: any, metadata: any) => {
        // handle exit
        console.error('Plaid Link exit', error, metadata);
    }, []);

    const config = {
        token: linkToken,
        onSuccess,
        onExit
    };

    const { open, ready, error } = usePlaidLink(config);

    const handleButtonClick = () => {
        if (ready) {
            open();
        }
    };

    return (
        <div>
            <DropdownMenuItem onClick={handleButtonClick}>
                Add Account
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            {error && <p>{error.message}</p>}
        </div>
    );
};
