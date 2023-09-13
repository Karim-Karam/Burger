"use client";
import React from 'react'
import Image  from 'next/image';
import assetr2 from '../images/Asset2.png'
import assetr1 from '../images/Asset1.png'
const OrderNowDiv = () => {
  return (
    <div className="order-div">
      <div className='twoburger-img-div' >
        <Image  src={assetr2}   layout='responsive' objectFit='cover'  objectPosition='center' alt="Picture of the author" />
      </div>
      <div className='offer-img-div'>
        <div className="offer-text">
        <Image  src={assetr1}  layout='responsive' objectFit='cover'  objectPosition='center' alt="Picture of the author" />
        <div className='offer-text-cont' style={{display:"flex" , flexDirection :"column"}}>
            <div className='offer-title'><span >2 for $10 breakfast deal</span></div>
            <div className='dots'>. . .  . </div>
            <div className='under-dots'><span > 2 for $10 breakfast deal 2 for $10 breakfast deal 2 for $10 breakfast deal</span></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default OrderNowDiv
