(() => {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  menuToggle?.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  siteNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
  document.getElementById("year").textContent = new Date().getFullYear();

  const search = document.getElementById("gearSearch");
  const filter = document.getElementById("gearFilter");
  const cards = [...document.querySelectorAll(".listing-card")];
  const empty = document.getElementById("emptyState");
  function filterListings() {
    const q = (search.value || "").trim().toLowerCase();
    const cat = filter.value;
    let visible = 0;
    cards.forEach(card => {
      const match = (cat === "all" || card.dataset.category === cat) &&
        (q === "" || (card.dataset.search + " " + card.textContent).toLowerCase().includes(q));
      card.hidden = !match;
      if (match) visible++;
    });
    empty.hidden = visible !== 0;
  }
  search.addEventListener("input", filterListings);
  filter.addEventListener("change", filterListings);

  const modal = document.getElementById("previewModal");
  const previewTitle = document.getElementById("previewTitle");
  const previewText = document.getElementById("previewText");
  const copyStatus = document.getElementById("copyStatus");
  let lastPreview = "";
  function showPreview(title, text, resultBox) {
    lastPreview = text;
    previewTitle.textContent = title;
    previewText.textContent = text;
    copyStatus.textContent = "";
    modal.hidden = false;
    document.getElementById("closeModal").focus();
    resultBox.hidden = false;
    resultBox.textContent = "Preview created on this device only. Nothing has been sent or published.";
  }
  function formText(form, heading) {
    const data = new FormData(form);
    const rows = [heading, "—".repeat(32)];
    for (const [key, value] of data.entries()) {
      if (key === "consent") continue;
      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase());
      rows.push(`${label}: ${String(value).trim() || "Not provided"}`);
    }
    rows.push("", "Privacy reminder: This is a local preview, not a submitted listing/request.");
    return rows.join("\n");
  }
  document.getElementById("donationForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    showPreview("Donation preview", formText(form, "SECOND SPIN — EQUIPMENT DONATION"), document.getElementById("donationResult"));
  });
  document.getElementById("requestForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    showPreview("Request preview", formText(form, "SECOND SPIN — EQUIPMENT REQUEST"), document.getElementById("requestResult"));
  });
  document.querySelectorAll("[data-request]").forEach(button => button.addEventListener("click", () => {
    document.getElementById("request").scrollIntoView({behavior:"smooth"});
    const select = document.querySelector('#requestForm select[name="need"]');
    const wanted = button.dataset.request.toLowerCase();
    if (wanted.includes("quad")) select.value = "Quad skates";
    else if (wanted.includes("inline")) select.value = wanted.includes("wheel") ? "Wheels or bearings" : "Inline skates";
    else if (wanted.includes("wheel")) select.value = "Wheels or bearings";
    else if (wanted.includes("helmet")) select.value = "Protective gear";
    select.focus({preventScroll:true});
  }));
  function closeModal() { modal.hidden = true; }
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("donePreview").addEventListener("click", closeModal);
  modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.hidden) closeModal(); });
  document.getElementById("copyPreview").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(lastPreview);
      copyStatus.textContent = "Copied. You can paste these details into your chosen submission method.";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(previewText);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = "Select and copy the highlighted text manually.";
    }
  });
})();