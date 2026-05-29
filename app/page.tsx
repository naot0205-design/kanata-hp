export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="text-xl font-bold tracking-widest text-gray-900">
            kanata
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900 transition-colors">事業内容</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">会社概要</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="top"
        className="relative pt-16 min-h-screen flex items-center bg-gray-950 text-white overflow-hidden"
      >
        {/* 背景の装飾 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1e3a5f_0%,_transparent_60%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#0f2027_0%,_transparent_70%)]" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="text-sm tracking-[0.3em] text-blue-300 uppercase mb-6">
            KANATA Inc.
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
            人とキャリアの、<br />
            <span className="text-blue-400">その先へ。</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-12">
            転職支援・採用代行・採用SaaSを通じて、
            <br className="hidden md:block" />
            企業と個人のキャリアを共に前進させます。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              事業内容を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm tracking-[0.3em] text-blue-500 uppercase mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">事業内容</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">転職支援</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                有料職業紹介事業（厚生労働大臣許可）
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                キャリアアドバイザーが求職者の可能性を引き出し、最適なキャリアへと繋げます。単なるマッチングではなく、長期的なキャリア形成を伴走支援します。
              </p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">採用代行（RPO）</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                Recruitment Process Outsourcing
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                採用戦略の立案から候補者対応・面接調整まで、採用業務をまるごと代行。企業の採用力を最大化し、コアビジネスに集中できる環境を作ります。
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">採用管理SaaS「C-Link」</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                Candidate & Client Link
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                転職エージェント向け採用管理システム。候補者・求人・進捗を一元管理し、エージェント業務の生産性を飛躍的に向上させるクラウドツールです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm tracking-[0.3em] text-blue-500 uppercase mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">会社概要</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <tbody>
                {[
                  ["商号", "株式会社kanata"],
                  ["英文商号", "KANATA Inc."],
                  ["設立", "2026年（設立準備中）"],
                  ["代表取締役", "津波古 直"],
                  ["事業内容", "有料職業紹介事業 / 採用業務代行（RPO） / 採用管理SaaS「C-Link」の開発・提供"],
                  ["所在地", "神奈川県（詳細は設立後に公開）"],
                  ["メールアドレス", "info@kanata.careers"],
                ].map(([label, value], i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <th className="text-left py-5 px-8 text-sm font-medium text-gray-500 w-40 md:w-48 whitespace-nowrap align-top">
                      {label}
                    </th>
                    <td className="py-5 px-8 text-gray-900 text-sm leading-relaxed">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 会社名の由来 */}
          <div className="mt-12 p-8 bg-gray-900 rounded-2xl text-white">
            <h3 className="text-lg font-bold mb-4 text-blue-300">社名の由来</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              「kanata（彼方）」とは、遠い場所・未来・可能性を意味する日本語です。<br />
              個人にとっては「まだ見ぬキャリアの先」、企業にとっては「理想の組織づくりの先」——<br />
              その「彼方」へと共に向かうパートナーでありたいという想いを込めています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm tracking-[0.3em] text-blue-500 uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">お問い合わせ</h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-gray-600 leading-relaxed mb-8">
              転職相談・採用支援・C-Linkに関するお問い合わせは、以下のメールアドレスよりお気軽にご連絡ください。
            </p>

            <a
              href="mailto:info@kanata.careers"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@kanata.careers
            </a>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  ),
                  title: "転職相談",
                  desc: "キャリアの悩み・転職のご相談はお気軽にどうぞ",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  ),
                  title: "採用支援",
                  desc: "RPOや採用コンサルのご相談・お見積りはこちら",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  ),
                  title: "C-Link",
                  desc: "デモ・資料請求・導入のご相談はこちら",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-950 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold tracking-widest text-sm">kanata</p>
          <p className="text-xs">© 2026 株式会社kanata. All rights reserved.</p>
          <nav className="flex gap-6 text-xs">
            <a href="#services" className="hover:text-white transition-colors">事業内容</a>
            <a href="#about" className="hover:text-white transition-colors">会社概要</a>
            <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
