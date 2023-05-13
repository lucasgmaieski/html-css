import { useRoutes } from "react-router-dom";

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <home /> },
        { path: 'album/:id', element: <Album /> },
        { path: 'photo/:id', element: <Photo /> }
    ]);
}