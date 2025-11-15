function Footer() {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#282c34', color: 'white', textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{ margin: '0' }}>@ My Company</h2>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p>
        <a href="/about" style={{ margin: '10px', color: 'lightblue', textDecoration: 'none' }}>About</a>
        <a href="/services" style={{ margin: '10px', color: 'lightblue', textDecoration: 'none' }}>Services</a>
        <a href="/contact" style={{ margin: '10px', color: 'lightblue', textDecoration: 'none' }}>Contact</a>
      </p>
    </footer>
  );
}

export default Footer;
