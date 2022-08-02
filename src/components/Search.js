import React, {useState} from 'react';
import searchIcon from "../assets/images/search-icon.svg"
import {useDispatch} from "react-redux";
import {searchPostAction, setData} from "../redux/reducer/postsReducer";
import posts from '../db/posts.json'


const Search = () => {
    const dispatch = useDispatch();
    const changeHandler =(e)=>{
        if(!e.length){dispatch(setData(posts))}
        else dispatch(searchPostAction(e))

    }

    return (
        <div className="search">
            <input type="text"  className="search-input" placeholder="Поиск" onChange={(e)=>changeHandler(e.target.value)}/>
            <button className="search-btn">
                <img src={searchIcon} alt="search"/>
            </button>
            
        </div>
    );
};

export default Search;