import Layout from "../components/Layout"
import { connect } from "react-redux"
import { addItemToCart } from '../redux/action/cart'
import { useEffect, useState } from "react"
import style from '../styles/checkout.module.css'
import Image from "next/image"
import * as Icon from '../components/Icon'
import CartItem from "../components/CartItem"
import EncodePrice from "../components/untils/EncodePrice"
import Link from "next/link"
function Checkout(props) {
    const cartData = props.cart
    const addItemToCart = props
    const [childData, setChildData] = useState({})
    const [listCarts, setListCarts] = useState([])
    let totalPrice = 0
    for (const i = 1; i < listCarts.length; i++) {
        let quantity = cartData.cart[i - 1].quantity
        totalPrice += (listCarts[i].discount_price * quantity)
    }
    useEffect(() => {
        const data = childData
        setListCarts([...listCarts, data])
        console.log(totalPrice)
    }, [childData])
    return (
        <>
            <Layout>
                <div className="container">
                    <div className={style.cart}>
                        {cartData.cart.length == 0 ?
                            <div className="container">
                                <div className={style.empty__cart}>
                                    <Image
                                        src={'https://salt.tikicdn.com/desktop/img/mascot@2x.png'}
                                        alt="Empty Cart"
                                        width={190}
                                        height={160}
                                    />
                                    <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
                                    <div className="btn btn-danger">
                                        <Link href={'/'}>
                                            Tiếp tục mua sắm
                                        </Link>
                                    </div>
                                </div>

                            </div>


                            :
                            <div className="row">
                                <div className="col-lg-9 col-md-12 col-sm-12">
                                    <div className={style.title}>
                                        <h4>Giỏ hàng</h4>
                                    </div>
                                    <div className={style.heading}>
                                        <div className={style.row}>
                                            <div className={style.col_1}>
                                                <label className={style.checkbox}>
                                                    {/* <input type="checkbox" /> */}
                                                    <span className={style.checkbox_fake} />
                                                    <span className={style.label}>Tất cả
                                                        {cartData.cart.length > 0 ? ` (${cartData.cart.length} sản phẩm)` : ' (0 sản phẩm)'}
                                                    </span>
                                                </label>
                                            </div>
                                            <div className={style.col_2}>
                                                Đơn giá
                                            </div>
                                            <div className={style.col_3}>
                                                Số lượng
                                            </div>
                                            <div className={style.col_4}>
                                                Thành tiền
                                            </div>
                                            <div className={style.col_5}>
                                                <span className={style.remove_all}>
                                                    <Image
                                                        src={Icon.Trash}
                                                        alt="Delete"
                                                        width={17}
                                                        height={17}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.wrapper_items}>
                                        {cartData.cart.map(item => (
                                            <CartItem id={item.id} key={item.id} quantity={item.quantity} cartData={setChildData} />
                                        ))}
                                        {console.log(listCarts)}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <div className={style.price__wrapper}>
                                        <div className={style.price__total}>
                                            <div className={style.price__text}>
                                                Tổng cộng
                                            </div>
                                            <div className={style.price__content}>
                                                <span className={style.price__value__final}>{EncodePrice(totalPrice)} đ</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}
const mapStateToProps = state => ({
    cart: state.cartState
})
const mapDispatchToProps = {
    addItemToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)