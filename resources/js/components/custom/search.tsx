import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Input } from '../ui/input';

export default function Search({ search }: { search?: string }) {
    const [value, setValue] = useState(search || '');

    useEffect(() => {
        const searchDelayFn = setTimeout(() => {
            router.get(
                window.location.pathname,
                { search: value },
                { preserveState: true, replace: true },
            );
        }, 300);

        return () => clearTimeout(searchDelayFn);
    }, [value]);

    return (
        <div className="mb-6 w-full sm:max-w-sm">
            <Input
                type="text"
                placeholder="Search your posts..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    );
}
