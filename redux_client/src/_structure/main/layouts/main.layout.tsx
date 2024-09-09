import { Footer } from '@/app/global/components/Footer/Footer'
import { Header } from '@/app/global/components/Header/Header'

export const MainLayout = ({ children }) => {
    return (

        <>
            <Header />
            {children}
            <Footer />
        </>

    )
}
