import Image from "next/image";
import Logo from './components/Logo';

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <div className="header-section">
        <div className="header-decoration" />
        <div className="header-content">
          <Logo size="xlarge" className="mx-auto mb-8 animate-float logo-glow" />
          <h1 className="company-title">
            <span className="block mt-2">شركة</span>
            <span className="gradient-text">E trading</span>
          </h1>
          <p className="company-subtitle">
            للتداول والإستثمار في الأسواق المالية
          </p>
        </div>
      </div>

      {/* Rest of your content wrapped in a container */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Who We Are Section */}
        <div className="section-wrapper">
          <section className="who-we-are mb-20 animate-fadeIn">
            <div className="section-card">
              <div className="section-title-wrapper">
                <h2 className="section-title">من هي E trading؟</h2>
                <p className="section-subtitle">شركة رائدة في مجال التداول والاستثمار</p>
              </div>
              <div className="content-wrapper">
                <p className="highlight-text mx-auto max-w-3xl">
                  أول شركة عمانية مرخصة للتداول والإستثمار في الأسواق المالية تأسست في عام 2019 بطاقم عماني 100%
                </p>
                <p className="description mx-auto max-w-3xl">
                  شركة مرخصة من قبل وزارة التعليم العالي والبحث العلمي والابتكار و وزارة التجارة والصناعة و ترويج الإستثمار
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="vision-section mb-20 animate-fadeIn">
            <div className="section-card vision-card">
              <div className="section-title-wrapper">
                <h2 className="section-title">رؤيتنا وأهدافنا</h2>
                <p className="section-subtitle">نحو مستقبل مالي أفضل</p>
              </div>
              <div className="vision-card">
                <div className="vision-decoration"></div>
                <div className="vision-content">
                  <p className="vision-text mx-auto max-w-3xl">
                    <span className="vision-highlight">تهدف E Trading    </span> إلى نشر ثقافة الاستثمار والوعي المالي في المجتمع العماني أولاً، ثم لأي مهتم بالتداول والأسواق المالية عالمياً، كخطوة أولى لدخول عالم الاستثمار.






            
                  </p>
                 
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20 animate-fadeIn">
            <div className="section-title-wrapper">
              <h2 className="section-title">خدماتنا</h2>
            </div>
            <div className="services-grid">
              {/* Investment Services */}
              <div className="service-card">
                <div className="service-icon">
                  <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="service-title">الخدمات الإستثمارية</h3>
                <div className="service-card-content">
                  <ul className="service-list animated text-center">
                    <li>إدارة الحسابات </li>
                    <li>مبلغ استثماري يبدأ من 5000 ريال عماني</li>
                   
                  </ul>
                </div>
              </div>

              {/* Educational Services */}
              <div className="service-card">
                <div className="service-icon">
                  <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="service-title">الخدمات التعليمية</h3>
                <div className="service-card-content">
                  <ul className="service-list animated">
                    <li>كورس التأسيس في مجال التداول</li>
                    <li>كورس التحليل الأساسي</li>
                    <li>كورس التحليل الكلاسيكي</li>
                    <li>كورس تحليل <span className="english-text">SK SYSTEM</span></li>
                    <li>كورس تحليل <span className="english-text">Harmonic</span></li>
                    <li>كورس تحليل <span className="english-text">smart money concept</span></li>
                    <li>كورسات احترافية مع مميزات <span className="english-text">VIP</span></li>
                  </ul>
                </div>
              </div>

              {/* Consulting Services */}
              <div className="service-card">
                <div className="service-icon">
                  <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="service-title">الجلسات الإستشارية</h3>
                <div className="service-card-content">
                  <ul className="service-list animated text-center">
                    <li>استشارات مجانية للمبتدئين</li>
                    <li>استشارات للمتداولين المحترفين</li>
                    <li>توجيه وإرشاد مستمر</li>
                    <li>خدمة عملاء  </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Achievements Section */}
        <section className="animate-fadeIn">
          <div className="section-title-wrapper">
            <h2 className="section-title">إنجازاتنا</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card rounded-2xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="achievement-card-image object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="achievement-card-content text-center">
                  <h3 className="mx-auto">{achievement.title}</h3>
                  <p className="mx-auto">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

const achievements = [
  {
    title: " ندوة الثقافة المالية لوزارة التربية و التعليم تحت مشروع خزنة 2024 ",
    description: "لقد قمنا بتقديم دورات تعليمية في ندوة الثقافة و بالتعاون مع وزارة التربية و التعليم لزيادة الوعي المالي و الاستثماري لدى الطلاب.",
    image: "/images/seminar1.jpg"
  },
  {
    title: " مؤتمر أكبر حدث للتداول في سلطنة عمان ",
    description: "نظمت شركة E Trading أكبر حدث للتداول في 2024 بفندق جراند ميلينيوم، بحضور 500-700 شخص لمناقشة الاستثمار في الأسواق المالية. ",
    image: "/images/a1.jpeg" ,
    image: "/images/a2.jpeg" ,
    image: "/images/a3.jpeg"

  },
  {
    title: "برنامج يلا نتداول",
    description: "    برنامج تدريبي يستهدف طلاب الجامعات و الكليات بحيث يقوم طاقم E trading بعمل جولة لجميع المحافظات لزيارة جامعات و كليات عمان لتقديم ورش تعليمية لدخول مجال التداول .",
    image: "/images/b1.jpeg" ,
    image: "/images/b2.jpeg" ,
    image: "/images/b3.jpeg"

  },
  {
    title: "معسكر أنا متداول",
    description: "النسخة الأولى من معسكر أنا متداول حيث نظمت شركة E trading معسكر مدته 3 أيام في كلية الخليج في هذا البرنامج جمعنا بين تعلم الثقافة المالية و الاستثمار و بين الترفية و التعليم .",
    image: "/images/c1.jpeg", 
    image: "/images/c2.jpeg" , 
    image: "/images/c3.jpeg"


  }
];
