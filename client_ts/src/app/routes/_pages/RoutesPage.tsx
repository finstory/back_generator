import { RoutesLayout } from '@routes/_layouts/RoutesLayout'
import { EndpointPanel } from '@routes/components/EndpointPanel/EndpointPanel'

export const RoutesPage = () => {
    return (
        <RoutesLayout>
            <EndpointPanel />
        </RoutesLayout>
    )
}
