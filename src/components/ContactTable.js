import React, { useState } from 'react';

let testArr = [
    {
      address:{
        city: "Lexington",
        state: "MS",
        streetAddress: "8430 Suspendisse Ct",
        zip: "34655"
      },
      description: "magna lacus hendrerit sagittis at id tellus massa non convallis placerat tincidunt sollicitudin sed quis rutrum non lorem consequat nec at fringilla fringilla mi mattis etiam risus massa mi amet eros tempor",
      email: "SStart@molestie.net",
      firstName: "Jane",
      id: 645,
      lastName: "Lompa",
      phone: "(884)089-3751"
    },
    {
      address: {
        city: "Shawnee",
        state: "NY",
        streetAddress: "6592 Lorem Rd",
        zip: "35082"
      },
      description: "et porttitor vitae sollicitudin sed facilisis quis morbi libero dolor tortor ipsum vitae consectetur velit augue magna malesuada pharetra velit velit mi placerat tempor rutrum vitae mattis mattis eget nullam convallis donec",
      email: "KBalulis@et.ly",
      firstName: "Hilda",
      id: 580,
      lastName: "Belisario",
      phone: "(962)062-3948"
    },
    {
      address: {
        city: "Hazel Park",
        state: "OH",
        streetAddress: "4235 Sed Ct",
        zip: "41931"
      },
      description: "lorem amet mattis nec risus mattis placerat hendrerit tortor lectus tellus ipsum dolor ac quis ante elementum magna tellus tincidunt orci nunc ac quis augue magna nullam placerat odio at sit at",
      email: "SGiera@molestie.ly",
      firstName: "Clint",
      id: 603,
      lastName: "Kyger",
      phone: "(162)511-8928"
    },
    {
      address: {
        city: "Lynchburg",
        state: "ME",
        streetAddress: "2163 Sapien Dr",
        zip: "28339"
      },
      description: "pretium etiam tortor amet vitae odio vitae aliquam pulvinar adipiscing amet molestie dolor lacus curabitur at vel ac adipiscing ipsum tortor at id augue facilisis neque morbi ac augue lacus consectetur vestibulum",
      email: "HBaligian@dolor.com",
      firstName: "Vasilis",
      id: 216,
      lastName: "Amick",
      phone: "(890)163-3169"
    },
    {
      address: {
        city: "Vacaville",
        state: "KS",
        streetAddress: "1057 Orci Ct",
        zip: "44718"
      },
      description: "morbi ipsum pulvinar tellus lacus nunc amet ante vestibulum molestie ipsum nunc tincidunt mattis suspendisse lacus placerat nec hendrerit tortor tortor malesuada odio sed porta pulvinar at risus curabitur vestibulum massa rutrum",
      email: "NWillman@et.io",
      firstName: "Salomon",
      id: 20,
      lastName: "Hodgin",
      phone: "(824)319-5308"
    }
  ]
  
  const ContactTable = () => {
    const [tableState, setTableState] = useState(testArr);
  
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
          {tableState.map((contact, rowNum) => (
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

  export default ContactTable;