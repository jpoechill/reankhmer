import Image from "next/image";
import localFont from 'next/font/local'

//👇 Configure our local font object
const myFont = localFont({ src: '.././freehand.ttf' })

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center mt-20">
        <div className="text-center text-[14px]">
          Made with ❤️ and Support From
        </div>
        <div className="w-full flex justify-center">

          <div className="grid grid-cols-2 w-full max-w-[500px] lg:max-w-[825px] max-auto px-10 lg:grid-cols-4 gap-10 gap-x-0 lg:gap-[60px] mt-10 justify-center text-sm">
            <div className="text-center">
              <Image src="/female-01.png" width={80} height={0} className="rounded-full grayscale bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
              <span className="font-bold">Virak Pheach</span> (19) <br />
              Phnom Penh 🇰🇭
            </div>
            <div className="text-center">
              <Image src="/female-02.png" width={80} height={0} className="rounded-full grayscale bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
              <span className="font-bold">Aun Heng</span> (22) <br />
              Phnom Penh 🇰🇭
            </div>
            <div className="text-center">
              <Image src="/male-01.png" width={80} height={0} className="rounded-full grayscale bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
              <span className="font-bold">Virak Virath</span> (23) <br />
              Siem Reap 🇰🇭
            </div>
            <div className="text-center">
              <Image src="/male-02.png" width={80} height={0} className="rounded-full grayscale bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
              <span className="font-bold">Sok Chanet</span> (22) <br />
              Battambang 🇰🇭
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[60px] pb-12 w-full flex flex-col justify-center bg-[#111111] bg-no-repeat bg-cover bg-center text-white p-11 text-center">
        <div className="text-[14px] font-bold">
          ABOUT THIS WEBSITE
        </div>
        <div className="pt-5 w-full flex justify-center">
          <div className="max-w-[800px] text-[14px]">
            At the heart of our endeavor lies a deep commitment to fostering cultural exchange and understanding. By providing translations of short stories from English into Khmer, we aim to celebrate the beauty of language and literature while simultaneously preserving and promoting the unique heritage of Cambodia. Our website is more than just a repository of translated stories; it is a testament to the power of language to unite, inspire, and enrich lives. Through our collective efforts, we hope to foster a deeper understanding and appreciation of both English and Khmer literature, strengthening the bonds that connect us as global citizens while celebrating the unique beauty of Cambodia&apos;s cultural heritage.
            <br /><br />
            <span className="italic">
              All images courtesy of Midjourney.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center bg-[#429A85] text-white p-6 text-center">
        <a href="/">
          <Image src="/logo_dark.svg" width={210} height={0} alt="REAN KHMER" />
        </a>
      </div>
    </div>
  );
}
