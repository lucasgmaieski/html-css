import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLink = styled(Link)`
    border: 2px solid ${state.status === 'dark' ? '#000' : '#fff'};
    padding: 20px;
    margin: 10px;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: ${state.status === 'dark' ? '#fff' : '#000'};
    &:hover {
        background-color: #eee;
    }
`;