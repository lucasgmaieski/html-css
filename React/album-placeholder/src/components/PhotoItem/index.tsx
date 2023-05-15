import { Photo } from "../../types/Photo";
import { StyledLink } from "./styles";

type Props = {
    data: Photo
}
export const PhotoItem = ({ data }: Props) => {
    return (
        <StyledLink to={`/photo/${data.id}`}>
            <img src={data.thumbnailUrl} alt="foto" />
        </StyledLink>
    );
}