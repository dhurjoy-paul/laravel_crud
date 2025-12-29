import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto w-full max-w-4xl bg-background px-2 text-foreground sm:px-0">
            {children}
        </div>
    );
}
