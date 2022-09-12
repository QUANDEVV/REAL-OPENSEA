
import Image from 'next/image';

import images from '../assets';


const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => {
  return (
    <div className="  mx-4 flex flex-col  ">
<div className='w-4 h-4 minlg:w-7 minlg:h-7 bg-nft-red-violet flexCenter rounded-full'>
  <p className='font-poppins text-white font-semibold text-base minlg:text-lg '>{rank}</p>
</div>


<div className=' '>
<div className=' relative w-20 h-20 minlg:w-28 minlg:h-28  '>
<Image 

  src={creatorImage}
  layout="fill"
  objectFit='cover'
  alt='creatorName'
  className='rounded-full'
/>
<div className='absolute  w-4 h-4 minlg:w-7 minlg:h-7 bottom-2 right-[0]'>
  <Image
  src={images.tick}
  layout=""
  objectFit='contain'
  alt='tick'

   />
</div>
</div>

</div>


<div className='mt-3 text-center flexCenter flex-col' >
  <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-base'>{creatorName}</p>
  <p className='mt-1 font-poppins dark:text-white text-nft-black-1 font-semibold text-base'>{creatorEths}<span className='font-normal ml-2'>
ETH
  </span></p>

</div>

    </div>
  )
}

export default CreatorCard