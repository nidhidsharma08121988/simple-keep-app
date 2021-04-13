import KeepCard from "./KeepCard"

const KeepCards = ({ keepStore, onDelete, onTogglePin, onEdit }) => {
    const myKeepStorePinned = keepStore.filter(card => card.pinned);
    const myKeepStoreOthers = keepStore.filter(card => !card.pinned);
    return (
        <div className="keep-cards-container">
            <div className="keep-cards-pinned">
                {myKeepStorePinned.map((keepItem) => <KeepCard keepItem={keepItem} onDelete={onDelete} onEdit={onEdit} onTogglePin={onTogglePin} />)}
            </div>
            <div className="keep-cards-unpinned">
                {myKeepStoreOthers.map((keepItem) => <KeepCard keepItem={keepItem} onDelete={onDelete} onEdit={onEdit} onTogglePin={onTogglePin} />)}
            </div>
        </div>
    )
}

export default KeepCards
