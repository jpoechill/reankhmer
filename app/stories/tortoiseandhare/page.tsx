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

      <div className="flex flex-col justify-center items-center text-center text-[18px] text-white mt-[60px] bg-[url('/stories/tortoiseandhare/tortoiseandhare_01.jpg')] bg-no-repeat bg-cover bg-center h-[400px] mb-12">
        {/* <Image src="/splash_hero_txt.svg" width={1000} height={500} alt="Learn Khmer by Reading Stories (in Khmer)" className="mb-4" /> */}
        <div className={`${myFont.className}` + ' mt-0 text-[70px] leading-[110px] font-medium tracking-wide w-full select-none'}>
          ឆ្កែនិងស្រមោល
        </div>
        <div className="mt-2">
          The Tortoise and the Hare
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
              ថ្ងៃមួយ សត្វទន្សាយកំពុងលេងសើចនឹងអណ្តើក ដោយសារវាយឺតពេកនៅលើជើងរបស់គាត់។ អណ្តើកបាននិយាយថា &quot;ចាំបន្តិច&quot; &quot;ខ្ញុំនឹងរត់ប្រណាំងជាមួយអ្នក ហើយខ្ញុំនឹងភ្នាល់ថាខ្ញុំឈ្នះ&quot;
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(0)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[0] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[0] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                A Hare was one day making fun of a Tortoise for being so slow upon his feet. &quot;Wait a bit,&quot; said the Tortoise; &quot;I&apos;ll run a race with you, and I&apos;ll wager that I win.&quot;
              </div>
            </div>

            <div>
              <Image src="/stories/tortoiseandhare/tortoiseandhare_02.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(1)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              &quot;អូ!&quot; សត្វទន្សាយឆ្លើយថា &quot;តោះសាកល្បងមើល&quot;។ ហើយភ្លាមៗនោះ គេបានយល់ព្រមថា កញ្ជ្រោងគួរតែរៀបចំផ្លូវសម្រាប់ពួកគេ ហើយធ្វើជាចៅក្រម។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(1)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[1] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[1] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                &quot;Oh, well,&quot; replied the Hare, who was much amused at the idea, &quot;let&apos;s try and see&quot;; and it was soon agreed that the fox should set a course for them, and be the judge.
              </div>
            </div>

            <div>
              <Image src="/stories/tortoiseandhare/tortoiseandhare_03.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(2)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ពេល​វេលា​បាន​មក​ដល់​អ្នក​ទាំង​ពីរ​ចាប់​ផ្តើម​ដើរ​លេង​ជាមួយ​គ្នា ប៉ុន្តែ​សត្វ​ទន្សាយ​ក៏​មក​ដល់​ពេល​ឆាប់​ៗ​នេះ គិត​ថា​គាត់​ប្រហែល​ជា​បាន​សម្រាក​ដូច​គ្នា ដូច្នេះ​ហើយ​គាត់​ក៏​ដេក​លក់​យ៉ាង​លឿន។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(2)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[2] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[2] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                When the time came both started off together, but the Hare was soon so far ahead that he thought he might as well have a rest: so down he lay and fell fast asleep.
              </div>
            </div>


            <div>
              <Image src="/stories/tortoiseandhare/tortoiseandhare_04.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(3)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ខណៈនោះ អណ្តើក​បាន​បន្ត​រុក​រុក​បន្ត ហើយ​ទាន់​ពេល​វេលា​ក៏​ឈាន​ដល់​គោលដៅ។ ទីបំផុត ទន្សាយភ្ញាក់ឡើងដោយចាប់ផ្តើម ហើយរត់យ៉ាងលឿនបំផុត ប៉ុន្តែគ្រាន់តែដឹងថា អណ្តើកបានឈ្នះការប្រណាំងរួចហើយ។
            </div>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(3)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[3] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[3] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                Meanwhile the Tortoise kept plodding on, and in time reached the goal. At last the Hare woke up with a start, and dashed on at his fastest, but only to find that the Tortoise had already won the race.
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
