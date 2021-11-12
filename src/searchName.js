import React, { useState, useCallback, useMemo } from 'react'
import './searchName.css'

const users = [
    { id: "1", name: "paijo" },
    { id: "2", name: "yuni" },
    { id: "3", name: "riri" }
  ];

function SearchName() {
    const [msg, setMsg] = useState('')
    const [name, setName] = useState('')

    // try using callback function to return onchange value
    const handleChange = useCallback(e => {
        setMsg(e.target.value);
    }, []);

    const onSearch = () => {
        setName(msg)
    }

    //try using useMemo function to filter name based on user input
    const filterSearch = useMemo(
        () => 
          users.filter((user)=>{
            return user.name.includes(name);
          }),
          [name] );

    return (
        <div>
            <input className="inputText" type="text" onChange={handleChange}/>
            <button type="button" style={{height:'45px', border:'2px solid cadetblue', background:'#108696', color:'#fff', cursor:'pointer', borderTopRightRadius: '8px', borderBottomRightRadius:'8px'}} onClick={onSearch}>
            search
            </button>
            <p>You seraching for : {msg}</p>
            <h2>User List</h2>
            <ul className="list">
                {filterSearch.map((list)=>(
                    <li key={list.id}>{list.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchName
