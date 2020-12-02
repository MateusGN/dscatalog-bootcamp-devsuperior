import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react'
import BaseForm from '../../BaseForm';
import './style.scss'

type FormState = {
    name?: string;
    price?: string;
    category?: string;
    description?: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '',
        description: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://images7.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5-midia-fisica_1598984720_g.jpg',
            categories: [{ id: formData.category }],
        }

        makeRequest({ url: '/products', method: 'POST', data: payload })
            .then(() => {
                setFormData({ name: '', category: '', price: '', description: '' });
            });
    }

    return (
        <form onSubmit={handleSubmit}>.
            <BaseForm title={'CADASTRAR UM PRODUTO'}>
                <div className="row">
                    <div className="col-6">
                        <input
                            name='name'
                            type='text'
                            className='form-control mb-5'
                            onChange={handleOnChange}
                            placeholder='Nome do Produto'
                        />
                        <select name='category' className='form-control mb-5' onChange={handleOnChange}>
                            <option value='1'>Livros</option>
                            <option value='3'>Computadores</option>
                            <option value='2'>Eletrônicos</option>
                        </select>
                        <input
                            name='price'
                            type='text'
                            className='form-control'
                            onChange={handleOnChange}
                            placeholder='Preço'
                        />
                    </div>
                    <div className="col-6">
                        <textarea
                            placeholder='Descrição'
                            className='form-control'
                            name='description'
                            cols={30}
                            rows={10}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    );
}

export default Form;