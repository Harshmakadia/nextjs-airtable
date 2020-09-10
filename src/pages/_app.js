import React from "react";
import "styles/global.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />

      <Component {...pageProps} />

      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2019 Company"
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default MyApp;
