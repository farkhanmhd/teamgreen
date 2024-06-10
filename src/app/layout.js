import "./globals.css";
import localFont from "next/font/local";

const helveticaNeue = localFont({
  src: [
    {
      path: "./ui/font/HelveticaNeue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ui/font/HelveticaNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "TeamGreen",
  description: "A path to a greener future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helveticaNeue.className}>{children}</body>
    </html>
  );
}
