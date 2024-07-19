import { useEffect } from 'react';
import { rest_api } from '@/_common/api/rest';
import { RoutesLayout } from '@/app/route/_layouts/RoutesLayout';
import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import { ManagerPanel } from '../components/ManagerPanel/ManagerPanel';
import S from '@S';
import { RequestPanel } from '../components/RequestPanel/RequestPanel';


export const RoutesPage: React.FC = () => {
    const { getAllModules } = S.module;

    useEffect(() => {
        getAllModules();
    }, [])

    return (
        <RoutesLayout>
            <EndpointPanel />
            <ManagerPanel />
            <RequestPanel />
        </RoutesLayout>
    )
}
