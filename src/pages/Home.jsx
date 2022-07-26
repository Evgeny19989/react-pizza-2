import React from "react";
import {baseUrlApi} from "../const";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import {Pagination} from "../components/Pagination";
import {SearchContext} from '../App'

function Home() {

    const {searchValue, setSearchValue} = React.useContext(SearchContext)

    const [items, setItems] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [isLoading, setIsLoading] = React.useState(true)
    const [activeCategory, setActiveCategory] = React.useState(0)
    const [activeSort, setActiveSort] = React.useState({name: 'популярности (по убыванию)', sortProperty: 'rating'})

    let category = activeCategory === 0 ? '' : `category=${activeCategory}`
    let sortBy = activeSort.sortProperty.replace('-', '')
    let order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc'

    React.useEffect(() => {
        fetch(`${baseUrlApi}/items?page=${currentPage}&limit=4` + `${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => res.json())
            .then(json => {
                setItems(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [activeCategory, activeSort, currentPage])

    let pizzas = items.filter((obj) => {
        return obj.name.toLowerCase().includes(searchValue);

    })

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={activeCategory} setActiveCategory={(i) => setActiveCategory(i)}/>
                <Sort activeSort={activeSort} setActiveSort={(i) => setActiveSort(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) :
                    pizzas.map((obj, i) => {
                        return <PizzaBlock key={obj.id} {...obj}/>
                    })
                }
            </div>
            <Pagination onChangePage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}

export default Home;
