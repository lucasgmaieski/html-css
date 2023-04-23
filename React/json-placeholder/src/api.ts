const BASE = 'https://jsonplaceholder.typicode.comm'

export const api = {
    getAllPosts: async() => {
        try {
            let response = await fetch(`${BASE}/posts`);
            let json = await response.json();
            return json;
        } catch(e) {
            console.log("Erro na requiição de posts: " + e);
            return e;
        }
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let response  = await fetch(`${BASE}/posts`, {
            method: 'Post',
            body: JSON.stringify({title, body, userId}),
            headers: {'Content-Type': 'application/json'}
        });
        let json = await response.json();
        return json;
    }
}