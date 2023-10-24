import Image from "next/image"
import Link from "next/link"

export default function All() {
    return(
        <div>
              <div className=" h-full grid place-items-center ">
      {/*header*/}
      <header>
        <div className="flex flex-row">
            <Link href={"/#"}> 
          <h1 className="  -translate-x-20 text-xl translate-y-6">
        {"<"} 전체계좌조회
          </h1>
          </Link>
          <Image
            className="w-36 translate-x-20 translate-y-4"
            src={require("public/icon.png")}
          />
        </div>
      </header>
      {/*header*/}

      {/*fir container*/}
      <div className="w-full h-12 flex flex-row bg-white  place-items-center">
            <div className="translate-x-96 flex flex-row translate-y-10">

       <h1 className="text-lg translate-x-24">입출금</h1>
       <h1 className="text-lg text-blue-500 translate-x-24">3</h1>
       <h1 className="text-lg translate-x-80">42344원{" >"}</h1>
            </div>
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
          <h1 className="font-bold text-2xl translate-x-4">623,540원</h1>
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
      {/*sec container*/}

      {/*footer*/}

      <div className="h-24 bg-slate-200">
      
      </div>
      {/*footer*/}
    </div>

        </div>
    )
}