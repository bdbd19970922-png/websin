  import Link from "next/link";
  const items=[
    {id:"p1", title:"브랜딩 랜딩페이지", img:"/images/portfolio/sample1.jpg"},
    {id:"p2", title:"예약/주문 홈페이지", img:"/images/portfolio/sample2.jpg"},
    {id:"p3", title:"포트폴리오 웹사이트", img:"/images/portfolio/sample3.jpg"},
  ];
  export default function PortfolioPreview(){
    return (
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">대표 포트폴리오</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {items.map(x=> (
              <Link key={x.id} href={`/(site)/portfolio/${x.id}`} className="group card p-0 overflow-hidden">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={x.img} alt={x.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.06]" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{x.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6"><Link href="/(site)/portfolio" className="btn btn-outline btn-pill">전체 보기</Link></div>
        </div>
      </section>
    );
  }
