import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/esraa_no_bg.png';
import ProfilePic_bg from '../../public/images/profile/pngegg.png';
import AnimatedText from '../components/AnimatedText'
import Link from "next/link";
import { LinkArrow } from '@/components/Icons';
import lightBulb from '../../public/images/svgs/insight_data.svg'
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect'



export default function Home() {
  return (
    <>
      <Head>
        <title>Esraa Abbdelrazek</title>
        <meta name="description" content="Generated by create Esraa Abbdelrazek" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark  w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full '>

              <Image
                src={ProfilePic}
                alt="Picture of the author"
                className="w-50 h-50  lg:hidden md:inline-block md:w-full rounded-full "
                priority
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
              />



            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center '>
              <AnimatedText className='!text-4xl !text-left  xl:!text-7xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
                text="What&apos;s Your Data Trying to Say?" />
              <p className='text-base font-medium  md:text-sm sm:text-xs'> We Translate It Into Actionable Insights.</p>
              <p className='my-4 text-base font-medium  md:text-sm sm:text-xs'>

                Hi, I&apos;m Esraa Abdelrazek, a Data Analyst who loves transforming raw data into powerful solutions. Curious how I can help? Let&apos;s explore the possibilities together—check out my latest projects!
              </p>

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/EsraaMosaad_DATA_Analysis.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6
                 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                 border-solid border-2 border-transparent hover:border-dark 
                 hover:bg-transparent dark:bg-light dark:text-dark
                 dark:hover:bg-dark dark:hover:text-light
                 hover:dark:border-light md:p-2 md:px-4 md:text-base'
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                {/*<Link href="mailto:enew.abdelrazek0123@gmail.com"
                  target={"_blank"}
                  className='ml-4 text-lg font-medium capitalize text-dark  underline dark:text-light md:text-base'
                >Contact</Link>*/}

              </div>

            </div>

          </div>
        </Layout>

        <HireMe />

        <div className='absolute inline-block bottom-0 right-20 w-24 md:hidden lg:w-20'>
          <Image src={lightBulb} alt="EsraaAbdelrazek " className=' w-full h-auto scale-150 hover:scale-125 ' />
        </div>


      </main>
    </>
  )
}
