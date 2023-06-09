import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { URLShortenerSection } from '@/components/sections/URL-Shortener.section'

export default function URLShortener() {
  return (
    <>
      <Head>
        <title>개발자 방진혁 - URL-Shortener</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="URL-Shortener project" />
        <meta name="description" content="URL-Shortener project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/URL-Shortener" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="URL-Shortener project" />
        <meta property="og:description" content="URL-Shortener project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <URLShortenerSection />
        <Footer />
      </main>
    </>
  )
}
