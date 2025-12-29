import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Input } from '../ui/input';

export default function Search({ filters }: { filters: any }) {
    const searchedText = filters.search;
    const [value, setValue] = useState(searchedText || '');

    useEffect(() => {
        const searchDelayFn = setTimeout(() => {
            router.get(
                window.location.pathname,
                { ...filters, search: value, page: 1 },
                { preserveState: true, replace: true },
            );
        }, 300);

        return () => clearTimeout(searchDelayFn);
    }, [value]);

    return (
        <div className="w-full">
            <Input
                type="text"
                placeholder={
                    filters.category
                        ? 'Search in this category...'
                        : 'Search all posts...'
                }
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full rounded-md border border-input bg-input/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    );
}
