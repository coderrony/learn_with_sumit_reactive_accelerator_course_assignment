import { Inter } from "next/font/google";

import "../globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product",
  description: "Product details page",
};
function ProductLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}{" "}
      </body>
    </html>
  );
}

export default ProductLayout;
