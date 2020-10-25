import React from 'react'
import BaseForm from '../../BaseForm';
import './style.scss'

const Form = () => {

    return (
        <div>.
            <BaseForm title = {'CADASTRAR UM PRODUTO'}>
                <div className="row">
                    <div className="col-6">
                        <input type='text' className='form-control' />
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </BaseForm>
        </div>
    );
}

export default Form;