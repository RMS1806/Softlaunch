import "@/styles/globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "FINOVA 2.0 | SOFTLAUNCH",
  description:
    "Finance × Technology × MIT Manipal. The nexus where decentralized protocols meet academic excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface text-on-surface font-body overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
