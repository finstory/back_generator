import { ColorStyle } from '@/_common/interfaces/IStyles';
import { Text } from '@/components';
import React, { FC, useState } from 'react';

interface IProps {
    _scss: CSSModuleClasses;
}

type PropertiesList = {
    key: string;
    type: string;
    value: string;
    optional: boolean;
}

const PropertiesList: FC<IProps> = ({ _scss }) => {

    const [propertiesList, setPropertiesList] = useState<PropertiesList[]>([
        {
            key: "name",
            type: "string",
            value: "Facundo Alvarez",
            optional: true,
        },
        {
            key: "amount",
            type: "number",
            value: "34",
            optional: false,
        },
        {
            key: "players_list",
            type: "array",
            value: "[{name: 'plays...",
            optional: false,
        },
        {
            key: "is_active",
            type: "boolean",
            value: "true",
            optional: false,
        },
        {
            key: "name",
            type: "string",
            value: "Facundo Alvarez",
            optional: true,
        },
        {
            key: "amount",
            type: "number",
            value: "34",
            optional: false,
        },
        {
            key: "players_list",
            type: "array",
            value: "[{name: 'plays...",
            optional: false,
        },
        {
            key: "is_active",
            type: "boolean",
            value: "true",
            optional: false,
        },
    ]);

    const getTypeColor = (type: string): ColorStyle => {
        switch (type) {
            case "string":
                return "primary-off";
            case "number":
                return "post-off";
            case "boolean":
                return "delete";
            case "object":
                return "middleware-off";
            case "array":
                return "middleware";
            default:
                return "base-off";
        }
    }

    return (
        <div className={_scss.properties_list}>
            <table >
                <tbody>
                    <tr>
                        <th className={_scss.optional} ><Text label="p" title="Is Optional? " color="primary">?</Text></th>
                        <th><Text label="p" color="primary">KEY</Text></th>
                        <th><Text label="p" color="primary">VALUE</Text></th>
                        <th><Text label="p" color="primary">TYPE</Text></th>
                    </tr>

                    {propertiesList.map((property) => {
                        return (
                            <tr>
                                <td className={_scss.optional} >
                                    <input type="checkbox"
                                        className={_scss.checkbox}
                                        defaultChecked={property.optional}
                                    />
                                </td>
                                <td><Text label="p" color="base-off">{property.key}</Text></td>
                                <td><Text label="p" color={getTypeColor(property.type)}>{property.value}</Text></td>
                                <td><Text label="p" color="base-off">{property.type}</Text></td>
                            </tr>
                        )
                    })}


                </tbody>

            </table>
        </div>
    );
};

export default PropertiesList;