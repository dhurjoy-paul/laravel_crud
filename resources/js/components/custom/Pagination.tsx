import { Link } from '@inertiajs/react';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export default function Pagination({ links }: { links: PaginationLink[] }) {
    return (
        <div className="flex flex-wrap justify-center gap-3 my-5">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url || '#'}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                        link.active
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-default bg-card hover:bg-secondary'
                    } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={(e) => !link.url && e.preventDefault()}
                />
            ))}
        </div>
    );
}
