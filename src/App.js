import React, {useState, useEffect} from 'react';
import  { getAllGnome } from './services/gnome';
import './App.css';

function App() {
  const [gnomeData, setGnomeData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllGnome(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
    }
    fetchData();
  }, [])
  return (
    <div>
      { loading ? <h1>Loading...</h1> : (
        <h1>Data is fetched</h1>
      )}
    </div>
  );
}

export default App;
