import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'IRONCORE GYM | Train Hard. Live Strong.',
  description:
    'IRONCORE GYM — premium strength training, group classes, and personal coaching. Join the strongest community in town.',
  keywords: ['gym', 'fitness', 'strength training', 'personal training', 'workout'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
