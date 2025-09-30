  export default function PriceSection(){
    return (
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">가격/견적</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6"><h3 className="font-semibold text-lg">패키지형</h3><p className="text-ink-500 mt-1">템플릿 5종 · 빠른 납품</p><p className="mt-4 text-xl font-bold">70만원~</p></div>
            <div className="card p-6 ring-2 ring-brand"><h3 className="font-semibold text-lg">맞춤형</h3><p className="text-ink-500 mt-1">브랜딩/기능 맞춤</p><p className="mt-4 text-xl font-bold">150만원~</p></div>
            <div className="card p-6"><h3 className="font-semibold text-lg">유지보수/광고</h3><p className="text-ink-500 mt-1">정기 관리 · Ads/GA4</p><p className="mt-4 text-xl font-bold">협의</p></div>
          </div>
        </div>
      </section>
    );
  }
