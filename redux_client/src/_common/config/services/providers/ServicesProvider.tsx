import React, { createContext, ReactNode, useContext, useState } from 'react';
import { MainService } from '@/services/main.service';

// Define la interfaz para tu contexto
export interface MyContextProps {
    S: MainService;
}

class MyClass {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}

const ServicesContext = createContext<MyContextProps | undefined>(undefined);

export const ServicesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Instancia la clase solo una vez
    const S = new MainService();
    // console.log("ready")
    return (
        <ServicesContext.Provider value={{ S }}>
            {children}
        </ServicesContext.Provider>
    );
};

export function withMyContext<P extends MyContextProps>(
    Component: React.ComponentType<P>
): React.FC<Omit<P, keyof MyContextProps>> {
    return function WrapperComponent(props) {
        const context = useContext(ServicesContext);
        if (context === undefined) {
            throw new Error('withMyContext must be used within a MyProvider');
        }
        return <Component {...(props as P)} {...context} />;
    };
}


// Crea un hook para usar el contexto
export const useServices = () => {
    const context = useContext(ServicesContext);
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context.S;
};
