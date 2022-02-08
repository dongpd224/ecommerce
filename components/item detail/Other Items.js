import styles from '../../styles/item detail/OtherItems.module.css'
import CardItem from '../CardItem'

function OtherItem({ items }) {
    return (
        <>
            <div className={styles.wapper}>
                <div className={styles.title}>Sản phẩm khác:</div>
                <div className='container-fluid'>
                    <div className='row'>
                        {items.map((item) => (
                                <CardItem key={item.id} responsive="col-lg-2 col-md-3 col-sm-6" data={item} /> 
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherItem