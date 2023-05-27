import { Context } from "../../contexts/Context";
import { StyledLink } from "./styles";
import { useContext } from 'react';
type Props = {
    id: number;
    title: string;
}

export const AlbumItem = ({id, title}: Props) => {
    const {state} = useContext(Context)
    return (
        <StyledLink to={`/album/${id}`} state={state} className="album">
            {title}
        </StyledLink>
    );
}