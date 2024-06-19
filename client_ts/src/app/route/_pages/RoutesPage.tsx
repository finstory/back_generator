import { RoutesLayout } from '@/app/route/_layouts/RoutesLayout';
import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import { Button, Text } from '@/components';
import S from '@services';
import { useEffect } from 'react';
import { Other } from './Other';



// class External {

//     effect = useEffect(() => {
//         console.log("effect");
//     }, []);


//     public test = () => {
//         this.effect;
//         console.log("External");
//     }

// }
// const external = () => new External();

// const services = {
//     get auth() {
//         return useServices().auth;
//     }
// }

export const RoutesPage: React.FC = () => {
    const { testAuth} = S.auth;
    const { listProduct } = S.product;
    // const { testAuth } = S.auth;
    // const { authState: { name } } = S.auth;
    const test = () => {
        testAuth();
    }

    return (
        <>
            <Other />
            <RoutesLayout>
                <Button onClick={test}>Test</Button>
                <Text label='p' size='large' family='secondary'>jk</Text>
                {/* <EndpointPanel />  */}
            </RoutesLayout>
        </>
    )
}
