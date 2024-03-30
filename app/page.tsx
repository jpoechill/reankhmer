import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full font-['Open Sans']">
      <div className="fixed bg-white w-full uppercase text-[#428777] z-10 px-5 md:px-20 shadow-md top-0 flex flex-row items-center justify-between h-[60px]">
        <div>
          <Image src="/logo_white.svg" width={130} height={0} alt="REAN KHMER" />
          {/* Rean Khmer */}
        </div>
        <div className="hidden md:flex text-[#428777] flex-row text-[16px] items-center gap-10">

          <Image src="/title_blurb.svg" width={300} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-[20px] text-white mt-[60px] bg-[url('/splash_cover.jpg')] bg-no-repeat bg-cover bg-center h-[400px] mb-12">

        <Image src="/splash_hero_txt.svg" width={1000} height={500} alt="Learn Khmer by Reading Stories (in Khmer)" className="mb-5" />
        Learn Khmer by Reading Stories
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="bg-[#ccc] text-black rounded-3xl">
          <div className="p-10 w-[700px] text-[36px] text-center">
            កាបូបពីរ <br /><br />
            បុរសគ្រប់រូបកាន់កាបូបពីរទៅជាមួយ មួយនៅខាងមុខ និងមួយពីក្រោយ ហើយទាំងពីរគឺពោរពេញទៅដោយកំហុស។
            <br /><br />

            កាបូប​នៅ​ពី​មុខ​មាន​កំហុស​របស់​អ្នក​ជិត​ខាង​ដែល​នៅ​ពី​ក្រោយ​ខ្លួន​គាត់។
            <br /><br />

            ដូច្នេះ​ហើយ​ទើប​មនុស្ស​ប្រុស​មិន​មើល​ឃើញ​កំហុស​របស់​ខ្លួន ប៉ុន្តែ​មិន​ដែល​មើល​ឃើញ​កំហុស​របស់​អ្នក​ដទៃ​ឡើយ។
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-10">
        <div className="text-center text-[14px]">
          Made with Support From
        </div>
        <div className="flex flex-row gap-[60px] mt-10 justify-center text-sm">
          <div className="text-center">
            <Image src="/_female-01.jpg" width={80} height={0} className="mx-auto mb-3" alt="Virak"></Image>
            <span className="font-bold">Virak Pheach</span> (22) <br />
            Phnom Penh 🇰🇭
          </div>
          <div className="text-center">
            <Image src="/_female-02.png" width={80} height={0} className="mx-auto mb-3" alt="Virak"></Image>
            <span className="font-bold">Aun Heng</span> (22) <br />
            Phnom Penh 🇰🇭
          </div>
          <div className="text-center">
            <Image src="/_male-01.jpg" width={80} height={0} className="mx-auto mb-3" alt="Virak"></Image>
            <span className="font-bold">Virak Virath</span> (22) <br />
            Siem Reap 🇰🇭
          </div>
          <div className="text-center">
            <Image src="/_female-01.jpg" width={80} height={0} className="mx-auto mb-3" alt="Virak"></Image>
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
