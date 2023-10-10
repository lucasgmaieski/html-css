import { Post } from "@/types/Post";
import { Metadata } from "next";

type Props = {
    params: {
        postId: string;
    };
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    return {
        title: `Post ${params.postId}`,
        description: `Página do Post ${params.postId}`,
    }
}

export default async function BlogPost({params}: Props) {
    // const {slug, postId } = params;
    return(
        <main>
            <h1>Título blog: {params.postId}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto in aut quasi corporis, debitis atque est similique doloribus repudiandae, earum deleniti cumque officiis blanditiis voluptate, at laboriosam quas rem.</p>
        </main>
    )
}

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } });
    const posts: Post[] = await res.json();
    return posts.map((post) => ({
      postId: post.id.toString(),
      
    }))
  }