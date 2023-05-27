import { Photo } from "../../types/Photo";
import { StyledLink } from "./styles";
import { Context } from '../../contexts/Context';
import { useContext } from 'react';

type Props = {
    data: Photo
}
export const PhotoItem = ({ data }: Props) => {
    const {state} = useContext(Context);

    return (
        <StyledLink to={`/photo/${data.id}`} state={state}>
            <img src={data.thumbnailUrl} alt="foto" />
        </StyledLink>
    );
}