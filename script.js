let contentData=[];
const select=document.getElementById('daySelect');
const card=document.getElementById('contentCard');

function esc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function render(index){
 const item=contentData[index];
 if(!item)return;
 card.innerHTML=`
 <h1>Day ${item.day}: ${esc(item.topic)}</h1>
 <div class="section"><h2>🎙️ Voice Script</h2><div class="box">${esc(item.voice_script)}</div></div>
 <div class="section"><h2>🎬 Gameplay নির্দেশনা</h2><div class="box">${esc(item.gameplay)}</div></div>
 <div class="section"><h2>📝 YouTube Title</h2><div class="box">${esc(item.title)}</div></div>
 <div class="section"><h2>📄 Description</h2><div class="box">${esc(item.description)}</div></div>
 <div class="section"><h2>🔎 Tags</h2><div>${item.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></div>
 <div class="section"><h2>#️⃣ Hashtags</h2><div class="box">${esc(item.hashtags)}</div></div>
 `;
}
fetch('content.json').then(r=>r.json()).then(data=>{
 contentData=data;
 data.forEach((item,i)=>{
  const option=document.createElement('option');
  option.value=i; option.textContent=`Day ${item.day} — ${item.topic}`;
  select.appendChild(option);
 });
 render(0);
});
select.addEventListener('change',()=>render(Number(select.value)));
document.getElementById('copyAll').addEventListener('click',()=>{
 const item=contentData[Number(select.value)];
 if(!item)return;
 const text=`${item.title}\n\nVOICE SCRIPT:\n${item.voice_script}\n\nGAMEPLAY:\n${item.gameplay}\n\nDESCRIPTION:\n${item.description}\n\nTAGS:\n${item.tags.join(', ')}\n\nHASHTAGS:\n${item.hashtags}`;
 const area=document.createElement('textarea');
 area.value=text;document.body.appendChild(area);area.select();
 try{document.execCommand('copy');alert('কনটেন্ট কপি হয়েছে।')}catch(e){alert('কপি করা যায়নি—টেক্সট সিলেক্ট করে কপি করুন।')}
 area.remove();
});
