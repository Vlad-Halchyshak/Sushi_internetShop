import React from 'react'
import cal_crab from '../assets/california_crab.jpg'
import classNames from 'classnames'
import Button from './button'
import { addToCart } from '../redux/reducers/cart'



function SushiItem({ id, name, imageUrl, price, types, size, isLoading, onClickSushi, addedCount }) {

  const typeName = ['with sause', 'without sause']
  const [activeType, setActiveType] = React.useState(types[0])

  const sizePieces = ['8 pieces', '16 pieces']
  const [sizes, setSizes] = React.useState(0)

 
  const addSushi = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: sizePieces[sizes],
      type: typeName[activeType]
    }
    
    onClickSushi(obj)
  }
  const onChangeActive = (index) => {
    setActiveType(index)
  }
  const onSelectSizes = (index) => {
    setSizes(index)
  }



  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {
            typeName.map((type, index) =>
              <li key={type} onClick={() => onChangeActive(index)}
                className={classNames({
                  'active': activeType === index,
                  'disabled': !types.includes(index)
                })}>
                {type}
              </li>)
          }

        </ul>
        <ul>
          {sizePieces.map((size, index) =>
            <li key={size} onClick={() => onSelectSizes(index)}
              className={classNames({
                active: sizes === index,
                disabled: !size.includes(size)
              })}>
              {size} </li>)}

        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price}$</div>
        <Button onClick={addSushi} className="button--add" outline>
         
           {/*  <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            /> */}
          
          <span>add</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>

  )
}



export default SushiItem
