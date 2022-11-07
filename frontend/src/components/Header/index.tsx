import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="//www.instagram.com/wanzeler.r">wanzeler.r</a>
        </p>
      </div>
    </header>
  )
}

export default Header;