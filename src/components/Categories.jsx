import React from 'react'

function Categories({activeCategory, setActiveCategory}) {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">

            <ul>
                {
                    categories.map((el, i) => {
                        return <li key={el} onClick={() => {
                            setActiveCategory(i)
                        }} className={activeCategory === i ? 'active' : ''}>{el}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Categories;
