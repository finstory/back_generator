import { Text } from '@/components';
import React, { FC } from 'react';

interface IProps {
    _scss: CSSModuleClasses;
}

const PropertiesList: FC<IProps> = ({ _scss }) => {
    return (
        <div className={_scss.properties_list}>
            <table >
                <tbody>
                    <tr>
                        <th className={_scss.optional} ><Text label="p" title="Is Optional? ">?</Text></th>
                        <th><Text label="p">KEY</Text></th>
                        <th><Text label="p">VALUE</Text></th>
                        <th><Text label="p">TYPE</Text></th>
                    </tr>
                    <tr>
                        <td className={_scss.optional} >
                            <input type="checkbox" className={_scss.checkbox} />
                        </td>
                        <td><Text label="p" color="base-off">id_team</Text></td>
                        <td><Text label="p" color="base-off">23423432</Text></td>
                        <td><Text label="p" color="base-off">string</Text></td>
                    </tr>

                    <tr>
                        <td className={_scss.optional} >
                            <input type="checkbox" className={_scss.checkbox} />
                        </td>
                        <td><Text label="p" color="base-off">id_team</Text></td>
                        <td><Text label="p" color="base-off">23423432</Text></td>
                        <td><Text label="p" color="base-off">string</Text></td>
                    </tr>

                </tbody>

            </table>
        </div>
    );
};

export default PropertiesList;