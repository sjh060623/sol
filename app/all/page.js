import Image from "next/image";
import Link from "next/link";

export default function All() {
  return (
    <div>
      <div className=" h-full grid place-items-center ">
        {/*header*/}
        <header>
          <div className="flex flex-row">
            <Link href={"/#"}>
              <h1 className="  -translate-x-12 text-xl translate-y-6">
                {"<"} 전체계좌조회
              </h1>
            </Link>
            <Image
              className="w-36 translate-x-12 translate-y-4"
              src={require("public/icon.png")}
            />
          </div>
        </header>
        {/*header*/}

        {/*fir container*/}
        <div className="w-full h-12 flex translate-y-5 flex-row bg-slate-100  place-items-center">
          <div className=" translate-x-4 flex flex-row ">
            <h1 className="text-lg">전체계좌</h1>
            <h1 className="text-lg text-blue-500 translate-x-2">4</h1>
            <Link href="/allaccLoad">
            <Image
            className="w-6 h-6 translate-x-64 translate-y-0.5"
            src={require("public/re.png")}
          />
          </Link>
          </div>
        </div>
        {/*fir container*/}

   
        {/*sec container*/}

        <div className="w-80 h-36 rounded-2xl shadow-sm translate-y-10 border-2 bg-white">
          <div className="flex flex-row">
            <Image
              className="w-7 h-7 m-4 translate-x-2 translate-y-1"
              src={require("public/sin.png")}
            />
            <div>
              <div className="flex flex-row">
                <h1 className=" translate-y-4">입출금</h1>
                <h1 className=" translate-y-4 text-gray-500">[입출금계좌1]</h1>
              </div>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                신한 110-529-968658
              </h1>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                입출금계좌
              </h1>
            </div>
            <Image
              className="w-5 h-5 translate-x-0.5 translate-y-9 "
              src={require("public/copy.png")}
            />
          </div>

          <div className="flex flex-row">
            <h1 className="font-bold text-lg translate-x-44  translate-y-4">
              671,432,977원
            </h1>
          </div>
          <div className="bg-slate-100 border-2 text-center translate-y-5 -translate-x-0.5  w-80 h-8 rounded-b-2xl ">
            <h1 className="text-gray-500">이체</h1>
          </div>
        </div>
        {/*sec container*/}
        {/*sec container*/}

        <div className="w-80 h-36 rounded-2xl mt-7 shadow-sm translate-y-10 border-2 bg-white">
          <div className="flex flex-row">
            <Image
              className="w-7 h-7 m-4 translate-x-2 translate-y-1"
              src={require("public/sin.png")}
            />
            <div>
              <div className="flex flex-row">
                <h1 className=" translate-y-4">입출금</h1>
                <h1 className=" translate-y-4 text-gray-500">
                  [쏠편한 정기예금]
                </h1>
              </div>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                신한 110-372-537193
              </h1>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                입출금계좌
              </h1>
            </div>
            <Image
              className="w-5 h-5 -translate-x-4 translate-y-9"
              src={require("public/copy.png")}
            />
          </div>

          <div className="flex flex-row">
            <h1 className="font-bold text-lg translate-x-44 translate-y-4">
              120,000,000원
            </h1>
          </div>
          <Link href="managy">
          <div className="bg-slate-100 border-2 text-center translate-y-5 -translate-x-0.5  w-80 h-8 rounded-b-2xl ">
            <h1 className="text-gray-500">해지</h1>
          </div>
          </Link>
        </div>
        {/*sec container*/}
        {/*sec container*/}

        <div className="w-80 h-36 rounded-2xl mt-7 shadow-sm translate-y-10 border-2 bg-white">
          <div className="flex flex-row">
            <Image
              className="w-7 h-7 m-4 translate-x-2 translate-y-1"
              src={require("public/kb.png")}
              
            />
            <div>
              <div className="flex flex-row">
                <h1 className=" translate-y-4">입출금</h1>
                <h1 className=" translate-y-4 text-gray-500">
                  [사이버증권거래계좌]
                </h1>
              </div>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                국민 373-01-5735-71
              </h1>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                입출금계좌
              </h1>
            </div>
            <Image
              className="w-5 h-5 -translate-x-10 translate-y-9"
              src={require("public/copy.png")}
            />
          </div>

          <div className="flex flex-row">
            <h1 className="font-bold text-lg translate-x-40 translate-y-4">
            ㅤ 48,536,903원
            </h1>
          </div>
          <Link href="managy">
          <div className="bg-slate-100 border-2 text-center translate-y-5 -translate-x-0.5  w-80 h-8 rounded-b-2xl ">
            <h1 className="text-gray-500">관리</h1>
            
          </div>
          </Link>
        </div>
        {/*sec container*/}
                {/*sec container*/}

                <div className="w-80 h-36 rounded-2xl mt-7 shadow-sm translate-y-10 border-2 bg-white">
          <div className="flex flex-row">
            
            <Image
              className="w-7 h-7 m-4 translate-x-2 translate-y-1"
              src={require("public/kb.png")}
            />
            <div>
              <div className="flex flex-row">
                <h1 className=" translate-y-4">입출금</h1>
                <h1 className=" translate-y-4 text-gray-500">
                  [주택청약통장]
                </h1>
              </div>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                국민 373-42-8265-34
              </h1>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                입출금계좌
              </h1>
            </div>
            <Image
              className="w-5 h-5 translate-x-0.5 translate-y-9"
              src={require("public/copy.png")}
            />
          </div>

          <div className="flex flex-row">
            <h1 className="font-bold text-lg translate-x-40 translate-y-4">
            1,219,542,463원
            </h1>
          </div>
          <Link href="managy">
          <div className="bg-slate-100 border-2 text-center translate-y-5 -translate-x-0.5  w-80 h-8 rounded-b-2xl ">
            <h1 className="text-gray-500">관리</h1>
          </div>
          </Link>
        </div>
        {/*sec container*/}
         {/*sec container*/}

         <div className="w-80 h-36 rounded-2xl mt-7 shadow-sm translate-y-10 border-2 bg-white">
          <div className="flex flex-row">
            
            <Image
              className="w-7 h-7 m-4 translate-x-2 translate-y-1"
              src={require("public/kb.png")}
            />
            <div>
              <div className="flex flex-row">
                <h1 className=" translate-y-4">입출금</h1>
                <h1 className=" translate-y-4 text-gray-500">
                  [쏠편한비상금]
                </h1>
              </div>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
              신한 110-529-968658
              </h1>
              <h1 className=" translate-y-3 text-gray-400 text-sm">
                입출금계좌
              </h1>
            </div>
            <Image
              className="w-5 h-5 translate-x-0.5 translate-y-9"
              src={require("public/copy.png")}
            />
          </div>

          <div className="flex flex-row">
            <h1 className="font-bold text-lg translate-x-52 translate-y-4">
            120,000원
            </h1>
          </div>
          <Link href="managy">
          <div className="bg-slate-100 border-2 text-center translate-y-5 -translate-x-0.5  w-80 h-8 rounded-b-2xl ">
            <h1 className="text-gray-500">관리</h1>
          </div>
          </Link>
        </div>
        {/*sec container*/}
        {/*footer*/}

        <div className="h-24 bg-slate-200"></div>
        {/*footer*/}
      </div>
    </div>
  );
}
