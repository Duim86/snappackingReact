import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import './modal.css';
import Modal from 'react-modal';

import LogoIMG from '../../assets/logo.svg';
import AvatarIMG from '../../assets/profile.png';


const loginStyle = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.8)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '4rem',
    textAlign: 'center',
    padding: '20px',
  }
};


const registerStyle = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.8)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '4rem',
    textAlign: 'center',
    padding: '20px',
  }
};

export default function PageDefault(props) {
  const [loginIsOpen, setLoginIsOpen] = React.useState(false);
  const [registerIsOpen, setRegisterIsOpen] = React.useState(false);

  const history = useHistory();

  function openLogin() {
    setLoginIsOpen(true);
  }

  function closeLogin() {
    setLoginIsOpen(false);
  }

  function openRegister() {
    setLoginIsOpen(false);
    setRegisterIsOpen(true);
  }

  function closeRegister() {
    setRegisterIsOpen(false);
  }

  function Login() {
    setLoginIsOpen(false);
    history.push("/myprofile")
  }
  function Register(){
    setRegisterIsOpen(false);
    history.push("/myprofile")
  }
  return (
    <>
      {props.logged === true &&
        <header>
          <div class="container">
            <div id="logo-container">
              <a href="/">
                <img src={LogoIMG} alt="Snap-Packing" />
              </a>
            </div>
            <div id="button">
              <a href="/creategroup" class="link">Grupo de Viagens</a>
              <button id="profile" class="profile" type="button" onClick={() => { history.push("/myprofile")}}>
                John Doe
                <img src={AvatarIMG} alt="user" />
              </button>
            </div>
          </div>
        </header>
      }
      {props.logged === false &&
        <header>
          <div class="container">
            <div id="logo-container">
              <a href="/">
                <img src={LogoIMG} alt="Snap-Packing" />
              </a>
            </div>
            <div id="button">
              <a href="/creategroup" class="link">Grupo de Viagens</a>
              <button id="login" class="entrar" type="button" onClick={openLogin}>Entrar</button>
            </div>
          </div>
        </header>
      }


      <main>
        {props.children}
      </main>


      <Modal
        isOpen={loginIsOpen}
        onRequestClose={closeLogin}
        style={loginStyle}
        className="modal-login"
      >
        <div className="close" onClick={closeLogin}>+</div>
        <img src={LogoIMG} alt="logo-snappacking" />
        <form action="">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="button" className="button" id="logar" onClick={Login}>Entrar</button>
        </form>
        <button type="button" className="cadastrar" onClick={openRegister}>Cadastre-se</button>
      </Modal>

      <Modal
        isOpen={registerIsOpen}
        onRequestClose={closeRegister}
        style={registerStyle}
        className="modal-login"
      >
        <div className="close" onClick={closeRegister}>+</div>
        <img src={LogoIMG} alt="logo-snappacking" />
        <form action="">
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button href="" class="button" onClick={Register}>Cadastre-se</button>
        </form>
      </Modal>


    </>
  )
}