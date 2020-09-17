import React, { Fragment, useContext } from 'react';
import getRequestModule from 'js/getRequest';
import TableContext from 'tableContext';

let shortListSize = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
let longListSize = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

let makeState = (data) => {
  let state = {
    contacts:data,
    fullInfo:null   
  };
  if (data.length > 10) {
    state.paginator = {
      length:Math.ceil(data.length/10),
      pageNow:1
    }
  } else {state.paginator = null};
  //sort
  return state
};

const ChooseListSize = () => {
  const {setTableState} = useContext(TableContext);

  let getShortList = function () {
    return getRequestModule(shortListSize)
    .then(data => {
      setTableState(makeState(data));
      });
  };
  
  let getLongList = function () {
    return getRequestModule(longListSize)
    .then(data => {
      setTableState(makeState(data));
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