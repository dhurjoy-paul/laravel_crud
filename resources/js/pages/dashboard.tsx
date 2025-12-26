import Pagination from '@/components/custom/Pagination';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface Post {
    id: number;
    image: string;
    title: string;
    slug: string;
    content: string;
    category_id: number;
    user_id: number;
    published_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedData<T> {
    data: T[];
    per_page: number;
    current_page: number;
    path: string;
    total: number;
    last_page: number;

    links: PaginationLink[];
    prev_page_url: string | null;
    next_page_url: string | null;
}

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
    posts: PaginatedData<Post>;
}

export default function Dashboard({ categories, posts }: Props) {
    console.log(posts);

    const postItems = posts.data;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col flex-1 gap-4 p-4 rounded-xl h-full overflow-x-auto">
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
                <div className="gap-4 grid md:grid-cols-3 auto-rows-min">
                    {postItems.map((post) =>
                        post ? (
                            <Link
                                key={post.id}
                                href={post.slug}
                                className="flex md:flex-row flex-col items-center bg-card shadow-xs px-3 py-1 border border-default rounded-md md:max-w-xl"
                            >
                                {/* <img src={image} alt={title}
                                    className="mb-4 md:mb-0 rounded-base w-full md:w-48 h-64 md:h-auto object-cover"
                                /> */}
                                <div className="flex flex-col justify-between md:p-4 leading-normal">
                                    <h5 className="mb-2 font-bold text-heading text-2xl tracking-tight">
                                        {post.title}
                                    </h5>
                                    <p className="mb-6 text-body line-clamp-3">
                                        {post.content}
                                    </p>
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex box-border items-center bg-primary hover:bg-primary-foreground shadow-xs px-4 py-2.5 border border-default-medium rounded-md focus:outline-none w-auto font-medium text-body text-primary-foreground hover:text-primary text-sm leading-5 transition-all duration-200"
                                        >
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <p className="flex justify-center items-center font-medium">
                                No post found !!
                            </p>
                        ),
                    )}
                </div>

                <Pagination links={posts.links} />
            </div>
        </AppLayout>
    );
}
