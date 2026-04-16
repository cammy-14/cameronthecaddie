import { useState, useEffect } from "react";

const LOGO_URL = "https://static.wixstatic.com/media/d374a4_c5593771cccc41588959aed824fbbe64~mv2.png/v1/fill/w_80,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo.png";
const HERO_URL = "https://static.wixstatic.com/media/d374a4_55ce2acd5c5a4d8eb7b2ea19284df12a~mv2.jpg/v1/fill/w_980,h_316,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d374a4_55ce2acd5c5a4d8eb7b2ea19284df12a~mv2.jpg";
const ABOUT_URL = "https://static.wixstatic.com/media/d374a4_6fdbee73b54b4d37b6aa9b51f0475aa5~mv2.jpg/v1/fill/w_561,h_365,al_c,lg_1,q_80,enc_avif,quality_auto/d374a4_6fdbee73b54b4d37b6aa9b51f0475aa5~mv2.jpg";
const CAM_URL   = "https://static.wixstatic.com/media/d374a4_db21be0ef3fc4ba99863c7dd20aca444~mv2.jpg/v1/fill/w_307,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4282a67c-ee67-4f90-9ba3-ec74fc9ae5c0_JPG.jpg";
const INV_URL   = "https://static.wixstatic.com/media/d374a4_e7f1af881e2c4c8c9312ddb07a0f8311~mv2.png/v1/fill/w_279,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d374a4_e7f1af881e2c4c8c9312ddb07a0f8311~mv2.png";
const BLOG_URL  = "https://static.wixstatic.com/media/nsplsh_925ed32e6fb2413e9ea97a4e8d1a562f~mv2.jpg/v1/fill/w_279,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_925ed32e6fb2413e9ea97a4e8d1a562f~mv2.jpg";
const LOC_URL   = "https://static.wixstatic.com/media/d374a4_212ae2eb9321496fb1c24374ad5e2ca3~mv2.jpg/v1/fill/w_279,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_edited.jpg";
const GOLF_URL  = "https://static.wixstatic.com/media/d374a4_c63b9149f7804552ade200157624cbba~mv2.png/v1/fill/w_279,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/North%20Berwick.png";

const C = {
  navy:"#0d2d52",navyDark:"#091e38",navyDeep:"#061428",navyLight:"#1a4070",
  white:"#ffffff",offWhite:"#f8f9fb",grey1:"#f0f2f5",grey2:"#dde1e8",
  grey3:"#9aa3b0",text:"#1a2535",textSoft:"#4a5568",
};
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS  = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const Logo = ({ height=36, inverted=true, style={} }) => (
  <img src={LOGO_URL} alt="Cameron The Caddie" style={{ height, objectFit:"contain", display:"block", filter:inverted?"brightness(0) invert(1)":"none", ...style }} />
);

