import { useState } from 'react'
const AddCard = ({ onAddCard }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title && !text) {
            alert('Discarding empty card...');
            return
        }
        let card = {
            id: Math.floor(Math.random() * 100) + 1,
            data: {
                title: title,
                text: text
            },
        }
        onAddCard(card);
        setTitle('');
        setText('');
    }
    return (
        <form className="add-card-form" onSubmit={handleSubmit} >
            <input className="form-card-title" type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className='form-card-body' aria-multiline="true" placeholder="Take a note..." value={text} onChange={(e) => setText(e.target.value)}>
            </textarea>
            <input className=" btn btn-submit" type="submit" value="Add Card" />
        </form>
    )
}

export default AddCard
