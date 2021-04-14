import { FaTrashAlt } from 'react-icons/fa'
import { BiPin } from 'react-icons/bi'
const KeepCard = ({ keepItem, onDelete, onTogglePin, onEdit }) => {
    const pinStyle = keepItem.pinned === true ? { cursor: 'pointer', color: 'steelblue', width: '24px' } : { cursor: 'pointer', color: 'lightgrey', width: '20px' };
    const display = <div className="keep-card" onDoubleClick={() => onEdit(keepItem.id)}>
        <div className="keep-card-head">
            <h4>{keepItem.data ? keepItem.data.title : ''}</h4>
            <BiPin onClick={() => onTogglePin(keepItem.id)} style={pinStyle} />
        </div>
        <div className="keep-card-body">
            <p>{keepItem.data ? keepItem.data.text : ''}</p>
        </div>
        <div className="keep-card-footer">
            <FaTrashAlt style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(keepItem.id)} />
        </div>
    </div>;
    return display;
}

export default KeepCard
