export async function getPostById(userId: string) {
    const response = await fetch(`https://reqres.in/api/users/${userId}`, { next: { revalidate: 3600 } });
    const post = await response.json();

    return post;
}