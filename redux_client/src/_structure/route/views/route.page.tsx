import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import { ManagerPanel } from '@/app/route/components/ManagerPanel/ManagerPanel';
import { RequestPanel } from '@/app/route/components/RequestPanel/RequestPanel';
import { Text } from '@/components';
import { useEffect } from 'react';
import S from '@S';
import { moduleSelector } from '@/integrations/redux/slices/module.slice';
import { useSelector } from 'react-redux';
import { RootState } from '@/integrations/redux/store';


export const RoutePage: React.FC = () => {

    const { fetchAllModules } = S.module;
    useEffect(() => {
        fetchAllModules();
    }, [])

        return (

            <div className="main_container">
                <EndpointPanel />
                <ManagerPanel />
                <RequestPanel />
            </div>
        )

}