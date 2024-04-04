import Image from "next/image";
import localFont from 'next/font/local'
import Footer from './components/Footer'
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
                <a href="/stories/twobags">
                  <Image src="/splash_thumbs/twobags.png" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
                </a>
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Two Bags</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <a href="/stories">
                  <Image src="/splash_thumbs/eagle_and_cocks.png" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
                </a>
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Eagle and the Roosters</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <a href="/stories/dogandshadow">
                  <Image src="/splash_thumbs/dogandshadow.png" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
                </a>
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Dog and the Shadow</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>
          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <a href="/stories/wolfinsheep">
                  <Image src="/splash_thumbs/wolfinsheep.png" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
                </a>
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Wolf in Sheep&apos;s Clothing</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>

          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <a href="/stories/tortoiseandhare">
                  <Image src="/splash_thumbs/hareandtortoise.png" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
                </a>
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Hare and the Tortoise</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>

          <div className="w-full">
            <div className="w-full mb-1">
              <div className="overflow-hidden rounded-2xl">
                <a href="/stories/miceandweasels">
                  <Image src="/splash_thumbs/miceandweasels.png" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer hover:grayscale-0" alt="INTERACTIVE SHORT STORIES IN KHMER" height={10000} width={800} />
                </a>
              </div>
            </div>
            <div className="mt-3 text-[16px] mb-2">The Mice and the Weasels</div>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Easy</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">Aesop&apos;s Fable</button>
            <button className="py-1 mr-2 px-2 text-xs text-white rounded-md bg-[#429A85]">400 BCE</button>
          </div>

        </div>
      </div>

      <Footer></Footer>

    </main>
  );
}
