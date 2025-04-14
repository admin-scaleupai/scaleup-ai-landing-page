import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: 'ScaleUp AI — AI-Driven Automation for Agencies',
  description: 'Streamline your agency with AI automation. Connect. Automate. Scale.',
  icons: {
    icon: '/favicon.ico',
  },
    generator: 'v0.dev'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
<body>
  {children}
  <Analytics />
</body>
    </html>
  );
}


import './globals.css'
