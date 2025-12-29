import CategoryFilter from '@/components/custom/categoryFilter';
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
    return (
        <AppLayout breadcrumbs={breadcrumbs} create_post={true}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* tabs */}
                <div className="mx-auto mb-4 w-full max-w-fit">
                    <CategoryFilter
                        categories={categories}
                        filters={filters}
                        currentCategory={filters?.category}
                    />
                    <Search filters={filters} />
                </div>

                {/* posts */}
                <PostsContent posts={posts} grid={2} actions />

                <Pagination links={posts.links} />
            </div>
        </AppLayout>
    );
}
