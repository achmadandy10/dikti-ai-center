import { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { PaginationContainer, PaginationItem, PaginationList } from "./Pagination.elements"

interface Props {
    postsPerPages: number
    totalPosts: number
    paginate: Function
}

const Pagination = ({ postsPerPages, totalPosts, paginate }: Props) => {
    const [postTotal] = useState(totalPosts)
    const [pagesPerPosts] = useState(postsPerPages)
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState([])
    
    const pageNumbers: any = []

    for (let i = 1; i <= Math.ceil(postTotal / pagesPerPosts); i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        const mountedPaginate = () => {

            const pageNumbers: any = []

            for (let i = 1; i <= Math.ceil(postTotal / pagesPerPosts); i++) {
                pageNumbers.push(i)
            }
            let breakOfPage: any = [...pageNumbers]
    
            const breakPoint = 0
            const breakPointLeft = -1
            const breakPointRight = -2
    
            if (pageNumbers.length < 9) {
                breakOfPage = pageNumbers
            } else if (page >= 1 && page <= 3) {
                breakOfPage = [1, 2, 3, 4, breakPoint, pageNumbers.length]
            } else if ( page === 4 ) {
                const sliced = pageNumbers.slice(0, 5)
                breakOfPage = [...sliced, breakPoint,pageNumbers.length]
            } else if ( page > 4 && page < pageNumbers.length - 2 ) {
                const sliced1 = pageNumbers.slice(page - 2, page)
                const sliced2 = pageNumbers.slice(page, page + 1)
                breakOfPage = [1, breakPointLeft, ...sliced1, ...sliced2, breakPointRight,pageNumbers.length]
            } else if (page > pageNumbers.length - 3) {
                const sliced = pageNumbers.slice(pageNumbers.length - 4)
                breakOfPage = [1, breakPointLeft, ...sliced]
            }
    
            setPages(breakOfPage)
        }

        mountedPaginate()
    }, [page, postTotal, pagesPerPosts])

    const handleCLick = (i: number) => {
        setPage(i)
        paginate(i)
    }

    const prevClick = () => {
        if (page !== 1) {
            paginate(page - 1)
            setPage(page - 1)
        }
    } 

    const nextClick = () => {
        if (page !== pageNumbers.length) {
            paginate(page + 1)
            setPage(page + 1)
        }
    }

    return (
        <PaginationContainer>
            <PaginationList>
                <PaginationItem onClick={ () => handleCLick(1) }>
                    Awal
                </PaginationItem>
                <PaginationItem onClick={ () => prevClick() }>
                    <FaChevronLeft/>
                </PaginationItem>
                { pages.map((p, idx) => {
                    if (p === -1) {
                        return (
                            <PaginationItem 
                                key={ idx }
                                onClick={ () => handleCLick(pages[2] - 2) }
                                className={ p === page ? "active" : "" }
                            >
                                ...
                            </PaginationItem>
                        )
                    }
                    else if (p === -2) {
                        return (
                            <PaginationItem 
                                key={ idx }
                                onClick={ () => handleCLick(pages[4] + 2) }
                                className={ p === page ? "active" : "" }
                            >
                                ...
                            </PaginationItem>
                        )
                    }
                    else if (p === 0) {
                        return (
                            <PaginationItem 
                                key={ idx }
                                onClick={ () => handleCLick(pages[pages.length - 3] + 1) }
                                className={ p === page ? "active" : "" }
                            >
                                ...
                            </PaginationItem>
                        )
                    }
                    else {
                        return (
                            <PaginationItem 
                                key={ idx }
                                onClick={ () => handleCLick(p) }
                                className={ p === page ? "active" : "" }
                            >
                                { p }
                            </PaginationItem>
                        )
                    }
                }) }
                <PaginationItem onClick={ () => nextClick() }>
                    <FaChevronRight/>
                </PaginationItem>
                <PaginationItem onClick={ () => handleCLick(pageNumbers.length) }>
                    Akhir
                </PaginationItem>
            </PaginationList>
        </PaginationContainer>
    )
}

export default Pagination