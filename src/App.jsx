import React , {useState} from 'react'
import './App.css'
import AI from './ai.png'
import Nav from './comp/nav'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';

function App() {
const [color,setcolor] = useState('red') ; 
const [name1,setName] = useState('')




let name = "ahmad dheajkfgkshduh"
function abc() {
  alert('hello')
}

  return (



<div className='ab' style={{backgroundColor:color}}>
<button onClick={()=>setcolor("black")}>black</button>
<button onClick={()=>setcolor("white")}>orange</button>

<button onClick={()=>setcolor('blue')}>blue</button>

<br/>

<TextField id="outlined-basic" value={name1} onChange={(e)=>setName(e.target.value)} label="Email" variant="outlined" />

<TextField id="outlined-basic" label="Namee" variant="outlined" />
<Button variant="contained" color='success'><CallIcon /> </Button>


  <Nav />
  <Nav /> <Nav /> <Nav /> <Nav /> <Nav /> <Nav /> <Nav /> <Nav />
  <h1>{name}</h1>
     <button onClick={abc}>click me</button>
      <h1 className='ab'>hi ahmad</h1>
      <p className='ab'>hello world</p>
      <img src={AI} alt='AI' width={55} height={44} />
    </div>
  )
}

export default App