import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidbar/Sidebar";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import Films from "./components/Films/Films";
import axios from "axios";


export type Results = {
    results: RootObject[]
}

export type Rating = {
    rating_kp: string;
    vote_num_kp: string;
    rating_imdb: string;
    vote_num_imdb: string;
}

export type Info = {
    rus: string;
    orig: string;
    alter: string;
    year: string;
    country: string;
    director: string;
    genre: string;
    actors: string;
    description: string;
    slogan: string;
    premiere: string;
    age: string;
    time: string;
    poster: string;
    screenshot: string;
    rating: Rating;
}

export type RootObject = {
    link: string;
    kinopoisk_id: string;
    date: string;
    camrip: string;
    ads: string;
    block: string;
    serial: string;
    trailer: string;
    end: string;
    quality: string;
    translation: string;
    max_qual: string;
    info: Info;
}

function App() {

    const [data, setData] = useState<RootObject[]>([])
    const [genre, setGenre] = useState('all')

    useEffect(() => {
        axios.get('https://api-movies.github.io/bazon/datasets/page-100.json')
            .then((resp) => {
                console.log(resp.data.results)
                setData(resp.data.results)
            })
    },[])

    const changeGenre = (value: string) => {
        setGenre(value)
    }

    const filter = (data: RootObject[],genre?: string) => {
        if(genre === 'all') {
            return data

        }else {
            return data.filter(el => el.info.genre === genre)
        }

    }

    const res = filter(data, genre);

  return (
    <div className="App">
      <Header/>
      <div className={'navigation'}>
        <Sidebar/>
        <FilterButtons  changeGenre={changeGenre}/>
      </div>
      <Films data={res}/>
    </div>
  );
}

export default App;
