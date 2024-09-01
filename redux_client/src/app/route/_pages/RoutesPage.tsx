import { useEffect } from 'react';
import { RoutesLayout } from '@/app/route/_layouts/RoutesLayout';
import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import { ManagerPanel } from '../components/ManagerPanel/ManagerPanel';
import S from '@/services/main.service';
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
