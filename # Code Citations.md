# Code Citations

## License: unknown
https://github.com/Akwasi-Adu/Portfolio/blob/d4c2e992eeef0648a0cbd07a3865f2424a97bc39/ezrealty-landing-page.html

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar
```


## License: unknown
https://github.com/cgartco6/apexdigital/blob/d0c694731a287508b83681e879d2eb696c785fa6/index.hrml

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar
```


## License: unknown
https://github.com/dom2411edinstvo/my-portfolio-/blob/02933232348eba432a714b6a88c7743c3fae2371/corporate-site.html

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar
```


## License: unknown
https://github.com/Akwasi-Adu/Portfolio/blob/d4c2e992eeef0648a0cbd07a3865f2424a97bc39/ezrealty-landing-page.html

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                    
```


## License: unknown
https://github.com/cgartco6/apexdigital/blob/d0c694731a287508b83681e879d2eb696c785fa6/index.hrml

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                    
```


## License: unknown
https://github.com/dom2411edinstvo/my-portfolio-/blob/02933232348eba432a714b6a88c7743c3fae2371/corporate-site.html

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                    
```


## License: unknown
https://github.com/Akwasi-Adu/Portfolio/blob/d4c2e992eeef0648a0cbd07a3865f2424a97bc39/ezrealty-landing-page.html

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="features">
        <div class="container">
```


## License: unknown
https://github.com/cgartco6/apexdigital/blob/d0c694731a287508b83681e879d2eb696c785fa6/index.hrml

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="features">
        <div class="container">
```


## License: unknown
https://github.com/dom2411edinstvo/my-portfolio-/blob/02933232348eba432a714b6a88c7743c3fae2371/corporate-site.html

```
المشكلة في الكود أن هناك `}` ناقص في قسم CSS. دعني أصلح الملف بالكامل:

```html
// filepath: c:\Users\ali\Desktop\واجهات\01-landing-page.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="زين - منصة SaaS عربية لتحليل البيانات">
<title>زين — منصة التحليلات الاحترافية</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{
    --bg:#0A0E27;
    --surface:#1A2550;
    --surface-2:#242F5A;
    --text:#FFFFFF;
    --text-dim:#B0C4FF;
    --brand:#6366F1;
    --brand-light:#818CF8;
    --accent:#06B6D4;
    --accent-2:#10B981;
    --danger:#EF4444;
    --border:rgba(99, 102, 241, 0.2);
    --font-body:'Cairo', sans-serif;
    --font-head:'Cairo', sans-serif;
    --grad-primary:linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    --shadow-sm:0 4px 20px rgba(99, 102, 241, 0.2);
    --shadow-md:0 20px 60px rgba(99, 102, 241, 0.3);
    --shadow-lg:0 40px 100px rgba(99, 102, 241, 0.4);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{scroll-behavior:smooth}

body{
    font-family:var(--font-body);
    font-size:16px;
    line-height:1.6;
    color:var(--text);
    background:var(--bg);
    overflow-x:hidden;
    position:relative;
}

body::before{
    content:"";
    position:fixed;
    inset:0;
    background:radial-gradient(circle at 20% 50%, rgba(99,102,241,.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,.2) 0%, transparent 50%);
    pointer-events:none;
    z-index:-1;
}

h1,h2,h3,h4,h5{
    font-family:var(--font-head);
    font-weight:800;
    line-height:1.2;
}

a{color:inherit;text-decoration:none}

.container{
    width:min(1200px, 94%);
    margin-inline:auto;
}

section{padding-block:clamp(80px, 10vw, 140px)}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 36px;
    border-radius:999px;
    font-family:var(--font-head);
    font-weight:700;
    font-size:15px;
    border:none;
    cursor:pointer;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.btn-primary{
    background:var(--grad-primary);
    color:#fff;
    box-shadow:var(--shadow-md);
}

.btn-primary:hover{
    transform:translateY(-3px);
    box-shadow:var(--shadow-lg);
}

.btn-secondary{
    background:transparent;
    border:2px solid var(--brand-light);
    color:var(--brand-light);
}

.btn-secondary:hover{
    background:rgba(99, 102, 241, 0.1);
    border-color:var(--brand);
}

.nav{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(10, 14, 39, 0.9);
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
    transition:.3s;
}

.nav-inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:72px;
    gap:24px;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-family:var(--font-head);
    font-weight:900;
    font-size:24px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.logo-badge{
    width:40px;
    height:40px;
    background:var(--grad-primary);
    border-radius:10px;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:900;
    box-shadow:var(--shadow-sm);
}

.nav-links{
    display:flex;
    gap:4px;
    list-style:none;
}

.nav-links a{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    padding:0 16px;
    border-radius:8px;
    color:var(--text-dim);
    font-weight:600;
    font-size:15px;
    transition:.2s;
}

.nav-links a:hover{
    color:var(--text);
    background:rgba(99, 102, 241, 0.15);
}

.nav-cta{
    display:flex;
    gap:12px;
    align-items:center;
}

@media(max-width:900px){
    .nav-links{display:none}
}

.hero{
    padding-top:clamp(80px, 10vw, 120px);
    padding-bottom:clamp(80px, 10vw, 140px);
    text-align:center;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(99, 102, 241, 0.15);
    border:1px solid rgba(99, 102, 241, 0.4);
    color:#A5B4FC;
    font-size:13px;
    font-weight:700;
    padding:8px 18px;
    border-radius:999px;
    margin-bottom:24px;
}

.hero h1{
    font-size:clamp(40px, 8vw, 72px);
    font-weight:900;
    line-height:1.1;
    margin-bottom:24px;
    letter-spacing:-1.5px;
    background:linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #6366F1 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero-sub{
    max-width:680px;
    margin:0 auto 40px;
    color:var(--text-dim);
    font-size:clamp(16px, 2vw, 20px);
    line-height:1.8;
    font-weight:500;
}

.hero-cta{
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:60px;
}

.hero-note{
    color:var(--text-dim);
    font-size:13px;
    display:flex;
    gap:24px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:80px;
}

.hero-note span{
    display:inline-flex;
    align-items:center;
    gap:8px;
}

.mockup{
    max-width:1000px;
    margin-inline:auto;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow-lg);
    animation:slideUp .8s ease-out;
}

