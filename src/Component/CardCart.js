import React from 'react'

function CardCart({id,title,description,price,itemAmount,img,quantity,removeItem,IncrementItem,DecrementItem}) {
    
    return (
        <>
                <div className='items_info'>
                    <div className="product_img">
                        <img src={img} alt="iamge" />
                    </div>

                    <div className="title">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>

                    <div className="add-minus-quantity">
                        <i className="fas fa-minus minus" onClick={()=>DecrementItem(id)}></i>
                        <input type="text" placeholder={quantity}  />
                        <i className="fas fa-plus add" onClick={()=>IncrementItem(id)} ></i>
                    </div>

                    <div className="price">
                        <h3>${itemAmount}</h3>
                    </div>

                    <div className="remove_item">
                        <i onClick={()=>removeItem(id)}
                            className="fas fa-trash-alt remove"></i>
                    </div>
                </div>
                <hr />

        </>
    )
}

export default CardCart