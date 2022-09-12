import Link from 'next/link';
import { useRouter } from 'next/router';

import React from 'react'

const style = {
  wrapper: `relative `,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-[700px] relative justify-center flex-wrap items-center mx-6 `,
  copyContainer: `w-1/2 md:w-full mt-[-100px] `,
  title: `relative text-white text-[28px] font-semibold md:text-center`,
  description: `text-[#8a939b] container-[400px] text-[18px] mt-[0.8rem] mb-[2.5rem] md:text-center`,
  ctaContainer: `flex md:ml-8 md:justify-center mt-[-20px]`,
  accentedButton: ` relative text-lg font-semibold px-12 py-2 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] mt-[-180px] `,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}


const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              Metavas is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
            <Link href={{ pathname: "/explore"}}>
            <button className={style.accentedButton}>Explore</button>
            </Link>

            
             
              <Link href='/create-nft'>
              <button className={style.button} 
              >Create</button>
              </Link>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg h-[230px] w-[360px]"
              src="https://storage.googleapis.com/opensea-prod.appspot.com/files/SLIMESHOP_featured_image_6oo2_43.jpeg"
              alt=""
              
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero