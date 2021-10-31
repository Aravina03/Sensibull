import react, { useState, useEffect } from 'react'
import './App.css';
import { readRemoteFile } from 'react-papaparse';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    readRemoteFile('https://prototype.sbulltech.com/api/v2/instruments', {
      complete: (results) => {
        setData(results.data);
      },
    });
  }, [])
  return (
    <div className="App">
      {data && data.map((item, index) => {
        return <table id="customers">
          <tr key={index}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <td>{item[3]}</td>
          </tr>
        </table>
      })
      }
    </div >
  );
}

export default App;