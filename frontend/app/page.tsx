"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const checkHealth = async () => {
    const data = await fetch("https://striver-eye-beta.onrender.com/health");
    const res = await data.json();
    console.log(res);
  };
  useEffect(() => {
    checkHealth();
  }, []);
  return <>Hi</>;
}
