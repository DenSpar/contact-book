import React from 'react';
import './paginator.css';

let pageClasses = (page, pageNow) => {
    if (page === pageNow) {
        return "paginator_page activePage"
    } else {return "paginator_page"}
};

const Paginator = ({paginator}) => {
    if (paginator) {
        let howManyPages = [];
        for (let i = 0; i < paginator.length; i++) {
            howManyPages.push(i+1)
        };
        return (
            <ul className="paginator">
                {howManyPages.map((page, pageNum) => (
                    <li className={pageClasses(page, paginator.pageNow)} key={pageNum}>{page}</li>
                ))}
            </ul>
        )
    } else {return null}
};

export default Paginator;