import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
  <footer>
    <p className="footer p">Copyright &copy; {currentYear}</p>
  </footer>
  );
}

export default Footer;