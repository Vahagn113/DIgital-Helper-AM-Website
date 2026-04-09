import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Digital Helper AM | Job Help & Digital Services',
  description: 'Fix Your CV. Grow Your Business. Solve Digital Problems. Professional assistance for job seekers and small businesses in Armenia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
