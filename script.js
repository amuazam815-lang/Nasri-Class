const screen=document.getElementById("screen");
const backBtn=document.getElementById("backBtn");
const globalSpeak=document.getElementById("globalSpeak");

let current="home";
let stack=[];

const A=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const N=[1,2,3,4,5,6,7,8,9,10];

const U=[
"ا","ب","پ","ت","ٹ","ث","ج","چ","ح","خ",
"د","ڈ","ذ","ر","ڑ","ز","ژ","س","ش","ص",
"ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل",
"م","ن","و","ہ","ء","ی","ے"
];

const UN=[
"الف","بے","پے","تے","ٹے","ثے","جیم","چے",
"حے","خے","دال","ڈال","ذال","رے","ڑے","زے",
"ژے","سین","شین","صاد","ضاد","طوئے","ظوئے",
"عین","غین","فے","قاف","کاف","گاف","لام",
"میم","نون","واو","ہے","ہمزہ","یے","بڑی ے"
];

const words={
A:["Apple","سیب"],
B:["Ball","گیند"],
C:["Cat","بلی"],
D:["Dog","کتا"],
E:["Elephant","ہاتھی"],
F:["Fish","مچھلی"],
G:["Grapes","انگور"],
H:["Hat","ٹوپی"],
I:["Ice cream","آئس کریم"],
J:["Juice","جوس"],
K:["Kite","پتنگ"],
L:["Lion","شیر"],
M:["Mango","آم"],
N:["Nest","گھونسلا"],
O:["Orange","مالٹا"],
P:["Parrot","طوطا"],
Q:["Queen","ملکہ"],
R:["Rabbit","خرگوش"],
S:["Sun","سورج"],
T:["Tiger","شیر"],
U:["Umbrella","چھتری"],
V:["Van","وین"],
W:["Watch","گھڑی"],
X:["Xylophone","زائلوفون"],
Y:["Yo-yo","یو یو"],
Z:["Zebra","زیبرا"]
};

function speak(text,lang="en-US"){

if(!("speechSynthesis" in window)){

alert("اس BWO/WebView میں Text-to-Speech دستیاب نہیں ہے۔ Android کی Speech/TTS سروس فعال کریں۔");

return;
}

speechSynthesis.cancel();

const u=new SpeechSynthesisUtterance(String(text));

u.lang=lang;
u.rate=.78;
u.pitch=1.04;

speechSynthesis.speak(u);
}

function go(name,push=true){

if(push && current!==name){
stack.push(current);
}

current=name;

render();
}

function back(){

if(stack.length){

current=stack.pop();

render();

}else{

current="home";

render();

}

}

backBtn.onclick=back;

globalSpeak.onclick=()=>{

speak(
"Welcome to Nasri Class. Touch any lesson to learn.",
"en-US"
);

};

document.querySelectorAll(".bottom button").forEach(b=>{

b.onclick=()=>{

stack=[];

go(b.dataset.go,false);

};

});

function render(){

backBtn.style.visibility=
current==="home"?"hidden":"visible";

if(current==="home")
home();

else if(current==="alphabet")
alphabet();

else if(current.startsWith("letter:"))
letter(current.slice(7));

else if(current==="numbers")
numbers();

else if(current==="urdu")
urdu();

else if(current==="poems")
poems();

else if(current==="quran")
quran();

else if(current==="drawing")
drawing();

else
about();

}

function home(){

screen.innerHTML=`

<div class="page">

<section class="hero">

<img src="assets/child.png" alt="Student">

<h1>Nasri Class</h1>

<p>Learn • Read • Listen • Grow</p>

<button class="primary"
onclick="go('alphabet')">

🚀 Get Started

</button>

</section>

<h2 class="title">Learning</h2>

<div class="grid">

<button class="card c1"
onclick="go('alphabet')">

<div class="emoji">🔤</div>

<b>Alphabets A-Z</b>

</button>

<button class="card c2"
onclick="go('numbers')">

<div class="emoji">🔢</div>

<b>Numbers 1-10</b>

</button>

<button class="card c3"
onclick="go('urdu')">

<div class="emoji">ا ب پ</div>

<b>اردو حروف</b>

</button>

<button class="card c4"
onclick="speak('Apple, Ball, Cat, Dog, Elephant, Fish','en-US')">

<div class="emoji">🍎</div>

<b>Words</b>

</button>

<button class="card c5"
onclick="go('poems')">

<div class="emoji">🎵</div>

<b>Poems</b>

</button>

<button class="card c6"
onclick="go('quran')">

<div class="emoji">📖</div>

<b>Quran</b>

</button>

<button class="card c7"
onclick="go('drawing')">

<div class="emoji">🎨</div>

<b>Drawing</b>

</button>

<button class="card c8"
onclick="go('about')">

<div class="emoji">⭐</div>

<b>About</b>

</button>

</div>

<p class="note">

ہر بٹن کو دبائیں؛ جہاں آواز موجود ہے وہاں 🔊 سے سنیں۔

</p>

</div>

`;

}

