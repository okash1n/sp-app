import Head from 'next/head'
import Header from './header'

type LayoutProps = {
  user?: any
  loading?: boolean
  children: React.ReactNode
}

const Layout = ({ user, loading = false, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>okash1n's sp-app using Next.js and Auth0</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

    </>
  )
}

export default Layout
