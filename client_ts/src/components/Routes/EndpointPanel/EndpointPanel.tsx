import React from 'react'
import scss from '../../assets/sass/pages/routes.module.scss';
import { DoubleBorderGradient } from '../../utilities/components/DoubleBorderGradient';
export const EndpointPanel = () => {
    return (
        <DoubleBorderGradient className={scss.endpoint_panel}
            effectHeight="51rem"
            effect={true}
            borderRadius="2rem"
            borderSize="2px"
            borderBetween="3px"
        >
            <div className={scss.panel}>

                <div className={scss.title}>
                    <p>ENDPOINTS</p>

                    <BorderGradient className={scss.add_route}
                        borderSize="2px"
                        onClick={() => {
                            setActiveAddRoute(!activeAddRoute);
                        }}
                    >
                        <p>+</p>
                    </BorderGradient>

                </div>

                <div className={scss.endpoint_dir}>
                    <RouteModuleEditor
                        scss={scss}
                        active={activeAddRoute}
                        mode={"add"}
                        setEditMode={setActiveAddRoute}
                    />

                    {endpoint_list.map((route) => (
                        <RouteModule key={route.module} scss={scss} route={route} />
                    ))}
                </div>
            </div>
        </DoubleBorderGradient>
    )
}
