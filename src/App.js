import React, { useState } from 'react';
import ChooseListSize from 'components/ChooseListSize';
import ContactTable from 'components/ContactTable';
import TableContext from 'tableContext';
import Paginator from 'components/Paginator/Paginator';
import FullInfo from 'components/FullInfo';

function App() {
  const [tableState, setTableState] = useState({});
  
  return (
    <TableContext.Provider value={{ setTableState }}>
      <h1>Contact-book</h1>
      <ChooseListSize />
      <Paginator paginator={tableState.paginator} />
      <ContactTable state={tableState} />
      <FullInfo contactInfo={tableState.fullInfo} />      
    </TableContext.Provider>
  );
}

export default App;