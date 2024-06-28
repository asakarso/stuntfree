'use client'

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faBaby } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';

export default function Beranda() {
    return (
      <main className="bg-gradient-to-b from-[#2A3C59] to-[#5B81BF] h-screen w-screen flex flex-col">
        {/* background */}
        <div>
            <Image src='../Left Bottom.svg' width={500} height={500} className="absolute bottom-0 left-0"></Image>
            <Image src="../Left Bottom.svg" width={500} height={500} className="absolute top-0 right-0 object-contain rotate-180 z-0"></Image>
        </div>
        
        {/* navbar */}
        <div className="p-5 flex h-fit justify-between w-screen text-3xl font-bold">
          <div className="flex items-center gap-5">
            <Link href='/menu'>
              <FontAwesomeIcon icon={faBars} className="w-10"/>
            </Link>
            <p className="text-4xl shadow-md font-medium shadow-md">Beranda</p>
          </div>
          <p className="text-[#2A3C59] z-10" >StuntFree</p>
        </div>

        {/* main */}
        <div className="flex w-screen mx-auto justify-center ">
          {/* left main */}
          <div className="flex-col text-black mr-[100px] ">
            <Calendar className="rounded-xl shadow-lg" aria-label="Date (Page Behaviour)" pageBehavior="single" /> 
            <div className="text-white flex-col mt-3 mb-2">
            
            <div className="flex-col">
              <p className="mb-2">Kegiatan</p>
              <div className="flex flex-col z-20 gap-2">
                <div className="flex items-center gap-3 bg-white w-fit text-black p-3 text-xs rounded-2xl">
                  <div className="w-10 h-10 bg-[#2A3C59] rounded-full">
                  </div>
                  <div>
                    <div>Konsultasi Dokter Anak</div>
                    <div>Kamis, 26 Juni 2024 | 09.00 AM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white w-fit text-black p-3 text-xs rounded-2xl">
                  <div className="w-10 h-10 bg-[#2A3C59] rounded-full">
                  </div>
                  <div>
                    <div>Konsultasi Dokter Anak</div>
                    <div>Kamis, 26 Juni 2024 | 09.00 AM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white w-fit text-black p-3 text-xs rounded-2xl">
                  <div className="w-10 h-10 bg-[#2A3C59] rounded-full">
                  </div>
                  <div>
                    <div>Konsultasi Dokter Anak</div>
                    <div>Kamis, 26 Juni 2024 | 09.00 AM</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* right main */}
          <div className="flex flex-col w-fit">
            {/* fakta menarik */}
            <div className="flex flex-col gap-5">
              <p>Fakta Menarik</p>
              <div className=" flex items-center bg-white w-fit text-black p-3 text-md rounded-2xl">
                <FontAwesomeIcon icon={faLightbulb} className="w-10 h-10">
                </FontAwesomeIcon>
                <div>
                  Tau ga sih? Perbanyak makan sayur dapat mengurangi stunting
                </div>
              </div>
              {/* informasi anak */}
              <div className="flex-col">
                <p>Informasi Anak</p>
                <div className="flex gap-2 w-50%">
                  <div className="flex items-center gap-3 bg-white w-[30%] text-black p-3 text-md text-center rounded-2xl pt-10">
                    <div className="text-center w-full h-full">
                      <p>Berat Badan</p>
                      <p className="text-[124px]">5<span className="text-xs">kg</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white w-[30%] text-black p-3 text-md text-center rounded-2xl pt-10">
                    <div className="text-center w-full h-full">
                      <p>Tinggi Badan</p>
                      <p className="text-[124px]">15<span className="text-xs">cm</span></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* edukasi */}
              <div className="flex-col">
                <p>Edukasi</p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-3 bg-white w-[23%] text-black p-3 text-md rounded-2xl ">
                    <FontAwesomeIcon icon={faBaby} className="w-10 h-10">
                    </FontAwesomeIcon>
                    <div>
                    Edukasi Nutrisi Anak Balita
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white w-[23%] text-black p-3 text-md rounded-2xl ">
                    <FontAwesomeIcon icon={faBaby} className="w-10 h-10">
                    </FontAwesomeIcon>
                    <div>
                    Edukasi Nutrisi Anak Balita
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white w-[23%] text-black p-3 text-md rounded-2xl ">
                    <FontAwesomeIcon icon={faBaby} className="w-10 h-10">
                    </FontAwesomeIcon>
                    <div>
                    Edukasi Nutrisi Anak Balita
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  