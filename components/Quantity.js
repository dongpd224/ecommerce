import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { addItem, removeItem } from "../redux/action/itemsquantity"
import Image from "next/image"
import * as Icons from '../components/Icon'
import quantity from '../styles/Quantity.module.css'
function Quantity(props) {
    const quantity = props.quantity
    const {addItem, removeItem} = props
    return (
        <div>
            <div className={quantity.wrapper}>
                <button 
                    className={`${quantity.button} ${quantity.remove_button}`}
                    onClick={removeItem}
                >
                    <Image
                        src={Icons.IconRemove}
                        alt="remove"
                        width={20}
                        height={20}
                    />
                </button>
                <div className={quantity.quantity}>
                    {quantity}
                </div>
                <button
                    className={`${quantity.button} ${quantity.add_button}`}
                    onClick={addItem}
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

const mapStateToProps = state =>({
    quantity: state.itemsquantity
})
const mapDispatchToProps = {
    addItem, removeItem
}
export default  connect(mapStateToProps, mapDispatchToProps) (Quantity)


