import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

//it should = isso deve
it('should add 1 to 1 and return 2', () => {
    let result = 1 + 1;

    expect(result).toBe(2);
});

it('should multiply 5 by 3 and return 15', () => {
    let result = 5 * 3;

    expect(result).toBe(15);
});

it('should have a container div', () => {
    const {container} = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('container').length).toBeGreaterThan(0);
});

it('should render NotFound component when entering a non existing route', () => {
    const {container} = render(
        <MemoryRouter initialEntries={['/cafasf']}>
            <App />
        </MemoryRouter>
    );
    const h2 = container.getElementsByTagName('h2')[0];
    expect(h2.innerHTML).toBe('Página não encontrada');
});

it('hould go to the registration page when clicking on the register button', () => {
    const {container} = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    act(()=> {
        let registerBtn = container
        .getElementsByClassName('headerRight')[0]
        .getElementsByTagName('a')[0];

        registerBtn.click();
    });

    const registrationTitle = screen.getByText('Cadastro de carro');
    expect(registrationTitle).toBeInTheDocument();
})

export {};