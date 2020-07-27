import React from 'react';
import styles from '../src/assets/styles/app.module.css'
import Menu from '../src/components/Menu'
import Routes from './Routes';


function App() {
  
  
  return (
    <div className={styles.containerMain}>
      <Menu />
      <Routes />
      
    </div>
    
  );
}

export default App;
