import "@/styles/globals.css";
import "@/styles/ItemSmall.css";
import "@/styles/Navbar.css";
import "@/styles/AdminNavbar.css";
import "@/styles/admin.css";
import "@/styles/PasswordInput.css";
import "@/styles/loginPopup.css";
import "@/styles/index.css";
import "@/styles/book.css";
import "@/styles/searchbar.css";
import "@/styles/addbook.css";
import "@/styles/deletebook.css";
import "@/styles/RecentComment.css";
import "@/styles/loading.css";
import "@/styles/footer.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <div className="main-container">
        <div className="content-container">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </SessionProvider>
  );
}
