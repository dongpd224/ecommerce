import Layout from "../../../components/Layout";
import styles from '../../../styles/ItemDetail.module.css'
import Image from "next/image";

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
                            <div className="col-lg-7">Helllo</div>
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


