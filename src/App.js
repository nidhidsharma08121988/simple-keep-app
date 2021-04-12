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
      reminder: false,
      pinned: false,
    },
    {
      id: 2,
      data: {
        title: 'Remaining work',
        text: 'do following: sell electronic, buy clothes ',
      },
      reminder: false,
      pinned: false,
    },
    {
      id: 3,
      data: {
        title: 'bank',
        text: 'close account, hdfc credit card',
      },
      reminder: false,
      pinned: false,
    },
    {
      id: 4,
      data: {
        title: 'home',
        text: 'cook, bake, medicine, study',
      },
      reminder: false,
      pinned: false,
    },
    {
      id: 5,
      data: {
        title: 'office',
        text: 'react, javascript, css',
      },
      reminder: false,
      pinned: false,
    },
  ]);

  const [showAddCard, setShowAddCard] = useState(false);
  //delete card
  const deleteCard = (id) => {
    setKeepStore(keepStore.filter((keepCard) => keepCard.id !== id));
  }

  return (
    <div className="container-all">
      <Header onAdd={() => { setShowAddCard(!showAddCard) }} showAddCard={showAddCard} />
      {showAddCard && <AddCard />}
      <KeepCards keepStore={keepStore} onDelete={deleteCard} />
    </div>
  );
}

export default App;
