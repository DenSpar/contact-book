import React from 'react';

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
    if(!state.contacts) {
      return(
        <h2>выберите длинну списка контактов</h2>
      )
    } else {
      return(
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {showTenContacts(state, 10).map((contact, rowNum) => (
              <tr key={rowNum}>
                <td>{contact.id}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    };    
  };

  export default ContactTable;