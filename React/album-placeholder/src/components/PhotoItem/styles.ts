import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ThemeType } from "../../reducers/themeReducer";

type MainProps = {
    state: ThemeType
}
export const StyledLink = styled(Link)<MainProps>`
    border: 2px solid ${props => props.state.status === 'dark' ? '#fff' : '#000'};
    padding: 20px;
    cursor: pointer;
    margin: 10px;
    display: inline-block;
    text-decoration: none;
    color: ${props => props.state.status === 'dark' ? '#fff' : '#000'};

    img {
        display: block;
    }
    &:hover {
        background-color: ${props => props.state.status === 'dark' ? '#fff3' : '#f1f1f1'};
    }
`;