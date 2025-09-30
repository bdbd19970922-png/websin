  import Link from "next/link";
  export default function ServicesSummary(){
    const items = [
      {href:"/(site)/services/package", t:"패키지형 제작", d:"템플릿 5종 · 빠른 납품"},
      {href:"/(site)/services/custom", t:"맞춤형 제작", d:"브랜딩/기능 100% 커스텀"},
      {href:"/(site)/services/care-ads", t:"유지보수·광고", d:"정기 관리 · GA4/GTM/Ads"},
    ];
    return (
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">웹신 서비스</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {items.map(x=>(
              <Link key={x.href} href={x.href} className="group card p-6 hover:shadow-hover">
                <h3 className="font-semibold">{x.t}</h3>
                <p className="text-ink-500 mt-1">{x.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
