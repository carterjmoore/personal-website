import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import { useContext } from 'react';
import ModalContext from '../../context/ModalContext';
import classes from './Modal.module.scss';

const Modal = () => {
  const modalCtx = useContext(ModalContext);

  const handleClose = () => {
    modalCtx.hideModal();
  };

  return (
    <div
      onClick={handleClose}
      className={`${classes.modal} ${
        modalCtx.modalShown ? classes.showModal : ''
      }`}
    >
      <div className={classes.relativeWrapper}>
        <FontAwesomeIcon
          onClick={handleClose}
          className={classes.closeButton}
          icon={faClose}
        />
        <div className={classes.modalContents}>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#personal-projects">Personal Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
