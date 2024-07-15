import { RoutesLayout } from '@/app/route/_layouts/RoutesLayout';
import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import S from '@S';
import { useEffect } from 'react';
import { rest_api } from '@/_common/api/rest';


export const RoutesPage: React.FC = () => {
    const { getAllModules } = S.module;

    useEffect(() => {
        getAllModules();
    }, [])

    return (
        <RoutesLayout>
            <EndpointPanel />
            <EndpointPanel />
            <EndpointPanel />
        </RoutesLayout>
    )
}
