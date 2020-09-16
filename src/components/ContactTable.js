import React from 'react';

let showTenContacts = (srcState, num) => {
  let resArr = [];
  let start = srcState.paginator.pageNow*num - num;
  for (let i = 0; i < num; i++) {
    console.log(start+i, srcState.contacts[start+i]);
    resArr.push(srcState.contacts[start+i])
  };
  console.log('resArr: ', resArr);
  return resArr
};

  const ContactTable = ({state}) => {
    if(!state.contacts) {
      return(
        <h2>выберите длинну списка контактов</h2>
      )
    } else {
      console.log(state.contacts, state.paginator.pageNow);
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