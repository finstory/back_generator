import React from 'react'

export const HelpAlert = ({ scss }) => {

    const redirectEmail = (email) => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div
            className={scss.helper_alert}
            onClick={() => {
                redirectEmail("alejandrodegano@agro.com");
            }}
        >
            <p>¿Necesitás ayuda?</p>
            <p>Hacé click en la imagen</p>
            <div className={scss.img_wrap}>
                <img
                    src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1709013610/Agro/Frame_1_epps0a.png"
                    alt="image"
                />
            </div>
        </div>
    )
}
