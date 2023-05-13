import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';

function Portfolio({ projectList }) {
  const filterButtonList = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const [filteredListProjects, setFilteredListProjects] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (e) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));
    
    e.target.classList.add('active');

    const select = e.target.textContent;
    
    if (select === 'All') {
      setFilteredListProjects(projectList);
    } else {
      setFilteredListProjects(
        projectList.filter(item => item.category === select)
      );
    }

    setSelected(select);

    console.log(select);
  }

  return (
    <div className={styles.container}>
      <Toolbar 
        filters={filterButtonList}
        selected={selected}
        onSelectFilter={filter}
      />

      <div className={styles.gallery}>
        <ProjectList projects={filteredListProjects} /> 
      </div>
    </div>
    );
}

export default Portfolio;