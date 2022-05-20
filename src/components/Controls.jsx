import { useState, useEffect } from 'react';
import Search from './Search';

function Controls(props) {

  const [search, setSearch] = useState('')

  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
    </div>
  );
}

export default Controls;
