(function(){
  var log=document.getElementById('log'), chips=document.getElementById('chips');
  function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
  function add(cls,html){var d=document.createElement('div');d.className='msg '+cls;d.innerHTML=html;log.appendChild(d);log.scrollTop=log.scrollHeight;return d;}
  function answer(item){
    var h='<p>'+item.r.join('</p><p>')+'</p><div class="refs">';
    item.refs.forEach(function(r){var s=SRC[r[0]];h+='<a href="'+s.url+'" target="_blank" rel="noopener"><b>'+s.court+'</b>, '+r[1]+'<span>'+s.hote+' ↗</span></a>';});
    return h+'</div>';
  }
  function ask(text,item){
    add('me',text.replace(/</g,'&lt;'));
    var t=add('bot typing','<span></span><span></span><span></span>');
    setTimeout(function(){
      t.className='msg bot';
      t.innerHTML=item?answer(item):'<p>Je n\'ai pas de texte vérifié pour répondre à cette question, donc je ne réponds pas. Essayez une des questions proposées, ou posez-la à votre responsable conformité.</p>';
      log.scrollTop=log.scrollHeight;
    },550);
  }
  function match(text){
    var n=norm(text),best=null,score=0;
    QA.forEach(function(it){var s=0,seen={};it.mots.forEach(function(m){m=norm(m);if(seen[m])return;seen[m]=1;if(n.indexOf(m)>-1)s+=1;});if(s>score){score=s;best=it;}});
    return score>0?best:null;
  }
  QA.forEach(function(it){var b=document.createElement('button');b.type='button';b.textContent=it.q;b.onclick=function(){ask(it.q,it);};chips.appendChild(b);});
  document.getElementById('ask').onsubmit=function(e){e.preventDefault();var i=document.getElementById('q'),v=i.value.trim();if(!v)return;ask(v,match(v));i.value='';};
  add('bot','<p>Bonjour. Je réponds aux questions sur les transferts d\'argent dans l\'UEMOA à partir des textes officiels de la BCEAO et de l\'UEMOA, avec l\'article et le lien. Choisissez une question.</p>');
  var ul=document.getElementById('liste');
  Object.keys(SRC).forEach(function(k){var s=SRC[k],li=document.createElement('li');li.innerHTML=s.nom+'. <a href="'+s.url+'" target="_blank" rel="noopener">'+s.hote+'</a>';ul.appendChild(li);});
  if(location.hash==='#auto'){ask(QA[1].q,QA[1]);}
})();