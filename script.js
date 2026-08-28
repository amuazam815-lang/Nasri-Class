const subjects = [

{
id:'urdu',
name:'Urdu',
lessons:12,
c:'#ef626d'
},

{
id:'english',
name:'English',
lessons:15,
c:'#49a7e8'
},

{
id:'math',
name:'Math',
lessons:18,
c:'#50c878'
},

{
id:'science',
name:'Science',
lessons:10,
c:'#f2bd19'
},

{
id:'quran',
name:'Quran',
lessons:14,
c:'#8c63e8'
},

{
id:'quiz',
name:'Quiz',
lessons:20,
c:'#e04b88'
}

];

const quick = [

['Videos','HD lessons','🎬'],
['Audios','Listen & learn','🎧'],
['Progress','Track results','📊'],
['Certificate','Earn certificates','🏆']

];

function render(){

document.querySelector('#subjects').innerHTML =
subjects.slice(0,4).map(s => `

<button
class="card"
style="--c:${s.c}"
onclick="openSubject('${s.name}')">

<img src="icon-${s.id}-512.png">

<h3>${s.name}</h3>

<p>${s.lessons} Lessons</p>

</button>

`).join('');

document.querySelector('.quick').innerHTML =
quick.map(q => `

<button
class="card"
onclick="alert('${q[0]} feature is ready!')">

<div style="font-size:38px">
${q[2]}
</div>

<div>

<h3>${q[0]}</h3>

<p>${q[1]}</p>

</div>

</button>

`).join('');

}

function openSubject(name){

const lessons = [
'Introduction',
'Basic Lesson',
'Practice',
'Test'
];

document.body.insertAdjacentHTML(
'beforeend',

`

<div class="modal" id="modal">

<div class="panel">

<h2>${name}</h2>

${lessons.map((x,i)=>`

<div class="lesson">
${i+1}. ${x}
</div>

`).join('')}

<button
onclick="document.querySelector('#modal').remove()"
style="margin-top:14px;color:#5d54dc;font-weight:bold">

← Back

</button>

</div>

</div>

`

);

}

function showAll(){

alert(
'All Subjects\n\n' +
'Urdu • English • Math • Science • Quran • Quiz'
);

}

function quiz(){

alert(
'Quiz Center\n\n' +
'Choose a subject and start your quiz!'
);

}

function progress(){

alert(
'Your Progress\n\n' +
'Urdu: 80%\n' +
'English: 75%\n' +
'Math: 70%\n' +
'Science: 65%\n' +
'Overall: 75%'
);

}

function home(){

window.scrollTo({
top:0,
behavior:'smooth'
});

}

render();

if('serviceWorker' in navigator){

navigator.serviceWorker
.register('sw.js')
.catch(()=>{});

}
