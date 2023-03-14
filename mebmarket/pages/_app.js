// pages styling
import "@/styles/globals.css";
import "@fontsource/roboto/400.css";
import "@/styles/index.css";
import "@/styles/admin.css";
import "@/styles/book.css";
import "@/styles/addbook.css";

// compoents styling
import "@/styles/ItemSmall.css";
import "@/styles/Navbar.css";
import "@/styles/AdminNavbar.css";
import "@/styles/PasswordInput.css";
import "@/styles/loginPopup.css";
import "@/styles/searchbar.css";
import "@/styles/deletebook.css";
import "@/styles/RecentComment.css";
import "@/styles/loading.css";
import "@/styles/footer.css";
import "@/styles/cart.css"
import "@/styles/cartItem.css"
import "@/styles/dropdown.css"

// import componets
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  const hideComponentsUrls = ['/pleaselogin', 'checkout'];
  const hideComponents = hideComponentsUrls.some(url => router.asPath.includes(url));
  return (
    <SessionProvider session={pageProps.session}>
      {!hideComponents && <Navbar />}
      <div className="main-container">
        <div className="content-container">
          <Component {...pageProps} />
        </div>
      </div>
      {!hideComponents && <Footer />}
    </SessionProvider>
  );
}