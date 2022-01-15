import Layout from "../../../components/Layout";
import styles from '../../../styles/ItemDetail.module.css'
import Image from "next/image";
import Link from "next/link";
import StarRatingComponent from "react-star-rating-component";
import EncodePrice from "../../../components/untils/EncodePrice";
import * as Icon from '../../../components/Icon'

function ItemDetail({ resource }) {
    const data = resource[0]
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
                            </div>
                            <div className={`col-lg-7 ${styles.product_content_wrapper}`}>
                                <div className={styles.product_seperate}></div>
                                <div className={`${styles.product_content}`}>
                                    <div className={styles.product_content_header}>
                                        <span className={styles.product_content_brand}>Thương hiệu:
                                            <Link href={`/item/${data.id}`}>
                                                <a className="link-primary ms-2">Tiki</a>
                                            </Link>
                                        </span>
                                        <div className={styles.product_content_title}>
                                            <span>{data.item_name}</span>
                                        </div>

                                        <div className={styles.product_content_rating}>
                                            <div className={styles.product_stars}>
                                                <StarRatingComponent starCount={5} value={data.star} className={styles.product_stars} />
                                            </div>
                                            <div className={styles.product_rates}>
                                                <span>(Xem 99 đánh giá)</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`${styles.product_content_body} container-fluid`}>
                                        <div className="row">
                                            <div className={`${styles.product_content_body_left} col-lg-8 col-md-12`}>
                                                <div className={styles.product_content_price}>
                                                    <div className={styles.product_content_price__value}>
                                                        <span>{EncodePrice(data.discount_price)} đ</span>
                                                    </div>
                                                    <div className={styles.product_content_price_offer}>
                                                        <div className={styles.product_content_price_offer__item}>
                                                            <Image src={Icon.TikiCard}
                                                                alt="Tiki Card"
                                                                height={24}
                                                                width={48}
                                                            />
                                                            <span>Hoàn tiền 15%, miễn phí phí thường niên.</span>
                                                        </div>
                                                        <div className={styles.product_content_price_offer__item}>
                                                            <Image src={Icon.FreeshipBlueIcon}
                                                                alt="FreeshipIcon"
                                                                height={11}
                                                                width={76}
                                                            />
                                                            <span>Miễn phí vận chuyển.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.product_content_coupon}>
                                                    <div className={styles.product_content_coupon__text}>
                                                        <span>9 Mã giảm giá</span>
                                                    </div>
                                                    <div className={styles.product_content_coupon__tags}>
                                                        <div className={styles.product_content_coupon__tag}>Giảm 25K</div>
                                                        <div className={styles.product_content_coupon__tag}>Giảm 35K</div>
                                                        <div className={styles.product_content_coupon__tag}>Giảm 45K</div>
                                                        <Image 
                                                        src={Icon.ArrowRightBlue}
                                                        alt="Arrow"
                                                        height={28}
                                                        width={28}
                                                        className={styles.product_content_coupon__tag_arrow}
                                                        />
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                            <div className={`${styles.product_content_body_right} col-lg-4`}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export async function getServerSideProps({ params }) {
    const dataRes = await fetch(`http://localhost:3000/api/items/${params.id}`)
    const data = await dataRes.json();
    return {
        props: {
            resource: data
        }
    }
}
export default ItemDetail


