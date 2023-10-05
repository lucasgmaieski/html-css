import { Metadata } from "next";

type Props = {
    params: {
        slug: string;
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    return {
        title: 'Título página',
        description: params.slug,
    }
}

export default async function BlogPost({params}: Props) {
    return(
        <main>
            <h1>Título blog: {params.slug}</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto in aut quasi corporis, debitis atque est similique doloribus repudiandae, earum deleniti cumque officiis blanditiis voluptate, at laboriosam quas rem.
        </main>
    )
}