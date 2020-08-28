import React  from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(function ListCategories({activeCategory, items, onClickCategory }) {
  

  

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>All</li>
        {items.map((name, i) => <li
          className={activeCategory === i ? 'active' : ''}
          key={name}
          onClick={() => onClickCategory(i)}>{name}</li>)}

      </ul>
    </div>
  )
})
Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func
}
Categories.defaultProps = {activeCategory: null, items: []}
export default Categories
