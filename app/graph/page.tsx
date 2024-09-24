"use client"

import { useRouter } from "next/navigation"; // Import the useRouter hook

export default function GraphPage() {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.back(); // Navigate back to the previous page
    };

    return (
        <div>
            <h1>Graph Page</h1>
            <button onClick={handleBackButtonClick}>
                Go Back
            </button>
        </div>
    );
}
