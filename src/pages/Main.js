import { Link } from 'react-router-dom';

function Main() {
  return (
    <section>
      <h1>Links</h1>
      <br />
      <h2>Public</h2>
      <Link to="/login">Login</Link>
      <Link to="/registration">Register</Link>
      <br />
      <h2>Private</h2>
      <Link to="/">Home</Link>
      <br />
      <Link to="/bayer">Buyer dashboard</Link>
      <Link to="/seller">Seller dashboard</Link>
      <Link to="/farmer">Farmer dashboard</Link>
    </section>
  );
}

export default Main;
