/* ===== CONFIGURAÇÃO (edite apenas aqui) ===== */
const CONFIG = {
  whatsapp: "5534991099276", // DDI + DDD + número, só dígitos
  mensagem: "Olá, Bruno! vi seu portfólio e gostaria de saber mais sobre seu trabalho."
};
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;a.target="_blank";a.rel="noopener"});
document.getElementById("yr").textContent=new Date().getFullYear();
document.documentElement.classList.add('js');
var hd=document.querySelector('.hd');
addEventListener('scroll',function(){hd.classList.toggle('on',scrollY>20)},{passive:true});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})}else{els.forEach(function(el){el.classList.add('in')})}
