
import './App.css'
import Counter from './count';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {
 
  function handleClick(){
    alert('Majed')
  }

  const handleClick2 = () => {
    alert('jaan koi apni')
  }

  //if any perameter passed

  const addToFive = (number) =>{
    alert(number + 10)
  }
  return (
    <>
     
      <h2>React Core Concept Part 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={ () => {alert('clicked')}}>Click Me 3</button>

      {/* --------critical-------- */}

      <button onClick={() => addToFive(20)}>Click Four</button>
   
    </>
  )
}

export default App
