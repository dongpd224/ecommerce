import style from '../styles/CardItem.module.css'
import Link from 'next/link'
import Image from 'next/image'
import EncodePrice from './untils/EncodePrice'
import StarRatingComponent from 'react-star-rating-component';
function CardItem({data , responsive}){
    return(
        <div className={`${style.card_item} ${responsive}`}>
            <Link href={`/item/${data.id}`}>
                <a>
                    <div className={style.thumbnail_wrapper}>
                        <Image
                            src={data.img_link}
                            alt={data.item_name}
                            width={200}
                            height={200} />
                    </div>
                    <div className={style.name}>
                        <span>{data.item_name}</span>
                    </div>
                    <StarRatingComponent starCount={5} value={data.stars}/>
                    <div className={`${style.price_discount} "d-flex align-items-center"`}>
                        <div className={`${style.price_discount__price}`}>{EncodePrice(data.discount_price)} đ</div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
export default CardItem