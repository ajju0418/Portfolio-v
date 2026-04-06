const GlobalStyles = () => (
  <style>{`
    :root {
      --bg: #0c0a14;
      --bg2: #110e1a;
      --card: #1a1625;
      --card2: #151221;
      --primary: #a855f7;
      --secondary: #f472b6;
      --accent: #e879f9;
      --gold: #f59e0b;
      --rose: #fb7185;
      --text: #f0eef5;
      --muted: #9ca3af;
      --border: rgba(168,85,247,0.15);
      --ff-head: 'Syne', sans-serif;
      --ff-mono: 'JetBrains Mono', monospace;
      --ff-body: 'DM Sans', sans-serif;
      --ff-display: 'Playfair Display', serif;
      --ff-elegant: 'Cormorant Garamond', serif;
      --glow: 0 0 20px rgba(168,85,247,0.4),0 0 60px rgba(168,85,247,0.15);
      --glow-rose: 0 0 20px rgba(244,114,182,0.4),0 0 60px rgba(244,114,182,0.15);
      --tr: 0.35s cubic-bezier(.4,0,.2,1);
    }
    *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
    html{scroll-behavior:smooth;font-size:16px;}
    body{background:var(--bg);color:var(--text);font-family:var(--ff-body);overflow-x:hidden;}
    ::selection{background:rgba(168,85,247,0.3);color:#fff;}
    ::-webkit-scrollbar{width:6px;}
    ::-webkit-scrollbar-track{background:var(--bg);}
    ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,var(--primary),var(--secondary));border-radius:3px;}
    a{color:inherit;text-decoration:none;}
    button{font-family:inherit;cursor:pointer;}

    .loader{position:fixed;inset:0;background:var(--bg);z-index:9997;display:flex;align-items:center;justify-content:center;flex-direction:column;transition:opacity .7s ease,visibility .7s;}
    .loader.done{opacity:0;visibility:hidden;pointer-events:none;}
    .loader-mono{font-family:var(--ff-head);font-size:4rem;font-weight:800;background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-2px;animation:lpulse 1.2s ease infinite;}
    .loader-mono span{color:var(--gold);}
    .loader-bar{margin-top:24px;width:180px;height:3px;background:rgba(168,85,247,0.15);border-radius:2px;overflow:hidden;}
    .loader-bar::after{content:'';display:block;height:100%;width:0;background:linear-gradient(90deg,var(--primary),var(--secondary),var(--gold));animation:lfill 1.6s ease forwards;}

    .noise{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:0.02;background-size:200px 200px;}

    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease;}
    .reveal.visible{opacity:1;transform:translateY(0);}
    .reveal-l{opacity:0;transform:translateX(-50px);transition:opacity .7s ease,transform .7s ease;}
    .reveal-l.visible{opacity:1;transform:translateX(0);}
    .reveal-r{opacity:0;transform:translateX(50px);transition:opacity .7s ease,transform .7s ease;}
    .reveal-r.visible{opacity:1;transform:translateX(0);}
    @media(prefers-reduced-motion:reduce){
      .reveal,.reveal-l,.reveal-r{opacity:1!important;transform:none!important;transition:none!important;}
      *{animation-duration:.01ms!important;transition-duration:.01ms!important;}
      .noise{display:none!important;}
    }

    .nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:0 2rem;height:70px;display:flex;align-items:center;justify-content:space-between;background:rgba(12,10,20,0.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--border);transition:background var(--tr);}
    .nav.sc{background:rgba(12,10,20,0.95);box-shadow:0 4px 30px rgba(0,0,0,0.5);}
    .nav-logo{font-family:var(--ff-head);font-size:1.7rem;font-weight:800;letter-spacing:-1px;display:flex;align-items:center;cursor:pointer;}
    .nav-logo .logo-text{background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .nav-logo .dot{color:var(--gold);font-size:2.2rem;line-height:0;margin-bottom:-6px;}
    .nav-ul{display:flex;align-items:center;gap:2rem;list-style:none;}
    .nav-ul a{font-family:var(--ff-mono);font-size:.75rem;font-weight:500;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;position:relative;padding-bottom:4px;transition:color var(--tr);}
    .nav-ul a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:1px;transition:width var(--tr);}
    .nav-ul a:hover,.nav-ul a.active{color:var(--primary);}
    .nav-ul a:hover::after,.nav-ul a.active::after{width:100%;}
    .ham{display:none;flex-direction:column;gap:5px;background:none;border:none;padding:4px;}
    .ham span{display:block;width:24px;height:2px;background:var(--primary);border-radius:1px;transition:transform .3s,opacity .3s;}
    .ham.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
    .ham.open span:nth-child(2){opacity:0;}
    .ham.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
    .drawer{position:fixed;top:70px;right:-100%;width:280px;height:calc(100vh - 70px);background:rgba(17,14,26,0.98);backdrop-filter:blur(20px);border-left:1px solid var(--border);z-index:999;transition:right .4s cubic-bezier(.4,0,.2,1);padding:2.5rem 1.5rem;}
    .drawer.open{right:0;}
    .drawer ul{list-style:none;display:flex;flex-direction:column;gap:1.8rem;}
    .drawer ul a{font-family:var(--ff-mono);font-size:.9rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;transition:color var(--tr);}
    .drawer ul a:hover{color:var(--primary);}
    @media(max-width:768px){.nav-ul{display:none;}.ham{display:flex;}}

    .hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:radial-gradient(ellipse 80% 60% at 50% 20%,rgba(168,85,247,0.08) 0%,transparent 60%),radial-gradient(ellipse 60% 50% at 80% 80%,rgba(244,114,182,0.06) 0%,transparent 50%),radial-gradient(ellipse 40% 30% at 20% 60%,rgba(245,158,11,0.04) 0%,transparent 40%),var(--bg);}
    .p-canvas{position:absolute;inset:0;z-index:0;}
    .hero-content{position:relative;z-index:2;text-align:center;padding:0 2rem;max-width:900px;}
    .hero-lbl{font-family:var(--ff-mono);font-size:.78rem;color:var(--secondary);letter-spacing:.2em;text-transform:uppercase;margin-bottom:1.5rem;opacity:0;animation:fadeUp .8s 1.8s ease forwards;}
    .hero-name{font-family:var(--ff-display);font-size:clamp(3rem,8vw,6.5rem);font-weight:700;line-height:1;letter-spacing:-2px;background:linear-gradient(135deg,#fff 0%,var(--primary) 40%,var(--secondary) 70%,var(--gold) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1.2rem;opacity:0;animation:fadeUp .8s 2s ease forwards;font-style:italic;}
    .hero-tw{font-family:var(--ff-mono);font-size:clamp(1rem,2.5vw,1.35rem);color:var(--primary);min-height:2em;margin-bottom:1.5rem;opacity:0;animation:fadeUp .8s 2.2s ease forwards;}
    .tw-cur{display:inline-block;width:2px;height:1.2em;background:var(--secondary);margin-left:3px;vertical-align:middle;animation:blink .8s infinite;}
    .hero-tag{font-size:clamp(.95rem,1.8vw,1.15rem);color:var(--muted);max-width:560px;margin:0 auto 1.5rem;line-height:1.7;font-style:italic;opacity:0;animation:fadeUp .8s 2.4s ease forwards;}
    .hero-status{display:inline-flex;align-items:center;gap:.6rem;padding:.6rem 1.4rem;background:rgba(168,85,247,0.08);border:1px solid rgba(168,85,247,0.25);border-radius:100px;font-family:var(--ff-mono);font-size:.78rem;color:var(--muted);margin-bottom:2rem;opacity:0;animation:fadeUp .8s 2.5s ease forwards;}
    .hero-status strong{color:var(--primary);font-weight:600;}
    .status-dot{width:8px;height:8px;background:#22c55e;border-radius:50%;animation:statusPulse 2s ease infinite;}
    @keyframes statusPulse{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.4);}50%{box-shadow:0 0 0 8px rgba(34,197,94,0);}}
    .hero-ctas{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;opacity:0;animation:fadeUp .8s 2.6s ease forwards;}
    .btn-p{position:relative;padding:1rem 2.5rem;background:transparent;color:#fff;font-family:var(--ff-mono);font-size:.8rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border:none;border-radius:50px;cursor:pointer;overflow:hidden;transition:all .3s ease;z-index:1;}
    .btn-p::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--primary),var(--secondary),var(--accent));border-radius:50px;z-index:-2;transition:opacity .3s;}
    .btn-p::after{content:'';position:absolute;inset:2px;background:var(--bg);border-radius:50px;z-index:-1;transition:opacity .3s;}
    .btn-p:hover::after{opacity:0;}
    .btn-p:hover{transform:translateY(-3px);box-shadow:0 10px 40px rgba(168,85,247,0.4);color:#fff;}
    .btn-p span{position:relative;z-index:1;background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;transition:all .3s;}
    .btn-p:hover span{-webkit-text-fill-color:#fff;background:none;}
    .btn-o{position:relative;padding:1rem 2.5rem;background:transparent;color:var(--text);font-family:var(--ff-mono);font-size:.8rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border:1.5px solid rgba(255,255,255,0.2);border-radius:50px;cursor:pointer;overflow:hidden;transition:all .3s ease;backdrop-filter:blur(10px);}
    .btn-o::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05));opacity:0;transition:opacity .3s;border-radius:50px;}
    .btn-o:hover{border-color:rgba(255,255,255,0.4);transform:translateY(-3px);box-shadow:0 10px 40px rgba(255,255,255,0.1);}
    .btn-o:hover::before{opacity:1;}
    .scroll-ind{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0;animation:fadeUp .8s 3s ease forwards;}
    .s-mouse{width:24px;height:38px;border:2px solid rgba(168,85,247,0.5);border-radius:12px;position:relative;}
    .s-mouse::before{content:'';position:absolute;top:6px;left:50%;transform:translateX(-50%);width:4px;height:8px;background:var(--primary);border-radius:2px;animation:sdot 1.6s ease infinite;}
    .s-txt{font-family:var(--ff-mono);font-size:.6rem;color:var(--muted);letter-spacing:.15em;text-transform:uppercase;}

    .sec{padding:7rem 2rem;max-width:1200px;margin:0 auto;}
    .sec-full{padding:7rem 0;}
    .sec-hd{display:flex;align-items:baseline;gap:1.2rem;margin-bottom:4rem;}
    .sec-num{font-family:var(--ff-mono);font-size:.72rem;color:var(--secondary);letter-spacing:.15em;}
    .sec-title{font-family:var(--ff-head);font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;letter-spacing:-1px;}
    .sec-title span{background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .sec-line{flex:1;height:1px;background:linear-gradient(90deg,var(--border),transparent);margin-left:1rem;}

    .about-g{display:grid;grid-template-columns:1fr 1.6fr;gap:5rem;align-items:start;}
    .avatar{width:260px;height:260px;border-radius:50%;border:3px solid transparent;background:linear-gradient(var(--card),var(--card)) padding-box,linear-gradient(135deg,var(--primary),var(--secondary),var(--gold)) border-box;position:relative;display:flex;align-items:center;justify-content:center;margin:0 auto;box-shadow:0 0 0 8px rgba(168,85,247,0.08),0 0 60px rgba(168,85,247,0.2);animation:rpulse 3s ease infinite;}
    .avatar::before{content:'';position:absolute;inset:-12px;border-radius:50%;border:1px solid rgba(244,114,182,0.2);animation:rpulse 3s 1s ease infinite;}
    .avatar-ini{font-family:var(--ff-head);font-size:4rem;font-weight:800;background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .bio{font-size:1.05rem;color:var(--text);line-height:1.85;margin-bottom:2rem;}
    .quote-blk{border-left:3px solid var(--gold);padding:1rem 1.5rem;background:rgba(245,158,11,0.05);border-radius:0 10px 10px 0;font-style:italic;color:var(--gold);font-size:.95rem;line-height:1.7;margin-bottom:2.5rem;}
    .counters{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;}
    .ctr{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:1.3rem .8rem;text-align:center;transition:transform .25s,box-shadow .25s,border-color .25s;}
    .ctr:hover{transform:translateY(-5px);box-shadow:0 12px 35px rgba(168,85,247,0.15);border-color:rgba(168,85,247,0.3);}
    .ctr-n{font-family:var(--ff-display);font-size:2.5rem;font-weight:600;background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-style:italic;}
    .ctr-l{font-family:var(--ff-mono);font-size:.62rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin-top:4px;}
    @media(max-width:1024px){.about-g{grid-template-columns:1fr;gap:3rem;}.avatar{width:200px;height:200px;}}
    @media(max-width:768px){.counters{grid-template-columns:repeat(2,1fr);}}

    .tl-wrap{position:relative;}
    .tl-line{position:absolute;left:50%;top:0;width:3px;background:linear-gradient(180deg,var(--primary),var(--secondary),var(--gold));transform:translateX(-50%);box-shadow:0 0 15px rgba(168,85,247,0.5);transition:height .8s ease;border-radius:2px;}
    .tl-items{padding:1rem 0;}
    .tl-item{display:flex;gap:3rem;margin-bottom:3.5rem;position:relative;align-items:flex-start;}
    .tl-item:nth-child(odd){padding-right:calc(50% + 2.5rem);}
    .tl-item:nth-child(even){flex-direction:row-reverse;padding-left:calc(50% + 2.5rem);}
    .tl-dot{position:absolute;left:50%;top:1.5rem;transform:translateX(-50%);width:16px;height:16px;background:linear-gradient(135deg,var(--primary),var(--secondary));border-radius:50%;border:3px solid var(--bg);box-shadow:0 0 20px var(--primary);z-index:2;}
    .tl-dot[data-type="education"]{background:linear-gradient(135deg,var(--gold),#f59e0b);box-shadow:0 0 20px var(--gold);}
    .tl-card{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:2rem;width:100%;backdrop-filter:blur(8px);transition:transform .3s,box-shadow .3s,border-color .3s;position:relative;}
    .tl-card:hover{transform:translateY(-5px);box-shadow:0 15px 45px rgba(168,85,247,0.12);border-color:rgba(168,85,247,0.35);}
    .tl-type-badge{position:absolute;top:1rem;right:1rem;font-family:var(--ff-mono);font-size:.6rem;padding:.3rem .7rem;border-radius:6px;letter-spacing:.05em;text-transform:uppercase;}
    .tl-type-badge[data-type="experience"]{background:rgba(168,85,247,0.1);color:var(--primary);border:1px solid rgba(168,85,247,0.25);}
    .tl-type-badge[data-type="education"]{background:rgba(245,158,11,0.1);color:var(--gold);border:1px solid rgba(245,158,11,0.25);}
    .tl-icon{font-size:1.4rem;margin-bottom:.8rem;}
    .tl-role{font-family:var(--ff-head);font-size:1.15rem;font-weight:700;color:#fff;margin-bottom:.35rem;}
    .tl-co{font-family:var(--ff-mono);font-size:.76rem;color:var(--primary);letter-spacing:.06em;margin-bottom:.35rem;}
    .tl-date{font-family:var(--ff-mono);font-size:.7rem;color:var(--muted);margin-bottom:1rem;}
    .tl-pts{list-style:none;margin-bottom:1.2rem;}
    .tl-pts li{padding-left:1.3rem;position:relative;font-size:.9rem;color:var(--muted);line-height:1.75;margin-bottom:.5rem;}
    .tl-pts li::before{content:'>';position:absolute;left:0;color:var(--secondary);font-size:.75rem;}
    .tags{display:flex;flex-wrap:wrap;gap:.5rem;}
    .tag{font-family:var(--ff-mono);font-size:.66rem;color:var(--primary);border:1px solid rgba(168,85,247,0.3);padding:.25rem .7rem;border-radius:6px;letter-spacing:.04em;background:rgba(168,85,247,0.05);}
    @media(max-width:768px){.tl-line{left:20px;}.tl-dot{left:20px;}.tl-item:nth-child(odd),.tl-item:nth-child(even){flex-direction:column;padding-left:52px;padding-right:0;}}

    .stack-bg{background:var(--bg2);}
    .filter-bar{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:3rem;}
    .flt{padding:.55rem 1.5rem;background:transparent;border:1px solid var(--border);border-radius:100px;color:var(--muted);font-family:var(--ff-mono);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;transition:all var(--tr);}
    .flt.active{background:rgba(168,85,247,0.12);border-color:var(--primary);color:var(--primary);}
    .flt:hover:not(.active){border-color:rgba(168,85,247,0.4);color:var(--text);}
    .tech-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:1.2rem;}
    .tc{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:1.8rem 1rem;text-align:center;transition:transform .25s,box-shadow .25s,border-color .25s;position:relative;overflow:hidden;}
    .tc::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(168,85,247,0.1),transparent 70%);opacity:0;transition:opacity .3s;}
    .tc:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(168,85,247,0.15);border-color:rgba(168,85,247,0.4);}
    .tc:hover::before{opacity:1;}
    .tc-icon{width:52px;height:52px;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;font-size:1.8rem;}
    .tc-icon img,.tc-icon svg{width:42px;height:42px;object-fit:contain;}
    .tc-name{font-family:var(--ff-mono);font-size:.8rem;font-weight:600;color:var(--text);margin-bottom:.3rem;}
    .tc-cat{font-family:var(--ff-mono);font-size:.6rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;}

    .ach-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;}
    .ach-card{background:linear-gradient(135deg,rgba(245,158,11,0.08),var(--card) 50%);border:1px solid rgba(245,158,11,0.25);border-radius:20px;padding:2rem;position:relative;overflow:visible;transition:transform .3s,box-shadow .3s;}
    .ach-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(245,158,11,0.12),transparent 60%);opacity:0;transition:opacity .3s;}
    .ach-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(245,158,11,0.15);}
    .ach-card:hover::before{opacity:1;}
    .ach-badge{position:absolute;top:1rem;right:1rem;background:linear-gradient(135deg,var(--gold),#f59e0b);color:#0c0a14;font-family:var(--ff-mono);font-size:.6rem;font-weight:700;padding:.3rem .7rem;border-radius:6px;letter-spacing:.06em;}
    .ach-icon{font-size:3rem;margin-bottom:1rem;}
    .ach-title{font-family:var(--ff-head);font-size:1.2rem;font-weight:700;color:var(--gold);margin-bottom:.5rem;}
    .ach-issuer{font-family:var(--ff-mono);font-size:.75rem;color:var(--muted);margin-bottom:.5rem;}
    .ach-date{font-family:var(--ff-mono);font-size:.68rem;color:var(--muted);margin-bottom:1rem;}
    .ach-desc{font-size:.88rem;color:var(--muted);line-height:1.7;}
    .ach-link{display:inline-flex;align-items:center;gap:.5rem;margin-top:1rem;padding:.6rem 1.2rem;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:8px;color:var(--gold);font-family:var(--ff-mono);font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;transition:all .2s;}
    .ach-link:hover{background:rgba(245,158,11,0.2);transform:translateY(-2px);}
    .hack-card{background:linear-gradient(135deg,rgba(168,85,247,0.08),var(--card) 50%);border-color:rgba(168,85,247,0.25);}
    .hack-card::before{background:radial-gradient(circle at 50% 0%,rgba(168,85,247,0.12),transparent 60%);}
    .hack-card:hover{box-shadow:0 20px 50px rgba(168,85,247,0.15);}
    .hack-badge{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#fff;}
    .hack-top{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem;}
    .hack-icon{font-size:2.2rem;line-height:1;}
    .hack-mode{font-family:var(--ff-mono);font-size:.65rem;color:var(--primary);letter-spacing:.1em;text-transform:uppercase;background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.25);padding:.3rem .7rem;border-radius:6px;}
    .hack-project{font-family:var(--ff-head);font-size:1.25rem;font-weight:700;color:var(--primary);margin-bottom:.2rem;}
    .hack-project-sub{font-family:var(--ff-mono);font-size:.7rem;color:var(--secondary);letter-spacing:.04em;margin-bottom:.6rem;}
    .hack-event{font-size:.78rem;color:var(--muted);margin-bottom:.75rem;font-style:italic;}
    .hack-meta{display:flex;flex-direction:column;gap:.3rem;margin-bottom:.9rem;}
    .hack-meta span{font-family:var(--ff-mono);font-size:.7rem;color:var(--muted);letter-spacing:.03em;}
    .hack-role{font-size:.85rem;color:var(--text);line-height:1.7;border-left:2px solid rgba(168,85,247,0.4);padding-left:.85rem;}
    .cgpa-card{background:linear-gradient(145deg,rgba(34,197,94,0.06) 0%,rgba(17,14,26,0.95) 50%,rgba(168,85,247,0.04) 100%);border:1px solid rgba(34,197,94,0.2);overflow:hidden;}
    .cgpa-card:hover{box-shadow:0 24px 60px rgba(34,197,94,0.14),0 0 0 1px rgba(34,197,94,0.25);}
    .cgpa-glow-orb{position:absolute;top:-60px;right:-60px;width:200px;height:200px;background:radial-gradient(circle,rgba(34,197,94,0.12) 0%,transparent 70%);pointer-events:none;border-radius:50%;}
    .cgpa-header{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1.5rem;position:relative;z-index:1;}
    .cgpa-header-left{display:flex;flex-direction:column;gap:.5rem;}
    .cgpa-pill{display:inline-block;font-family:var(--ff-mono);font-size:.6rem;color:#22c55e;letter-spacing:.12em;text-transform:uppercase;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.25);padding:.3rem .75rem;border-radius:100px;width:fit-content;}
    .cgpa-degree{font-family:var(--ff-head);font-size:1.1rem;font-weight:700;color:var(--text);line-height:1.35;}
    .cgpa-degree span{background:linear-gradient(135deg,#22c55e,#86efac);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .cgpa-inst{font-size:.75rem;color:var(--muted);line-height:1.5;max-width:200px;}
    .cgpa-score-block{display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(34,197,94,0.07);border:1px solid rgba(34,197,94,0.2);border-radius:16px;padding:1rem 1.4rem;flex-shrink:0;min-width:80px;backdrop-filter:blur(10px);overflow:visible;}
    .cgpa-score{font-family:var(--ff-display);font-size:2.2rem;font-weight:700;font-style:italic;background:linear-gradient(135deg,#22c55e,#86efac);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1;display:block;}
    .cgpa-score-label{font-family:var(--ff-mono);font-size:.58rem;color:#22c55e;letter-spacing:.15em;text-transform:uppercase;margin-top:3px;}
    .cgpa-divider{height:1px;background:linear-gradient(90deg,rgba(34,197,94,0.2),rgba(168,85,247,0.1),transparent);margin-bottom:1.2rem;position:relative;z-index:1;}
    .cgpa-stats{display:flex;align-items:center;gap:0;margin-bottom:1.4rem;position:relative;z-index:1;}
    .cgpa-stat{flex:1;display:flex;flex-direction:column;align-items:center;gap:.25rem;}
    .cgpa-stat-val{font-family:var(--ff-head);font-size:.95rem;font-weight:700;color:var(--text);}
    .cgpa-stat-key{font-family:var(--ff-mono);font-size:.58rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;}
    .cgpa-stat-sep{width:1px;height:32px;background:rgba(255,255,255,0.07);flex-shrink:0;}
    .cgpa-bar-wrap{display:flex;align-items:center;gap:.75rem;position:relative;z-index:1;}
    .cgpa-bar-track{flex:1;height:5px;background:rgba(34,197,94,0.1);border-radius:100px;overflow:hidden;}
    .cgpa-bar-fill{height:100%;background:linear-gradient(90deg,#22c55e,#86efac);border-radius:100px;transition:width 1.2s cubic-bezier(.4,0,.2,1);}
    .cgpa-bar-pct{font-family:var(--ff-mono);font-size:.62rem;color:#22c55e;letter-spacing:.06em;flex-shrink:0;}

    .proj-grid{display:flex;flex-direction:column;gap:2rem;}
    .proj{background:var(--card);border:1px solid var(--border);border-radius:24px;padding:0;position:relative;overflow:hidden;transition:box-shadow .3s,transform .2s;display:grid;grid-template-columns:1fr 1fr;}
    .proj::before{content:'';position:absolute;inset:0;border-radius:24px;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(168,85,247,0.08),transparent 60%);opacity:0;transition:opacity .4s;pointer-events:none;z-index:1;}
    .proj:hover{box-shadow:0 25px 60px rgba(168,85,247,0.15);}
    .proj:hover::before{opacity:1;}
    .feat-star{position:absolute;top:-5px;left:-5px;width:50px;height:50px;background:linear-gradient(135deg,var(--gold),#f59e0b);color:#0c0a14;font-size:1.2rem;display:flex;align-items:center;justify-content:center;clip-path:polygon(0 0,100% 0,0 100%);z-index:10;padding-right:12px;padding-bottom:12px;box-shadow:2px 2px 10px rgba(245,158,11,0.4);}
    .proj-content{padding:2rem;display:flex;flex-direction:column;justify-content:flex-start;position:relative;}
    .proj-desc-wrap{position:relative;padding-bottom:2.8rem;}
    .proj-desc{font-size:.88rem;color:var(--muted);line-height:1.75;margin-bottom:1.2rem;}
    .btn-gh{position:absolute;bottom:0;right:0;display:inline-flex;align-items:center;gap:.5rem;padding:.6rem 1.2rem;background:linear-gradient(135deg,var(--primary),var(--secondary));border:none;border-radius:50px;color:#fff;font-family:var(--ff-mono);font-size:.68rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:all .3s;box-shadow:0 4px 15px rgba(168,85,247,0.25);}
    .btn-gh:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(168,85,247,0.4);}display:inline-flex;align-items:center;gap:.5rem;padding:.6rem 1.2rem;background:linear-gradient(135deg,var(--primary),var(--secondary));border:none;border-radius:50px;color:#fff;font-family:var(--ff-mono);font-size:.68rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:all .3s;box-shadow:0 4px 15px rgba(168,85,247,0.25);}
    .btn-gh:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(168,85,247,0.4);}
    .proj-img{position:relative;background:linear-gradient(135deg,rgba(168,85,247,0.06),rgba(244,114,182,0.03));display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:280px;padding:20px;}
    .proj-img-frame{position:relative;width:100%;aspect-ratio:16/10;border-radius:14px;overflow:hidden;border:1.5px solid rgba(168,85,247,0.25);box-shadow:0 4px 24px rgba(0,0,0,0.5),0 0 0 1px rgba(168,85,247,0.1);background:#0c0a14;}
    /* slideshow images stack and crossfade */
    .proj-img-frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0;transition:opacity .8s ease;z-index:0;border-radius:0;}
    .proj-img-frame img.active{opacity:1;z-index:2;}
    .proj-img-dots{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:5;}
    .proj-img-dots span{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,0.3);transition:background .3s,transform .3s;}
    .proj-img-dots span.active{background:var(--primary);transform:scale(1.3);}
    .proj-img-placeholder{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;color:var(--muted);font-family:var(--ff-mono);font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;}
    .proj-img-placeholder svg{width:48px;height:48px;opacity:.3;}
    .proj-img-placeholder span{opacity:.5;}
    .proj-ico{font-size:2rem;margin-bottom:.8rem;}
    .proj-title{font-family:var(--ff-head);font-size:1.3rem;font-weight:700;color:#fff;margin-bottom:.4rem;}
    .proj-sub{font-family:var(--ff-mono);font-size:.7rem;color:var(--primary);letter-spacing:.06em;margin-bottom:.8rem;}
    @media(max-width:900px){.proj{grid-template-columns:1fr;}.proj-img{min-height:200px;order:-1;}.feat-star{width:45px;height:45px;font-size:1rem;}}

    .contact-bg{background:var(--bg2);}
    .contact-g{display:grid;grid-template-columns:1fr 1.4fr;gap:5rem;align-items:start;}
    .contact-tag{font-size:1.08rem;color:var(--muted);line-height:1.85;font-style:italic;margin-bottom:3rem;}
    .c-form-offset{height:calc(1.08rem * 1.85 * 2 + 3rem);}
    .c-links{display:flex;flex-direction:column;gap:1.2rem;}
    .c-link{display:flex;align-items:center;gap:1rem;color:var(--text);text-decoration:none;font-size:.9rem;padding:1.1rem 1.3rem;background:var(--card);border:1px solid var(--border);border-radius:14px;transition:all .25s;}
    .c-link:hover{border-color:var(--primary);box-shadow:0 8px 35px rgba(168,85,247,0.12);transform:translateX(8px);}
    .c-ico{width:44px;height:44px;border-radius:12px;background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.2);display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0;}
    .c-info strong{display:block;font-family:var(--ff-mono);font-size:.68rem;color:var(--primary);letter-spacing:.1em;text-transform:uppercase;margin-bottom:2px;}
    .c-info span{font-size:.88rem;color:var(--muted);}
    .c-form{display:flex;flex-direction:column;gap:1.2rem;}
    .fg{display:flex;flex-direction:column;gap:.5rem;}
    .flbl{font-family:var(--ff-mono);font-size:.68rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;}
    .finp{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:1rem 1.3rem;color:var(--text);font-family:var(--ff-body);font-size:.95rem;outline:none;transition:border-color .25s,box-shadow .25s;resize:none;}
    .finp::placeholder{color:var(--muted);}
    .finp:focus{border-color:var(--primary);box-shadow:0 0 0 4px rgba(168,85,247,0.1);}
    .fsub{padding:1.1rem 2rem;background:linear-gradient(135deg,var(--primary),var(--accent));color:#fff;font-family:var(--ff-mono);font-size:.82rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border:none;border-radius:12px;transition:transform .2s,box-shadow .2s,opacity .2s;box-shadow:0 4px 25px rgba(168,85,247,0.3);display:flex;align-items:center;justify-content:center;gap:.6rem;}
    .fsub:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 8px 40px rgba(168,85,247,0.45);}
    .fsub:disabled{opacity:.7;cursor:not-allowed;}
    .f-ok{text-align:center;padding:2.5rem;background:rgba(168,85,247,0.06);border:1px solid rgba(168,85,247,0.25);border-radius:18px;}
    .f-ok-ico{font-size:2.8rem;margin-bottom:1rem;}
    .f-ok h3{font-family:var(--ff-head);font-size:1.4rem;color:var(--primary);margin-bottom:.5rem;}
    .f-ok p{font-size:.9rem;color:var(--muted);}
    @media(max-width:1024px){.contact-g{grid-template-columns:1fr;gap:3rem;}}

    .footer{text-align:center;padding:3rem 2rem;border-top:1px solid var(--border);font-family:var(--ff-mono);font-size:.75rem;color:var(--muted);letter-spacing:.06em;}
    .footer span{background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .footer .hrt{color:#fb7185;-webkit-text-fill-color:#fb7185;}

    .b2t{position:fixed;bottom:2rem;right:2rem;width:48px;height:48px;background:var(--card);border:2px solid var(--primary);border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:500;opacity:0;transform:translateY(20px);color:var(--primary);font-size:1.2rem;box-shadow:0 4px 25px rgba(168,85,247,0.2);transition:all .3s;}
    .b2t.vis{opacity:1;transform:translateY(0);}
    .b2t:hover{background:rgba(168,85,247,0.15);box-shadow:var(--glow);transform:translateY(-4px);}

    .spin{width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spinning .7s linear infinite;}

    @keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
    @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
    @keyframes sdot{0%{top:6px;opacity:1;}100%{top:22px;opacity:0;}}
    @keyframes lpulse{0%,100%{opacity:1;filter:brightness(1.2);}50%{opacity:.6;filter:brightness(1);}}
    @keyframes lfill{0%{width:0}100%{width:100%}}
    @keyframes rpulse{0%,100%{box-shadow:0 0 0 8px rgba(168,85,247,0.08),0 0 60px rgba(168,85,247,0.2);}50%{box-shadow:0 0 0 15px rgba(168,85,247,0.04),0 0 80px rgba(168,85,247,0.3);}}
    @keyframes spinning{to{transform:rotate(360deg);}}
  `}</style>
);

export default GlobalStyles;

