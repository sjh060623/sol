import Image from "next/image";
import Link from "next/link";

export default function Managy() {
  return (
    <div>
      <div className=" h-full grid place-items-center ">
        <div className="w-full absolute z-40 h-screen bg-black opacity-30" />
        <div className="text-center w-80 h-44 absolute z-50 rounded-2xl bg-white grid place-items-center">
            <h1 className="p-6 text-gray-500">만 19세 미만 고객님은 영업점 해지, 관리만 가능합니다. 관련서류를 지참하여 가까운 영업점을 방문해주세요.</h1>
            <Link href="/all">
            <div className="w-72 h-12 rounded-xl -translate-y-2 bg-blue-500">
                <h1 className="text-white text-xl font-semibold translate-y-2">확인</h1>
            </div>
            </Link>
        </div>
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
          <div className="bg-slate-100 border-2 text-center translate-y-5 -translate-x-0.5  w-80 h-8 rounded-b-2xl ">
            <h1 className="text-gray-500">해지</h1>
          </div>
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
          <div className="bg-slate-100 border-2 text-center translate-y-5 -translate-x-0.5  w-80 h-8 rounded-b-2xl ">
            <h1 className="text-gray-500">관리</h1>
          </div>
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
          <div className="bg-slate-100 border-2 text-center translate-y-5 -translate-x-0.5  w-80 h-8 rounded-b-2xl ">
            <h1 className="text-gray-500">관리</h1>
          </div>
        </div>
        {/*sec container*/}
        {/*footer*/}

        <div className="h-24 bg-slate-200"></div>
        {/*footer*/}
      </div>
    </div>
  );
}
