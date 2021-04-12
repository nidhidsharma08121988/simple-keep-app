const AddCard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className="add-card-form" onClick={handleSubmit} >
            <input className="form-card-title" type='text' placeholder='Title' />
            <textarea className='form-card-body' aria-multiline="true" placeholder="Take a note...">
            </textarea>
            <input type="submit" value="Add Card" className=" btn btn-submit" />
        </form>
    )
}

export default AddCard
