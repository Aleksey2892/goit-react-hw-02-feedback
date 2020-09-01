import React from 'react';
import PropTypes from 'prop-types';

import s from '../styles.module.scss';

const SectionTitle = ({ title, children }) => (
  <>
    <p className={s.titleFeedback}>{title}</p>
    {children}
  </>
);

SectionTitle.defaultProps = {
  title: 'Statistics',
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default SectionTitle;
