import { Post } from "@/types/Post";
import { Metadata } from "next";

type Props = {
    params: {
        slug: string;
    };
    post: Post;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    return {
        title: `Post ${params.slug}`,
        description: `Página do Post ${params.slug}`,
    }
}

export default async function BlogPost({params, post}: Props) {
    return(
        <main>
            <h1>Título blog: {post.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto in aut quasi corporis, debitis atque est similique doloribus repudiandae, earum deleniti cumque officiis blanditiis voluptate, at laboriosam quas rem.</p>
        </main>
    )
}