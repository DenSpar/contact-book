import React, { useContext } from 'react';
import getRequestModule from 'js/getRequest';
import TableContext from 'tableContext';
import sortContacts from 'js/sortContacts';
import './chooseListSize.css';

let shortListSize = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
let longListSize = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

let makeState = (data) => {
  let state = {
    fullInfo:null,
    sort:{
      by:'id',
      how:'incr'
    }
  };
  state.contacts = sortContacts(data, state.sort);
  if (data.length > 10) {
    state.paginator = {
      length:Math.ceil(data.length/10),
      pageNow:1
    }
  } else {state.paginator = null};
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
    <div className="chooseListSize_container">
      <button className="chooseListSize_container_btn" onClick={getShortList}>короткий список</button>
      <button className="chooseListSize_container_btn" onClick={getLongList}>длинный список</button>
    </div>
  )
};

export default ChooseListSize;