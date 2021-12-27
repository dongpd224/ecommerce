import style from '../styles/CardItem.module.css'
import Link from 'next/link'
import Image from 'next/image'

function CardItem(props){
    return(
        <div className={`${style.card_item} ${props.responsive}`}>
            <Link href='/'>
                <a>
                    <div className={style.thumbnail_wrapper}>
                        <Image
                            src="https://salt.tikicdn.com/cache/w1200/ts/product/5b/8d/63/89780a394c7f879d285641d31b256041.jpg"
                            alt="Img"
                            width={200}
                            height={200} />
                    </div>
                    <div className={style.name}>
                        <span>Keo Dán Giày Nhiệt XIMO Trong Suốt Siêu Dính Dùng Không Tổn Thương Da XKDG06</span>
                    </div>
                    <div className={`${style.price_discount} "d-flex align-items-center"`}>
                        <div className={`${style.price_discount__price}`}>29.000đ</div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
export default CardItem