const PageBanner = ({ img, title, subtitle }) => (
  <div style={{ position:"relative", height:180, overflow:"hidden", flexShrink:0 }}>
    <img src={img} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
    <div style={{ position:"absolute", inset:0, background:`linear-gradient(160deg, ${C.navyDeep}cc 0%, ${C.navy}99 100%)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"0 24px" }}>
      <h1 style={{ color:C.white, fontFamily:SERIF, fontSize:20, fontWeight:400, letterSpacing:2, textAlign:"center", margin:0, textTransform:"uppercase", lineHeight:1.4 }}>{title}</h1>
      {subtitle && <p style={{ color:"rgba(255,255,255,0.75)", fontFamily:SANS, fontSize:12, marginTop:8, textAlign:"center", letterSpacing:1 }}>{subtitle}</p>}
    </div>
  </div>
);

const SectionLabel = ({ children }) => (
  <div style={{ marginBottom:20 }}>
    <p style={{ fontFamily:SANS, fontSize:10, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:C.navy, margin:"0 0 7px" }}>{children}</p>
    <div style={{ width:32, height:2, background:C.navy }} />
  </div>
);

const Btn = ({ children, onClick, href, small }) => {
  const base = { display:"inline-block", fontFamily:SANS, fontSize:small?10:11, fontWeight:600, letterSpacing:2, textTransform:"uppercase", padding:small?"7px 16px":"10px 22px", borderRadius:2, cursor:"pointer", textDecoration:"none", border:"none", background:C.navy, color:C.white, boxShadow:"0 2px 8px rgba(13,45,82,0.25)" };
  return href ? <a href={href} target="_blank" rel="noreferrer" style={base}>{children}</a> : <button onClick={onClick} style={base}>{children}</button>;
};

const BackBtn = ({ onClick }) => (
  <button onClick={onClick} style={{ background:"none", border:"none", color:C.navy, fontFamily:SANS, fontSize:11, letterSpacing:2, textTransform:"uppercase", fontWeight:600, cursor:"pointer", padding:"0 0 20px", display:"flex", alignItems:"center", gap:6 }}>
    <span style={{ fontSize:16, lineHeight:1 }}>‹</span> Back
  </button>
);

const Divider = ({ margin="0" }) => <div style={{ borderBottom:`1px solid ${C.grey2}`, margin }} />;

const ListRow = ({ title, subtitle, onClick }) => (
  <div onClick={onClick} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"15px 0", borderBottom:`1px solid ${C.grey2}`, cursor:"pointer" }}>
    <div>
      <p style={{ fontFamily:SERIF, fontSize:15, color:C.text, margin:"0 0 2px", fontWeight:400 }}>{title}</p>
      {subtitle && <p style={{ fontFamily:SANS, fontSize:12, color:C.textSoft, margin:0 }}>{subtitle}</p>}
    </div>
    <span style={{ color:C.navyLight, fontSize:20, lineHeight:1, paddingLeft:12, flexShrink:0 }}>›</span>
  </div>
);

const CourseCard = ({ c }) => (
  <div style={{ borderLeft:`3px solid ${C.navy}`, padding:"14px 0 14px 16px", marginBottom:20 }}>
    <h3 style={{ fontFamily:SERIF, fontSize:17, color:C.navy, margin:"0 0 8px", fontWeight:400 }}>{c.name}</h3>
    <p style={{ fontFamily:SANS, fontSize:13, color:C.text, margin:"0 0 4px" }}><strong>Green Fees:</strong> {c.fee}</p>
    <p style={{ fontFamily:SANS, fontSize:13, color:C.textSoft, fontStyle:"italic", margin:"0 0 12px", lineHeight:1.6 }}>Local Tip: {c.tip}</p>
    <Btn href={c.book} small>Book Now</Btn>
  </div>
);

const VenueCard = ({ item }) => (
  <div style={{ padding:"14px 0", borderBottom:`1px solid ${C.grey2}` }}>
    <h3 style={{ fontFamily:SERIF, fontSize:16, color:C.navy, margin:"0 0 5px", fontWeight:400 }}>{item.name}</h3>
    <p style={{ fontFamily:SANS, fontSize:13, color:C.textSoft, margin:"0 0 10px", lineHeight:1.6 }}>{item.desc}</p>
    <a href={item.url} target="_blank" rel="noreferrer" style={{ fontFamily:SANS, fontSize:10, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:C.navy, textDecoration:"none" }}>Visit Website →</a>
  </div>
);

const NAV_ITEMS = [
  { id:"home", label:"Home" },
  { id:"locations", label:"Worldwide Locations" },
  { id:"golf", label:"Best Golf Trips in Scotland" },
  { id:"inverness", label:"Staying in Inverness" },
  { id:"blog", label:"Cameron's Blog" },
];

const NavBar = ({ page, setPage, scrolled }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav style={{ background:C.navy, position:"sticky", top:0, zIndex:300, boxShadow:scrolled?"0 2px 16px rgba(0,0,0,0.4)":"0 1px 4px rgba(0,0,0,0.3)", transition:"box-shadow 0.2s" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 18px", height:56 }}>
          <div onClick={() => { setPage("home"); setOpen(false); }} style={{ cursor:"pointer" }}>
            <Logo height={30} />
          </div>
          <button onClick={() => setOpen(o => !o)} style={{ background:"none", border:"none", color:C.white, width:36, height:36, cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:5, padding:0 }}>
            {open ? <span style={{ fontSize:20, lineHeight:1, color:C.white }}>✕</span> : [0,1,2].map(i => <span key={i} style={{ display:"block", width:22, height:1.5, background:C.white, borderRadius:1 }} />)}
          </button>
        </div>
      </nav>
      <div style={{ position:"fixed", top:56, left:0, right:0, bottom:0, zIndex:200, pointerEvents:open?"all":"none" }}>
        <div onClick={() => setOpen(false)} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.5)", opacity:open?1:0, transition:"opacity 0.25s" }} />
        <div style={{ position:"absolute", top:0, left:0, right:0, background:C.navyDark, transform:open?"translateY(0)":"translateY(-8px)", opacity:open?1:0, transition:"transform 0.25s, opacity 0.25s", borderBottom:`1px solid ${C.navyLight}` }}>
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => { setPage(item.id); setOpen(false); }} style={{ display:"block", width:"100%", textAlign:"left", padding:"16px 20px", background:page===item.id?C.navyLight:"transparent", border:"none", borderBottom:`1px solid rgba(255,255,255,0.07)`, color:page===item.id?C.white:"rgba(255,255,255,0.75)", fontFamily:SANS, fontSize:13, letterSpacing:1.5, textTransform:"uppercase", cursor:"pointer" }}>
              {item.label}
            </button>
          ))}
          <div style={{ padding:"16px 20px", display:"flex", gap:20 }}>
            <a href="https://www.instagram.com/camthecaddie/" style={{ color:"rgba(255,255,255,0.5)", fontFamily:SANS, fontSize:11, letterSpacing:1, textTransform:"uppercase", textDecoration:"none" }}>Instagram</a>
            <a href="https://twitter.com/Camthecaddie" style={{ color:"rgba(255,255,255,0.5)", fontFamily:SANS, fontSize:11, letterSpacing:1, textTransform:"uppercase", textDecoration:"none" }}>Twitter / X</a>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = ({ setPage }) => (
  <footer style={{ background:C.navyDeep, padding:"36px 24px 28px" }}>
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:16 }}>
      <Logo height={38} />
      <Divider margin="4px 0" />
      <div style={{ display:"flex", gap:28 }}>
        {NAV_ITEMS.slice(1).map(n => (
          <button key={n.id} onClick={() => setPage(n.id)} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.45)", fontFamily:SANS, fontSize:10, letterSpacing:1.5, textTransform:"uppercase", cursor:"pointer", padding:0 }}>{n.label.split(" ")[0]}</button>
        ))}
      </div>
      <a href="mailto:camthecaddie@gmail.com" style={{ color:"rgba(255,255,255,0.45)", fontFamily:SANS, fontSize:12, textDecoration:"none" }}>camthecaddie@gmail.com</a>
      <div style={{ display:"flex", gap:20 }}>
        <a href="https://www.instagram.com/camthecaddie/" style={{ color:"rgba(255,255,255,0.35)", fontFamily:SANS, fontSize:11, textDecoration:"none", letterSpacing:1 }}>Instagram</a>
        <a href="https://twitter.com/Camthecaddie" style={{ color:"rgba(255,255,255,0.35)", fontFamily:SANS, fontSize:11, textDecoration:"none", letterSpacing:1 }}>Twitter / X</a>
      </div>
      <p style={{ color:"rgba(255,255,255,0.2)", fontFamily:SANS, fontSize:10, margin:0 }}>© 2022 Cameron The Caddie. All rights reserved.</p>
    </div>
  </footer>
);

const HomeCard = ({ img, title, onClick }) => (
  <div onClick={onClick} style={{ position:"relative", overflow:"hidden", borderRadius:2, cursor:"pointer", boxShadow:"0 4px 16px rgba(0,0,0,0.18)" }}>
    <img src={img} alt={title} style={{ width:"100%", height:165, objectFit:"cover", display:"block" }} />
    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(9,30,56,0.9) 0%, rgba(9,30,56,0.2) 55%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", padding:"0 12px 18px" }}>
      <p style={{ color:C.white, fontFamily:SANS, fontSize:10, letterSpacing:2.5, textTransform:"uppercase", textAlign:"center", margin:"0 0 10px", lineHeight:1.6 }}>{title}</p>
      <div style={{ border:"1px solid rgba(255,255,255,0.6)", color:C.white, fontFamily:SANS, fontSize:9, letterSpacing:2, textTransform:"uppercase", padding:"5px 14px" }}>Read More</div>
    </div>
  </div>
);

const HomePage = ({ setPage }) => (
  <div style={{ background:C.white }}>
    <div style={{ position:"relative", height:230, overflow:"hidden" }}>
      <img src={HERO_URL} alt="Hero" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
      <div style={{ position:"absolute", inset:0, background:`linear-gradient(160deg, ${C.navyDeep}bb 0%, ${C.navy}88 100%)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:14 }}>
        <Logo height={46} style={{ opacity:0.95 }} />
        <h1 style={{ color:C.white, fontFamily:SERIF, fontSize:18, fontWeight:400, letterSpacing:3, textTransform:"uppercase", margin:0, textAlign:"center", padding:"0 24px" }}>Discover Cameron The Caddie</h1>
      </div>
    </div>
    <div style={{ padding:"30px 22px 0" }}>
      <SectionLabel>About Me</SectionLabel>
      <img src={ABOUT_URL} alt="Castle Stuart" style={{ width:"100%", borderRadius:2, display:"block", marginBottom:16, boxShadow:"0 2px 12px rgba(0,0,0,0.1)" }} />
      <p style={{ fontFamily:SANS, fontSize:14, color:C.textSoft, lineHeight:1.8, margin:"0 0 24px" }}>When I started caddying at Castle Stuart in 2022, my golfing clients would often ask me about recommendations for other golf trips in Scotland — most of them wanted to come back again! They asked about places to stay, eat and good bars to get a drink. This website was designed to answer some of those questions.</p>
      <img src={CAM_URL} alt="Cameron" style={{ width:"55%", display:"block", margin:"0 auto 28px", borderRadius:2, boxShadow:"0 2px 12px rgba(0,0,0,0.12)" }} />
    </div>
    <Divider margin="0 22px 28px" />
    <div style={{ padding:"0 22px 32px" }}>
      <SectionLabel>How I Can Help You</SectionLabel>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        <HomeCard img={INV_URL}  title="Staying in Inverness a Bit Longer?" onClick={() => setPage("inverness")} />
        <HomeCard img={BLOG_URL} title="Cameron's Blog"                      onClick={() => setPage("blog")} />
        <HomeCard img={LOC_URL}  title="Worldwide Locations of My Players"   onClick={() => setPage("locations")} />
        <HomeCard img={GOLF_URL} title="The Best Golf Trips in Scotland"     onClick={() => setPage("golf")} />
      </div>
    </div>
    <Footer setPage={setPage} />
  </div>
);

