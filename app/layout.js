import LayoutClient from '@/app/pageClient'

export const metadata = {
  title: 'Gifty',
  description: 'Gifty',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
