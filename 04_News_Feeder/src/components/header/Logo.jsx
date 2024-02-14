import logo from "../../assets/logo.png";
function Logo() {
  return (
    <div className="flex-1">
      <a href="#">
        <img className="max-w-[100px] md:max-w-[165px]" src={logo} alt="Lws" />
      </a>
    </div>
  );
}

export default Logo;
