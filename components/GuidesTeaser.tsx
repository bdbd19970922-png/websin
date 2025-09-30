  import Link from "next/link";
  export default function GuidesTeaser(){
    const items=[
      {t:"홈페이지 제작 꿀팁", d:"비용 아끼는 체크리스트"},
      {t:"광고 시작전 필수 설정", d:"GA4/GTM/Clarity"},
      {t:"빠른 납품을 위한 준비", d:"원고/이미지/참고사이트"},
    ];
    return (
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">가이드</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((x,i)=>(
              <div key={i} className="card p-6">
                <h3 className="font-semibold">{x.t}</h3>
                <p className="text-ink-500 mt-1">{x.d}</p>
              </div>
            ))}
          </div>
          <Link href="/(site)/guides" className="btn btn-outline btn-pill mt-6 inline-block">더보기</Link>
        </div>
      </section>
    );
  }
