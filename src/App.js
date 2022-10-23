import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

function App() {
  const getNews =() =>{
    Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=da5e11e4f5c14c1aac34f67d00097d8c&q=india")
    .then((response)=>{
      console.log(response)
    })
  }
  return (
    <>
    <div>
      <button className='App' onClick={getNews}>GET NEWS</button>
    </div>
    </>
  );
}

export default App;
