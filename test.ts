function errorHandling(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = (...args: any[]) => {
        try {
            return originalMethod.apply(this, args);
        } catch (error) {
            console.log(error);
        }
    };

    return descriptor;
}

class MyClass {
    @errorHandling
    myMethod = () => {
        throw new Error("Error");
    }
}

const instance = new MyClass();
instance.myMethod();
