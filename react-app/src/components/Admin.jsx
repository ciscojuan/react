import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        e.preventDefault();

        console.log(data.user)

        setEntradas([
            ...entradas,
            data
        ])
        if(data.user === 'Juan' && data.password === 'Harcov_CODMW3'){
            localStorage.setItem('auth', 'true')
        }
        e.target.reset();
        return(
            <Redirect to="/articles" />
        )
    }
    return (
            <>
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-5">Admin Side</h1>
                        <hr />

                        <form className="form-group-inline" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" name="user" className="form-control form-control-lg" placeholder="User ID"
                                    {
                                    ...register("user", {
                                        required: {
                                            value: true,
                                            message: 'Evalua Campo Requerido'
                                        }
                                    })
                                    } />
                                <input type="text" name="password" className="form-control form-control-lg" placeholder="Passwd"
                                    {
                                    ...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Evalua Campo Requerido'
                                        }
                                    })
                                    } />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="LogIn" className="btn btn-outline-primary btn-lg" />
                            </div>
                        </form>
                    </div>
                </div>
            </>
    )
}
export default Admin;