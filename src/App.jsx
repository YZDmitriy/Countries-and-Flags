import axios from 'axios';
import { useEffect, useState } from 'react';

import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import { ALL_COUNTRIES } from './config';

function App() {
  const [countries, setCountries] = useState([]);

  console.log(countries)
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(
      ({data}) => setCountries(data))
    )
  }, []);

  return (
    <>
      <Header />

      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
