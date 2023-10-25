import './globals.css';

export const metadata = {
  title: 'SOL',
  description: 'create next app',
};
const Layout = ({ children }) => {
  return (
    <html>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='icons/icon-192x192.png'></link>
        <meta name='theme-color' content='#84A59D' />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;