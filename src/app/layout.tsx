// app/layout.tsx
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Discover Our Products | Metta Muse",
  description:
    "Explore sustainable products including bags, cloths, and accessories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <Header/>
        {children}
        <Footer />
        </body>

    </html>
  );
}
