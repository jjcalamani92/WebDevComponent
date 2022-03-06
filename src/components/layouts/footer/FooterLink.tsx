import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const FooterLink = () => {
    return (
        <div className="box">
            <h3>Links directos</h3>
            <NavLink className="links" to="/">
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
            Inicio
            </NavLink>
            <NavLink className="links" to="/nosotros">
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
            Nosotros
            </NavLink>
            <NavLink className="links" to="/productos/monofocales">
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
            Productos
            </NavLink>
            <NavLink className="links" to="/contacto">
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
            Contacto
            </NavLink>
        </div>
    )
}
