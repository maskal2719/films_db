import React from 'react';
import classes from './FilterButton.module.css'

type FilterButtonsPropsType = {
    // callback: (genre: string) => void
    changeGenre: (value: string) => void
}


const FilterButtons:React.FC<FilterButtonsPropsType> = ({ changeGenre}) => {


    return (
        <div>
            <button onClick={() => changeGenre('all')}>Все</button>
            <button onClick={() => changeGenre('ужасы')}>Ужасы</button>
            <button onClick={() => changeGenre('драма')}>Драмы</button>
            <button onClick={() => changeGenre('комедия')}>Комедии</button>
        </div>
    );
};

export default FilterButtons;