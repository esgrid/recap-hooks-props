import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Cards';


function App() {

  const [cards, setCards] = useState(0)

  // useEffect(function, [dependencies])
  useEffect(() => {
    document.title = `The Ultimate ${cards} Card Page`
  }, [cards])

  function handleClick(moreOrLess){
    if (moreOrLess === '+'){
      // cards++
      setCards(cards + 1)
    } else {
      if (cards > 0){
        // cards--
        setCards(cards - 1)
      }
    }
  }

  return (
    <div className="App">
      <button onClick={() => handleClick('-')}>👎</button>
      <button onClick={() => handleClick('+')}>👍</button>
      {/* Calling the component Card with a prop
       is *like* saying this: Cards({cards}) */}
      {/* <Cards cards={cards}/> */}
      {cards > 0 ? (<Cards cards={cards}/>) : (<></>)}
    </div>
  );
}

export default App;
