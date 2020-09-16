import React from 'react';

  const ContactTable = ({table}) => {
    if(table.length === 0) {
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
            {table.map((contact, rowNum) => (
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