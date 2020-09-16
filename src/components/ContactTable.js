import React, {Fragment, useState} from 'react';

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

const FullInfo = ({contactInfo}) => {
  if(JSON.stringify(contactInfo)[2]) {
    return(
      <div>
        <div>
          <span>Выбран пользователь </span>
          <span><b>{contactInfo.firstName + " " + contactInfo.lastName}</b></span>
        </div>
        <div>
          <span>Описание: </span>
          <span><b>{contactInfo.description}</b></span>
        </div>
        <div>
          <span>Адрес проживания: </span>
          <span><b>{contactInfo.address.streetAddress}</b></span>
        </div>
        <div>
          <span>Город: </span>
          <span><b>{contactInfo.address.city}</b></span>
        </div>
        <div>
          <span>Провинция/штат: </span>
          <span><b>{contactInfo.address.state}</b></span>
        </div>
        <div>
          <span>Индекс: </span>
          <span><b>{contactInfo.address.zip}</b></span>
        </div>
      </div>
    )
  } else {return null};
};

  const ContactTable = ({mainState}) => {
    const [infoState, setInfoState] = useState({});

    let contactClickHandler = (cont) => {
      setInfoState(cont);
    };

    if(!mainState.contacts) {
      return(
        <h2>выберите длинну списка контактов</h2>
      )
    } else {
      return(
        <Fragment>
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
              {showTenContacts(mainState, 10).map((contact, rowNum) => (
                <tr key={rowNum} onClick={() => contactClickHandler(contact)}>
                  <td>{contact.id}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <FullInfo contactInfo={infoState}/>
        </Fragment>
      )
    };    
  };

  export default ContactTable;