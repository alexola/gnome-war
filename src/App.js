import React, {useState, useEffect} from 'react';
import  { getAllGnome, getGnome } from './services/gnome';
import Card from './components/Card';
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
      await loadingGnome(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingGnome = async (data) => {
    let _gnomeData = await Promise.all(data.map(async gnome => {
      let gnomeRecord = await getGnome(gnome.url);
      return gnomeRecord
    }))


    setGnomeData(_gnomeData);
  };
  return (
    <div>
      { loading ? <h1>Loading...</h1> : (
        <div className="grid-container">
          {gnomeData.map((gnome, i) => {
            return <Card key={i} gnome={gnome} />
          })}
        </div>
      )}
    </div>
  );
}

export default App;
