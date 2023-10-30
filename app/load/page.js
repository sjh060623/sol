"use client"


import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState , useEffect} from "react";

export default function Load() {
const router = useRouter()
setInterval(() => {
    router.push("/")
}, 500);
    return(
        <div>
        </div>
    )
}