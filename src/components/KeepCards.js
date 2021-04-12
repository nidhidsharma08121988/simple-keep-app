import KeepCard from "./KeepCard"

const KeepCards = ({ keepStore, onDelete }) => {
    return (
        <div className="keep-cards-container">
            {keepStore.map((keepItem) => <KeepCard keepItem={keepItem} onDelete={onDelete} />)}
        </div>
    )
}

export default KeepCards
