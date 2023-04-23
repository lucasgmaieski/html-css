import { ChangeEvent, useState } from "react";

type Props = {
    onAdd: (title: string, body: string) => void;
}
export const PostForm = ({ onAdd }: Props) => {
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');
    
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
    }

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
    }

    const handleAddClick = () => {
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
        } else {
            alert("Preencha os campos")
        }
    }
    return (
      <fieldset>
        <legend>Adicionar novo Post</legend>
        <input 
          value={addTitleText} 
          type="text" 
          placeholder="Digite um título"
          onChange={handleAddTitleChange}
          />
        <textarea 
          value={addBodyText}
          onChange={handleAddBodyChange}  
        ></textarea>
        <button onClick={handleAddClick}>Adicionar</button>
      </fieldset>
    );
}