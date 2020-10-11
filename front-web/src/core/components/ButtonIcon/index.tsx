import React from 'react'
import { ReactComponent as ButtonImage } from '../../assets/images/Seta.svg'
import './style.scss'

type Props = {
    name: String,
}

const ButtonIcon = ({ name }: Props) => {
    return (
        <div className="d-flex">
            <button className='btn btn-primary btn-icon'>
                <h5>
                    {name}
                </h5>
            </button>
            <div className="btn-icon-content">
                <ButtonImage />
            </div>
        </div>
    );
}

export default ButtonIcon;