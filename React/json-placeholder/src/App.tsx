import { useEffect, useState } from 'react';
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { Post } from "./types/Post";
import { api } from "./api";
import './App.css'

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPosts(json);
  }

  const handleAddPost = async (title: string, body:string) => {
    let json = await api.addNewPost(title, body, 1);
    if(json.id) {
      alert("Post adicionado com sucesso!");
    } else {
      alert("Ocorreu um erro!");
    }
  }

  return (
    <div className="App">
      {loading && 
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost}/>

      {!loading && posts.length > 0 &&
        <>
          <h2>Total de Posts: {posts.length}</h2>
          <div>
            {posts.map((item, index) => (
              <PostItem data={item}/>
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 && 
        <div>Não há posts para exibir.</div>
      }
    </div>
  )
}

export default App
