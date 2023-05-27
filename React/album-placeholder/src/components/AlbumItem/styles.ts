import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeType } from '../../reducers/themeReducer';

type MainProps = {
    state: ThemeType
}
export const StyledLink = styled(Link)<MainProps>`
    border: 2px solid ${props => props.state.status === 'dark' ? '#fff' : '#000'};
    padding: 20px;
    margin: 10px;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: ${props => props.state.status === 'dark' ? '#fff' : '#000'};
    &:hover {
        background-color: ${props => props.state.status === 'dark' ? '#fff5' : '#000'};
    }
`;