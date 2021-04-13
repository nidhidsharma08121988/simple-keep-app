import { useState, useEffect } from 'react';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';
import Header from './components/Header';
import KeepCards from './components/KeepCards';

function App() {
  const [keepStore, setKeepStore] = useState([]);
  const [showAddCard, setShowAddCard] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);
  const [editThisCard, setEditThisCard] = useState({});
  //API call to JSON server
  const fetchDataFromServer = async () => {
    const res = await fetch('http://localhost:5000/keepStore')
    const data = await res.json();
    return data;
  }

  //on page load display data from server
  useEffect(() => {
    const getKeepData = async () => {
      const store = await fetchDataFromServer();
      setKeepStore(store);
    }
    getKeepData();
  }, [])
  //delete card
  const deleteCard = async (id) => {
    await fetch(`http://localhost:5000/keepStore/${id}`, {
      method: 'DELETE'
    });
    setKeepStore(keepStore.filter((keepCard) => keepCard.id !== id));
  }

  //add card
  const addCard = async (carddata) => {
    const card = {
      data: carddata,
      pinned: false
    }
    const res = await fetch('http://localhost:5000/keepStore', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(card)
    })
    const data = await res.json();
    console.log(data);
    setKeepStore([...keepStore, data]);

  }

  //toggle pin
  const togglePin = async (id) => {
    const card = keepStore.filter(card => card.id === id)[0];
    const updatedCard = { ...card, pinned: !card.pinned };
    const res = await fetch(`http://localhost:5000/keepStore/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedCard)
    });
    const data = await res.json();
    setKeepStore([...keepStore.filter(card => card.id !== id), data]);
  }

  //edit card
  const editCard = (id) => {
    const card = keepStore.filter((card) => card.id === id)[0];
    editKeepStore(id);
    setEditThisCard(card);
    setShowEditCard(true);
  }

  //edit keep store
  const editKeepStore = (id) => {
    setKeepStore(keepStore.filter(card => card.id !== id));
  }

  //update keep store
  const addUpdatedCard = (card) => {
    setKeepStore([...keepStore, card]);
  }

  //hide edit card
  const hideEditCard = () => {
    setShowEditCard(false);
  }

  return (
    <div className="container-all">
      <Header onAdd={() => { setShowAddCard(!showAddCard) }} showAddCard={showAddCard} />
      <div>
        {showAddCard && !showEditCard && <AddCard onAddCard={addCard} />}
      </div>
      <div>
        {showEditCard && <EditCard onHide={hideEditCard} onUpdate={addUpdatedCard} card={editThisCard} />}
      </div>
      <KeepCards keepStore={keepStore} onDelete={deleteCard} onTogglePin={togglePin} onEdit={editCard} />
    </div>
  );
}

export default App;
