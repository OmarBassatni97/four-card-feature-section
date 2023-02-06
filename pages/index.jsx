import Head from 'next/head'
import Card from '../components/Card'
import { cards } from '../data'
const Home = () => {
  return (
    <>
      <Head>
        <title>four-card-feature-section</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='w-full h-screen'>
        <div className='max-w-[1440px] mx-auto p-16'>
          <div className='text-center max-w-lg mx-auto pb-12'>
            <h1 className='text-[30px] opacity-60'>Reliable, efficient delivery</h1>
            <h1 className='text-[30px] font-semibold'>Powered by Technology</h1>
            <p className='text-[15px] opacity-60 pt-5'>
              Our Artificial intelligence powered tools use millions of project data points to ensure that your project is successful
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 lg:grid lg:grid-cols-3'>
            <div className='flex items-center'>
              <Card
                title={cards[0].title}
                paragraph={cards[0].paragraph}
                logo={cards[0].logo}
                borderColor='border-cyan-400'
              />

            </div>
            <div className='flex flex-col gap-6'>
              <Card
                title={cards[1].title}
                paragraph={cards[1].paragraph}
                logo={cards[1].logo}
                borderColor='border-red-500'
              />
              <Card
                title={cards[2].title}
                paragraph={cards[2].paragraph}
                logo={cards[2].logo}
                borderColor='border-yellow-500'
              />
            </div>
            <div className='flex items-center'>
              <Card
                title={cards[3].title}
                paragraph={cards[3].paragraph}
                logo={cards[3].logo}
                borderColor='border-blue-500'
              />
            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default Home
