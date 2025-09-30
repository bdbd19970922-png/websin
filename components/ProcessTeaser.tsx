  import Link from "next/link";
  export default function ProcessTeaser(){
    const steps=["상담","디자인 시안","개발/구축","검수/오픈","A/S"];
    return (
      <section className="section bg-surface-0">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">제작 과정</h2>
          <div className="flex flex-wrap gap-3">
            {steps.map((s,i)=> <span key={i} className="badge">{i+1}. {s}</span>)}
          </div>
          <Link href="/(site)/process" className="btn btn-primary btn-pill mt-6 inline-block">자세히 보기</Link>
        </div>
      </section>
    );
  }
