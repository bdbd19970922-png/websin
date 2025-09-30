  "use client";
  import { useState } from "react";
  export default function ContactSection(){
    const [form,setForm]=useState({name:"",phone:"",biz:"",budget:"",msg:""});
    const onChange=(e:any)=>setForm({...form,[e.target.name]:e.target.value});
    const onSubmit=(e:any)=>{e.preventDefault(); alert("제출 완료! 빠르게 연락드릴게요."); setForm({name:"",phone:"",biz:"",budget:"",msg:""});};
    return (
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">빠른 문의</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <a className="btn btn-soft btn-pill w-full" href="https://pf.kakao.com" target="_blank">카카오톡 상담</a>
              <a className="btn btn-primary btn-pill w-full" href="tel:01012345678">전화하기</a>
              <a className="btn btn-outline btn-pill w-full" href="sms:01012345678">문자하기</a>
            </div>
            <form onSubmit={onSubmit} className="card p-6 space-y-3">
              <input className="border rounded-xl px-3 py-2 w-full" name="name" value={form.name} onChange={onChange} placeholder="이름" required />
              <input className="border rounded-xl px-3 py-2 w-full" name="phone" value={form.phone} onChange={onChange} placeholder="연락처" required />
              <input className="border rounded-xl px-3 py-2 w-full" name="biz" value={form.biz} onChange={onChange} placeholder="업종(선택)" />
              <input className="border rounded-xl px-3 py-2 w-full" name="budget" value={form.budget} onChange={onChange} placeholder="예산(선택)" />
              <textarea className="border rounded-xl px-3 py-2 w-full" name="msg" value={form.msg} onChange={onChange} rows={4} placeholder="메시지"></textarea>
              <button className="btn btn-primary btn-pill w-full" type="submit">제출하기</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
