import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} className="logo" alt="jobLogo" />
      </nav>
    </main>
  );
}

export default Landing;
