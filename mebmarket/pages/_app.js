import '@/styles/globals.css'
import "@/styles/ItemSmall.css";
import "@/styles/Navbar.css";
import "@/styles/AdminNavbar.css"
import "@/styles/PasswordInput.css"
import "@/styles/loginPopup.css"
import "@/styles/index.css"
import "@/styles/book.css"
import "@/styles/searchbar.css"
import "@/styles/addbook.css"
import "@/styles/deletebook.css"
import "@/styles/footer.css"
import Navbar from '@/components/Navbar'
import Footer from "@/components/footer";
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  );
}