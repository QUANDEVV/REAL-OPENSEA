import { useEffect, useState, useRef, useContext } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import CreatorCard from '../components/CreatorCard';
import { getCreators } from '../utils/getTopCreators';
import { shortenAddress } from '../utils/shortenAddress';
import images from '../assets';
import { makeid } from '../utils/makeId';

const explore = () => {
  const [hideButtons, setHideButtons] = useState(false);
const {theme } = useTheme()
  const parentRef = useRef(null)
  const scrollRef = useRef (null)



 

  return (
    <div>
      <h1 className='font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0'>
        Best Creators
       
      </h1>
      
      <div className='relative flex-1  max-w-full flex mt-6'>
<div className='flex flex-row w-max overflow-x-scroll no-scrollbar select-none' >

                  {[1,2,3,4,5,,7,8,9,10].map((i) => (
                    <CreatorCard
                      key={`creator-${i}`}
                      rank={i}
                      creatorImage={images[`creator${i}`]}
                      creatorName={`0x${makeid(3)}...${makeid(4)}`}
                      creatorEths={10 - i * 0.534}
                    />
))}
                

                    {/* <>
                      <div onClick={() => handleScroll('left')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-[40px] cursor-pointer left-0">
                        <Image src={images.left}  className={theme === 'light' ? 'filter invert' : undefined} />
                      </div>
                      <div onClick={() => handleScroll('right')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-[40px] cursor-pointer right-0">
                        <Image src={images.right} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' ? 'filter invert' : undefined} />
                      </div>
                    </> */}
                  
                

</div>
      </div>


<div className='mt-10'>
<div>
  
</div>


   </div>






   </div>
  
  )
}

export default explore