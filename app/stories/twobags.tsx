'use client';

import Image from "next/image";
import localFont from 'next/font/local'
import { useRef, useState } from 'react'

//👇 Configure our local font object
const myFont = localFont({ src: '../../public/fonts/freehand.ttf' })


export default function Home() {
  const [caret, setCaret] = useState([false, false, false, false]);

  const toggleCaret = (caretIndex) => {
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

      <div className="flex flex-col justify-center items-center text-center text-[18px] text-white mt-[60px] bg-[url('/stories/eagle_and_cocks/eagle_02.jpg')] bg-no-repeat bg-cover bg-center h-[400px] mb-12">
        {/* <Image src="/splash_hero_txt.svg" width={1000} height={500} alt="Learn Khmer by Reading Stories (in Khmer)" className="mb-4" /> */}
        <div className={`${myFont.className}` + ' mt-0 text-[70px] leading-[110px] font-medium tracking-wide w-full select-none'}>
          សត្វឥន្ទ្រី និងមាន់ជល់
        </div>
        <div className="mt-2">
          The Eagle and the Roosters
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
              មាន​មាន់​ពីរ​ក្បាល​នៅ​ក្នុង​ចម្ការ​តែ​មួយ ហើយ​ពួក​គេ​បាន​ប្រយុទ្ធ​ដើម្បី​សម្រេច​ថា​អ្នក​ណា​គួរ​ធ្វើ​ជា​ម្ចាស់។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(0)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[0] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[0] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                There were two Roosters in the same farmyard, and they fought to decide who should be master.
              </div>
            </div>

            <div>
              <Image src="/stories/eagle_and_cocks/eagle_03.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(1)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ពេល​វាយ​គ្នា​ចប់ ជន​រង​គ្រោះ​ក៏​ទៅ​លាក់​ខ្លួន​នៅ​ជ្រុង​ងងឹត ។ ខណៈ​ដែល​អ្នក​ឈ្នះ​បាន​ហោះ​ឡើង​ទៅ​លើ​ដំបូល​ក្រោល​ហើយ​ស្រែក​ឆោឡោ។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(1)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[1] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[1] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                When the fight was over, the beaten one went and hid himself in a dark corner; while the victor flew up on to the roof of the stables and crowed lustily.
              </div>
            </div>

            <div>
              <Image src="/stories/eagle_and_cocks/eagle_04.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(2)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ប៉ុន្តែ​ឥន្ទ្រី​មួយ​ក្បាល​បាន​ឈ្លប​មើល​គាត់​ពី​ទី​ខ្ពស់​មក​លើ​មេឃ ហើយ​ហោះ​ចុះ​ក្រោម​យក​គាត់​ចេញ។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(2)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[2] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[2] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                But an Eagle espied him from high up in the sky, and swooped down and carried him off.
              </div>
            </div>

            <div>
              <Image src="/stories/eagle_and_cocks/eagle_05.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(3)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ភ្លាមៗនោះមាន់មួយក្បាលទៀតបានចេញពីជ្រុងរបស់គាត់ ហើយគ្រប់គ្រងលើគ្រែដោយគ្មានគូប្រជែង។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(3)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[3] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[3] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                Forthwith, the other Rooster came out of his corner and ruled the roost without a rival.
              </div>
            </div>

            <div className="w-full text-center pt-8 mb-0">
              •••
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-20">
        <div className="text-center text-[14px]">
          Made with Support From ❤️
        </div>
        <div className="w-full flex justify-center">

          <div className="grid grid-cols-2 w-full max-w-[500px] lg:max-w-[825px] max-auto px-10 lg:grid-cols-4 gap-10 gap-x-0 lg:gap-[60px] mt-10 justify-center text-sm">
            <div className="text-center">
              <Image src="/female-01.png" width={80} height={0} className="rounded-full bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
              <span className="font-bold">Virak Pheach</span> (19) <br />
              Phnom Penh 🇰🇭
            </div>
            <div className="text-center">
              <Image src="/female-02.png" width={80} height={0} className="rounded-full bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
              <span className="font-bold">Aun Heng</span> (22) <br />
              Phnom Penh 🇰🇭
            </div>
            <div className="text-center">
              <Image src="/male-01.png" width={80} height={0} className="rounded-full bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
              <span className="font-bold">Virak Virath</span> (23) <br />
              Siem Reap 🇰🇭
            </div>
            <div className="text-center">
              <Image src="/male-02.png" width={80} height={0} className="rounded-full bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
              <span className="font-bold">Sok Chanet</span> (22) <br />
              Battambang 🇰🇭
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[60px] pb-12 w-full flex flex-col justify-center bg-[url('/footer_bg.jpg')] bg-no-repeat bg-cover bg-center text-white p-11 text-center">
        <div className="text-[14px] font-bold">
          ABOUT THIS WEBSITE
        </div>
        <div className="pt-5 w-full flex justify-center">
          <div className="max-w-[800px] text-[14px]">
            At the heart of our endeavor lies a deep commitment to fostering cultural exchange and understanding. By providing translations of short stories from English into Khmer, we aim to celebrate the beauty of language and literature while simultaneously preserving and promoting the unique heritage of Cambodia. Through our collective efforts, we hope to foster a deeper understanding and appreciation of both English and Khmer literature, strengthening the bonds that connect us as global citizens while celebrating the unique beauty of Cambodia&apos;s cultural heritage.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center bg-[#429A85] text-white p-6 text-center">
        <Image src="/logo_dark.svg" width={210} height={0} alt="REAN KHMER" />
      </div>
    </main >
  );
}
