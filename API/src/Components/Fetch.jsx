import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css"

const api = () => {
    let [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
            .then(res => {
                setBooks(res.data.books)
            })
            .catch(error => {
                console.log("Error")
            })
    }, [])

    return (
        <div className='container'>
            {books.map((el) => (
                <div key={el.id} className='book'>
                    <div className='intro'>
                        <h2>{el.title}</h2>
                        <img src={el.imageLinks.smallThumbnail} alt="" />
                        <h3>{el.authors[0]}</h3>
                    </div>
                    <p className='about'>{el.description}</p>
                </div>
            ))}
        </div>
    )
}

export default api
