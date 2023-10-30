"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'

import Link from "next/link";

import PullToRefresh from 'react-simple-pull-to-refresh';

export default function moneyLoad() {
  const router = useRouter()

  const RefreshEvent = () => {
    router.push("/load");
  }
setTimeout(() => {
    router.push("/")
    
}, 300);

  return (
    <PullToRefresh onRefresh={RefreshEvent}>
    
    <div className=" h-full grid place-items-center bg-gradient-to-t from-slate-200">
      {/*header*/}
      <header>
        <div className="flex flex-row">

          <h1 className="  -translate-x-24 text-2xl font-bold translate-y-6">
            홈
          </h1>
          <Image
            className="w-36 translate-x-24 translate-y-5"
            src={require("public/icon.png")}
          />
        </div>
      </header>
      {/*header*/}

      {/*fir container*/}
      <div className="w-80 h-16 mb-3 shadow-sm rounded-2xl translate-y-10 bg-white flex flex-row">
        <h1 className="font-bold text-lg translate-x-3 translate-y-5">
          내 계좌
        </h1>
        <Link href={"/all"}>
        <h1 className=" text-blue-500 font-medium text-lg translate-x-44 translate-y-5 ">
          전체보기 {">"}
        </h1>
        </Link>
      </div>
      {/*fir container*/}
      {/*sec container*/}

      <div className="w-80 h-44 rounded-2xl shadow-sm translate-y-10  bg-white">
        <div className="flex flex-row">
          <Image className="w-12 h-12 m-3" src={require("public/sin.png")} />
          <div>
            <div className="flex flex-row" >
              <h1 className=" translate-y-4">입출금</h1>
              <h1 className=" translate-y-4 text-gray-500">[한도제한계좌1]</h1>
            </div>
            <h1 className=" translate-y-3 text-gray-400 text-sm">
              신한 110-529-968658
            </h1>
          </div>
          <Image
            className="w-5 h-5 translate-y-9 "
            src={require("public/copy.png")}
          />
          <div className="space-y-1 translate-x-10 translate-y-5">
            <div className="w-1 h-1 rounded-full bg-gray-800" />
            <div className="w-1 h-1 rounded-full bg-gray-800" />
            <div className="w-1 h-1 rounded-full bg-gray-800" />
          </div>
        </div>

        <div className="flex flex-row">
          <h1 className="font-bold text-2xl translate-x-4">원</h1>
          <Image
            className="w-6 h-6 translate-x-5 translate-y-1"
            src={require("public/re.png")}
          />
        </div>

        <div className="flex flex-row space-x-2">
          <div className=" w-20 h-11 rounded-lg translate-x-5 translate-y-2 text-center bg-[#e7f0fb]">
            <h1 className=" translate-y-2.5 text-blue-600">이체</h1>
          </div>
          <div className=" w-28 h-11 rounded-lg translate-x-5 translate-y-2 text-center bg-[#e7f0fb]">
            <h1 className=" translate-y-2.5 text-blue-600">간편앱출금</h1>
          </div>
        </div>
      </div>

      <div>
      <Image
            className="w-80 translate-y-16 "
            src={require("public/top.png")}
          />
 <Image
            className="w-80 translate-y-16 "
            src={require("public/bott.png")}
          />
      </div>
      {/*sec container*/}

      {/*footer*/}

      <div className="h-24 bg-slate-200">
      
      </div>
      {/*footer*/}
    </div>
  </PullToRefresh>
  

 
  );
}
