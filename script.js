const videos = [
["হার মানিনি","সংগ্রাম ও পরাজয়","জীবনে কিছু যুদ্ধ এমন আসে, যেখানে জেতার চেয়ে টিকে থাকাই বড় কথা। আজ হয়তো আমি হেরেছি, কিন্তু এই হার আমাকে থামাতে পারবে না। কারণ প্রতিটি পরাজয় নতুন করে শেখায় কীভাবে আবার দাঁড়াতে হয়।","কঠিন Attack ও ফলাফল","হার মানিনি 💔 | Clash of Clans Emotional Short"],
["অপূর্ণ ভালোবাসা","অপূর্ণ ভালোবাসা","কিছু মানুষ আমাদের জীবনে আসে, তারপর নীরবে দূরে চলে যায়। আমরা অপেক্ষা করি, কিন্তু সব অপেক্ষার শেষ ফিরে আসা নয়। কিছু মানুষ শুধু আমাদের শেখাতে আসে—ভালোবাসা মানে কখনো কখনো ছেড়ে দেওয়াও।","শান্ত Village ও ধীর Attack","অপূর্ণ ভালোবাসা 💔 | COC Story"],
["মায়ের দোয়া","মা ও সন্তানের ভালোবাসা","পৃথিবীতে এমন একজন মানুষ আছেন, যিনি আমাদের হারলেও ভালোবাসেন। আমরা যত দূরেই যাই, তাঁর দোয়া আমাদের সঙ্গে থাকে। জীবনের প্রতিটি যুদ্ধে মায়ের দোয়াকে নিজের শক্তি করে এগিয়ে চলো।","Army প্রস্তুতি ও Victory","মায়ের দোয়া ❤️ | Emotional Gaming Short"],
["সত্যিকারের বন্ধু","বন্ধুত্ব ও বিশ্বাস","বন্ধু মানে শুধু আনন্দের সময় পাশে থাকা নয়। বন্ধু মানে তোমার ব্যর্থতার সময়ও বলা—আবার চেষ্টা কর, আমি আছি। এমন একজন মানুষ থাকলে কঠিন যুদ্ধও সহজ মনে হয়।","Clan ও War দৃশ্য","সত্যিকারের বন্ধু 🤝 | COC"],
["শেষ চেষ্টা","আত্মবিশ্বাস","সবাই যখন বলেছিল তুমি পারবে না, তখনও নিজের শেষ চেষ্টাটা করে যাও। হয়তো আজ সফল হবে না, কিন্তু প্রতিটি চেষ্টা তোমাকে লক্ষ্যের আরও কাছে নিয়ে যাবে।","কঠিন Base Attack","শেষ চেষ্টা কখনো বৃথা যায় না 🔥 | COC"],
["একাকীত্ব","নিঃসঙ্গতা","অনেক মানুষের ভিড়েও কখনো কখনো মনটা একা হয়ে যায়। কেউ বুঝতে চায় না, কেউ শুনতে চায় না। তবুও নিজের স্বপ্নকে ছেড়ে দিও না—নীরব পরিশ্রম একদিন কথা বলবেই।","রাতের Village","ভিড়ের মাঝেও একা 💔 | Clash of Clans"],
["নতুন সকাল","আশা ও নতুন শুরু","গতকাল যা হয়েছে, তা বদলানো যায় না। কিন্তু আজ আবার শুরু করা যায়। ভুল, কষ্ট আর পরাজয়কে সঙ্গে নিয়ে নয়—সেগুলো থেকে শিক্ষা নিয়ে সামনে এগিয়ে যাও।","Upgrade ও Victory","নতুন করে শুরু করো 🌅 | Emotional COC Story"]
];
for(let i=8;i<=30;i++){
  videos.push([`দিন ${i} এর গল্প`,"জীবন ও অনুপ্রেরণা","জীবনের প্রতিটি দিন আমাদের কিছু না কিছু শেখায়। কখনো আমরা জিতি, কখনো হেরে যাই। কিন্তু থেমে না থেকে নিজের স্বপ্নের দিকে এগিয়ে যাওয়াই আসল সাহস। আজকের ছোট চেষ্টা আগামী দিনের বড় পরিবর্তন হতে পারে।","নিজের পছন্দের পরিষ্কার Attack বা Village দৃশ্য",`দিন ${i}: আবার চেষ্টা করো ❤️ | Clash of Clans Shorts`]);
}
const buttons=document.getElementById("dayButtons");
const content=document.getElementById("dayContent");
function showDay(index){
  [...buttons.children].forEach((b,i)=>b.classList.toggle("active",i===index));
  const v=videos[index];
  content.innerHTML=`<div class="meta"><span class="pill">দিন ${index+1}</span><span class="pill">${v[1]}</span><span class="pill">৩০–৬০ সেকেন্ড</span></div>
  <h3>${v[0]}</h3><p><strong>ভয়েস স্ক্রিপ্ট:</strong></p><pre>${v[2]}</pre>
  <p><strong>Gameplay নির্দেশনা:</strong></p><ul><li>${v[3]}</li><li>ভয়েসের সঙ্গে মিল রেখে দৃশ্য কাট করুন।</li><li>ব্যাকগ্রাউন্ড মিউজিক কম ভলিউমে রাখুন।</li><li>বাংলা সাবটাইটেল যুক্ত করুন।</li></ul>
  <p><strong>ভিডিও Title:</strong> ${v[4]}</p>`;
}
videos.forEach((v,i)=>{const b=document.createElement("button");b.textContent=`দিন ${i+1}`;b.addEventListener("click",()=>showDay(i));buttons.appendChild(b)});
showDay(0);
document.getElementById("year").textContent=new Date().getFullYear();
const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
