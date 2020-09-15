import React, { Fragment } from 'react';
import ChooseListSize from './components/ChooseListSize';
//import getRequestModule from './js/getRequest';

function App() {
  return (
    <Fragment>
      <div>
        <h1>Contact-book</h1>
      </div>
      <ChooseListSize />
    </Fragment>
  );
}

export default App;