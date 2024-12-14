
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import { Toaster }  from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      
        <Navbar></Navbar> 
        {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
        {children}
        <Footer/>
     
    </body>
  </html>
  );
}
