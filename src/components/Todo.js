import {useState} from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const deleteHandler = () => {
        modalIsVisible ? setModalIsVisible(false) : setModalIsVisible(true);
    };

    const [modalIsVisible, setModalIsVisible] = useState(false);
    return (
        <div>
            <div className={'card'}>
                <h2>{props.text}</h2>
                <div className={'actions'}>
                    <button className={'btn'} onClick={deleteHandler}>Delete</button>
                </div>
                {modalIsVisible && <Modal onClick={deleteHandler}/>}
                {modalIsVisible && <Backdrop onClick={deleteHandler}/>}
            </div>
        </div>
    );
}

export default Todo;