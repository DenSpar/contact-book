import React, { Fragment, useContext } from 'react';
import getRequestModule from '../js/getRequest';
//
import TableContext from '../tableContext';

let shortListSize = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
let longListSize = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

const ChooseListSize = () => {
  const {setTableState} = useContext(TableContext);

  let getShortList = function () {
    return getRequestModule(shortListSize)
    .then(data => {
      setTableState(data);
      });
  };
  
  let getLongList = function () {
    return getRequestModule(longListSize)
    .then(data => {
      setTableState(data);
      });
  };

  return(
    <Fragment>
      <button onClick={getShortList}>короткий список</button>
      <button onClick={getLongList}>длинный список</button>
    </Fragment>
  )
};

export default ChooseListSize;