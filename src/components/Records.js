import React from 'react'
import chevron from "../assets/images/chevron-down.svg"
import {useSelector} from "react-redux";

const Records = ({data}) => {
    const titles = ['ID', 'Заголовок', 'Описание']
    const newDAta = data.filter((obj)=>{ return JSON.stringify(obj).includes('dolorem')
    });
    console.log(newDAta)


    return (
        <table className="table" style={{height: '820px'}}>
            <thead>
            <tr className="header-tr">
                {titles.map((title) => (<th  key={Math.random()} scope='col' className="header-th">{title} <img src={chevron} className="chevron-icon" alt="arrow-down"/></th>))}
            </tr>

            </thead>
            <tbody>
            {data.map(item => (
                <tr key={item.id} className="post-tr">
                    <td className="id-td">{item.id} </td>
                    <td className="info-td">{item.title} </td>
                    <td className="info-td">{item.body} </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Records