const LocationsPage = ({ setPage }) => (
  <div style={{ background:C.white }}>
    <PageBanner img={LOC_URL} title="Worldwide Locations of My Players" />
    <div style={{ padding:"28px 22px" }}>
      <SectionLabel>Global Reach</SectionLabel>
      <p style={{ fontFamily:SANS, fontSize:14, color:C.textSoft, lineHeight:1.8, marginBottom:24 }}>Cameron caddies at Cabot Highlands (formerly Castle Stuart) near Inverness, attracting golfers from all corners of the globe.</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:24 }}>
        {["🇺🇸 USA","🇨🇦 Canada","🇦🇺 Australia","🇮🇪 Ireland","🇩🇪 Germany","🇸🇪 Sweden","🇳🇴 Norway","🇯🇵 Japan","🇿🇦 South Africa","🇫🇷 France","🇳🇿 New Zealand","🇬🇧 England","🇳🇱 Netherlands","🇩🇰 Denmark"].map(c => (
          <span key={c} style={{ background:C.grey1, border:`1px solid ${C.grey2}`, borderRadius:20, padding:"5px 13px", fontFamily:SANS, fontSize:12, color:C.text }}>{c}</span>
        ))}
      </div>
      <p style={{ fontFamily:SANS, fontSize:13, color:C.grey3, fontStyle:"italic" }}>Follow <a href="https://www.instagram.com/camthecaddie/" style={{ color:C.navy }}>@camthecaddie</a> on Instagram for the latest updates.</p>
    </div>
    <Footer setPage={setPage} />
  </div>
);
const TRIPS = [
  { id:"openRota", label:"Ultimate Golf Trip (Open Rota)", desc:"All the iconic Open Championship venues.", courses:[
    {name:"Muirfield",fee:"£325 or £495 for 2 rounds incl. lunch — Tue & Thu only",tip:"Play it like the members — fourballs in the morning, incredible clubhouse lunch, then afternoon foursomes.",book:"https://www.muirfield.org.uk/visitors-new/"},
    {name:"St Andrews: Old Course",fee:"£295 (Apr–Oct) / £210 (Oct)",tip:"The New and Jubilee courses are incredible too. The Dunvegan pub is a must for a post-game drink.",book:"https://standrews.com/request-a-tee-time"},
    {name:"Royal Troon: Old",fee:"£315",tip:"The Postage Stamp 8th — 123 yards and looks straightforward. Enjoy!",book:"https://www.royaltroon.co.uk/online-tee-booking/"},
    {name:"Turnberry (Ailsa Course)",fee:"£275",tip:"The halfway hut in the lighthouse is spectacular — take time to enjoy it.",book:"https://www.turnberry.co.uk"},
    {name:"Carnoustie: Championship",fee:"£192–£270 (seasonal)",tip:"Indoor simulators in the clubhouse for warming up on those Scottish days!",book:"https://www.carnoustiegolflinks.com/booking/"},
    {name:"Prestwick",fee:"£220 wkday / £250 wkend (May–Sep)",tip:"Brutal opening tee shot — a train line (OOB) runs along the right of the 1st.",book:"https://www.prestwickgc.co.uk/bookings/"},
  ]},
  { id:"nonRota", label:"Ultimate Golf Trip (Non-Open Rota)", desc:"World-class courses that deserve to be on every bucket list.", courses:[
    {name:"Kingsbarns",fee:"£315–£374",tip:"5 mins from the 2nd tee: The Cheesy Toast Shack. The macaroni toastie is amazing.",book:"https://www.kingsbarns.com/booking-enquiries/"},
    {name:"Royal Dornoch: Championship",fee:"£210 (1 round) / £335 (2 rounds)",tip:"Tie in a distillery visit in Dornoch. Don't be put off by the location — you'll regret not going.",book:"https://royaldornoch.com/play/teetimes"},
    {name:"Castle Stuart / Cabot Highlands",fee:"£210 (Apr/Nov) / £270 (May–Oct)",tip:"Make sure you take a local caddy — arguably the best in Scotland!!",book:"https://cabothighlands.com/"},
  ]},
  { id:"edinburgh", label:"Edinburgh Golf Trip", desc:"High-quality golf along the East Lothian coast.", courses:[
    {name:"North Berwick",fee:"£200 (Apr–Oct)",tip:"Watch out for the wall on the 13th and one of the hardest greens in the world on 16.",book:"https://www.northberwickgolfclub.com/bookings"},
    {name:"Gullane",fee:"£210 wkday / £250 wkend (No.1)",tip:"Arguably the best golfing facility in Edinburgh — Course No.2 is brilliant and underrated.",book:"https://brsgolf.com/gullane/visitor_home.php"},
    {name:"Dunbar",fee:"£115–£145",tip:"Starts with two par 5s but from No.4 you're never far from the sea.",book:"https://dunbargolfclub.com/visitors/booking-information"},
    {name:"Renaissance",fee:"Not published — call ahead",tip:"One of the most private clubs in Scotland. Joining fee believed to be >£100,000!",book:"https://trcaa.com/contact/"},
    {name:"Archerfield Links",fee:"Not published — call ahead",tip:"Two courses on site — traditional links and a pine forest/links mix. Spectacular views.",book:"https://www.archerfieldgolfclub.com/get-in-touch"},
  ]},
  { id:"glasgow", label:"Glasgow Golf Trip", desc:"The West Coast — home to the origins of the Open.", courses:[
    {name:"Western Gailes",fee:"£190 (May–Sep) / £150 (Apr/Oct)",tip:"One of the finest clubs in the game — has attracted Gary Player and Tom Watson.",book:"https://www.westerngailes.com/book-a-tee-time/"},
    {name:"Glasgow Gailes",fee:"£130 (May–Sep)",tip:"Open Qualifying links with spectacular scenery and great tradition.",book:"https://visitors.brsgolf.com/glasgow#/course/1"},
    {name:"Barassie Golf Club",fee:"£45–£70 per person (seasonal)",tip:"27 brilliant links holes along the Ayrshire coastline.",book:"https://barassie.nexusweb.co.uk/visitors/tee-time-reservation/"},
    {name:"Dundonald Links",fee:"£250 (summer)",tip:"Extremely difficult off the back tees — only for the brave!",book:"https://visitors.brsgolf.com/dundonald#/course/1"},
  ]},
  { id:"fife", label:"Fife Golf Trip", desc:"The spiritual home of golf and so much more.", courses:[
    {name:"Lundin Links",fee:"£100–£150 (seasonal)",tip:"A course almost unchanged for 100 years. Has hosted Open Qualifying.",book:"https://visitors.brsgolf.com/lundingc#/course/1"},
    {name:"Leven Links",fee:"£95–£105",tip:"Next door to Lundin Links — perfect for a back-to-back links day.",book:"https://www.leven-links.com/play/book-online/"},
    {name:"Montrose",fee:"£70–£100 (Championship)",tip:"The 5th oldest course in the world — golf has been played here for 460 years!",book:"https://visitors.brsgolf.com/montroselinks#/course/3"},
    {name:"Dumbarnie Links",fee:"£286 (May–Oct)",tip:"Only 11 miles from St Andrews. Dolphins and seals often spotted offshore!",book:"https://www.dumbarnielinks.com/standard-booking/"},
    {name:"Gleneagles",fee:"£245–£300 (seasonal)",tip:"The hotel is magnificent. The King's and Queen's courses are arguably more enjoyable than the Centenary.",book:"https://pursuits.gleneagles.com"},
  ]},
  { id:"aberdeen", label:"Aberdeen Golf Trip", desc:"Incredible links golf along the North East coastline.", courses:[
    {name:"Royal Aberdeen",fee:"£149–£215 (seasonal)",tip:"Requires a handicap certificate. Iconic coastal holes along the North Sea.",book:"http://royalaberdeengolf.com/page.aspx?pid=9992"},
    {name:"Trump International",fee:"~£325",tip:"Stunning views. Try hitting the 18th green (par 5) in 3 from the back tees!",book:"https://www.trumpgolfscotland.com/golf/tee-times"},
    {name:"Cruden Bay",fee:"£165 wkday / £180 wkend",tip:"Get the camera out on the 9th tee — one of the best views in Scottish golf.",book:"https://crudenbaygolfclub.co.uk/visitors/green-fees/"},
    {name:"Murcar Links",fee:"£130 wkday / £150 wkend",tip:"Backs onto Royal Aberdeen — great for 36 holes in a day.",book:"https://www.brsgolf.com/murcarlinks/visitor_home.php"},
    {name:"Moray",fee:"£125 (Old) / £30 (New) Apr–Oct",tip:"Tie it into a local distillery visit — the club's history is soaked in whisky!",book:"http://www.moraygolf.co.uk/page.aspx?pid=65814"},
  ]},
  { id:"highlands", label:"Highlands Golf Trip", desc:"From Royal Dornoch to Brora, Tain and Golspie.", courses:[
    {name:"Royal Dornoch: Championship",fee:"£210 / £335 (2 rounds)",tip:"The King of Scottish Links Courses. You'll regret not going.",book:"https://royaldornoch.com/play/teetimes"},
    {name:"Castle Stuart / Cabot Highlands",fee:"£210–£270",tip:"Take a local caddy — arguably the best in Scotland!!",book:"https://cabothighlands.com/"},
    {name:"Nairn Golf Club",fee:"£130 (Apr/Oct) / £190 (May–Sep)",tip:"Hosted the Walker Cup with players like Kuchar, Donald, Casey and Charley Hull.",book:"https://www.nairngolfclub.co.uk/web/pages/visitors"},
    {name:"Nairn Dunbar",fee:"£65–£100 (seasonal)",tip:"Easy to combine with Nairn for a 36-hole day.",book:"https://nairndunbar.com/visitors-booking/"},
    {name:"Golspie Golf Club",fee:"£90 daily",tip:"On the North Coast 500 route — James Braid design with sea and mountain views.",book:"https://www.golspiegolfclub.co.uk/online-booking/"},
    {name:"Tain Golf Club",fee:"£50 (Apr/Oct) / £80 (May–Sep)",tip:"Old Tom Morris' northern jewel from 1890 — steeped in history.",book:"https://www.tain-golfclub.co.uk/visitors"},
    {name:"Brora Golf Club",fee:"£80 (Apr) / £125 (May–Oct)",tip:"Brora, Tain and Golspie — golf as it should be. Try to fit at least one in.",book:"https://broragolfclub.co.uk/visitors/on-line-booking"},
    {name:"Skibo Castle (Carnegie Club)",fee:"£300 (limited non-member access)",tip:"No tee times — members play when the mood takes them. Pure luxury.",book:"https://www.carnegieclub.co.uk/golf-championship-links.html"},
  ]},
  { id:"islands", label:"The Islands Golf Trip", desc:"Adventurous and remote — absolutely worth the effort.", courses:[
    {name:"Ardfin Golf Club (Jura)",fee:"Exclusive — not disclosed",tip:"A long journey but fast making a name as one of the most stunning courses in Scotland.",book:"https://www.ardfin.com/"},
    {name:"Machrihanish Golf Club",fee:"£95 (Mar/Oct) / £120 (Apr–Sep)",tip:"The first tee is rated the best opening shot in Scotland — pick a line and be brave!",book:"https://www.machgolf.com/greenfees"},
    {name:"Machrie Golf Club (Islay)",fee:"£180 (Apr–Oct)",tip:"Reached by boat with accommodation on site — highly recommended.",book:"https://themachrie.com/the-golf/green-fees/"},
    {name:"Machrihanish Dunes",fee:"£80",tip:"More modern layout with blind shots. Within 5 miles of Machrihanish.",book:"https://machrihanishdunes.com/golf/book-golf/"},
    {name:"Dunaverty Golf Club",fee:"£40 wkday / £45 wkend — honesty box!",tip:"Fences round the green to stop roaming sheep. A really fun golf course!",book:"http://www.dunavertygolfclub.com/contactus/index.htm"},
  ]},
];

