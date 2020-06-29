import React from 'react';
import styles from './styles/app.module.css'
import Menu from './components/Menu'
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
