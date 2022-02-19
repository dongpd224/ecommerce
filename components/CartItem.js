import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/checkout.module.css'
import useSWR from "swr"
import EncodePrice from './untils/EncodePrice'
import { useEffect, useState } from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
function CartItem({id ,quantity, cartData}) {
    const { data, error } = useSWR(`../api/items/${id}`, fetcher)
    if (error) return (<div>Failed to load{console.log(error)}</div>)
    if (!data) return (<div>Loading...</div>)
    const finalPrice = (price, quant) =>{
        const finalPrice = price * quant
        return finalPrice
    }
    cartData(data)
    return (
        <>
            <div className={style.row}>
                <div className={style.col_1}>
                    <div className={style.intended__images}>
                        {/* <div className={style.checkbox}>
                            <input type="checkbox" />
                        </div> */}
                        <Link href={`/item/${data.id}`}>
                            <div className={style.intended__img}>
                                <Image
                                    src={data.img_link}
                                    alt={data.item_name}
                                    width={78}
                                    height={78}
                                />
                            </div>
                        </Link>
                        <div className={style.intended__content}>
                            <Link href={`/item/${data.id}`}>
                                <a className={style.intended__name}>{data.item_name}</a>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className={style.col_2}>
                    <span className={style.intended__real_prices}>{EncodePrice(data.discount_price)} đ</span>
                </div>
                <div className={style.col_3}>{quantity}</div>
                <div className={style.col_4}>
                    <span className={style.intended__final_prices}>{EncodePrice(finalPrice(data.discount_price,quantity))} đ</span>
                </div>
            </div>
        </>
    )
}

export default CartItem