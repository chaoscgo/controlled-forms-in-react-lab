import { useState } from 'react';

const Bookshelf = () => {
    
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  
  const [newBook, setNewBook] = useState({
      title: '',
      author: '',
    }
   );

const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, {
        title: newBook.title,
        author: newBook.author,
    }]);
    setNewBook({
        title: '',
        author: '',
    });
};

return (
 <div className="bookshelfDiv">
   <div className="formDiv">
     <h3>Add a Book</h3>
     <form onSubmit={handleSubmit}>
       <div className="title">
         <label htmlFor="title">Title: </label>
         <input 
           id="title"
           name="title"
           value={newBook.title}
           onChange={handleInputChange}
         />
       </div>
    <div className="author">
         <label htmlFor="author">Author: </label>
         <input
           id="author"
           name="author"
           value={newBook.author}
           onChange={handleInputChange}
         />
       </div>
       <button type="submit">Add Book</button>
     </form>
   </div>
   <div className="bookCardsDiv">
      {books.map((book, index) => (
          <div className="card" key={index}>
              <h1>{book.title}</h1>
              <h2> by {book.author}</h2>
          </div>
        ))}
      </div>
   </div>
);

};
export default Bookshelf;