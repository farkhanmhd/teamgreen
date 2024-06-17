import './globals.css';
import localFont from 'next/font/local';
import { Provider } from 'jotai';
import ScrollSmooth from './ui/components/ScrollSmooth';
import Cursor from './ui/components/Cursor';
import styles from './main.module.css';

const helveticaNeue = localFont({
  src: [
    {
      path: './ui/font/HelveticaNeue-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './ui/font/HelveticaNeue-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'TeamGreen',
  description: 'A path to a greener future.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.className} ${styles.hideScrollbar} cursor-none antialiased xl:overflow-hidden dark:bg-black dark:text-white`}
      >
        <Provider>
          <ScrollSmooth>
            <Cursor />
            {children}
          </ScrollSmooth>
        </Provider>
      </body>
    </html>
  );
}
