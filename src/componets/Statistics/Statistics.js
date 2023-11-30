import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  
  const statColors = ['#6d6ddb', '#ce63ce', '#28bcd0', '#529152', '#68442f'];

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(({ label, percentage }, index) => (
          <li key={index} className={css.itemstat} style={{ backgroundColor: statColors[index] }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
