import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { StateProvider } from "store/store";
import "styles/globals.css";
import Api from "api/api";

function MyApp({ Component, pageProps }) {
  Api.apiTest1(
    null,
    res => {
      console.log("apiTest1 : " + JSON.stringify(res.data));
    },
    err => console.log(err)
  );
  Api.apiTest2(
    {
      name: "jeongwoong",
      amount: "10",
    },
    res => {
      console.log("apiTest2 : " + JSON.stringify(res.data));
    },
    err => console.log(err)
  );

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
