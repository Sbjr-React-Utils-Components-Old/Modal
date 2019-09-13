import React from 'react';
import PropTypes from 'prop-types';

import Icon, { CLASS_ICON } from '@sbjr-react-utils-components/icons';

import './style.less';

const MODAL_TYPE = {
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
  INFORMATION: 'information',
};

const Modal = ({
  className,
  show,
  title,
  body,
  typeModal,
  onClose,
  footerButtons,
}) => (
  <div className={`modal-background ${typeModal} ${show ? 'show' : ''} ${className}`}>
    <div className="modal-container">
      <div className="modal-header">
        <h2 className="modal-title">{title}</h2>
        <Icon
          className="close-icon"
          classIcon={CLASS_ICON.TIMES}
          onClick={() => onClose()}
        />
      </div>
      <div className="modal-body">
        {body}
      </div>
      <div className="modal-footer">
        {
          footerButtons.map(component => component)
        }
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  typeModal: PropTypes.string,
  title: PropTypes.node,
  body: PropTypes.node,
  footerButtons: PropTypes.arrayOf(
    PropTypes.node,
  ),
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  className: '',
  show: false,
  typeModal: MODAL_TYPE.INFORMATION,
  title: 'Modal Title',
  body: 'Modal Body',
  footerButtons: [],
  onClose: () => {},
};

export default Modal;

export {
  MODAL_TYPE,
};
