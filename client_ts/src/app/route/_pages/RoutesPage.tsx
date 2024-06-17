import { RoutesLayout } from '@/app/route/_layouts/RoutesLayout';
import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import S from '@services';

export const RoutesPage = () => {
    S.auth.login("username", "password")
    return (
        <RoutesLayout>
            <p>Works</p>
            {/* <EndpointPanel />  */}
        </RoutesLayout>
    )
}
