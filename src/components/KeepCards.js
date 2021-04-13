import KeepCard from "./KeepCard"

const KeepCards = ({ keepStore, onDelete, onTogglePin }) => {
    const myKeepStorePinned = keepStore.filter(card => card.pinned);
    const myKeepStoreOthers = keepStore.filter(card => !card.pinned);
    return (
        <div className="keep-cards-container">
            {myKeepStorePinned.map((keepItem) => <KeepCard keepItem={keepItem} onDelete={onDelete} onTogglePin={onTogglePin} />)}
            {myKeepStoreOthers.map((keepItem) => <KeepCard keepItem={keepItem} onDelete={onDelete} onTogglePin={onTogglePin} />)}
        </div>
    )
}

export default KeepCards
