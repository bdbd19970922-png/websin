"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css"; import "swiper/css/pagination";
import UIButton from "@/components/UIButton";

const slides = [
  { img:"/images/hero/hero1.jpg", title:["저비용 고품질", "홈페이지 제작 대행"], sub:"중소기업·자영업자 맞춤형 — 빠른 납품 / 높은 완성도" },
  { img:"/images/hero/hero2.jpg", title:["패키지 5종", "또는 맞춤형 제작"], sub:"필요한 기능만 담아 합리적으로" },
  { img:"/images/hero/hero3.jpg", title:["제작 + 유지보수 + 광고"], sub:"GA4/GTM/Ads/Clarity 연동까지 한번에" },
];

export default function HeroCarousel(){
  return (
    <section className="relative h-[78vh] md:h-[92vh]">
      <Swiper modules={[Autoplay, Pagination, A11y]} autoplay={{ delay:3200, disableOnInteraction:false }} loop pagination={{ clickable:true }}>
        {slides.map((s,i)=>(
          <SwiperSlide key={i}>
            <div className="absolute inset-0">
              <img src={s.img} alt="" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-black/45" />
            </div>
            <div className="relative z-10 h-[78vh] md:h-[92vh] flex items-center">
              <div className="container">
                <div className="max-w-3xl text-white">
                  {s.title.map((t,idx)=>(
                    <h1 key={idx} className="leading-[1.05] text-[34px] md:text-[64px] font-extrabold tracking-tight">{t}</h1>
                  ))}
                  <p className="mt-4 text-white/90 text-lg md:text-xl">{s.sub}</p>
                  <div className="mt-6 flex gap-3">
                    <UIButton variant="primary" href="/(site)/contact">지금 상담하기</UIButton>
                    <UIButton variant="ghost" href="/(site)/portfolio">포트폴리오</UIButton>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
