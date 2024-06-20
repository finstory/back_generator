import { RoutesLayout } from '@/app/route/_layouts/RoutesLayout';
import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import { Button, Text } from '@/components';
import S from '@S';
import { Other } from './Other';


export const RoutesPage: React.FC = () => {
    return (
        <RoutesLayout>
            <EndpointPanel />
        </RoutesLayout>
    )
}
