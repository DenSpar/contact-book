import React from 'react';
import './fullInfo.css';

const FullInfo = ({contactInfo}) => {
    if(contactInfo) {
      return(
        <div className="fullInfo_container">
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

  export default FullInfo;