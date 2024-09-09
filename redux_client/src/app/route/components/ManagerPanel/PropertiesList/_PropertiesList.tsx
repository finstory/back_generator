import { ColorStyle } from '@/_common/interfaces/IStyles';
import printAlert, { featureNotAvailable } from '@/_common/_plugins/toast-alerts';
import { IconButton, Mark, Text } from '@/components';
import React, { FC, useState } from 'react';
import S from '@/_common/services/main.service';
import { IRequestParams, IRoute } from '@/app/module/_interfaces/module.interface';
import { useRouteRx } from '@/app/route/rxjs/route.rx';
interface IProps {
    _scss: CSSModuleClasses;
    route: IRoute;
}

type PropertiesList = {
    key: string;
    type: string;
    value: string;
    optional: boolean;
}

const PropertiesList: FC<IProps> = ({ _scss, route }) => {
    const paramsSelected$ = useRouteRx().routeRx$.routeManager.paramsSelected;

    const viewValidations = (validations: IRequestParams["validations"]) => {
        let validationsString = "";
        validations?.forEach(v => {
            validationsString += `${v.decoratorType} => ${v.name} ${v.callBack ? JSON.stringify(v.callBack) : ""}\n`;
        });
        printAlert(validationsString, "info");
    }

    const getTypeColor = (type: string): ColorStyle => {
        switch (type) {
            case "string":
                return "primary-off";
            case "number":
                return "post";
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
                        <th><Text label="p" color="primary" title="Validation Property">KEY</Text></th>
                        <th><Text label="p" color="primary" title="Property Type">TYPE</Text></th>
                        <th><Text label="p" color="primary" title="Manager">MANAGER</Text></th>
                    </tr>

                    {
                        route && paramsSelected$ &&
                            route[paramsSelected$].length > 0 ?
                            route[paramsSelected$].map((property: IRequestParams) => {

                                let propertyName = property.name;
                                let propertyType = property.type;

                                if (property.name.length > 14) propertyName = property.name.slice(0, 14) + "...";
                                if (property.type.length > 19) propertyType = property.type.slice(0, 19) + "...";

                                return (

                                    <tr key={property.id}>
                                        <td className={_scss.optional}>
                                            <input type="checkbox"
                                                className={_scss.checkbox}
                                                defaultChecked={property.optional}
                                                onClick={featureNotAvailable}
                                            />
                                        </td>

                                        <td><Text label="p" color="base-off" title={property.name}>{propertyName}</Text></td>

                                        <td>
                                            <Text label="p" color={getTypeColor(property.type)}
                                                title={property.type}>{propertyType}</Text>
                                        </td>

                                        <td>
                                            <Text label="p" color='base-off' cursor='pointer' size='medium' title="Open In VSC">👁</Text>
                                            <Text label="p" color='base-off' cursor='pointer' size='medium' title="Open In VSC"
                                                onClick={() => { viewValidations(property.validations), "info" }}>✔</Text>
                                            <IconButton style={{ opacity: 0.5 }} icon="delete" />
                                        </td>

                                    </tr>
                                )
                            })
                            : <tr className={_scss.empty} style={{ borderBottom: "0" }} >
                                <td style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <Text label="p" color="base-off" title="Empty List">No Properties Found... </Text>
                                </td>
                            </tr>
                    }


                </tbody>

            </table>
        </div >
    );
};

export default PropertiesList;