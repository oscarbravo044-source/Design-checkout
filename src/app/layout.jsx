import "../styles/globals.css";

export const metadata = {
  title: "Checkout Page",
  description: "Stripe checkout demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}