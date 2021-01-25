import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
       <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <meta
            name="discription"
            content="a site for my programing porfilio "
          ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp