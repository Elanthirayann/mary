import { Outlet } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Ticker from "./components/layout/Ticker";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/common/FloatingButtons";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <TopBar />
      <Navbar />
      <Ticker />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
