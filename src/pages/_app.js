import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { StateProvider } from "store/store";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <div className="App">
        <div className="App__Content">
          <Header />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </StateProvider>
  );
}

export default MyApp;
