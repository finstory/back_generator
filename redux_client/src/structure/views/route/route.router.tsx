import { useEffect } from 'react';
import { RoutePage } from './route.page';
import { Route, Routes } from 'react-router-dom';


export const RouteRouter: React.FC = () => {
    return (

        <Routes>
            <Route index element={<RoutePage />} />
        </Routes >

    )
}
