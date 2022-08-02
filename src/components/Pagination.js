import React from 'react'

const Pagination = ({nPages, currentPage, setCurrentPage}) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)


    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination  pagination-ul'>
                <li className="page-item">
                    <p className="page-link page-btn" onClick={prevPage}>Назад</p>
                </li>
                <div className="pages-links">
                    {pageNumbers.map(pgNumber => (
                        <li key={pgNumber}
                            className= {`page-item ${currentPage == pgNumber ? 'pages-link-active' : ''} pages-link `}
                            onClick={() => setCurrentPage(pgNumber)}>
                            {pgNumber}
                        </li>
                    ))}
                </div>

                <li className="page-item">
                    <p className="page-link page-btn" onClick={nextPage}>Вперед</p>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination