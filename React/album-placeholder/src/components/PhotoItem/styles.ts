import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    border: 2px solid ${state.status === 'dark' ? '#000' : '#fff'};
    padding: 20px;
    cursor: pointer;
    margin: 10px;
    display: inline-block;
    text-decoration: none;
    color: ${state.status === 'dark' ? '#fff' : '#000'};

    img {
        display: block;
    }
    &:hover {
        background-color: #eee;
    }
`;