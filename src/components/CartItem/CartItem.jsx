import './CartItem.css'
import img from '../../../public/catalog/item1.png'
export default function CartItem(){
    return(
        <>
            <div className="cartitem">
                <img src={img} alt="" />
                <div className="itemName">
                    <p>Gangsta paradise</p>
                    <p>Zelen Limet edition</p>
                    <b>99 999 руб.</b>
                </div>
                <div className="krest">
                    X
                </div>
            </div>
        </>
    )
}