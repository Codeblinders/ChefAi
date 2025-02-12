import "./index.css";
import logo from "./assets/chef-claude-icon.png";

export default function Header() {
    return (
        <header className="logo_header">
            <img className="logo" src={logo} alt="Chef Claude logo" />
            <h1>AI Chef</h1>
        </header>
    );
}
