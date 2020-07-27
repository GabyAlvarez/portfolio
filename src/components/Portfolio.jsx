import React from 'react';
import styles from '../assets/styles/portfolio.module.css'
import Modal from 'react-modal';

Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : 'darkred',
      width:"300px"
    }
  };

const Portfolio = () => {
  let subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

    return ( 
        <div className={styles.containerProjects}>
            <div className={styles.cardProject}>
                <div  className={styles.imgProject} style={{backgroundImage: 'url("images/cardPortfolio.jpg")', backgroundSize: 'cover'}} alt="" onClick={openModal} >
                </div>
                <div>

                </div>
                <div>
                <h5>TripLife</h5>
                </div>
                <div className={styles.textCard}>
                <p>Red social para viajeros la cual te permite ingresar mediante Facebook o Google, editar tu información de perfil, compartir historias, fotos y tips y reaccionar a los distintos post.</p>
                </div>    
            </div>

            <div className={styles.cardProject}>
                <div  className={styles.imgProject} style={{backgroundImage: 'url("images/cardPortfolio.jpg")', backgroundSize: 'cover'}} alt="" onClick={openModal} >
                </div>
            <div>
                <h5>TripLife</h5>
                </div>
                <div>
                <p>Red social para viajeros la cual te permite ingresar mediante Facebook o Google, editar tu información de perfil, compartir historias, fotos y tips y reaccionar a los distintos post.</p>
                </div>
            </div>

            <div className={styles.cardProject}>
              <div  className={styles.imgProject} style={{backgroundImage: 'url("images/cardPortfolio.jpg")', backgroundSize: 'cover'}} alt="" onClick={openModal} >
              </div>
              <div>
                <h5>TripLife</h5>
                </div>
                <div>
                <p>Red social para viajeros la cual te permite ingresar mediante Facebook o Google, editar tu información de perfil, compartir historias, fotos y tips y reaccionar a los distintos post.</p>
                </div>
            </div>
        
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>ESto es una prueba modal</div>
        </Modal>
        </div>
     );
}
 
export default Portfolio;