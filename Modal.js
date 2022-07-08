import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Choose a credit card to complete the transaction with:</h5>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
          <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                VISA ****0452
              </button>
            <div>
            <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                VISA ****0334
              </button>
            </div>
              
           <div>
           <button
                className={styles.primaryButton}
                onClick={() => setIsOpen(true)}
              >
                Add New Card
              </button>

            </div>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;