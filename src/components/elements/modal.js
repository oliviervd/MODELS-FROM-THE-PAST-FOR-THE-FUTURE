import React, {useState} from "react";

const Modal = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal= () => {
        setModal(!modal)
    }

    return(
        <>
            <a className="refTex conicBackdrop underlined" onClick={toggleModal}>{props.text}</a>
            {modal && (
                <div>
                    <div className={props.modalLineID}/>
                    <div className={props.modalID}>
                        <p>{props.description}</p>
                    </div>
                </div>
            )}
        </>
    )

}


export default Modal;