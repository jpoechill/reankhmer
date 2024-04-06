
'use client';

import Image from "next/image";
import localFont from 'next/font/local'
import { useRef, useState } from 'react'
import Footer from '@/app/components/Footer'
import { redirect } from 'next/navigation'
import _stories from '../../data.json'

const myFont = localFont({ src: '../../../public/fonts/freehand.ttf' })

export default function Home({ params }: { params: { slug: string } }) {
  const story = _stories.find(story => story.name === params.slug)

  if (!story) {
    redirect("/")
  }

  const [caret, setCaret] = useState(story.blocks.map(() => false));
  const toggleCaret = (caretIndex: number) => {
    setCaret(prev => {
      return prev.map((item, itemIndex) => caretIndex === itemIndex ? !item : item)
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

      <div style={{ "backgroundImage": "url('" + story.splash + "')" }} className={"flex flex-col justify-center items-center text-center text-[18px] text-white mt-[60px] bg-no-repeat bg-cover bg-center h-[400px] mb-0"}>
        <div className={`${myFont.className}` + ' text-center mt-0 text-[70px] leading-[110px] font-medium tracking-wide w-full select-none'}>
          {story.titleKhmer}
        </div>

        <div className="mt-2">
          {story.title}
        </div>
        <div className="mt-2 text-[14px]">
          <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
          <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
          <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-full px-0 max-w-[1100px] mt-10 mb-0">
          <div className='w-full'>

            {
              story.blocks.map((block, index) => {
                if (block.type === 'text') {
                  return <div key={index} className="px-10 md:px-5 mb-10">
                    <div onClick={() => toggleCaret(index)} className={`${myFont.className}` + ' cursor-pointer text-[34px] leading-[70px] font-medium tracking-wide w-full select-none'}>
                      {block.khmer}
                    </div>
                    <div>
                      <audio controls className="w-full mt-2 mb-5">
                        <source src={block.audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div onClick={() => toggleCaret(index)} className="flex flex-row gap-3 relative text-[18px] pl-3 mt-2 mb-0">
                      <div className="cursor-pointer min-h-[22px] min-w-[22px]">
                        <Image src={!caret[index] ? '/caret_up.svg' : '/caret_right.svg'} width={22} height={22} className="mt-[2px] mx-auto" alt="Virak"></Image>
                      </div>
                      <div className={(caret[index] === true ? 'opacity-100' : 'opacity-0') + "  transition-opacity ease-in-out duration-200 pl-2"}>
                        {block.english}
                      </div>
                    </div>
                  </div>
                } else if (block.type === 'image') {
                  return <div key={index}>
                    <div>
                      <Image src={block.src || ''} width={900} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" className="w-full mt-10 pt-5 pb-5 mb-5" />
                    </div>
                  </div>
                }
              })
            }

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
