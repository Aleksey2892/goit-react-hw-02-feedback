import React from 'react';

import s from './styles.module.scss';

const MoreStatistics = ({ moreState }) => {
  const { total, posFeedback } = moreState;

  return (
    <>
      <li className={s.statItem}>Total: {total}</li>
      <li className={s.statItem}>Positive feedback: {posFeedback}%</li>
    </>
  );
};

export default MoreStatistics;
