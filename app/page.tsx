import Image from "next/image";
import localFont from 'next/font/local'

//👇 Configure our local font object
const myFont = localFont({ src: './freehand.ttf' })

export default function Home() {
  return (
    <main className="{$myFont} h-full font-['Open Sans']">
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

      <div className="flex flex-col justify-center items-center text-[18px] text-white mt-[60px] bg-[url('/splash_cover_2.jpg')] bg-no-repeat bg-cover bg-center h-[400px] mb-12">
        <Image src="/splash_hero_txt.svg" width={1000} height={500} alt="Learn Khmer by Reading Stories (in Khmer)" className="mb-3" />
        Learn Khmer by Reading Stories
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full px-10 lg:grid-cols-3 gap-y-10 gap-7 max-w-[1100px]">


          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/splash_thumbs/eagle_and_cocks.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Eagle and the Cocks</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <a href="/stories">
                  <Image src="/splash_thumbs/eagle_and_cocks.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
                </a>
              </div>

            </div>
            <div className="mt-3 text-[16px] mb-2">The Eagle and the Cocks</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/splash_thumbs/eagle_and_cocks.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Eagle and the Cocks</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/splash_thumbs/eagle_and_cocks.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Eagle and the Cocks</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/splash_thumbs/eagle_and_cocks.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Eagle and the Cocks</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/splash_thumbs/eagle_and_cocks.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Eagle and the Cocks</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/splash_thumbs/eagle_and_cocks.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Eagle and the Cocks</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
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
            At the heart of our endeavor lies a deep commitment to fostering cultural exchange and understanding. By providing translations of short stories from English into Khmer, we aim to celebrate the beauty of language and literature while simultaneously preserving and promoting the unique heritage of Cambodia. Our website is more than just a repository of translated stories; it is a testament to the power of language to unite, inspire, and enrich lives. Through our collective efforts, we hope to foster a deeper understanding and appreciation of both English and Khmer literature, strengthening the bonds that connect us as global citizens while celebrating the unique beauty of Cambodia&apos;s cultural heritage.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center bg-[#429A85] text-white p-6 text-center">
        <Image src="/logo_dark.svg" width={210} height={0} alt="REAN KHMER" />
      </div>
    </main>
  );
}
