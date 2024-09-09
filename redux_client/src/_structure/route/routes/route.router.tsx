import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { RoutePage } from '../views/route.page';


export const RouteRouter: React.FC = () => {
    return (

        <Routes>
            <Route index element={<RoutePage />} />
        </Routes >

    )
}
