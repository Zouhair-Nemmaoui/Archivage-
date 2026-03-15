
import welcome from  '../assets/images/welcome.png'
import avatar from  '../assets/images/avatar.png'
import { useNavigate } from "react-router-dom";

function Welcome() {

 
 
    return (  <div>
      <h1 className="p-relative">Dashboard</h1>
      <div className="wrapper d-grid gap-20">
        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
          <div className="intro p-20 d-flex space-between bg-eee">
            <div>
              <h2 className="m-0">Welcome</h2>
              <p className="c-grey mt-5">Radio</p>
            </div>
            <img className="hide-mobile" src={welcome} alt="Welcome" />  
          </div>
          <img src={avatar}  alt="Avatar" className="avatar" />
          <div className="body txt-c d-flex p-20 mb-20 block-mobile">
            <div>
              Zouhair
              <span className="d-block c-grey fs-14 mt-10">Gestionnaire de contenu</span>
            </div>
            <div>
              01
              <span className="d-block c-grey fs-14 mt-10"> Tableaux de bord </span>
            </div>
            <div>
              04
              <span className="d-block c-grey fs-14 mt-10"> Concept programmes radio</span>
            </div>
          </div>
    
        </div>
        <div className="search-items p-20 bg-white rad-10">
          <h2 className="mt-0 mb-20">Top search items</h2>
          <div className="items-head d-flex space-between c-grey mb-10">
            <div>keyword</div>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>Concepts</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>Emission relegiuese</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>Emission culturelle</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>Serie</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>musique trafits</span>
          </div>
        </div>
      </div>
      </div>
    );
  }
  export default Welcome