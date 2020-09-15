import React, { Fragment } from 'react';
import getRequestModule from '../js/getRequest';

let shortListSize = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
let longListSize = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

let getShortList = function () {
  return getRequestModule(shortListSize)
  .then(data => console.log('shortListSize', data));
};

let getLongList = function () {
  return getRequestModule(longListSize)
  .then(data => console.log('longListSize', data));
};

const ChooseListSize = () => {
  return(
    <Fragment>
      <button onClick={getShortList}>Short data</button>
      <button onClick={getLongList}>Long data</button>
    </Fragment>
  )
};

export default ChooseListSize;