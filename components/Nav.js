import style from '../styles/Nav.module.css'
import Image from 'next/image'
import * as Icon from './Icon'
import Link from 'next/link'
import CategoryTabBar from './CategoryTabBar'
import { connect } from "react-redux"
function Nav(props) {
    const cartData = props.cart
    const cartQuantity = cartData.cart.length
    return (
        <>
            <div className="container-fluid primary-background-color">
                <div className="container">
                    <div className={`${style.middle__wrap} row `}>
                        <div className='d-flex justify-content-start '>
                            <div className={`${style.middle__left_container} d-flex justify-content-center`}>
                                {/* Logo */}
                                <div className={`${style.logo__menu} mx-lg-4 mx-sm-auto align-sm-center`}>
                                    <div className={`${style.logo}`}>
                                        <Link
                                            href={"/"}
                                        >
                                            <a>
                                                <Image
                                                    src={Icon.Logo}
                                                    alt="logo"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={`${style.sub_logo}`}>
                                        <Link
                                            href={"https://tiki.vn/khuyen-mai/mien-phi-van-chuyen?src=header"}
                                        >
                                            <a>
                                                <Image
                                                    src={Icon.FreeshipIcon}
                                                    alt="Freeship"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div>

                                </div>
                                <div className={`${style.formsearch__root} d-none d-lg-block mx-4`}>
                                    <div className={`${style.formsearch__form}`}>
                                        <input
                                            type="text"
                                            placeholder="T??m s???n ph???m, danh m???c hay th????ng hi???u mong mu???n ..."
                                        />
                                        <button className={style.formsearch__button}>
                                            <span className={style.search_icon}>
                                                <Image
                                                    src={Icon.SearchIcon}
                                                    alt="Search"
                                                />
                                            </span>
                                            T??m Ki???m
                                        </button>
                                    </div>
                                    <div className={`${style.formsearch__keyword}`}>
                                        <ul className={`${style.formsearch__list}`}>

                                            <li>
                                                <a href="">t???t c??? th???t rau c??? </a>
                                            </li>

                                            <li>
                                                <a href="">th???t</a>
                                            </li> <li>
                                                <a href="">h??ng ????ng l???nh </a>
                                            </li> <li>
                                                <a href="">tr??i c??y</a>
                                            </li> <li>
                                                <a href="">h???i s???n</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.user_style_root} d-flex d-none d-lg-block`}>
                                <div className={style.user_style_item}>
                                    <span className={style.profile_icon}>
                                        <Image
                                            src={Icon.ProfileIcon}
                                            alt="Profile"
                                        />
                                    </span>
                                    <span className={style.user_style_item_text}>
                                        <span className={style.user_style__no_wrap}>????ng Nh???p / ????ng K??</span>
                                        <span className={style.account_label}>T??i kho???n
                                            <span className={style.arrow_down_icon}>
                                                <Image
                                                    src={Icon.ArrowDownIcon}
                                                    alt='ArrowDownIcon' />
                                            </span>
                                        </span>
                                    </span>
                                </div>

                            </div>
                            <div className={`${style.user_style__cart_item}`}>
                                <Link href={`/checkout`}>
                                    <a className={`${style.user_style__cart_item_inner}`}>
                                        <span>
                                            <span className={style.user_style__cart_icon}>
                                                <Image
                                                    src={Icon.CartIcon}
                                                    alt="Card"
                                                    width={36}
                                                    height={36}
                                                />
                                                <span className={`${style.user_style__cart_quantity}`}>
                                                    {cartQuantity > 0 ? cartQuantity : 0}
                                                </span>
                                            </span>

                                        </span>
                                        <span>
                                            Gi??? h??ng
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <CategoryTabBar />
        </>
    )
}
const mapStateToProps = state => ({
    cart: state.cartState
})
export default connect(mapStateToProps)(Nav)