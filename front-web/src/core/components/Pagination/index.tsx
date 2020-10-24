import React from 'react'
import './style.scss'
import { ReactComponent as ArrowIcon } from 'core/assets/images/Seta.svg'
import { generateList } from 'core/utils/list'

type Props = {
    pages: number;
    activePage: number;
    onChange: (item:number) => void;
}

const Pagination = ({ pages, activePage, onChange}: Props) => {
    const items = generateList(pages);
    const previousClass = pages > 0 && activePage > 0 ? 'page-active':'page-inactive';
    const nextClass = (activePage + 1) < pages? 'page-active':'page-inactive';

    return (
        <div className='pagination-container' >
            <ArrowIcon className= {`pagination-previous ${previousClass}`} 
                onClick = {() => onChange(activePage - 1)}
            />
            {items.map(item => (
                <div 
                    className={`pagination-item ${activePage === item ? 'active': ''}`} 
                    key={item}
                    onClick = {() => onChange(item)}
                    >
                    {item+1}
                </div>
            ))}
            <ArrowIcon className={`pagination-next ${nextClass}`} 
                onClick = {() => onChange(activePage + 1)}
            />
        </div>
    );
}

export default Pagination;