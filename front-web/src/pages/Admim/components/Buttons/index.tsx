import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'

type Props = {
    link: string;
}

const Buttons = ({link}:Props) => {

    const history = useHistory();
    const handleCreate = () => {
        history.push(link);
    }

    return (
        <button className='btn btn-primary btn-lg' onClick={handleCreate}>
            ADICIONAR
        </button>
    );
}

export default Buttons;