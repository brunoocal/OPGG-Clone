import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

export interface HeaderProps {
  heightMode?: string;
}

const Header: React.FC<HeaderProps> = ({ heightMode }) => {
  return (
    <>
      <div
        className="header"
        style={{ height: `${heightMode === "short" ? "120px" : "160px"}` }}
      >
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/champion/statistics" className="item">
          Análisis de Campeones
        </Link>
        <Link to="/statistics" className="item">
          Estadísticas
        </Link>
        <Link to="/ranking" className="item">
          Ranking
        </Link>
        <Link to="/multi" className="item">
          Búsqueda Múltiple
        </Link>
      </div>
    </>
  );
};

export default Header;
