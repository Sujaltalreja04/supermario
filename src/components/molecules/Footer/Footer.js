import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
      <a href="https://sujal-portfolio-nine.vercel.app/" target="_blank" rel="noreferrer" className="copyright-link">Sujal k talreja</a>
    </div>
  )
}
export default Footer