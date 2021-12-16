import style from './Nav.module.css'
import Image from 'next/image'
import * as Icon from './Icon'
import Link from 'next/link'
function Nav() {
    return (
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
                            </div>

                            <div className={`${style.formsearch__root} d-none d-lg-block mx-4`}>
                                <div className={`${style.formsearch__form}`}>
                                    <input
                                        type="text"
                                        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                                    />
                                    <button className={style.formsearch__button}>
                                        <span className={style.search_icon}>
                                            <Image
                                                src={Icon.SearchIcon}
                                                alt="Search"
                                            />
                                        </span>
                                        Tìm Kiếm
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className={`${style.user_style_root} d-none d-lg-block`}>
                            <div className={style.user_style_item}>
                                <span className={style.profile_icon}>
                                    <Image
                                        src={Icon.ProfileIcon}
                                        alt="Profile"

                                    />
                                </span>
                                <span className={style.user_style_item_text}>
                                    <span className={style.user_style__no_wrap}>Đăng Nhập / Đăng Ký</span>
                                    <span className={style.account_label}>Tài khoản
                                        <span className={style.arrow_down_icon}><Image src={Icon.ArrowDownIcon} alt='ArrowDownIcon' /></span>

                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Nav