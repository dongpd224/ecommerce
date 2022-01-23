import { useEffect, useState } from "react"
import Image from "next/image"
import * as Icons from '../components/Icon'
import styles from '../styles/Quantity.module.css'
function Quantity() {
    useEffect(()=>{

    }
    ,[quantity])
    const [quantity, setQuantity] = useState(0)
    const handleRemove = () =>{
        if(quantity > 0){
            setQuantity(quantity -1)
        }
    }
    const handleAdd = ()=>{
        setQuantity(quantity + 1)
    }
    return (
        <div>
            <div className={styles.wrapper}>
                <button 
                    className={`${styles.button} ${styles.remove_button}`}
                    onClick={handleRemove}
                >
                    <Image
                        src={Icons.IconRemove}
                        alt="remove"
                        width={20}
                        height={20}
                    />
                </button>
                <div className={styles.quantity}>
                    {quantity}
                </div>
                <button
                    className={`${styles.button} ${styles.add_button}`}
                    onClick={handleAdd}
                >
                    <Image
                        src={Icons.IconAdd}
                        alt="add"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </div>
    )
}
export default Quantity
