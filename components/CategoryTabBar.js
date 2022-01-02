import style from '../styles/CategoryTabBar.module.css'
import Link from 'next/link'

function CategoryTabBar() {
    return (
        <div className={`container-fluid ${style.category_wrapper}`}>
            <div className='container'>
                <ul className='d-flex'>
                    <li><Link href={'/'}><a className={`${style.category_item}`}>Thịt, rau củ</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item}`}>Bách Hóa</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item}`}>Nhà Cửa</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item}`}>Điện Tử</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item} d-none d-sm-block`}>Thiết Bị Số</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item} d-none d-md-block`}>Điện Thoại</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item} d-none d-md-block`}>{`Mẹ & Bé`}</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item} d-none d-lg-block`}>Làm Đẹp</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item} d-none d-lg-block`}>Gia Dụng</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item} d-none d-lg-block`}>Thời Trang Nữ</a></Link></li>
                    <li><Link href={'/'}><a className={`${style.category_item} d-none d-lg-block`}>Thời Trang Nam</a></Link></li>
                    {/* <li><Link href={'/'}><a className={style.category_item}>Giày Nữ</a></Link></li>
                    <li><Link href={'/'}><a className={style.category_item}>Túi Nữ</a></Link></li> */}
                </ul>
            </div>
        </div>
    )
}
export default CategoryTabBar