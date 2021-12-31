import style from '../styles/CardItem.module.css'
import Link from 'next/link'
import Image from 'next/image'

function CardItem({data , responsive}){
    return(
        <div className={`${style.card_item} ${responsive}`}>
            <Link href='/'>
                <a>
                    <div className={style.thumbnail_wrapper}>
                        <Image
                            src={data.img_link}
                            alt="Img"
                            width={200}
                            height={200} />
                    </div>
                    <div className={style.name}>
                        <span>{data.name}</span>
                    </div>
                    <div className={`${style.price_discount} "d-flex align-items-center"`}>
                        <div className={`${style.price_discount__price}`}>{data.price_discount}</div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
export default CardItem