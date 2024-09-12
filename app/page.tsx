// Example using <Head> in Next.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fariborz rafatrad - Personal Website</title>
        <meta
          name="google-site-verification"
          content="T40OzoESge6yMeJZanfCQfhXdmbVSuZt63VdiQFwbvY"
        />
        <meta
          name="description"
          content="A brief description about yourself."
        />
        <meta
          name="keywords"
          content="Fariborz rafatrad, personal website, portfolio, etc.  ,فریبرز , رفعت راد ,برنامه نویس فرانت اند "
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fari4r.github.io/mynext/" />
      </Head>
      <div>
        <h1>I am Fariborz Rafatrad. I am a front-end developer.</h1>
        <p>سلام من فریبرز رفعت راد هستم برنامه نویس فرانت اند.</p>
      </div>
    </>
  );
}
