import Pagination from '@/components/custom/Pagination';
import PostsContent from '@/components/custom/postsContent';
import Search from '@/components/custom/search';
import AppLayout from '@/layouts/app-layout';
import { posts } from '@/routes';
import { Category, PaginatedData, Post, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: posts().url,
    },
];

export default function Posts({
    categories,
    posts,
    filters,
}: {
    categories: Category[];
    posts: PaginatedData<Post>;
    filters?: any;
}) {
    const postItems = posts.data;
    return (
        <AppLayout breadcrumbs={breadcrumbs} create_post={true}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* tabs */}
                {/* <div>
                    <ul className="[&>li_a]:inline-block flex flex-wrap justify-center [&>li_a]:bg-secondary [&>li_a]:hover:bg-primary [&>li_a]:active:bg-primary [&>li]:me-2 [&>li_a]:px-4 [&>li_a]:py-2.5 [&>li_a]:rounded-md font-medium text-body [&>li_a]:hover:text-primary-foreground [&>li_a]:active:text-primary-foreground text-sm text-center">
                        <li>
                            <Link href="#" className="active">
                                All
                            </Link>
                        </li>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link href="#">{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* posts */}
                <div className="mb-4 flex w-full items-center justify-between">
                    <Search search={filters.search} />
                </div>
                <PostsContent posts={posts} grid={2} actions />

                <Pagination links={posts.links} />
            </div>
        </AppLayout>
    );
}
