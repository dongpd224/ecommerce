import style from './Nav.module.css'
import Image from 'next/image'
import * as Icon from './Icon'
import Link from 'next/link'
function Nav() {
    return (
        <div className="container-fluid primary-background-color">
            <div className="container">
                <div className={style.middle__wrap}>
                    <div className={style.middle__left_container}>
                        <div className={style.logo__menu}>
                            <div className={style.logo}>
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

                        <div className={style.formsearch__root}>
                            <div className={style.formsearch__form}>
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
                        <div className={style.user_style_root}>
                            <div className={style.user_style_item}>
                                <span    className={style.profile_icon}>
                                    <Image
                                        src={Icon.ProfileIcon}
                                        alt="Profile"
                                     
                                    />
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