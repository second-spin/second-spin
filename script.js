(() => {
 const toggle=document.getElementById("menuToggle"), nav=document.getElementById("navLinks");
 toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
 document.getElementById("year").textContent=new Date().getFullYear();
 const search=document.getElementById("searchInput"),filter=document.getElementById("categoryFilter"),cards=[...document.querySelectorAll(".gear-card")],none=document.getElementById("noResults");
 function applyFilters(){let count=0;const q=search.value.trim().toLowerCase(),cat=filter.value;cards.forEach(card=>{const ok=(cat==="all"||card.dataset.category===cat)&&(!q||(card.dataset.search+" "+card.textContent).toLowerCase().includes(q));card.hidden=!ok;if(ok)count++;});none.hidden=count>0;}
 search.addEventListener("input",applyFilters);filter.addEventListener("change",applyFilters);
 const toast=document.getElementById("toast");let timer;
 document.querySelectorAll("[data-need]").forEach(btn=>btn.addEventListener("click",()=>{toast.textContent="“"+btn.dataset.need+"” is a category preview. Real listings and requests will be enabled after the inventory is connected.";toast.hidden=false;clearTimeout(timer);timer=setTimeout(()=>toast.hidden=true,4800);}));
})();