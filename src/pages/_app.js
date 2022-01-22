import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { StateProvider } from "store/store";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("환경변수1 : " + process.env.REACT_APP_SERVER_URL);
  console.log("환경변수2 : " + secrets.SERVER_URL);
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
