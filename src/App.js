import { useState } from 'react';
import AddCard from './components/AddCard';
import Header from './components/Header';
import KeepCards from './components/KeepCards';

function App() {
  const [keepStore, setKeepStore] = useState([
    {
      id: 1,
      data: {
        title: 'learning Tasks',
        text: 'Learn following: react, redux, graphQL',
      },
      pinned: false,
    },
    {
      id: 2,
      data: {
        title: 'Remaining work',
        text: 'do following: sell electronic, buy clothes ',
      },
      pinned: true,
    },
    {
      id: 3,
      data: {
        title: 'bank',
        text: 'close account, hdfc credit card',
      },
      pinned: false,
    },
    {
      id: 4,
      data: {
        title: 'home',
        text: 'cook, bake, medicine, study',
      },
      pinned: true,
    },
    {
      id: 5,
      data: {
        title: 'office',
        text: 'react, javascript, css',
      },
      pinned: false,
    },
  ]);

  const [showAddCard, setShowAddCard] = useState(false);

  //delete card
  const deleteCard = (id) => {
    setKeepStore(keepStore.filter((keepCard) => keepCard.id !== id));
  }

  //add card
  const addCard = (card) => {
    setKeepStore([...keepStore, card]);
  }

  //toggle pin
  const togglePin = (id) => {
    let card = keepStore.filter(card => card.id === id);
    let updatedCard = { ...card[0], pinned: !card[0].pinned };
    setKeepStore([...keepStore.filter(card => card.id !== id), updatedCard]);
  }

  return (
    <div className="container-all">
      <Header onAdd={() => { setShowAddCard(!showAddCard) }} showAddCard={showAddCard} />
      {showAddCard && <AddCard onAddCard={addCard} />}
      <KeepCards keepStore={keepStore} onDelete={deleteCard} onTogglePin={togglePin} />
    </div>
  );
}

export default App;