const GolfPage = ({ setPage }) => {
  const [trip, setTrip] = useState(null);
  const t = trip ? TRIPS.find(x => x.id === trip) : null;
  return (
    <div style={{ background:C.white }}>
      {t ? (
        <>
          <PageBanner img={GOLF_URL} title={t.label} subtitle={t.desc} />
          <div style={{ padding:"24px 22px" }}>
            <BackBtn onClick={() => setTrip(null)} />
            {t.courses.map(c => <CourseCard key={c.name} c={c} />)}
          </div>
        </>
      ) : (
        <>
          <PageBanner img={GOLF_URL} title="The Best Golf Trips in Scotland" />
          <div style={{ padding:"28px 22px" }}>
            <SectionLabel>Choose Your Trip</SectionLabel>
            <p style={{ fontFamily:SANS, fontSize:14, color:C.textSoft, lineHeight:1.8, marginBottom:20 }}>Select a trip to explore courses, green fees, local tips and booking links — from a caddie who knows these courses inside out.</p>
            {TRIPS.map(t => <ListRow key={t.id} title={t.label} subtitle={t.desc} onClick={() => setTrip(t.id)} />)}
          </div>
        </>
      )}
      <Footer setPage={setPage} />
    </div>
  );
};

const INV_SECTIONS = [
  { id:"restaurants", label:"Inverness Restaurants", items:[
    {name:"Rocpool Reserve",desc:"High-end luxurious dining. Lunch, afternoon tea and dinner. 5-star establishment.",url:"https://rocpool.com/"},
    {name:"Rocpool Restaurant",desc:"Michelin Guide listed. Family-owned on the banks of the River Ness. Mediterranean-edged menus.",url:"https://www.rocpoolrestaurant.com/"},
    {name:"Scotch & Rye",desc:"Casual gastropub with cocktails and whisky in a dog-friendly, prohibition-chic setting. Book ahead!",url:"https://www.scotchandrye.co.uk/"},
    {name:"River House",desc:"One of the best eateries in the Highlands — first-class fresh seafood. Advance booking essential.",url:"http://riverhouseinverness.co.uk/"},
    {name:"Fig & Thistle",desc:"Popular bistro with modern Scottish cuisine, cocktails and a cosy, relaxed vibe.",url:"https://www.facebook.com/FigandThistleBistro/"},
    {name:"Culloden House Hotel",desc:"Fine dining in historic surroundings. Lunch, dinner and afternoon tea. Dress code applies.",url:"https://www.cullodenhouse.co.uk/"},
    {name:"The Mustard Seed",desc:"Modern split-level in a former church. Long-established and very popular with locals.",url:"https://www.mustardseedrestaurant.co.uk/"},
    {name:"Number 27 Bar & Kitchen",desc:"Lively independent bar and kitchen opposite the Castle. Fresh home-cooked food.",url:"https://number27inverness.com/"},
    {name:"Girvans",desc:"Family-run restaurant and patisserie. Breakfast through dinner. Italian artisan coffee.",url:"https://girvansrestaurant.co.uk/"},
    {name:"Velocity Cafe",desc:"Cool, cozy hangout with creative menu and espresso drinks. Veggie and vegan friendly.",url:"https://www.velocitylove.co.uk/"},
    {name:"Aspendos",desc:"Authentic Mediterranean and Turkish meze in the Victorian Market.",url:"https://highlandaspendos.co.uk/"},
    {name:"The White House",desc:"Stylish but relaxed city-centre bistro for craft cocktails and elevated pub fare.",url:"https://thewhitehouse.uk.com/"},
    {name:"Castle Tavern",desc:"Across from Inverness Castle with stunning river views. Traditional real ale tavern.",url:"https://www.castletavern.pub/"},
  ]},
  { id:"outoftown", label:"Out of Town", items:[
    {name:"Cawdor Tavern",desc:"In the village of Cawdor near Shakespeare's Macbeth castle. Great Sunday lunches.",url:"https://cawdortavern.co.uk/"},
    {name:"Dores Inn",desc:"On the north banks of Loch Ness with a fabulous beer garden overlooking Loch Ness and Dores beach.",url:"http://www.thedoresinn.co.uk/"},
    {name:"The Anderson (Fortrose)",desc:"Best whisky bar in the Highlands! 200+ single malts, 100 Belgian beers. Award-winning smoke-house restaurant.",url:"http://www.theanderson.co.uk/"},
  ]},
  { id:"nightlife", label:"Nightlife", items:[
    {name:"Hootanannys",desc:"Legendary Highland music venue.",url:"https://www.hootanannyinverness.co.uk/"},
    {name:"Johnny Foxes",desc:"Popular pub and live music.",url:"https://johnnyfoxes.co.uk/"},
    {name:"The Malt Room",desc:"Great whisky selection.",url:"http://www.themaltroom.co.uk/"},
    {name:"MacCallums Bar",desc:"Popular local bar.",url:"https://www.facebook.com/MacCallumsbarinverness/"},
    {name:"The Botanic House",desc:"Stylish bar with a relaxed vibe.",url:"http://www.thebotanic.co.uk/"},
    {name:"Revolution",desc:"Lively bar in the city centre.",url:"https://www.revolution-bars.co.uk/bar/inverness"},
    {name:"Bar One",desc:"City centre bar.",url:"https://www.baroneinverness.com/"},
    {name:"Whisky & Piano Bar",desc:"Glenmoriston Townhouse's elegant bar.",url:"https://www.glenmoristontownhouse.com/whisky-piano-bar"},
  ]},
  { id:"hotels", label:"Hotels", items:[
    {name:"Kingsmills Hotel & Spa",desc:"Luxury hotel and spa close to the city centre.",url:"https://www.kingsmillshotel.com/"},
    {name:"Culloden House Hotel",desc:"Historic fine dining hotel set in 40 acres.",url:"https://www.cullodenhouse.co.uk/"},
    {name:"Rocpool Reserve",desc:"5-star boutique hotel with award-winning restaurant.",url:"https://rocpool.com/"},
    {name:"Ness Walk",desc:"Elegant hotel on the banks of the River Ness.",url:"https://www.nesswalk.com/"},
    {name:"Bunchrew House",desc:"Charming country house hotel.",url:"https://www.bunchrewhousehotel.com/"},
    {name:"Glenmoriston Townhouse",desc:"Stylish townhouse hotel in the city centre.",url:"https://www.glenmoristontownhouse.com/"},
    {name:"Premier Inn (City Centre)",desc:"Good value city centre option on the River Ness.",url:"https://www.premierinn.com"},
  ]},
  { id:"todo", label:"Things to Do / Places to Visit", items:[
    {name:"Inverness Castle",desc:"Iconic castle on a cliff overlooking the River Ness. Category A listed building.",url:"https://www.britainexpress.com/scotland/Highlands/castles/inverness-castle.htm"},
    {name:"Ness Islands Walk",desc:"Natural islands connected by Victorian footbridges — a short stroll from the city centre.",url:"https://www.visitinvernesslochness.com/listings/ness-islands"},
    {name:"Loch Ness & Urquhart Castle Boat Tour",desc:"Cruise Loch Ness and see the iconic ruins of one of Scotland's largest castles.",url:"https://www.lochness-cruises.com/"},
    {name:"Inverness Museum & Art Gallery",desc:"Discover the unique history and culture of the Scottish Highlands.",url:"https://www.highlifehighland.com/inverness-museum-and-art-gallery/"},
    {name:"Inverness Cathedral",desc:"Cathedral Church of Saint Andrew on the banks of the River Ness.",url:"https://invernesscathedral.org/"},
    {name:"Eden Court Theatre & Cinema",desc:"The largest entertainment venue in the Highlands.",url:"https://eden-court.co.uk/"},
    {name:"Hop-on Hop-off Bus Tour",desc:"Open-top double-decker city tour — the Capital of the Highlands.",url:"https://city-sightseeing.com/en/93/inverness"},
    {name:"Cawdor Castle",desc:"Stunning castle and gardens famous for its connection to Shakespeare's Macbeth.",url:"https://www.cawdorcastle.com/"},
    {name:"Dolphin Watching, Moray Firth",desc:"Spot resident bottlenose dolphins — the largest and most northerly colony in the UK.",url:"https://dolphinspirit.co.uk/"},
  ]},
  { id:"outlander", label:"For Outlander Fans", items:[
    {name:"Culloden Battlefield & Visitor Centre",desc:"Powerfully emotive battlefield where the 1745 Jacobite Rising came to a tragic end.",url:"https://www.visitscotland.com/info/see-do/culloden-battlefield-p247471"},
    {name:"Culloden House Hotel",desc:"Bonnie Prince Charlie's HQ before the battle. Now an award-winning luxury hotel.",url:"https://www.cullodenhouse.co.uk/"},
    {name:"Clava Cairns",desc:"Mystical Bronze Age cemetery in a beautiful woodland setting — a bucket-list Outlander site.",url:"https://www.visitscotland.com/info/see-do/clava-cairns-p245611"},
  ]},
  { id:"afield", label:"Further Afield", items:[
    {name:"Dunrobin Castle, near Dornoch",desc:"Fairytale castle on the east coast.",url:"http://www.dunrobincastle.co.uk/"},
    {name:"Fort George, Ardersier",desc:"One of the most outstanding artillery fortifications in Britain.",url:"https://www.historicenvironment.scot/visit-a-place/places/fort-george/"},
    {name:"Brodie Castle, near Forres",desc:"Historic castle managed by the National Trust for Scotland.",url:"https://www.nts.org.uk/visit/places/brodie-castle"},
    {name:"Fairy Glen, Rosemarkie",desc:"Enchanting woodland glen with a waterfall.",url:"https://www.walkhighlands.co.uk/lochness/Fairyglen.shtml"},
    {name:"Eilean Donan Castle",desc:"One of Scotland's most iconic and photographed castles.",url:"https://www.eileandonancastle.com/"},
    {name:"Dunvegan Castle, Isle of Skye",desc:"The oldest continuously inhabited castle in Scotland.",url:"https://www.dunvegancastle.com/"},
    {name:"Fairy Pools, Isle of Skye",desc:"Crystal-clear natural pools — one of Scotland's most magical walks.",url:"https://www.isleofskye.com/skye-guide/top-ten-skye-walks/fairy-pools"},
    {name:"Highland Folk Museum, Newtonmore",desc:"Living history museum showcasing Highland life through the centuries.",url:"https://www.highlifehighland.com/highlandfolkmuseum/"},
    {name:"Highland Wildlife Park, Kingussie",desc:"See Scotland's native wildlife including wolves, lynx and bison.",url:"https://www.highlandwildlifepark.org.uk/"},
  ]},
  { id:"shopping", label:"Shopping in / near Inverness", items:[
    {name:"Eastgate Shopping Centre",desc:"Inverness's main indoor shopping centre.",url:"https://eastgateshopping.co.uk/"},
    {name:"Victorian Market",desc:"Unique covered market with independent shops and cafes.",url:"https://www.thevictorianmarket.com/"},
    {name:"Inverness Retail Park & Vue Cinema",desc:"Out-of-town retail and entertainment.",url:"https://www.invernessshoppingpark.co.uk/"},
    {name:"Harris Tweed Shop (Inglis Street)",desc:"Authentic Harris Tweed from the Isle of Harris.",url:"https://harristweedisleofharris.co.uk/store/"},
    {name:"Leakey's Bookshop",desc:"Scotland's largest secondhand bookshop — a true institution.",url:"https://leakeysbookshop.com/"},
    {name:"Brodie Countryfare, near Forres",desc:"Wonderful country store near Brodie Castle.",url:"https://www.brodiecountryfare.com/"},
  ]},
];

