import { FaTrashAlt } from 'react-icons/fa';
const KeepCard = ({ keepItem, onDelete }) => {
    return (
        <div className="keep-card">
            <h2>{keepItem.data.title}</h2>
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
