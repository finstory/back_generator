import { RoutesLayout } from '@/app/route/_layouts/RoutesLayout';
import { EndpointPanel } from '@/app/route/components/EndpointPanel/EndpointPanel';
import S from '@services';
import { useEffect } from 'react';


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

export const RoutesPage = () => {
    const { testAuth, auth: { name } } = S.auth;
    
    console.log(S.auth)

    // S.product.injectionAuth();
    // S.auth.login("heloo", "world");

    const method = () => {

        // setAuth({ name: "hello" }, "testAuth");

    }
    useEffect(() => {
        testAuth()
    }, [])
    useEffect(() => {
        console.log(name);
        console.log("cambio")
    }, [name])


    //  S.auth.login("username", "password")
    return (
        <RoutesLayout>
            <p>Works</p>
            {/* <EndpointPanel />  */}
        </RoutesLayout>
    )
}
