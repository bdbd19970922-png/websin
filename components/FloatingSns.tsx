"use client";
export default function FloatingSns(){
  const scrollTop=(e:React.MouseEvent)=>{ e.preventDefault(); window.scrollTo({top:0,behavior:"smooth"}); };
  return (
    <div className="fixed right-4 top-1/3 z-40 flex flex-col gap-3">
      <a className="sns-btn flex items-center justify-center w-12 h-12 rounded-full bg-black/60 text-white" href="https://instagram.com" target="_blank" rel="noreferrer">IG</a>
      <a className="sns-btn flex items-center justify-center w-12 h-12 rounded-full bg-black/60 text-white" href="https://pf.kakao.com" target="_blank" rel="noreferrer">TALK</a>
      <a className="sns-btn flex items-center justify-center w-12 h-12 rounded-full bg-black/60 text-white" href="https://youtube.com" target="_blank" rel="noreferrer">YT</a>
      <button onClick={scrollTop} className="sns-btn w-12 h-12 rounded-full bg-ink-900 text-white">↑</button>
    </div>
  );
}
