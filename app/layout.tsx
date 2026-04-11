import type {Metadata} from 'next';
import { Roboto, Noto_Sans_Armenian } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
});

const notoArmenian = Noto_Sans_Armenian({
  subsets: ['armenian'],
  variable: '--font-armenian',
});

export const metadata: Metadata = {
  title: 'Digital Helper AM | Job Help & Digital Services',
  description: 'Fix Your CV. Grow Your Business. Solve Digital Problems. Professional assistance for job seekers and small businesses in Armenia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${roboto.variable} ${notoArmenian.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
