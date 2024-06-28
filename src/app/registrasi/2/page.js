import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Form() {
    return (
      <main className="bg-gradient-to-b from-[#2A3C59] to-[#5B81BF] h-screen w-screen flex ">
        <div>
            <Image src='../Left Bottom.svg' width={500} height={500} className="absolute bottom-0 left-0"></Image>
            <Image src="../Left Bottom.svg" width={500} height={500} className="absolute top-0 right-0 object-contain rotate-180"></Image>
        </div>
        <div className="flex flex-col justify-center items-center text-center margin-0-auto w-screen gap-14">
            <div className="flex items-center gap-2">
                <div className="w-[11px] h-[11px] rounded-full bg-slate-400"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-white"></div>
                <div className="w-[11px] h-[11px] rounded-full bg-slate-400"></div>
                <div className="w-[11px] h-[11px] rounded-full bg-slate-400"></div>
                <div className="w-[11px] h-[11px] rounded-full bg-slate-400"></div>
                <div className="w-[11px] h-[11px] rounded-full bg-slate-400"></div>
                <div className="w-[11px] h-[11px] rounded-full bg-slate-400"></div>
            </div>
            <p className="text-3xl font-bold tracking-wide">Masukkan Jenis Kelamin Bayi Anda</p>
            <div className="w-[40%]">
                <div className="flex gap-8 justify-center">
                  <Link href='./3' className="bg-[#E3E3E3] px-4 py-2 shadow-lg rounded-3xl text-[#394E6D] font-semibold ">Perempuan</Link>
                  <Link href='./3' className="bg-[#E3E3E3] px-4 py-2 shadow-lg rounded-3xl text-[#394E6D] font-semibold ">Laki-Laki</Link>
                </div>
            </div>
        </div>
      </main>
    );
  }
  