function alphabet(){

screen.innerHTML=`

<div class="page">

<h2 class="title">
🔤 Alphabets A-Z
</h2>

<div class="letters">

${A.map((x,i)=>`

<button
class="letter"
style="background:hsl(${(i*29)%360},75%,45%)"
onclick="go('letter:${x}')">

${x}

</button>

`).join("")}

</div>

<p class="note">
ہر حرف کو دبائیں۔
</p>

</div>

`;

}

function letter(x){

const [w,ur]=words[x];

screen.innerHTML=`

<div class="page">

<div class="panel detail">

<div class="bigLetter">
${x}
</div>

<h2>
${x} for ${w}
</h2>

<p>
${ur}
</p>

<button
class="speakBtn"
onclick="speak('${x} for ${w}','en-US')">

🔊 Hear ${x}

</button>

<br><br>

<button
class="speakBtn"
onclick="speak('${ur}','ur-PK')">

🔊 اردو سنیں

</button>

</div>

<h2 class="title">
دوسرے حروف
</h2>

<div class="letters">

${A.map((y,i)=>`

<button
class="letter"
style="background:hsl(${(i*29)%360},75%,45%)"
onclick="go('letter:${y}')">

${y}

</button>

`).join("")}

</div>

</div>

`;

}

function numbers(){

screen.innerHTML=`

<div class="page">

<h2 class="title">
🔢 Numbers 1-10
</h2>

<div class="letters">

${N.map((n,i)=>`

<button
class="letter"
style="background:hsl(${n*31},75%,45%)"
onclick="speak('${n}')">

${n}

</button>

`).join("")}

</div>

<div class="panel detail"
style="margin-top:15px">

<button
class="speakBtn"
onclick="N.forEach((n,i)=>setTimeout(()=>speak(n),i*650))">

🔊 1 سے 10 سنیں

</button>

</div>

</div>

`;

}

function urdu(){

screen.innerHTML=`

<div class="page urdu">

<h2 class="title">
اردو حروف
</h2>

<div class="letters">

${U.map((x,i)=>`

<button
class="letter"
style="background:hsl(${(i*17)%360},65%,42%)"
onclick="speak('${UN[i]}','ur-PK')">

${x}

</button>

`).join("")}

</div>

<div class="panel detail"
style="margin-top:15px">

<button
class="speakBtn"
onclick="speak('اردو حروف سیکھیں','ur-PK')">

🔊 سنیں

</button>

</div>

</div>

`;

}

function poems(){

const en=[
"Twinkle Twinkle Little Star",
"My Little Star",
"Rain Rain Go Away",
"The Sun",
"A Happy Child"
];

const ur=[
"وطن کی محبت",
"پھول",
"میرا اسکول",
"ماں",
"چندا ماما"
];

screen.innerHTML=`

<div class="page">

<h2 class="title">
English Poems
</h2>

<div>

${en.map(x=>`

<div class="row">

<span>
${x}
</span>

<button
onclick="speak('${x}','en-US')">

▶ Hear

</button>

</div>

`).join("")}

</div>

<h2 class="title">
اردو نظمیں
</h2>

<div>

${ur.map(x=>`

<div class="row urdu">

<span>
${x}
</span>

<button
onclick="speak('${x}','ur-PK')">

▶ سنیں

</button>

</div>

`).join("")}

</div>

</div>

`;

}

function quran(){

const s=[
"Surah Al-Fatihah",
"Surah Al-Ikhlas",
"Surah Al-Falaq",
"Surah An-Nas"
];

screen.innerHTML=`

<div class="page">

<h2 class="title">
📖 Quran
</h2>

<div>

${s.map(x=>`

<div class="row">

<span>
${x}
</span>

<button
onclick="speak('${x}','en-US')">

🔊

</button>

</div>

`).join("")}

</div>

<div
class="panel"
style="margin-top:14px;text-align:center">

<b>نوٹ:</b>

<p>

قرآن کی مکمل تلاوت کے لیے اپنی قانونی/مجاز MP3 فائلیں assets/audio میں شامل کریں۔

</p>

</div>

</div>

`;

}

