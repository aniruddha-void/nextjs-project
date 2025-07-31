import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/theme.css';
import '../styles/navbar.css'
import Navbar from '../components/Navbar';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
   
      <Component {...pageProps} />
    </>
  );
}
