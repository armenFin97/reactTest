import "../css/modal.css";

export function Modal({ isOpen, onClose, q }) {
    if (!isOpen) return null;
    return (
        <div className="modal modal--open">
            <div className="modal__overlay" onClick={onClose}></div>
            <div className="modal__content">
                <button className="modal__close" onClick={onClose}>✖</button>
                {children}
            </div>
        </div>
    );
}


