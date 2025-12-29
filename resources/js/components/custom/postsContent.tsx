import { PaginatedData, Post } from '@/types';
import { Link } from '@inertiajs/react';

export default function PostsContent({
    posts,
    grid,
    actions,
}: {
    posts: PaginatedData<Post>;
    grid: number;
    actions?: boolean;
}) {
    const gridConfig: Record<number, string> = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
    };
    const gridClass = grid ? gridConfig[grid] : 'grid-cols-1';

    return (
        <div className={`grid gap-6 ${gridClass}`}>
            {posts?.data.length > 0 ? (
                posts.data.map((post) => (
                    <div
                        key={post.id}
                        className="group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md md:flex-row"
                    >
                        {/* Image Section */}
                        <div className="h-48 w-full overflow-hidden md:h-auto md:w-72">
                            <img
                                src={`/storage/${post.image}`}
                                alt={post.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-1 flex-col p-5">
                            <div className="flex-1">
                                <Link href={post.slug}>
                                    <h3 className="mb-2 text-xl font-semibold tracking-tight decoration-primary underline-offset-4 hover:underline">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                                    {post.content}
                                </p>
                            </div>

                            <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                                <Link
                                    href={post.slug}
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    Read more ➺
                                </Link>

                                {actions && (
                                    <div className="flex items-center gap-2">
                                        <Link
                                            // href={route('post.edit', post.id)}
                                            className="inline-flex items-center justify-center rounded-md border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-md bg-destructive/10 px-3 py-1.5 text-xs font-medium text-destructive-foreground transition-all hover:bg-destructive hover:text-destructive-foreground"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="rounded-xl border-2 border-dashed py-20 text-center">
                    <p className="font-medium text-muted-foreground">
                        No posts found.
                    </p>
                </div>
            )}
        </div>
    );
}
