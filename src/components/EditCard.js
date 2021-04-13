import { useState } from 'react'
const EditCard = ({ card, onUpdate, onHide }) => {
    const [text, setText] = useState(card.data.text);
    const [title, setTitle] = useState(card.data.title);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title && !text) {
            alert('Discarding empty note...');
            return
        }

        const updtCard = {
            ...card,
            data: {
                title: title,
                text: text
            }
        }

        onUpdate(updtCard);
        onHide();

    }
    const handleCancel = () => {
        if (!title && !text) {
            alert('Discarding empty note...');
            return
        }
        const updtCard = { ...card };
        onUpdate(updtCard);
        onHide();
    }
    return (
        <form className='edit-card-form' onSubmit={handleSubmit}>
            <input className='form-card-title' placeholder='Title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className='form-card-body' placeholder='Take a note...' aria-multiline="true" value={text} onChange={(e) => setText(e.target.value)} />
            <input className=" btn btn-submit" type='submit' value='Save' />
            <input className=" btn btn-cancel" type='button' value='Cancel' onClick={handleCancel} />
        </form>
    )
}

export default EditCard
