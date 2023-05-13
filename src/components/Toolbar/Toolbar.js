import React from 'react';
import styles from './Toolbar.module.css';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className={styles.toolbar}>
      {filters.map((item) => (
        <button
          onClick={onSelectFilter}
          key={item}
          className={item === selected ? 'active' : ''}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;