function about(){

screen.innerHTML=`

<div class="page">

<div class="panel about">

<img
src="assets/child.png">

<h1>
Nasri Class
</h1>

<p>
Learn • Read • Listen • Grow
</p>

<span class="pill">
3D UI
</span>

<span class="pill">
Touch & Hear
</span>

<span class="pill">
Offline
</span>

<span class="pill">
Urdu + English
</span>

<p>
<b>
Version 1.0.0
</b>
</p>

</div>

</div>

`;

}

function drawing(){

screen.innerHTML=`

<div class="page">

<h2 class="title">
🎨 Drawing / ڈرائنگ
</h2>

<div class="drawBox">

<canvas id="drawCanvas"></canvas>

<div class="tools">

<button
class="toolBtn color activeColor"
data-color="#111827"
style="background:#111827">

</button>

<button
class="toolBtn color"
data-color="#ef4444"
style="background:#ef4444">

</button>

<button
class="toolBtn color"
data-color="#2563eb"
style="background:#2563eb">

</button>

<button
class="toolBtn color"
data-color="#16a34a"
style="background:#16a34a">

</button>

<button
class="toolBtn color"
data-color="#f59e0b"
style="background:#f59e0b">

</button>

<button
class="toolBtn"
id="smaller">

−

</button>

<button
class="toolBtn"
id="bigger">

+

</button>

<button
class="toolBtn danger"
id="clearDraw">

صاف کریں

</button>

<button
class="toolBtn"
id="saveDraw">

محفوظ کریں

</button>

</div>

</div>

<div
class="panel"
style="margin-top:14px;text-align:center">

<b>
A لکھنے کی مشق کریں
</b>

<p>
نیچے کینوس پر انگلی سے A یا کوئی بھی شکل بنائیں۔
</p>

</div>

</div>

`;

initCanvas();

}

function initCanvas(){

const c=document.getElementById("drawCanvas");

const ctx=c.getContext("2d");

const ratio=Math.max(
1,
window.devicePixelRatio||1
);

const rect=c.getBoundingClientRect();

c.width=rect.width*ratio;
c.height=rect.height*ratio;

ctx.scale(ratio,ratio);

let drawing=false;
let color="#111827";
let size=8;
let last=null;

function pos(e){

const r=c.getBoundingClientRect();

return{
x:e.clientX-r.left,
y:e.clientY-r.top
};

}

function start(e){

drawing=true;

last=pos(e);

e.preventDefault();

}

function move(e){

if(!drawing)
return;

const p=pos(e);

ctx.strokeStyle=color;
ctx.lineWidth=size;
ctx.lineCap="round";
ctx.lineJoin="round";

ctx.beginPath();

ctx.moveTo(last.x,last.y);

ctx.lineTo(p.x,p.y);

ctx.stroke();

last=p;

e.preventDefault();

}

function end(){

drawing=false;

last=null;

}

c.addEventListener(
"pointerdown",
start
);

c.addEventListener(
"pointermove",
move
);

window.addEventListener(
"pointerup",
end
);

document
.querySelectorAll(".color")
.forEach(b=>{

b.onclick=()=>{

color=b.dataset.color;

document
.querySelectorAll(".color")
.forEach(x=>
x.classList.remove("activeColor")
);

b.classList.add("activeColor");

};

});

document
.getElementById("smaller")
.onclick=()=>{

size=Math.max(
2,
size-2
);

};

document
.getElementById("bigger")
.onclick=()=>{

size=Math.min(
30,
size+2
);

};

document
.getElementById("clearDraw")
.onclick=()=>{

ctx.clearRect(
0,
0,
c.width,
c.height
);

};

document
.getElementById("saveDraw")
.onclick=()=>{

try{

localStorage.setItem(
"nasriDrawing",
c.toDataURL("image/png")
);

alert(
"ڈرائنگ اس ڈیوائس میں محفوظ ہوگئی۔"
);

}catch(e){

alert(
"محفوظ نہیں ہو سکی۔"
);

}

};

try{

const saved=
localStorage.getItem("nasriDrawing");

if(saved){

const im=new Image();

im.onload=()=>{

ctx.drawImage(
im,
0,
0,
rect.width,
rect.height
);

};

im.src=saved;

}

}catch(e){}

}

render();
