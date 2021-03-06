import { BsPlus } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
const Header = ({ onAdd, showAddCard }) => {

    const addCardVisible = () => {
        return (
            <button className="btn" onClick={onAdd} style={{ backgroundColor: 'slategrey' }}>
                <FaMinus className="btn-icon-minus" />
            </button>);
    }
    const addCardNotVisible = () => {
        return (<button className="btn" onClick={onAdd} style={{ backgroundColor: 'steelblue' }}>
            <BsPlus className="btn-icon-plus" />
        </button>);
    }

    return (
        <div className="header-container">
            <h2>keep App</h2>
            { showAddCard && addCardVisible()}
            { !showAddCard && addCardNotVisible()}
        </div>
    )
}


export default Header
