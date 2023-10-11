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

export async function getPostData(id: string): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return post;
}

export default async function BlogPost({params}: Props) {
    // const {slug, postId } = params;
    const post = await getPostData(params.postId);

    return(
        <main>
            <h1>Título blog: {post.title}</h1>
            <p>{post.body}</p>
        </main>
    )
}

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();
    return posts.map((post) => ({
      postId: post.id.toString(),
    }))
  }