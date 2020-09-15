import React, { Fragment } from 'react';
import ChooseListSize from './components/ChooseListSize';
import ContactTable from './components/ContactTable';

function App() {
  return (
    <Fragment>
      <h1>Contact-book</h1>
      <ChooseListSize />
      <ContactTable />
    </Fragment>
  );
}

export default App;