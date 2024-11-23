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
       <div>
         <label htmlFor="title">Title: </label>
         <input 
           id="title"
           name="title"
           value={newBook.title}
           onChange={handleInputChange}
         />
       </div>
       <div>
         <label htmlFor="author">Author: </label>
         <input
           id="author"
           name="author"
           value={newBook.author}
           onChange={handleInputChange}
         />
       </div>
       <button type="submit">Submit</button>
     </form>
   </div>
   <div className="bookCardsDiv">{/* Book cards will display here */}</div>
 </div>
);

};
export default Bookshelf;