const InvernessPage = ({ setPage }) => {
  const [sec, setSec] = useState(null);
  const s = sec ? INV_SECTIONS.find(x => x.id === sec) : null;
  return (
    <div style={{ background:C.white }}>
      {s ? (
        <>
          <PageBanner img={INV_URL} title={s.label} />
          <div style={{ padding:"24px 22px" }}>
            <BackBtn onClick={() => setSec(null)} />
            {s.items.map(item => <VenueCard key={item.name} item={item} />)}
          </div>
        </>
      ) : (
        <>
          <PageBanner img={INV_URL} title="Staying in Inverness a Bit Longer?" subtitle="Local recommendations from Cameron" />
          <div style={{ padding:"28px 22px" }}>
            <SectionLabel>Inverness Guide</SectionLabel>
            <p style={{ fontFamily:SANS, fontSize:14, color:C.textSoft, lineHeight:1.8, marginBottom:20 }}>Looking for ideas to make the most of your time in Inverness? From fine dining to Outlander locations — Cameron has you covered.</p>
            {INV_SECTIONS.map(s => <ListRow key={s.id} title={s.label} subtitle={`${s.items.length} recommendations`} onClick={() => setSec(s.id)} />)}
          </div>
        </>
      )}
      <Footer setPage={setPage} />
    </div>
  );
};

