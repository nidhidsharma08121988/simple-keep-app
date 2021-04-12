import { BsPlus } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
const Header = ({ onAdd, showAddCard }) => {

    const addCardVisible = () => {
        return (
            <button className="btn" onClick={onAdd} style={{ backgroundColor: 'maroon', fontSize: '0.8em' }}>
                <FaMinus className="btn-icon" />
            </button>);
    }
    const addCardNotVisible = () => {
        return (<button className="btn" onClick={onAdd} style={{ backgroundColor: 'steelblue' }}>
            <BsPlus className="btn-icon" />
        </button>);
    }

    return (
        <div className="header-container">
            <h1>keep App</h1>
            { showAddCard && addCardVisible()}
            { !showAddCard && addCardNotVisible()}
        </div>
    )
}


export default Header
