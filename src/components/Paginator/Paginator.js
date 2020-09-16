import React, { useContext } from 'react';
import './paginator.css';
import TableContext from 'tableContext';

let pageClasses = (page, pageNow) => {
    if (page === pageNow) {
        return "paginator_page activePage"
    } else {return "paginator_page"}
};

const Paginator = ({paginator}) => {
    const {setTableState} = useContext(TableContext);
    if (paginator) {
        
        let howManyPages = [];
        let clickHandler = (page) => {           
            setTableState(prevState => {
                let newState = {...prevState};
                newState.paginator.pageNow = page;
                return newState
            })
        };
        for (let i = 0; i < paginator.length; i++) {
            howManyPages.push(i+1)
        };
        return (
            <ul className="paginator">
                {howManyPages.map((page, pageNum) => (
                    <li className={pageClasses(page, paginator.pageNow)} 
                    key={pageNum} onClick={() => clickHandler(page)}>{page}</li>
                ))}
            </ul>
        )
    } else {return null}
};

export default Paginator;