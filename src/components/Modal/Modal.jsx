import './Modal.css'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem';
export default function Modal() {
    function mod() {
        let modal = document.getElementById('modal');
        modal.classList.toggle('hidden');
    }
    return (
        <>
            <div id='modal' onClick={mod} className="modal hidden">
                <div className="cart">
                    <div className="cart-top">
                        <h2>Korzina</h2>
                        <CartItem/>
                    </div>
                    <div className="cart-bottom">
                        <div className="text">
                            <p>Itogo:</p>
                            <b>100 000</b>
                        </div>
                        <div className="text">
                            <p>Nalog 99%:</p>
                            <b>99 000</b>
                        </div>
                        <Button padding="15px" bradius="18px"> Оформить заказ </Button>
                    </div>
                </div>
            </div>
        </>
    )
}