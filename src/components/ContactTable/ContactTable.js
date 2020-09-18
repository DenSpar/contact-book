import React, {useContext} from 'react';
import TableContext from 'tableContext';
import sortContacts from 'js/sortContacts';
import './contactTable.css';

let headRowArr = ['id', 'firstName', 'lastName', 'email', 'phone'];
const HeadRow = ({sorted}) => {
  const {setTableState} = useContext(TableContext);
  let sortHandler = (colName) => {
    if (sorted.by !== colName || sorted.how === 'decr') {
      sorted = {
        by:colName,
        how:'incr'
      };
    } else {sorted.how = 'decr'};
    setTableState(prevState => ({
      contacts:sortContacts(prevState.contacts,sorted),
      paginator:{
          pageNow:1,
          length:prevState.paginator.length
      },
      fullInfo: null,
      sort: sorted
    }))
  };

  return(
    <thead>
      <tr>
        {headRowArr.map((srcColName, colNum) => {
          let newColName = srcColName;
          if (sorted.by === srcColName) {
            if (sorted.how === 'incr') {
              newColName += ' ▲';
            } else {newColName += ' ▼'};
          };
          return(
          <th onClick={() => sortHandler(srcColName)} 
          key={colNum} className='table_cell'>
            {newColName}
            </th>
        )})}
      </tr>
    </thead>
  )
};

let showTenContacts = (srcState, num) => {
  let resArr = [];
  let start = srcState.paginator.pageNow*num - num;
  let stop = 0;
  if (srcState.contacts.length - start - 10 < 0) {
    stop = srcState.contacts.length - start
  } else {stop = 10};
  for (let i = 0; i < stop; i++) {
    resArr.push(srcState.contacts[start+i])
  };
  return resArr
};

const ContactTable = ({state}) => {
    const {setTableState} = useContext(TableContext);

    let contactClickHandler = (cont) => {
      setTableState(prevState => ({
        ...prevState,
        fullInfo:cont
      }));
    };

    if(!state.contacts) {
      return(
        <h2>выберите длинну списка контактов</h2>
      )
    } else {
      return(
        <table className='table'>
          <HeadRow sorted={state.sort} />
          <tbody>
            {showTenContacts(state, 10).map((contact, rowNum) => (
              <tr key={rowNum} onClick={() => contactClickHandler(contact)}>
                <td className='table_cell'>{contact.id}</td>
                <td className='table_cell'>{contact.firstName}</td>
                <td className='table_cell'>{contact.lastName}</td>
                <td className='table_cell'>{contact.email}</td>
                <td className='table_cell'>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    };    
  };

  export default ContactTable;