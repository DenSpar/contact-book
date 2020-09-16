import React, { useState } from 'react';
import ChooseListSize from 'components/ChooseListSize';
import ContactTable from 'components/ContactTable';
import TableContext from 'tableContext';
import Paginator from 'components/Paginator/Paginator';

function App() {
  const [tableState, setTableState] = useState({});
  
  return (
    <TableContext.Provider value={{ setTableState }}>
      <h1>Contact-book</h1>
      <ChooseListSize />
      <ContactTable mainState={tableState}/>
      <Paginator paginator={tableState.paginator} />
    </TableContext.Provider>
  );
}

export default App;