import React, { useEffect } from 'react'
import scss from "@sass/pages/login.module.scss";
import { useForm } from '../hooks/useForm';
import { useAuthServices } from '../services/useAuthServices';

export const Auth = () => {
    const { auth: { error_login }, loadLogin, checkLogin } = useAuthServices();
    const { values: { username, password }, handleInputChange, reset } = useForm({ username: "", password: "" });

    const onSubmit = (e) => {
        e.preventDefault();
        loadLogin(username, password);
    }

    useEffect(() => {
        checkLogin();
    }, [])


    return (
        <div className={scss.auth_container}>

            <div className={scss.auth_panel}>

                <form
                    onSubmit={onSubmit}
                    className={scss.form}>
                    <div className={scss.auth_select}>
                        <p>Login</p>
                        <div className={scss.line}></div>
                    </div>

                    <div className={scss.input_group}>

                        <div className={scss.input_container}>
                            <input type="text" name="username"
                                placeholder="Usuario"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={scss.input_container}>
                            <input type="password" name="password"
                                placeholder="Contraseña"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={scss.password_recovery}>
                            <p style={{
                                color: error_login ? "#E53E3E" : "transparent"
                            }}>Error en Credenciales</p>
                            <p>Recuperá tu contraseña</p>
                        </div>
                    </div>

                    <div className={scss.submit_container}>
                        <button type='submit'>Ingresá</button>
                        <p>¿No tenés usuario? <span>Registrate.</span></p>
                    </div>

                </form>


            </div>

        </div>
    )
}
