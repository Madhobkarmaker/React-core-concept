import React,{ useState, useEffect } from 'react';
import './App.css';

function App() {
  const products = [
    {name : 'Photoshop', price : '$90.50' },
    {name : 'Illustrator', price : '$50.02'},
    {name : 'PDF Reader', price :'$20'}

  ]
  const country = ['Bangladesh','India','Nepal','Maldivs','Japan','Tokyo']
  return (
    <div className="App">
      <header className="App-header">
        <p>i am a new react person</p>

       
        <ul>
        {
          country.map(desh => <li>{desh}</li>)
        }
        </ul>

        {/* <Product name = {products[0].name} price ={products[0].price}></Product>
        <Product name = {products[1].name} price ={products[1].price}></Product>
        <Product name = {products[2].name} price ={products[2].price}></Product> */}
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product> 
        <Product product = {products[2]}></Product>

        <Counter> </Counter>

        <Users></Users>
        
        <User  name = "Madhob" hobby = "playing cricket"></User>
        <User  name = "Sohag" hobby = "watching football"></User>
        <User  name = "Sompod" hobby = "gambling"></User>

        
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border : '1px solid gray',
    height : '200px',
    width : '200px',
    float : 'left',
    backgroundColor : 'lightgray',
    borderRadius : '5px',
    color : 'black',
    marginTop : '20px'
  }
  
  return (
    <div style = {productStyle}>
      <h2>{props.product.name} </h2>
      <h4>{props.product.price} </h4>
      <button>Buy Now</button>
    </div>
  )
}

function User(props){
  return (
    <div style ={{border : '3px solid red', margin : '10px',padding : '10px'}}>
      <h1> Name : {props.name} </h1>
      <p> Hobby : {props.hobby} </p>
    </div>
  )
}

function Counter(){
const [count,setCount] = useState(10);
function valueCount(){
  const value = count + 1;
  setCount(value);
}

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={valueCount}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  return (
    <div> 
      <h2>Dynamic users :{users.length}</h2>
      <ul>
      {
        users.map(user => <li>{user.name} - phone: {user.phone}</li>)
      }
      </ul>
    </div>
  )
}
export default App;
