"use client"


import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState , useEffect} from "react";

export default function Load() {
const router = useRouter()
setTimeout(() => {
    router.push("/all")    
}, 500);
    return(        
            <div>
              <div className=" h-full grid place-items-center ">
                {/*header*/}
                <header>
                  <div className="flex flex-row">
                      <h1 className="  -translate-x-12 text-xl translate-y-6">
                        {"<"} 전체계좌조회
                      </h1>
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
                    <Image
                    className="w-6 h-6 translate-x-64 translate-y-0.5"
                    src={require("public/re.png")}
                  />
                  </div>
                </div>
                {/*fir container*/}
               
                {/*footer*/}
        
                <div className="h-24 bg-slate-200"></div>
                {/*footer*/}
              </div>
            </div>
    
    )
}