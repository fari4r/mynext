// Example using <Head> in Next.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fariborz rafatrad - Personal Website</title>
        <meta
          name="description"
          content="A brief description about yourself."
        />
        <meta
          name="keywords"
          content="Fariborz rafatrad, personal website, portfolio, etc."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fari4r.github.io/mynext/" />
      </Head>
      {/* Your website content */}
    </>
  );
}
