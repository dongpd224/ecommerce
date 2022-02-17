import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/checkout.module.css'
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())
function CartItem({id}) {
    const { data, error } = useSWR(`../api/items/${id}`, fetcher)

    if (error) return <div>Failed to load{console.log(error)}</div>
    if (!data) return <div>Loading...</div>
    return (
        <>
            <div className={style.row}>
                <div className={style.col_1}>
                    <div className={style.intended__images}>
                        <div className={style.checkbox}>
                            <input type="checkbox" />
                        </div>
                        <Link href={`/item/${id}`}>
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
                            <Link href={`/item/${id}`}>
                                <a className={style.intended__name}>{data.item_name}</a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CartItem