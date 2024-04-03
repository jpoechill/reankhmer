'use client';

import Image from "next/image";
import localFont from 'next/font/local'
import { useRef, useState } from 'react'

import Footer from '@/app/components/Footer'

//👇 Configure our local font object
const myFont = localFont({ src: '../../../public/fonts/freehand.ttf' })


export default function Home() {
  const [caret, setCaret] = useState([false, false, false, false]);

  const toggleCaret = (caretIndex: number) => {
    // alert('123')
    setCaret(prev => {
      // console.log(prev[0])
      // prev[0] = !prev[0]
      return prev.map((item, itemIndex) => { return caretIndex === itemIndex ? !item : item })
    })
  }

  return (
    <main className="h-full font-['Open Sans']">
      <div className="fixed bg-white w-full uppercase text-[#428777] z-10 px-5 md:px-20 shadow-md top-0 flex flex-row items-center justify-between h-[60px]">
        <div>
          <a href="/">
            <Image src="/logo_white.svg" width={140} height={0} alt="REAN KHMER" />
          </a>
        </div>
        <div className="hidden md:flex text-[#428777] flex-row text-[16px] items-center gap-10">

          <Image src="/title_blurb.svg" width={300} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center text-[18px] text-white mt-[60px] bg-[url('/stories/miceandweasels/miceandweasels_01.jpg')] bg-no-repeat bg-cover bg-center h-[400px] mb-12">
        {/* <Image src="/splash_hero_txt.svg" width={1000} height={500} alt="Learn Khmer by Reading Stories (in Khmer)" className="mb-4" /> */}
        <div className={`${myFont.className}` + ' mt-0 text-[70px] leading-[110px] font-medium tracking-wide w-full select-none'}>
          ឆ្កែនិងស្រមោល
        </div>
        <div className="mt-2">
          The Dog and the Shadow
        </div>
        <div className="mt-2 text-[14px]">
          <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
          <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
          <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-full px-10 max-w-[1100px] mt-10 mb-0">
          <div className='w-full'>

            <div onClick={() => toggleCaret(0)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              សត្វឆ្កែមួយក្បាលកំពុងឆ្លងកាត់ស្ពានឈើមួយនៅលើទឹកហូរដែលមានសាច់មួយនៅក្នុងមាត់របស់វា នៅពេលដែលវាបានឃើញការឆ្លុះបញ្ចាំងផ្ទាល់របស់វានៅក្នុងទឹក។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(0)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[0] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[0] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                There was war between the Mice and the Weasels, in which the Mice always got the worst of it, numbers of them being killed and eaten by the Weasels.
              </div>
            </div>

            <div>
              <Image src="/stories/miceandweasels/miceandweasels_02.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(1)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              គាត់គិតថាវាជាឆ្កែមួយផ្សេងទៀតដែលមានសាច់មួយដុំធំជាងពីរដង។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(1)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[1] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[1] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                So they called a council of war, in which an old Mouse got up and said, &quot;It&apos;s no wonder we are always beaten, for we have no generals to plan our battles and direct our movements in the field.&quot;</div>
            </div>

            <div>
              <Image src="/stories/miceandweasels/miceandweasels_03.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(1)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ដូច្នេះ គាត់​ក៏​រត់​ទៅ​រក​ឆ្កែ​មួយ​ក្បាល​ទៀត ដើម្បី​យក​ដុំ​ធំ​ជាង​នេះ។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(1)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[1] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[1] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                Acting on his advice, they chose the biggest Mice to be their leaders, and these, in order to be distinguished from the rank and file, provided themselves with helmets bearing large plumes of straw.
              </div>
            </div>

            <div>
              <Image src="/stories/miceandweasels/miceandweasels_04.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(2)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ប៉ុន្តែជាការពិតណាស់ អ្វីទាំងអស់ដែលបានកើតឡើងនោះគឺថាគាត់មិនបានទទួល។ មួយ​គឺ​គ្រាន់​តែ​ជា​ស្រមោល ហើយ​មួយ​ទៀត​ត្រូវ​បាន​គេ​យក​ទៅ​ដោយ​ចរន្ត។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(2)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[2] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[2] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                They then led out the Mice to battle, confident of victory: but they were defeated as usual, and were soon scampering as fast as they could to their holes.
              </div>
            </div>


            <div>
              <Image src="/stories/miceandweasels/miceandweasels_05.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(2)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ប៉ុន្តែជាការពិតណាស់ អ្វីទាំងអស់ដែលបានកើតឡើងនោះគឺថាគាត់មិនបានទទួល។ មួយ​គឺ​គ្រាន់​តែ​ជា​ស្រមោល ហើយ​មួយ​ទៀត​ត្រូវ​បាន​គេ​យក​ទៅ​ដោយ​ចរន្ត។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(2)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[2] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[2] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                All made their way to safety without difficulty except the leaders, who were so hampered by the badges of their rank that they could not get into their holes, and fell easy victims to their pursuers.
              </div>
            </div>


            <div className="w-full text-center pt-8 mb-0">
              •••
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main >
  );
}
