import Document, { Head, Main, NextScript , Html} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
         
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
     <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro"/>

       </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Crimson Pro', serif;
        font-size: 48px;
          }
        `}</style>
      </Html>
    );
  }
}
