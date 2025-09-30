
interface Props { params: { id: string } }
const map: Record<string, {title:string, img:string}> = {
  p1:{title:"브랜딩 랜딩페이지", img:"/images/portfolio/sample1.jpg"},
  p2:{title:"예약/주문 홈페이지", img:"/images/portfolio/sample2.jpg"},
  p3:{title:"포트폴리오 웹사이트", img:"/images/portfolio/sample3.jpg"},
};
export default function PortfolioDetail({ params }: Props){
  const data = map[params.id] ?? map.p1;
  return (<section className="section"><div className="container">
    <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
    <div className="rounded-2xl overflow-hidden shadow-soft"><img src={data.img} alt={data.title} className="w-full h-auto"/></div>
  </div></section>);
}
