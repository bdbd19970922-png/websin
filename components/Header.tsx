"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import UIButton from "@/components/UIButton";
import { Menu, X } from "lucide-react";

const menus = [
  { href: "/(site)/services", label: "서비스" },
  { href: "/(site)/portfolio", label: "포트폴리오" },
  { href: "/(site)/pricing", label: "가격/견적" },
  { href: "/(site)/process", label: "제작 과정" },
  { href: "/(site)/guides", label: "가이드" },
  { href: "/(site)/about", label: "소개" },
  { href: "/(site)/contact", label: "문의" },
];

export default function Header(){
  const [open,setOpen]=useState(false);
  const [atTop,setAtTop]=useState(true);
  useEffect(()=>{
    const onScroll=()=>setAtTop(window.scrollY<10);
    onScroll(); window.addEventListener("scroll", onScroll);
    return ()=>window.removeEventListener("scroll", onScroll);
  },[]);
  const wrapCls = atTop ? "bg-transparent text-white" : "bg-white/90 backdrop-blur shadow text-ink-900";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${wrapCls}`}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="웹신" width={88} height={88} />
          <span className={`text-xl font-extrabold tracking-tight ${atTop ? "text-white" : "text-ink-900"}`}><span className="text-brand"></span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          {menus.map(m => <Link key={m.href} href={m.href} className="nav-underline">{m.label}</Link>)}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <UIButton variant={atTop? "ghost" : "outline"} href="https://pf.kakao.com">카톡 상담</UIButton>
          <UIButton variant="primary" href="tel:01012345678">전화</UIButton>
        </div>
        <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="메뉴">{open? <X/>:<Menu/>}</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white text-ink-900">
          <div className="container py-3 flex flex-col gap-3">
            {menus.map(m => <Link key={m.href} href={m.href} onClick={()=>setOpen(false)}>{m.label}</Link>)}
            <div className="flex gap-2 pt-2">
              <UIButton variant="outline" href="https://pf.kakao.com" className="flex-1">카톡</UIButton>
              <UIButton variant="primary" href="tel:01012345678" className="flex-1">전화</UIButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
