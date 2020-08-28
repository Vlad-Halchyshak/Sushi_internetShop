import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListCategories, SortPopUp } from '../components'
import SushiItem from '../components/sushiItem'
import {setCategory, setSortBy} from '../redux/reducers/filter'
import  { fetchSushi } from '../redux/reducers/sushi'
import Loading from '../components/loading'
import { addToCart } from '../redux/reducers/cart'

const categories = ["Salmon", "Eel fish", "Tuna", "Sesame"]
const sortedElements = [
  { name: 'popular', type: 'popular', order: 'desc' },
  { name: 'price', type: 'price', order: 'desc' },
  { name: 'alphabet', type: 'name', order: 'asc' }
]

function Home() {
  const items = useSelector(({ sushi }) => sushi.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoading = useSelector(({ sushi }) => sushi.isLoading)
  const {category, sortBy} = useSelector(({ filter }) => filter) 
  
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchSushi(sortBy, category))
    
  }, [category, sortBy]);

  const selectCategory = React.useCallback((i) => {
    dispatch(setCategory(i))
  }, [] );
  
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [] );
  
  const addSushiToCart = (obj) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: obj,
    })
  }
  
  return (
    
      <div className="container">
        <div className="content__top">
          <ListCategories activeCategory={category}
          onClickCategory={selectCategory}
          items={categories}
          />
        <SortPopUp activeSort={sortBy.type} items={sortedElements} onClickSort={onSelectSortType} />
        </div>

        <h2 className="content__title">All sushi</h2>
      <div className="content__items">
        {isLoading
          ? items.map((i) => <SushiItem onClickSushi={addSushiToCart}key={i.id} addedCount={cartItems[i.id] && cartItems[i.id].items.length} {...i} />)
          : Array(10).fill(0)
            .map((_, index) => <Loading />)}
          
            </div>
          </div>
        
      
    )
}

export default Home
