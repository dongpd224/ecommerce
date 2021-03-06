import Layout from "../../../components/Layout";
import styles from '../../../styles/ItemDetail.module.css'
import Image from "next/image";
import Link from "next/link";
import StarRatingComponent from "react-star-rating-component";
import EncodePrice from "../../../components/untils/EncodePrice";
import quantitystyles from '../../../styles/Quantity.module.css'
import OtherItem from "../../../components/item detail/Other Items";
import * as Icon from '../../../components/Icon'
import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { addItemToCart } from '../../../redux/action/cart'

function ItemDetail(props) {
    const data = props.resource
    const cartData = props.cart
    const addItemToCart = props
    const initCartItem = {
        id: data.id,
        quantity: 0
    }
    const [cartItem, setCartItem] = useState(initCartItem)
    const handleAddItem = () => {
        const tempQuantity = cartItem.quantity
        setCartItem({
            id: data.id,
            quantity: tempQuantity + 1
        })
    }
    const handleRemoveItem = () => {
        const tempQuantity = cartItem.quantity
        if (tempQuantity > 0) {
            setCartItem({
                id: data.id,
                quantity: tempQuantity - 1
            })
        }
    }
    const handleAddToCart = () => {
        addItemToCart.addItemToCart(cartItem)
        setCartItem(initCartItem)
    }
    useEffect(() => {
        console.log(cartData)
    }, [cartData])
    return (
        <div>
            <Layout>
                <div className={`container ${styles.body}`}>
                    <div className={`${styles.wrapper}`}>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className={`${styles.product_image} text-center`}>
                                    <Image
                                        src={data.img_link}
                                        alt={data.item_name}
                                        width={444}
                                        height={444}
                                    />
                                </div>
                                <div className={styles.product_action}>
                                    <span>Chia s???</span>
                                    <Image
                                        src={Icon.SocialFacebook}
                                        alt="Facebook"
                                        width={28}
                                        height={28}
                                    />
                                    <Image
                                        src={Icon.SocialMessenger}
                                        alt="SocialMessenger"
                                        width={28}
                                        height={28}

                                    />
                                    <Image
                                        src={Icon.SocialPinterest}
                                        alt="SocialPinterest"
                                        width={28}
                                        height={28}
                                    />
                                    <Image
                                        src={Icon.SocialTwitter}
                                        alt="SocialTwitter"
                                        width={28}
                                        height={28}
                                    />
                                    <Image
                                        src={Icon.SocialCopy}
                                        alt="SocialCopy"
                                        width={28}
                                        height={28}
                                    />
                                </div>
                            </div>
                            <div className={`col-lg-7 ${styles.product_content__wrapper}`}>
                                <div className={styles.product_seperate}></div>
                                <div className={`${styles.product_content}`}>
                                    <div className={styles.product_content__header}>
                                        <span className={styles.product_content__brand}>Th????ng hi???u:
                                            <Link href={`/item/${data.id}`}>
                                                <a className="link-primary ms-2">{data.item_brand}</a>
                                            </Link>
                                        </span>
                                        <div className={styles.product_content__title}>
                                            <span>{data.item_name}</span>
                                        </div>

                                        <div className={styles.product_content__rating}>
                                            <div className={styles.product_stars}>
                                                <StarRatingComponent starCount={5} value={data.stars} className={styles.product_stars} />
                                            </div>
                                            <div className={styles.product_rates}>
                                                <span>(Xem 99 ????nh gi??)</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`${styles.product_content__body} container-fluid`}>
                                        <div className="row">
                                            <div className={`${styles.product_content__body_left} col-lg-8 col-md-12`}>
                                                <div className={styles.product_content__price}>
                                                    <div className={styles.product_content__price__value}>
                                                        <span>{EncodePrice(data.discount_price)} ??</span>
                                                    </div>
                                                    <div className={styles.product_content__price_offer}>
                                                        <div className={styles.product_content__price_offer__item}>
                                                            <Image src={Icon.TikiCard}
                                                                alt="Tiki Card"
                                                                height={24}
                                                                width={48}
                                                            />
                                                            <span>Ho??n ti???n 15%, mi???n ph?? ph?? th?????ng ni??n.</span>
                                                        </div>
                                                        <div className={styles.product_content__price_offer__item}>
                                                            <Image src={Icon.FreeshipBlueIcon}
                                                                alt="FreeshipIcon"
                                                                height={11}
                                                                width={76}
                                                            />
                                                            <span>Mi???n ph?? v???n chuy???n.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.product_content__coupon}>
                                                    <div className={styles.product_content__coupon__text}>
                                                        <span>9 M?? gi???m gi??</span>
                                                    </div>
                                                    <div className={styles.product_content__coupon__tags}>
                                                        <div className={styles.product_content__coupon__tag}>Gi???m 25K</div>
                                                        <div className={styles.product_content__coupon__tag}>Gi???m 35K</div>
                                                        <div className={styles.product_content__coupon__tag}>Gi???m 45K</div>
                                                        <Image
                                                            src={Icon.ArrowRightBlue}
                                                            alt="Arrow"
                                                            height={28}
                                                            width={28}
                                                            className={styles.product_content__coupon__tag_arrow}
                                                        />
                                                    </div>

                                                </div>
                                                <div className={styles.product_content__delivery_zone}>
                                                    <div className={styles.product_content__delivery_address}>
                                                        <div>
                                                            <span>Giao ?????n</span>
                                                            <span className={styles.address}>
                                                                Q. 1, P. B???n Ngh??, H??? Ch?? Minh
                                                            </span>
                                                            <span>-</span>
                                                            <span className="link-primary ms-2">
                                                                ?????i ?????a ch???
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.product_content__delivery_type}>
                                                        <div className={styles.product_content__delivery_type__item}>
                                                            <div className={styles.product_content__delivery_type__item_header}>
                                                                <Image
                                                                    src={Icon.TikiNow}
                                                                    alt="TikiNow"
                                                                    height={14}
                                                                    width={49}
                                                                />
                                                                <div className={styles.item_header__time}>
                                                                    Tr?????c 19:00 h??m nay
                                                                </div>
                                                            </div>
                                                            <div className={styles.product_content__delivery_type__item_cost}>
                                                                29.000??
                                                            </div>
                                                        </div>
                                                        <div className={styles.product_content__delivery_type__item}>
                                                            <div className={styles.product_content__delivery_type__item_header}>
                                                                <Image
                                                                    src={Icon.TikiFast}
                                                                    alt="TikiFast"
                                                                    height={14}
                                                                    width={49}
                                                                />
                                                                <div className={styles.item_header__time}>
                                                                    Th??? 2, ng??y 24/01
                                                                </div>
                                                            </div>
                                                            <div className={styles.product_content__delivery_type__item_cost}>
                                                                29.000??
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className={styles.product_content__delivery_promotion}>
                                                        Mua g??i TikiNOW nh???n 100% Freeship
                                                    </div>
                                                </div>
                                                <div className={styles.product_content__quantity}>
                                                    <div>
                                                        S??? l?????ng
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <div className={quantitystyles.wrapper}>
                                                                <button
                                                                    className={`${quantitystyles.button} ${quantitystyles.remove_button}`}
                                                                    onClick={handleRemoveItem}
                                                                >
                                                                    <Image
                                                                        src={Icon.IconRemove}
                                                                        alt="remove"
                                                                        width={20}
                                                                        height={20}
                                                                    />
                                                                </button>
                                                                <div className={quantitystyles.quantity}>
                                                                    {cartItem.quantity}
                                                                </div>
                                                                <button
                                                                    className={`${quantitystyles.button} ${quantitystyles.add_button}`}
                                                                    onClick={handleAddItem}
                                                                >
                                                                    <Image
                                                                        src={Icon.IconAdd}
                                                                        alt="add"
                                                                        width={20}
                                                                        height={20}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.product_content__atcbutton}>
                                                    {cartItem.quantity > 0 ?
                                                        <button
                                                            className={`btn ${styles.product_content__button_add_to_cart}`}
                                                            onClick={() => handleAddToCart()}
                                                        >Ch???n mua
                                                        </button> :
                                                        <button
                                                            className={`btn ${styles.product_content__button_add_to_cart}`}
                                                            onClick={() => handleAddToCart()}
                                                            disabled
                                                        >Ch???n mua
                                                        </button>}
                                                </div>
                                            </div>
                                            {/* Right card */}
                                            <div className={`${styles.product_content___body_right} col-lg-4`}>
                                                <div className={styles.body_right__seller_detail}>
                                                    <div className={styles.body_right__seller_info}>
                                                        <div className={styles.body_right__overview}>
                                                            <Image
                                                                src={Icon.TikiRounded}
                                                                alt="Facebook"
                                                                width={44}
                                                                height={44}
                                                                className={styles.body_right__seller_logo}
                                                            />
                                                            <div className={styles.body_right__overview_right}>
                                                                <div className={styles.body_right__seller_name}>
                                                                    <span>Tiki Trading</span>
                                                                    <Image
                                                                        src={Icon.OfficialTag}
                                                                        alt="Official"
                                                                        width={74}
                                                                        height={18}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={styles.body_right__overview}>
                                                        <div className={styles.seller__review}>
                                                            <div className={styles.seller__review_title}>
                                                                <span>4.6 / 5 </span><StarRatingComponent starCount={1} value={1} />
                                                            </div>
                                                            <div className={styles.seller__review_subtitle}>
                                                                <span>4.3tr +</span>
                                                            </div>
                                                        </div>
                                                        <div className={styles.border_left}></div>
                                                        <div className={styles.seller__review}>
                                                            <div className={styles.seller__review_title}>
                                                                <span>364K+</span>
                                                            </div>
                                                            <div className={styles.seller__review_subtitle}>
                                                                Theo d??i
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={styles.seller__action}>
                                                        <div className={styles.seller__action_button}>
                                                            <Image
                                                                src={Icon.ShopIcon}
                                                                width={20}
                                                                height={20}
                                                                alt="shop"
                                                            />
                                                            <span>Xem shop</span>
                                                        </div>
                                                        <div className={styles.seller__action_button}>
                                                            <Image
                                                                src={Icon.CrossIcon}
                                                                width={20}
                                                                height={20}
                                                                alt="follow"
                                                            />
                                                            <span>Theo D??i</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.seller__warranty}>
                                                    <div className={styles.seller__warranty_item}>
                                                        <span className={styles.item_left}>Th???i gian b???o h??nh</span>
                                                        <span className={styles.item_right}>12 Th??ng</span>
                                                    </div>
                                                    <div className={styles.seller__warranty_item}>
                                                        <span className={styles.item_left}>H??nh th???c b???o h??nh</span>
                                                        <span className={styles.item_right}>H??a ????n</span>
                                                    </div>
                                                    <div className={styles.seller__warranty_item}>
                                                        <span className={styles.item_left}>N??i b???o h??nh</span>
                                                        <span className={styles.item_right}>Ch??nh h??ng</span>
                                                    </div>
                                                    <div className={styles.seller__warranty_item}>
                                                        <span className={styles.item_left}>H?????ng d???n b???o h??nh</span>
                                                        <span className={styles.item_right}>Website</span>
                                                    </div>
                                                </div>
                                        
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <OtherItem items = {props.items}/>
                </div>
            </Layout>
        </div>
    )
}
const mapStateToProps = state => ({
    cart: state.cartState
})
const mapDispatchToProps = {
    addItemToCart
}

export async function getServerSideProps({ params }) {
    //${process.env.API_URL}
    const dataRes = await fetch(`${process.env.API_URL}/items/${params.id}`)
    const dataRes2 = await fetch(`${process.env.API_URL}/items`)
    const listItems = await dataRes2.json();
    const data = await dataRes.json();
    return {
        props: {
            resource: data,
            items: listItems
        }
    }
}
// const mapStateToProps = state =>({
//     cart: state.cartState,

// })
// const mapDispatchToProps = {
//     addItemToCart
// }

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)


