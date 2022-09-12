import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';
import Button from './Button';
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import Modal from './Modal';




  const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
    const generateLink = (i) => {
      switch (i) {
        case 0: return '/';
        case 1: return '/created-nfts';
        case 2: return '/my-nfts';
        case 3: return '/create';
        default: return '/';
      }
    };
    
  
    return (
      <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
        {['Explore', 'Listed NFTs', 'My NFTs', 'Create'].map((item, i) => (
          <li
            key={i}
            onClick={() => {
              setActive(item);
  
              if (isMobile) setIsOpen(false);
            }}
            className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3
            ${active === item
              ? 'dark:text-white text-nft-black-1'
              : 'dark:text-nft-gray-3 text-nft-gray-2'} 
            ${isMobile && 'my-5 text-xl'}`}
          >
            <Link href={generateLink(i)}>{item}</Link>
          </li>
        ))}
      </ul>
    );
  };



  const ButtonGroup = () => {
    const hasConnected = false;

    return hasConnected ? (
      <div className="flexCenter">
      <Button
        btnName="Create"
        btnType="primary"
        classStyles="mx-2 rounded-xl"
        handleClick={() => {
          setActive('');
          router.push('/create');
        }}
      />
    </div>
  ) : (
    <Button
      btnName="Connect"
      btnType="outline"
      classStyles="mx-2 rounded-lg"
      // handleClick={hasConnected}
      handleClick={ () => setMetamaskModal(true)}
    />
  )

  } ;



 
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Explore NFTs');
  const router = useRouter();
   const [isOpen, setIsOpen] = useState(false)
   const [metaMaskModal,  setMetamaskModal ] = useState(false)
   const [metaModal,  setmetaModal ] = useState(false)
   

  return (
<nav className="flexBetween w-full fixed z-10 p-2 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">


                     <div className="flex flex-1 flex-row justify-start">
                                <Link href="/">
                                <div className="flexCenter md:hidden cursor-pointer" onClick={() => {}}>
                                <Image src={images.opensea} objectFit="contain" width={32} height={32} alt="logo" />
                                <p className=" dark:text-white text-nft-black-1 font-semibold text-lg ml-1">metavas</p>
                                </div>
                                </Link>

                                <Link href="/">
                                <div className="hidden md:flex"
                                onClick={() => {}}>
                                <Image src={images.opensea} objectFit="contain" width={32} height={32} alt="logo" />
                                </div>
                                </Link> 
                                </div>

                                <div className='flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] '>
                                <div className='text-[#8a939b] mx-3 font-bold text-lg ' >
                                <AiOutlineSearch />
                                </div>
                                <input
                                 className="h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b] "
                                  placeholder="Search items, collections, and accounts "
                                 />
                                </div>


                            <div className="flex flex-initial flex-row justify-end">
                            <div className="flex items-center mr-2">
                            <input
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            />
                            <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
                            <i className="fas fa-sun" />
                            <i className="fas fa-moon" />
                            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
                            </label>
                            </div>
                            </div>

{/* menu items  */}
            <div className='md:hidden flex '> 
              <MenuItems  active={active} setActive={setActive} />
              <div className="ml-4">
            <Button
            btnName='connect'
            handleClick={() => setMetamaskModal(true)}

             />
          </div>
            </div>
           



            <div className='md:hidden flex justify end items-center '>
            <div className=' text-3xl px-2 cursor-pointer '>
             <CgProfile />
            </div>
            <div className=' text-3xl px-2 cursor-pointer '>
              <MdOutlineAccountBalanceWallet />
            </div>
            </div> 

            <div className='hidden md:flex ml-2'>
            { isOpen ? ( <Image 
            src={images.cross}
            objectFit="contain"
                width={20}
                height={20}
                alt="close"
                onClick={() => setIsOpen(false)}
                className={theme === 'light' ? 'filter invert' : undefined}

            />


            ) : (
              <Image  
              src={images.menu}
                objectFit="contain"
                width={25}
                height={25}
                alt="menu"
                onClick={() => setIsOpen(true)}
                className={theme === 'light' ? 'filter invert' : undefined}
              />
            )

            }
            {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
              </div>
            
            <div className=" pb-20 border-t   dark:border-nft-black-1 border-nft-gray-1">
            <Button
      btnName="Connect"
      btnType="outline"
      classStyles="mx-2 rounded-lg"
      // handleClick={hasConnected}
      handleClick={ () => setmetaModal(true)}
      
    />
            </div>
            

          </div>
        )}
      </div>


{ metaMaskModal && (


      <Modal 
        header="Select a wallet"
        body1={(
          <div className="flex p-10 sm:px-4 border-t border-b dark:border-nft-black-3 border-nft-gray-1">
          metamask
          <div className='flex ml-10 my-[-8px] mr-[10px]'>
            <Image src={images.metamask} width={40} height={40}/>
          </div>

          </div>
        )}
       
          
          
        
        
           

         
         body2="wallet connect "
         body3='Coinbase Wallet'
        handleClose={() => setMetamaskModal(false)}
         />
)
}


{ metaModal && (


<Modal 

  header="Select a wallet"
   body2="wallet connect "
   body3='Coinbase Wallet'
  handleClose={() => setmetaModal(false)}
   />
)
}


      
    </nav>
  );
};

export default Navbar;

           