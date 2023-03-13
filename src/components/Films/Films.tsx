import React from 'react';
import { RootObject} from "../../App";
import classes from './Films.module.css'

type FilmsPropsType = {
    data: RootObject[]
}

const Films: React.FC<FilmsPropsType> = ({data}) => {

    return (
        <div className={classes.filmContainer}>
            {data.map(el => {
                return (
                    <div key={el.kinopoisk_id} className={classes.filmBlock}>
                        <p className={classes.filmName}>{el.info.rus}</p>
                        <img src={el.info.poster} alt=""/>
                        <p>{el.info.genre}</p>
                        <p>{el.info.description}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Films;