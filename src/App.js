import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import TodoApp from './pages/TodoApp';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import MovieWebsite from './pages/MovieWebsite';
import ExpenseTracker from './pages/ExpenseTracker';
import FakeStore from './pages/FakeStore';


function App() {
  return<BrowserRouter>
  <a href="/" className='btn btn-primary m-3'>Home</a>
  <a href="/todo-app" className='btn btn-primary m-3'>Todo App</a>
  <a href="/expense-tracker" className='btn btn-primary m-3'>Expense Tracker</a>
  <a href="/fake-store" className='btn btn-primary m-3'>Fake Store</a>
  <a href="/movie-website" className='btn btn-primary m-3'>Movie Website</a>
 
  <Routes> 
 
<Route path= "/" element ={<Home></Home>}/> 
<Route path= "/todo-app" element ={<TodoApp></TodoApp>}/> 
<Route path= "/expense-tracker" element ={<ExpenseTracker></ExpenseTracker>}/> 
<Route path= "/fake-store" element ={<FakeStore></FakeStore>}/> 
<Route path= "/movie-website" element ={<MovieWebsite></MovieWebsite>}/> 

  </Routes>
  <h1></h1>
   </BrowserRouter> 
}

export default App;
