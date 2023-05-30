import Head from 'next/head'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Part1 from "../../components/Views/Home/Part1";
import Part2 from "../../components/Views/Home/Part2";
import Part3 from "../../components/Views/Home/Part3";

export default function Home() {
  return (
    <>
      <Head>
        <title>People Equity</title>
        <meta name="description" content="PeopleEquity is the redesigner of value distribution in Web3 by enabling users to earn labor and equity income through production relations protocol stack, and providing decentralized credit system to drive on-chain businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:image" content="https://p.ipic.vip/c7tczk.png" />
        <meta
            name="twitter:description"
            content="PeopleEquity is the redesigner of value distribution in Web3 by enabling users to earn labor and equity income through production relations protocol stack, and providing decentralized credit system to drive on-chain businesses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <Header />
        <Banner />
        <Part1 />
        <Part2 />
        <Part3 />
        <Footer />
      </main>
    </>
  )
}
