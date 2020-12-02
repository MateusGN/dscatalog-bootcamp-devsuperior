import React from 'react'
import './Tests.scss'
import 'core/assets/styles/custom.scss'
import './app.scss'

const Tests = () => {
    let name, password;
    console.log(name, password);
    return (
        <form>
            <div className='container-tst' >
                <div className='container-card-box' >
                    <h1 className='tst-tittle ' >Bem vindo ao ChatBoot</h1>
                    <input
                        name={name}
                        type='text'
                        className='form-control mb-5 tst-input'
                        placeholder='Username'
                    />
                    <input
                        name={password}
                        type='password'
                        className='form-control mb-5 tst-input'
                        placeholder='Password'
                    />
                    <button className='btn btn-primary'>
                        Sing-In
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Tests;