const POSTS = [
  { id:"cabot", title:"Want to Know More About Cabot Highlands (Formerly Castle Stuart)?",
    body:`Cabot Highlands (Castle Stuart Golf Club) is a world-renowned golf course located in the Scottish Highlands, having opened in 2009. It has quickly established itself as one of the best links courses in Scotland.\n\nThe course was designed by Mark Parsinen and Gil Hanse — both highly respected architects in the golf world. They created a course that is challenging, beautiful and thoroughly enjoyable to play.\n\nOne of its unique features is its position on a cliff overlooking the Moray Firth. This provides stunning views but also means the course is fully exposed to the elements — a true test of golfing ability.\n\nThe course is a par 72 measuring just over 7,000 yards from the back tees, featuring a mixture of links and inland holes with the majority running alongside the coastline.\n\nThe standout hole on the front nine is the fifth — a long par 3 that plays directly towards the Moray Firth, surrounded by deep bunkers where wind makes club selection very tricky. On the back nine, the 12th is a particularly memorable par 5, requiring a precise tee shot and a long second to reach a green perched on a plateau overlooking the coastline.\n\nThe modern, stylish clubhouse has stunning views across the course and the Moray Firth. Overall, Cabot Highlands is a must-play for any avid golfer visiting Scotland.`},
  { id:"itinerary", title:"A Sample Itinerary for a 7-Day Trip to Scotland",
    body:`Day 1 – Arrival in Edinburgh\nArrive and check in to your hotel. Explore Edinburgh Castle, the Royal Mile and Arthur's Seat. Dinner at The Witchery beside the castle is a great start.\n\nDay 2 – Play St Andrews Links\nHead to St Andrews and play a round at the Old Course — ballot required. Explore the charming town and grab a post-round drink near the famous 18th green. Return to Edinburgh for dinner.\n\nDay 3 – Play Muirfield\nDrive to Gullane and play Muirfield. Enjoy lunch at the clubhouse. Explore North Berwick and Dunbar, or sneak in a second round at Gullane.\n\nDay 4 – Play Royal Dornoch\nDrive north — allow 4 hours from Edinburgh. Play Royal Dornoch on the stunning Highland coast. Explore the charming town of Dornoch. Return to Inverness for dinner.\n\nDay 5 – Play Castle Stuart\nPlay a round at Castle Stuart overlooking the Moray Firth. Explore Inverness in the afternoon. Dinner in Inverness.\n\nDay 6 – Play Carnoustie\nDrive to Carnoustie — a challenging and historic links course. Explore Dundee: the V&A Dundee and Dundee Contemporary Arts Centre. Return to Edinburgh for dinner.\n\nDay 7 – Departure\nCheck out and transfer to Edinburgh Airport.`},
  { id:"competitive", title:"Interested in a Bit of Competitive Golf While in Scotland?",
    body:`One of the most cost-effective ways to play golf in Scotland is by entering an 'Open' — one-day or multi-day events in singles, pairs or team formats, offering great golf on landmark courses for a fraction of the usual green fee.\n\nA good place to find available events is the Golf Empire website: golfempire.co.uk\n\nExamples of Opens at bigger courses:\n\n• Royal Dornoch – One round Open from £72, or the Carnegie Shield (1-week open) for £220\n• Cruden Bay – Full range of events for reduced green fees\n• Royal Aberdeen – Small number of events for reduced green fees\n\nThe price differences are substantial and these events are a great way to access famous courses at much more affordable prices.`},
  { id:"lastminute", title:"Interested in a Last-Minute Deal?",
    body:`The main courses in Scotland are not renowned for significant discounts, but it is always worth checking websites such as Golf Now (golfnow.co.uk) for any last-minute availability.\n\nYou are more likely to find a deal on one of the lesser-known hidden gems than on the famous Top 50 courses — but something well known among Scottish golfers is that many of the lesser-known courses can be just as good as, if not better than, the famous ones.`},
];

