import React, { FC } from 'react';
//import scss from 'you_scss_file';
const scss: any = {};

interface IProps {
    _scss: CSSModuleClasses;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    values: { request_type_input: string }
    route: any;
}

const RequestTypeSelector: FC<IProps> = ({ _scss, onChange: handleInputChange, values, route }) => {
    return (
        <select
            className={_scss.request_type_selector}
            name="request_type_input"
            onChange={handleInputChange}
            style={{
                color: values.request_type_input ? `var(--color-${values.request_type_input})` : `var(--color-${route.requestType})`
            }}
            value={values.request_type_input || route.requestType}
        >

            <option value="get"> GET </option>
            <option value="post">POST </option>
            <option value="put"> PUT </option>
            <option value="patch"> PATCH </option>
            <option value="delete"> DELETE </option>

        </select>
    );
};

export default RequestTypeSelector;