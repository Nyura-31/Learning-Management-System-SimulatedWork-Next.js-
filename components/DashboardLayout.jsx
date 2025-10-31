import Navbar from "./layout/navbar";
import Footer from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}
