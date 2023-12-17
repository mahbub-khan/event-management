const Footer = () => {
  const footerStyle = {
    boxShadow: "0px -5px 10px 0px #e5e4e4",
  };

  return (
    <div>
      <footer
        className="footer footer-center p-4 bg-gray-50 text-base-content font-semibold"
        style={footerStyle}
      >
        <aside>
          <p>Developed with ❤️ by MRK</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
