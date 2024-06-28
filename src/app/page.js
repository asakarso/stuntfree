import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="bg-gradient-to-b from-[#2A3C59] to-[#5B81BF] h-screen w-screen flex ">
      <div>
        <Image src='Left Bottom.svg' width={500} height={500} className="absolute bottom-0 left-0"></Image>
        <Image src='Right Up.svg' width={1000} height={500} className="absolute top-0 right-[20%] "></Image>

      </div>
      <div className="sign-left w-1/2 flex">
        <div className="justify-center m-auto text-center grid gap-8">
          <p className="text-xl">Selamat Datang di</p>
          <p className="text-7xl drop-shadow-2xl">StuntFree</p>
          <p className="text-xl"><i>"Zero Stunting Smart Parenting"</i></p>
        </div>
      </div>
      <div className="sign-right w-1/2 bg-[#E3E3E3] h-screen rounded-l-[10%] shadow-2xl z-10 flex p-36">
        <div className="justify-center m-auto text-center grid gap-8 text-black">
          <div className="grid gap-6">
            <p className="text-5xl drop-shadow-2xl">Sign In</p>
            <p className="text-lg text-slate-600">Silahkan lengkapi detail informasi anda untuk masuk ke akun anda.</p>
          </div>
          <div className="grid gap-6">
            <div>
            <input type="text" placeholder="username" className="appearance-none bg-transparent border-none w-full text-black mr-3 pb-3 leading-tight focus:outline-none"  required></input>
            <div className="w-full border border-1 border-slate-400"></div>
            </div>
            <div>
              <input type="password" placeholder="password" className="appearance-none bg-transparent border-none w-full text-black mr-3 pb-3 leading-tight focus:outline-none"  required></input>
              <div className="w-full border border-1 border-slate-400"></div>
            </div>
          </div>
          <p className="text-md text-slate-500 cursor-pointer">Lupa kata sandi?</p>
          <Link href='/beranda' className="bg-[#546C91] p-3 text-white w-[30%] m-auto rounded-3xl active:bg-[#33486A]">sign in</Link>
          <p className="text-md text-slate-500 cursor-pointer">Belum Punya Akun? <Link href="./sign-up"><b>Daftar Sekarang!</b></Link></p>
        </div>
      </div>
    </main>
  );
}
