import Footer from "@/components/core/Footer";
import NavBar from "@/components/core/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
}
