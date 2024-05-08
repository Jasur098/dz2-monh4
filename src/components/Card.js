import { useState } from 'react';
import logo from '../logo.svg';
import Modal from './Modal';




function Card({image, title}) {
    const[open, setOpen] = useState(false)
    return (
        <>
                <div onClick={() => setOpen(true)} className='card'>
            <img src={image} />
            <h1>{title}</h1>
            <button>add to cart</button>
        </div>
        {open === true ?  <Modal setOpen={setOpen}  title={title}  image={image}/>  : ''     }
        </>

    )
}
export default Card




// const [sortedData, setSortedData] = useState([]);

// // Сортировка по алфавиту
// const sortAlphabetically = () => {
//     const sorted = [...sortedData].sort((a, b) => a.title.localeCompare(b.title));
//     setSortedData(sorted);
// };

// // Здесь вы можете заменить data на ваш реальный массив данных
// const data = [
//     { image: 'url1', title: 'Title A' },
//     { image: 'url2', title: 'Title B' },
//     { image: 'url3', title: 'Title C' },
//     // и т.д.
// ];

// useEffect(() => {
//     // При загрузке компонента, отсортируем данные по алфавиту
//     sortAlphabetically();
// }, []);