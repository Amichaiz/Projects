import './books.css';
import React, { useState } from 'react'
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const date1 = a.volumeInfo.publishedDate;
    const date2 = b.volumeInfo.publishedDate;

    let comparison = 0;
    if (date1 > date2) {
        comparison = 1;
    } else if (date1 < date2) {
        comparison = -1;
    }
    return comparison;
}
const App = () => {
    const [input, setinput] = useState('')
    const [data, setdata] = useState([])
    const [time, settime] = useState('')


    const book = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyByQ8vAU2oi1-E7WPwe9fe1N9nDXG7HeVs`)
            .then(response => response.json())
            .then(res => setdata(res.items))
            .catch(e => {
                console.log(e);
            })
    }
    const sort = (e) => {
        settime(e.target.value);
        if (time === 'new')
            setdata(data.sort(compare))
        else setdata(data.sort(compare).reverse())
    }

    return (
        <>
            <header className='book-header'>
                <h2>Book Cards</h2>
                <p>Search for Books via API from the national library</p>
            </header>
            <div className='b-search-area'>
                <form className='b-form'>
                    <input className='b-input' placeholder='Search Books' type='text' onChange={(e) => setinput(e.target.value)} />
                    <button className='book-button' type="button" onClick={book}>Search</button>
                    <select className='book-select' value={time} onChange={(e) => sort(e)}>
                        <option >Sort</option>
                        <option value='new'>Newest</option>
                        <option value='old'>oldest</option>
                    </select>
                </form>

            </div>
            <div className="b-flex">
                {
                    data != null ?
                        data.map((item, e) => {
                            return <div key={e} className='book-card-container'>
                                <img className='book-img' src={item.volumeInfo.hasOwnProperty('imageLinks') === true ? item.volumeInfo.imageLinks.thumbnail : null} alt='Nothing to show' />
                                <h1>{item.title}</h1>
                                <h4>Author: {item.volumeInfo.authors}</h4>
                                <p>Published: {item.volumeInfo.publishedDate}</p>
                            </div>
                        }) : ''}
            </div>
        </>
    );
}

export default App;