function TransformNumber(validationOptions?: V.ValidationOptions) {
    return function (target: any, propertyName: string): void {
        Transform((params: TransformFnParams) => {
            const value = params.value as string;
            return parseInt(value); // Transforma el valor a número
        }, validationOptions)(target, propertyName);
    };
}

// @Transform(({ value }) => { if (value === 'true' || value === 'True') return true; else if (value === 'false' || value === 'False') return false; else return null })