@keyframes slideUp{
    from{opacity:0;transform:translateY(40px)}
    to{opacity:1;transform:translateY(0)}
}

.mock-header{
    display:flex;
    gap:8px;
    padding:16px 20px;
    border-bottom:1px solid var(--border);
    background:#0A0E27;
}

.mock-dot{
    width:12px;
    height:12px;
    border-radius:50%;
}

.mock-dot-1{background:#EF4444}
.mock-dot-2{background:#F59E0B}
.mock-dot-3{background:#10B981}

.mock-body{
    padding:40px;
    background:linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.05) 100%);
    min-height:400px;
    display:grid;
    place-items:center;
}

.chart-container{
    width:100%;
    height:280px;
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    gap:16px;
    padding:20px 0;
}

.chart-bar{
    flex:1;
    background:var(--grad-primary);
    border-radius:8px 8px 0 0;
    min-height:40px;
    animation:barGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:0 4px 20px rgba(99, 102, 241, 0.3);
}

.chart-bar:nth-child(1){height:60%}
.chart-bar:nth-child(2){height:80%; animation-delay:.1s}
.chart-bar:nth-child(3){height:45%; animation-delay:.2s}
.chart-bar:nth-child(4){height:95%; animation-delay:.3s}
.chart-bar:nth-child(5){height:70%; animation-delay:.4s}
.chart-bar:nth-child(6){height:85%; animation-delay:.5s}

@keyframes barGrow{
    from{height:0; opacity:0}
    to{height:var(--h); opacity:1}
}

.sec-head{
    text-align:center;
    max-width:640px;
    margin:0 auto 52px;
}

.sec-tag{
    display:inline-block;
    font-size:12.5px;
    font-weight:700;
    color:var(--brand);
    letter-spacing:1px;
    margin-bottom:14px;
}

.sec-head h2{
    font-size:clamp(32px, 5vw, 44px);
    font-weight:800;
    margin-bottom:16px;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
}

.sec-head p{
    color:var(--text-dim);
    font-size:16px;
    line-height:1.8;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.feat{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:32px;
    transition:all .3s;
    position:relative;
    overflow:hidden;
}

.feat::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:4px;
    background:var(--grad-primary);
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .3s;
}

.feat:hover{
    transform:translateY(-8px);
    background:var(--surface-2);
    border-color:var(--brand-light);
    box-shadow:var(--shadow-md);
}

.feat:hover::before{
    transform:scaleX(1);
}

.feat-icon{
    width:60px;
    height:60px;
    background:linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15));
    border-radius:16px;
    display:grid;
    place-items:center;
    font-size:32px;
    margin-bottom:20px;
}

.feat h3{
    font-size:20px;
    margin-bottom:12px;
    color:var(--text);
}

.feat p{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;
    text-align:center;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:60px 40px;
}

.stat-num{
    font-size:clamp(36px, 5vw, 52px);
    font-weight:900;
    background:var(--grad-primary);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    margin-bottom:8px;
}

.stat-label{
    color:var(--text-dim);
    font-size:14px;
    font-weight:600;
    letter-spacing:.5px;
}

.t-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.t-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:20px;
    padding:28px;
    transition:.3s;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.t-card:hover{
    border-color:var(--accent);
    background:var(--surface-2);
}

