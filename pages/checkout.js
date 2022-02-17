import Layout from "../components/Layout"
import { connect } from "react-redux"
import { addItemToCart } from '../redux/action/cart'
import { useEffect } from "react"
import style from '../styles/checkout.module.css'
import Image from "next/image"
import * as Icon from '../components/Icon'
import CartItem from "../components/CartItem"
function Checkout(props) {
    const cartData = props.cart
    const addItemToCart = props
    useEffect(() => {
        console.log(cartData);
    }, [cartData])
    return (
        <>
            <Layout>
                <div className="container">
                    <div className={style.cart}>
                        <div className="row">
                            <div className="col-lg-9">
                                <div className={style.title}>
                                    <h4>Giỏ hàng</h4>
                                </div>
                                <div className={style.heading}>
                                    <div className={style.row}>
                                        <div className={style.col_1}>
                                            <label className={style.checkbox}>
                                                <input type="checkbox" />
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
                                        <CartItem id={item.id} key={item.id}/>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
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