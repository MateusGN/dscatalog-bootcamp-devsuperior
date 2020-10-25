import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'

type Props = {
    title:string;
    children: React.ReactNode;
}

const BaseForm = ({title, children}:Props) => {

    const history = useHistory();

    const handleCandel = () => {
        history.push("../");
    }

    return (
        <div className='admim-base-form card-base'>
            <h1 className='base-form-title'>
                {title}
            </h1>
            {children}
            <div className='base-form-actions'>
                <button 
                    className='btn btn-outline-danger border-radius-10 mr-3'
                    onClick={handleCandel}
                >
                    CANCELAR
                </button>
                <button className='btn btn-primary border-radius-10'>
                    CADASTRAR
                </button>
            </div>
        </div>
    );
}

export default BaseForm;