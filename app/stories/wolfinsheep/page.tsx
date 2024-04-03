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

      <div className="flex flex-col justify-center items-center text-center text-[18px] text-white mt-[60px] bg-[url('/stories/wolfinsheep/wolfinsheep_01.jpg')] bg-no-repeat bg-cover bg-center h-[400px] mb-12">
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
              ចចក​បាន​សម្រេចចិត្ត​ក្លែង​ខ្លួន​គាត់​ដើម្បី​ឱ្យ​គាត់​អាច​ចាប់​ហ្វូង​ចៀម​ដោយ​មិន​ខ្លាច​ការ​រកឃើញ។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(0)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[0] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[0] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                A Wolf resolved to disguise himself in order that he might prey upon a flock of sheep without fear of detection.
              </div>
            </div>

            <div>
              <Image src="/stories/wolfinsheep/wolfinsheep_02.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(1)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ដូច្នេះ គាត់​បាន​ស្លៀក​ពាក់​ស្បែក​ចៀម ហើយ​រអិល​ជើង​ទៅ​លើ​ហ្វូង​ចៀម ពេល​ដែល​វា​ចេញ​នៅ​វាល​ស្មៅ។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(1)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[1] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[1] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                So he clothed himself in a sheepskin, and slipped among the sheep when they were out at pasture.
              </div>
            </div>

            <div>
              <Image src="/stories/wolfinsheep/wolfinsheep_03.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>
            <div onClick={() => toggleCaret(2)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              គាត់​បាន​បោក​បញ្ឆោត​អ្នក​គង្វាល​ទាំង​ស្រុង ហើយ​ពេល​ហ្វូង​ចៀម​ត្រូវ​បាន​គេ​កត់​ទុក​មួយ​យប់ គាត់​ត្រូវ​បាន​គេ​បិទ​ជាមួយ​អ្នក​ដែល​នៅ​សល់។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(2)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[2] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[2] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                He completely deceived the shepherd, and when the flock was penned for the night he was shut in with the rest.
              </div>
            </div>


            <div>
              <Image onClick={() => toggleCaret(3)} src="/stories/wolfinsheep/wolfinsheep_04.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>
            <div onClick={() => toggleCaret(3)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              គាត់​បាន​បោក​បញ្ឆោត​អ្នក​គង្វាល​ទាំង​ស្រុង ហើយ​ពេល​ហ្វូង​ចៀម​ត្រូវ​បាន​គេ​កត់​ទុក​មួយ​យប់ គាត់​ត្រូវ​បាន​គេ​បិទ​ជាមួយ​អ្នក​ដែល​នៅ​សល់។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(3)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[3] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[3] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                But that very night as it happened, the shepherd, requiring a supply of mutton for the table, laid hands on the Wolf in mistake for a Sheep, and killed him with his knife on the spot.
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
