import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import { ManagerPanel } from '@/app/route/components/ManagerPanel/ManagerPanel';
import { RequestPanel } from '@/app/route/components/RequestPanel/RequestPanel';
import { Text } from '@/components';
import { useEffect } from 'react';
// import S from '@S';


export const RoutePage: React.FC = () => {
    // const { getAllModules } = S.module;

    // useEffect(() => {
    //     getAllModules();
    // }, [])

    return (
        <div className="main_container">
            <EndpointPanel />
            <ManagerPanel />
            <RequestPanel /> 
        </div>
    )
}