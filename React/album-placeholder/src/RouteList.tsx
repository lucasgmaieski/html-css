import { Routes, Route, useRoutes } from 'react-router-dom';
import { Album } from './pages/Album';

export const RouteList = () => {

    return useRoutes([
        { path: "/" , element: <Album /> },
        { path: "/albums" , element: <Album /> },
        { path: "/album/:slug" , element: <Photos /> },
        { path: "/photo/:slug" , element: <Photo /> },
    ]);
    // return (
    //     <Routes>
    //         <Route path="/" element={ <Album />}/>
    //         <Route path="/albums" element={ <Album />}/>
    //     </Routes>
    // );
}