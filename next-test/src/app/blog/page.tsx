import Link from "next/link";

export default function Blog() {
    return (
        <main>
            <h1>Lista de posts</h1>
            <ul className="flex flex-col gap-3">
                <li className="border border-green-700"><Link href="blog/post1">Post lorem ipson 1</Link></li>
                <li className="border border-green-700"><Link href="blog/post2">Post lorem ipson 2</Link></li>
                <li className="border border-green-700"><Link href="blog/post3">Post lorem ipson 3</Link></li>
                <li className="border border-green-700"><Link href="blog/post4">Post lorem ipson 4</Link></li>
                <li className="border border-green-700"><Link href="blog/post5">Post lorem ipson 5</Link></li>
                <li className="border border-green-700"><Link href="blog/post6">Post lorem ipson 6</Link></li>
            </ul>
        </main>
    )
}