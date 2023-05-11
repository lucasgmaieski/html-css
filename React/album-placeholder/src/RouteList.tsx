import { Routes, Route, useRoutes } from 'react-router-dom';
import { Album } from './pages/Album';

export const RouteList = () => {

    return useRoutes([
        { path: "/" , element: <Album /> },
        { path: "/albums" , element: <Album /> }
    ]);
    // return (
    //     <Routes>
    //         <Route path="/" element={ <Album />}/>
    //         <Route path="/albums" element={ <Album />}/>
    //     </Routes>
    // );
}