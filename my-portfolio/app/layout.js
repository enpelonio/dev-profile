import "./globals.css";

const metadata = {
  title: "Developer Portfolio",
  description:
    "Portfolio website to showcase work experience and personal projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
