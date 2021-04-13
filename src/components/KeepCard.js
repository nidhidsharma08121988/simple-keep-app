import { FaTrashAlt } from 'react-icons/fa'
import { BiPin } from 'react-icons/bi'
const KeepCard = ({ keepItem, onDelete, onTogglePin }) => {
    const pinStyle = keepItem.pinned ? { cursor: 'pointer', color: 'black' } : { cursor: 'pointer', color: 'lightgrey' };
    return (
        <div className="keep-card">
            <div className="keep-card-head">
                <h2>{keepItem.data.title}</h2>
                <BiPin onClick={() => onTogglePin(keepItem.id)} style={pinStyle} />
            </div>
            <div className="keep-card-body">
                <h4>{keepItem.data.text}</h4>
            </div>
            <div className="keep-card-footer">
                <FaTrashAlt style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(keepItem.id)} />
            </div>
        </div>
    )
}

export default KeepCard
