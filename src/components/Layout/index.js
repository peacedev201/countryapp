import { Link } from "react-router-dom";
import Footer from "./Footer";

import Header from './Header'
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="body">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
