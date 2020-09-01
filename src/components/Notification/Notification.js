import React from 'react';
import PropTypes from 'prop-types';

import s from '../styles.module.scss';

const Notification = ({ message }) => (
  <>
    <p className={s.messageText}>{message}</p>
  </>
);

Notification.defaultProps = {
  message: 'No feedback given',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
