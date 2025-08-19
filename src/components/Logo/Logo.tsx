import { useNavigate } from "react-router-dom";
import LogoSVG from "../../assets/logo.png";

export function Logo() {
  const navigate = useNavigate();

  return (
    <img
      src={LogoSVG}
      alt="Logo"
      className="h-14 cursor-pointer"
      onClick={() => navigate("/")}
    />
  );
}
