import './globals.css';

export const metadata = {
  title: 'Hololingo',
  description: 'Hololingo Admin Panel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}