const BlogPage = ({ setPage }) => {
  const [post, setPost] = useState(null);
  const p = post ? POSTS.find(x => x.id === post) : null;
  return (
    <div style={{ background:C.white }}>
      {p ? (
        <>
          <PageBanner img={BLOG_URL} title="Cameron's Blog" />
          <div style={{ padding:"24px 22px" }}>
            <BackBtn onClick={() => setPost(null)} />
            <h2 style={{ fontFamily:SERIF, fontSize:19, color:C.navy, marginBottom:20, lineHeight:1.45, fontWeight:400 }}>{p.title}</h2>
            <div style={{ fontFamily:SANS, fontSize:14, color:C.textSoft, lineHeight:1.85, whiteSpace:"pre-line" }}>{p.body}</div>
          </div>
        </>
      ) : (
        <>
          <PageBanner img={BLOG_URL} title="Cameron's Blog" subtitle="Tips, itineraries and insider knowledge" />
          <div style={{ padding:"28px 22px" }}>
            <SectionLabel>Latest Posts</SectionLabel>
            {POSTS.map(p => <ListRow key={p.id} title={p.title} onClick={() => setPost(p.id)} />)}
          </div>
        </>
      )}
      <Footer setPage={setPage} />
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const el = document.getElementById("ctc-scroll");
    if (el) el.scrollTop = 0;
  }, [page]);
  const handleScroll = e => setScrolled(e.target.scrollTop > 4);
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100vh", maxWidth:480, margin:"0 auto", background:C.white }}>
      <NavBar page={page} setPage={setPage} scrolled={scrolled} />
      <div id="ctc-scroll" onScroll={handleScroll} style={{ flex:1, overflowY:"auto", WebkitOverflowScrolling:"touch" }}>
        {page==="home"      && <HomePage      setPage={setPage} />}
        {page==="locations" && <LocationsPage setPage={setPage} />}
        {page==="golf"      && <GolfPage      setPage={setPage} />}
        {page==="inverness" && <InvernessPage setPage={setPage} />}
        {page==="blog"      && <BlogPage      setPage={setPage} />}
      </div>
    </div>
  );
}
