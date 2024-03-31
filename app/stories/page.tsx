import Image from "next/image";
import localFont from 'next/font/local'

//👇 Configure our local font object
const myFont = localFont({ src: '../freehand.ttf' })

export default function Home() {
  return (
    <main className="h-full font-['Open Sans']">
      <div className="fixed bg-white w-full uppercase text-[#428777] z-10 px-5 md:px-20 shadow-md top-0 flex flex-row items-center justify-between h-[60px]">
        <div>
          <a href="/">
            <Image src="/logo_white.svg" width={130} height={0} alt="REAN KHMER" />
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
        <div className="w-full px-10 max-w-[1100px] mb-10">
          <div className={`${myFont.className}` + ' text-[34px] leading-[70px] font-medium tracking-wide w-full'}>
            មាន​មាន់​ពីរ​ក្បាល​នៅ​ក្នុង​ចម្ការ​តែ​មួយ ហើយ​ពួក​គេ​បាន​ប្រយុទ្ធ​ដើម្បី​សម្រេច​ថា​អ្នក​ណា​គួរ​ធ្វើ​ជា​ម្ចាស់។ <br /><br />
            ពេល​វាយ​គ្នា​ចប់ ជន​រង​គ្រោះ​ក៏​ទៅ​លាក់​ខ្លួន​នៅ​ជ្រុង​ងងឹត ។ <br /><br />
            ខណៈ​ដែល​អ្នក​ឈ្នះ​បាន​ហោះ​ឡើង​ទៅ​លើ​ដំបូល​ក្រោល​ហើយ​ស្រែក​ឆោឡោ។<br /><br />
            ប៉ុន្តែ​ឥន្ទ្រី​មួយ​ក្បាល​បាន​ឈ្លប​មើល​គាត់​ពី​ទី​ខ្ពស់​មក​លើ​មេឃ
            ហើយ​ហោះ​ចុះ​ក្រោម​យក​គាត់​ចេញ។  <br /><br />
            ភ្លាមៗនោះ Cock
            ម្នាក់ទៀតបានចេញពីជ្រុងរបស់គាត់
            ហើយគ្រប់គ្រង roost
            ដោយគ្មានគូប្រជែង។

          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-20">
        <div className="text-center text-[14px]">
          Made with Support From ❤️
        </div>
        <div className="flex flex-row gap-[60px] mt-10 justify-center text-sm">
          <div className="text-center">
            <Image src="/female-01.png" width={80} height={0} className="rounded-full bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
            <span className="font-bold">Virak Pheach</span> (22) <br />
            Phnom Penh 🇰🇭
          </div>
          <div className="text-center">
            <Image src="/female-02.png" width={80} height={0} className="rounded-full bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
            <span className="font-bold">Aun Heng</span> (22) <br />
            Phnom Penh 🇰🇭
          </div>
          <div className="text-center">
            <Image src="/male-01.png" width={80} height={0} className="rounded-full bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
            <span className="font-bold">Virak Virath</span> (22) <br />
            Siem Reap 🇰🇭
          </div>
          <div className="text-center">
            <Image src="/male-02.png" width={80} height={0} className="rounded-full bg-[#53c2a8] mx-auto mb-3" alt="Virak"></Image>
            <span className="font-bold">Sok Sok Chanet</span> (22) <br />
            Battambang 🇰🇭
          </div>
        </div>
      </div>

      <div className="mt-[60px] w-full flex flex-col justify-center bg-[#111] text-white p-11 text-center">
        <div className="text-[14px]">
          ABOUT THIS WEBSITE
        </div>
        <div className="pt-5 w-full flex justify-center">
          <div className="max-w-[800px] text-[14px]">
            At the heart of our endeavor lies a deep commitment to fostering cultural exchange and understanding. By providing translations of short stories from English into Khmer, we aim to celebrate the beauty of language and literature while simultaneously preserving and promoting the unique heritage of Cambodia. Our website is more than just a repository of translated stories; it is a testament to the power of language to unite, inspire, and enrich lives. Through our collective efforts, we hope to foster a deeper understanding and appreciation of both English and Khmer literature, strengthening the bonds that connect us as global citizens while celebrating the unique beauty of Cambodia&apos;s cultural heritage.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center bg-[#429A85] text-white p-6 text-center">
        <Image src="/logo_dark.svg" width={190} height={0} alt="REAN KHMER" />
      </div>
    </main>
  );
}
