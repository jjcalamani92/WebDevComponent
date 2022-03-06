import { NavLink } from "react-router-dom";

export const HeaderNavbar_1 = () => {
  const data = ["nosotros", "productos", "contacto", "blog"];
  return (
    // <nav className={menu ? "navbar active" : "navbar"}>
    <nav className={"navbar"}>
      <ul>
        {data.map((links: any, i: number) => (
          <li>
            <NavLink to={`/${links}`}>{links}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const HeaderNavbar_2 = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/portafolio">Portafolio</NavLink>
      <NavLink to="/sobre_mi">Sobre mi</NavLink>
      <NavLink to="/servicios">Servicios</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
};
export const HeaderNavbar_3 = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/portafolio">Portafolio</NavLink>
      <NavLink to="/sobre_mi">Sobre mi</NavLink>
      <NavLink to="/servicios">Servicios</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
};
export const HeaderNavbar_4 = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/portafolio">Portafolio</NavLink>
      <NavLink to="/sobre_mi">Sobre mi</NavLink>
      <NavLink to="/servicios">Servicios</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
};
export const HeaderNavbar_5 = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">inicio</NavLink>
      <NavLink to="/nosotros">nosotros</NavLink>
      <NavLink to="/servicios">servicios</NavLink>
      <NavLink to="/blogs">blogs</NavLink>
      <NavLink to="/consejos">consejos</NavLink>
      <NavLink to="/programas">programas</NavLink>
      <NavLink to="/contacto">contacto</NavLink>
    </nav>
  );
};
