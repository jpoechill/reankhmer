'use client';

import Image from "next/image";
import localFont from 'next/font/local'
import { useRef, useState } from 'react'

import Footer from '@/app/components/Footer'

//👇 Configure our local font object
const myFont = localFont({ src: '../../../public/fonts/freehand.ttf' })


export default function Home() {
  const [caret, setCaret] = useState([false, false, false, false, false]);

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
              មានសង្រ្គាមរវាងសត្វកណ្ដុរ និងសត្វកណ្ដុរ ដែលក្នុងនោះសត្វកណ្ដុរតែងតែទទួលបានភាពអាក្រក់បំផុតពីវា ដោយចំនួនពួកវាត្រូវបានសម្លាប់ និងស៊ីដោយសត្វខ្លា។
            </div>
            <audio controls className="w-full mb-5">
              {/* <source src="horse.ogg" type="audio/ogg"> */}
              <source src="/stories/miceandweasels/audio_01.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
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
            <audio controls className="w-full mb-5">
              {/* <source src="horse.ogg" type="audio/ogg"> */}
              <source src="/stories/miceandweasels/audio_02.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
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

            <div onClick={() => toggleCaret(2)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ដោយធ្វើតាមដំបូន្មានរបស់គាត់ ពួកគេបានជ្រើសរើសសត្វកណ្ដុរធំជាងគេធ្វើជាអ្នកដឹកនាំរបស់ពួកគេ ហើយពួកគេទាំងនេះ
              ដើម្បីអោយមានភាពខុសប្លែកពីឋានៈ និងឯកសារ បានផ្តល់មួកសុវត្ថិភាពដល់ពួកគេដែលមានចំបើងយ៉ាងច្រើន។
            </div>
            <audio controls className="w-full mb-5">
              {/* <source src="horse.ogg" type="audio/ogg"> */}
              <source src="/stories/miceandweasels/audio_03.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <audio controls className="w-full mb-5">
              {/* <source src="horse.ogg" type="audio/ogg"> */}
              <source src="/stories/miceandweasels/audio_04.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(2)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[2] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[2] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                Acting on his advice, they chose the biggest Mice to be their leaders, and these, in order to be distinguished from the rank and file, provided themselves with helmets bearing large plumes of straw.
              </div>
            </div>

            <div>
              <Image src="/stories/miceandweasels/miceandweasels_04.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>
            <div onClick={() => toggleCaret(3)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              បន្ទាប់មក ពួកគេបាននាំសត្វកណ្ដុរចេញប្រយុទ្ធ ដោយមានទំនុកចិត្តលើជ័យជម្នះ
              ប៉ុន្តែពួកគេត្រូវបានចាញ់ដូចធម្មតា ហើយមិនយូរប៉ុន្មានក៏ត្រូវរត់គេចខ្លួនយ៉ាងលឿនតាមដែលអាចធ្វើបានទៅកាន់រន្ធរបស់ពួកគេ។
            </div>
            <audio controls className="w-full mb-5">
              {/* <source src="horse.ogg" type="audio/ogg"> */}
              <source src="/stories/miceandweasels/audio_05.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <audio controls className="w-full mb-5">
              {/* <source src="horse.ogg" type="audio/ogg"> */}
              <source src="/stories/miceandweasels/audio_06.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(3)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[3] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[3] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
                They then led out the Mice to battle, confident of victory: but they were defeated as usual, and were soon scampering as fast as they could to their holes.
              </div>
            </div>


            <div>
              <Image src="/stories/miceandweasels/miceandweasels_05.jpg" width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mb-12" />
            </div>

            <div onClick={() => toggleCaret(4)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
              ទាំងអស់បានធ្វើដំណើរទៅកាន់ទីទួលសុវត្ថិភាពដោយគ្មានការលំបាក លើកលែងតែមេដឹកនាំដែលត្រូវបានរារាំងយ៉ាងខ្លាំងដោយផ្លាកសញ្ញានៃឋានៈរបស់ពួកគេ
              ដែលពួកគេមិនអាចចូលទៅក្នុងរន្ធរបស់ពួកគេ ហើយបានធ្លាក់ចូលទៅក្នុងជនរងគ្រោះយ៉ាងងាយស្រួលចំពោះអ្នកដេញតាមរបស់ពួកគេ។
            </div>
            <audio controls className="w-full mb-5">
              {/* <source src="horse.ogg" type="audio/ogg"> */}
              <source src="/stories/miceandweasels/audio_07.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <audio controls className="w-full mb-5">
              {/* <source src="horse.ogg" type="audio/ogg"> */}
              <source src="/stories/miceandweasels/audio_08.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex flex-row gap-3 relative text-[18px] pl-5 mt-2 mb-20">
              <div onClick={() => toggleCaret(4)} className="absolute left-3 cursor-pointer">
                <Image src={!caret[4] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
              </div>
              <div className={(caret[4] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200  pl-9"}>
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
