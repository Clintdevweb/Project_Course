import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

export default function PaginationPages() {
    return (
        <>
            <ReactPaginate
                nextLabel="Sau >"
                pageRangeDisplayed={3}
                pageCount={50}
                previousLabel="< Trước"
                pageClassName="page-item"
                pageLinkClassName="pageLinkPages"
                previousClassName="page-item"
                previousLinkClassName="pageLinkPages"
                nextClassName="page-item"
                nextLinkClassName="pageLinkPages"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="pageLinkPages"
                containerClassName="paginationPages"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />

        </>
    )
}
