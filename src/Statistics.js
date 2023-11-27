import React from 'react';

const Statistics = ({ title, stats }) => {
  
  const statColors = ['#6d6ddb', '#ce63ce', '#28bcd0', '#529152', '#68442f'];

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ label, percentage }, index) => (
          <li key={index} className="item-stat" style={{ backgroundColor: statColors[index] }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