.quote{
    color:var(--text-dim);
    font-size:15px;
    line-height:1.8;
    flex:1;
    font-style:italic;
}

.t-user{
    display:flex;
    align-items:center;
    gap:12px;
}

.t-avatar{
    width:44px;
    height:44px;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#fff;
    font-weight:800;
}

.t-name{
    font-size:14px;
    color:var(--text);
    font-weight:700;
}

.t-role{
    font-size:13px;
    color:var(--text-dim);
}

.stars{
    color:#F59E0B;
    font-size:14px;
    letter-spacing:2px;
}

.price-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    gap:24px;
}

.price-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:24px;
    padding:32px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:.25s;
}

.price-card:hover{
    transform:translateY(-6px);
}

.price-card.featured{
    background:var(--surface-2);
    border:2px solid var(--brand-light);
    box-shadow:var(--shadow-lg);
}

.price-tag{
    position:absolute;
    top:-14px;
    right:24px;
    background:var(--grad-primary);
    color:#fff;
    font-size:12px;
    font-weight:700;
    padding:6px 16px;
    border-radius:999px;
}

.price-name{
    font-weight:700;
    margin-bottom:6px;
}

.price-desc{
    color:var(--text-dim);
    font-size:13.5px;
    margin-bottom:20px;
}

.price-amount{
    font-family:var(--font-head);
    font-size:42px;
    font-weight:900;
    margin-bottom:6px;
}

.price-amount span{
    font-size:15px;
    color:var(--text-dim);
    font-weight:600;
}

.price-period{
    color:var(--text-dim);
    font-size:12.5px;
    margin-bottom:22px;
}

.price-list{
    list-style:none;
    display:grid;
    gap:12px;
    margin-bottom:28px;
    flex:1;
}

.price-list li{
    display:flex;
    gap:10px;
    color:var(--text-dim);
    font-size:14px;
    align-items:center;
}

.cta{
    background:var(--grad-primary);
    border-radius:24px;
    padding:clamp(40px, 8vw, 80px);
    text-align:center;
    box-shadow:var(--shadow-lg);
}

.cta h2{
    color:#fff;
    font-size:clamp(28px, 4vw, 40px);
    margin-bottom:16px;
}

.cta p{
    color:rgba(255,255,255,.95);
    max-width:500px;
    margin:0 auto 32px;
    font-size:16px;
    line-height:1.7;
}

footer{
    border-top:1px solid var(--border);
    padding:48px 0 24px;
    color:var(--text-dim);
    text-align:center;
    font-size:13px;
}

.foot-links{
    display:flex;
    gap:22px;
    color:var(--text-dim);
    font-size:13.5px;
    justify-content:center;
    flex-wrap:wrap;
}

.foot-links a{
    transition:.2s;
}

.foot-links a:hover{
    color:#fff;
}

@media(max-width:768px){
    .container{width:min(100%, 90%)}
    .nav-links{display:none}
    .hero h1{font-size:36px}
    .price-grid{grid-template-columns:1fr}
}

@media(prefers-reduced-motion:reduce){
    *{animation:none!important; transition:none!important}
}
</style>
</head>
<body>
<header class="nav">
    <div class="container">
        <div class="nav-inner">
            <div class="logo">
                <div class="logo-badge">Z</div>
                <span>زين</span>
            </div>
            <ul class="nav-links">
                <li><a href="#features">المميزات</a></li>
                <li><a href="#stats">الأرقام</a></li>
                <li><a href="#testimonials">الآراء</a></li>
                <li><a href="#pricing">الأسعار</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn btn-secondary">تسجيل الدخول</button>
                <button class="btn btn-primary">ابدأ مجاناً</button>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-badge">✨ الإصدار 2.0 متاح الآن</div>
            <h1>حوّل بيانات فريقك<br>إلى <span style="background:linear-gradient(135deg, #06B6D4, #0891B2); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">قرارات ذكية</span></h1>
            <p class="hero-sub">منصة تحليلات عربية قوية تجمع بيانات فريقك وتحولها إلى لوحات تفاعلية وتقارير مفيدة</p>
            <div class="hero-cta">
                <button class="btn btn-primary">🚀 جرّب مجاناً</button>
                <button class="btn btn-secondary">شاهد العرض التوضيحي</button>
            </div>
            <div class="hero-note">
                <span>✅ بدون بطاقة ائتمان</span>
                <span>✅ إعداد فوري</span>
                <span>✅ دعم عربي 24/7</span>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="mockup">
                <div class="mock-header">
                    <div class="mock-dot mock-dot-1"></div>
                    <div class="mock-dot mock-dot-2"></div>
                    <div class="mock-dot mock-dot-3"></div>
                </div>
                <div class="mock-body">
                    <div class="chart-container">
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                        <div class="chart-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="features">
        <div class="container">
```

