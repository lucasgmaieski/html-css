import { StyledLink } from "./styles";

type Props = {
    id: number;
    title: string;
}

export const AlbumItem = ({id, title}: Props) => {
 
    return (
        <StyledLink to={`/album/${id}`} className="album">
            {title}
        </StyledLink>
    );
}