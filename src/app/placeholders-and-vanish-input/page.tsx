'use client';
import React, { ChangeEvent, FormEvent } from 'react';
import { PlaceholdersAndVanishInput } from '@/components/PlaceholdersAndVanishInput';

const Page = () => {
    const placeholders = ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Handle change event
        console.log('handle change e:', e);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // Handle submit event
        console.log('handle submit e:', e);
    };

    return (
        <>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default Page;
