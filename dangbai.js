/* ═══════════════════════════════════════
   Font - lengnef | postbai.js
   ═══════════════════════════════════════ */

const loadedFonts = new Set();
function loadFontIfNeeded(fontName, fontFile) {
  if (!fontFile || loadedFonts.has(fontName)) return;
  const face = new FontFace(fontName, `url('${fontFile}')`);
  face.load().then(f => {
    document.fonts.add(f);
    loadedFonts.add(fontName);
    const previewText = document.getElementById('previewInput')?.value.trim();
    if (previewText) {
      document.querySelectorAll(`.font-card[data-font="${CSS.escape(fontName)}"] .preview-text-label`)
        .forEach(el => { el.style.fontFamily = `"${fontName}"`; });
    }
  }).catch(() => {});
}

const FONTS = [
  { name: "LF CHABUL",               styles: 1, image: "images/LFCHABUL.jpg",              font: "fonts/LF CHABUL.ttf",              id: "LF CHABUL" },
  { name: "LF Brotherhood Script",   styles: 1, image: "images/LFBrotherhoodScript.jpg",   font: "fonts/LF Brotherhood Script.ttf",  id: "LF Brotherhood Script.ttf" },
  { name: "LF Hatton",               styles: 3, image: "images/LFHatton.jpg",              font: "fonts/LF Hatton Regular.ttf",      id: "LF Hatton.zip" },
  { name: "LF Storm Fighter",        styles: 1, image: "images/LFStormFighter.jpg",        font: "fonts/LF Storm Fighter.ttf",       id: "LF Storm Fighter.ttf" },
  { name: "LF Brutal",               styles: 1, image: "images/LFBrutal.jpg",              font: "fonts/LF Brutal.ttf",              id: "LF Brutal.ttf" },
  { name: "LF Maison Neue Book",     styles: 1, image: "images/LFMaisonNeueBook.jpg",      font: "fonts/LF Maison Neue Book.ttf",    id: "LF Maison Neue Book.ttf" },
  { name: "LF Galiano Text",         styles: 1, image: "images/LFGalianoText.jpg",         font: "fonts/LF Galiano Text.ttf",        id: "LF Galiano Text.ttf" },
  { name: "LF Vermin Verile",        styles: 1, image: "images/LFVerminVerile.jpg",        font: "fonts/LF Vermin Verile.ttf",       id: "LF Vermin Verile.ttf" },
  { name: "LF Axel",                 styles: 2, image: "images/LFAxel.jpg",                font: "fonts/LF Axel Regular.ttf",        id: "LF Axel.zip" },
  { name: "LF Plumage",              styles: 1, image: "images/lfplumage.jpg",             font: "fonts/LF Plumage.ttf",             id: "LF Plumage.ttf" },
  { name: "LF Christmas Fecsival",   styles: 1, image: "images/lfchristmasfecsival.jpg",   font: "fonts/LF Christmas Fecsival.ttf",  id: "LF Christmas Fecsival.ttf" },
  { name: "LF Winstgue",             styles: 1, image: "images/lfwinstgue.jpg",            font: "fonts/LF Winstgue.ttf",            id: "LF Winstgue.ttf" },
  { name: "LF Berishye",             styles: 1, image: "images/lfberishye.jpg",            font: "fonts/LF Berishye.ttf",            id: "LF Berishye.ttf" },
  { name: "LF Queen Of Silence",     styles: 1, image: "images/lfqueenofsilence.jpg",      font: "fonts/LF Queen of Silence.ttf",    id: "LF Queen of Silence.ttf" },
  { name: "LF Tisk",                 styles: 1, image: "images/lftisk.jpg",                font: "fonts/LF Tisk.ttf",                id: "LF Tisk.ttf" },
  { name: "LF Cezanne",              styles: 1, image: "images/lfcezanne.jpg",             font: "fonts/LF CEZANNE.ttf",         id: "LF CEZANNE.ttf" },
  { name: "LF Amoresa",              styles: 1, image: "images/lfamoresa.jpg",             font: "fonts/LF Amoresa.ttf",             id: "LF Amoresa.ttf" },
  { name: "LF Aniyah Script",        styles: 1, image: "images/lfaniyahscript.jpg",        font: "fonts/LF Aniyah Script.ttf",       id: "LF Aniyah Script.ttf" },
  { name: "LF Aquiline Two",         styles: 1, image: "images/lfaquilinetwo.jpg",         font: "fonts/LF Aquiline Two.ttf",        id: "LF Aquiline Two.ttf" },
  { name: "LF Hoshiko Satsuki",      styles: 1, image: "images/lfhoshikosatsuki.jpg",      font: "fonts/LF Hoshiko Satsuki.ttf",     id: "LF Hoshiko Satsuki.ttf" },
  { name: "LF Aretha Bridge",        styles: 1, image: "images/lfarethabridge.jpg",        font: "fonts/LF Aretha Bridge.ttf",       id: "LF Aretha Bridge.ttf" },
  { name: "LF Argue",                styles: 1, image: "images/lfargue.jpg",               font: "fonts/LF Argue.ttf",               id: "LF Argue.ttf" },
  { name: "LF Aughris",              styles: 1, image: "images/lfaughris.jpg",             font: "fonts/LF ED Aughris.ttf",          id: "LF ED Aughris.ttf" },
  { name: "LF Austyns Sakyra",       styles: 2, image: "images/lfaustynssakyra.jpg",       font: "fonts/LF Austyns Sakyra Regular.ttf",      id: "LF Austyns Sakyra.zip" },
  { name: "LF Bridget",              styles: 1, image: "images/lfbridget.jpg",             font: "fonts/LF Bridget.ttf",             id: "LF Bridget.ttf" },
  { name: "LF Cadet",                styles: 1, image: "images/lfcadet.jpg",               font: "fonts/LF Cadet.ttf",               id: "LF Cadet.ttf" },
  { name: "LF Catherine",            styles: 1, image: "images/lfcatherine.jpg",           font: "fonts/LF Catherine.ttf",           id: "LF Catherine.ttf" },
  { name: "LF Archer",               styles: 2, image: "images/lfarcher.jpg",              font: "fonts/LF Archer Bold Pro.ttf",     id: "LF Archer.zip" },
  { name: "LF Cyrene",               styles: 1, image: "images/lfcyrene.jpg",              font: "fonts/LF Cyrene.ttf",              id: "LF Cyrene.ttf" },
  { name: "LF Fagibestin",           styles: 1, image: "images/lffagibestin.jpg",          font: "fonts/LF Fagibestin.ttf",          id: "LF Fagibestin.ttf" },
  { name: "LF Geizer",               styles: 1, image: "images/lfgeizer.jpg",              font: "fonts/LF Geizer.ttf",              id: "LF Geizer.ttf" },
  { name: "LF Gelato Fresco",        styles: 1, image: "images/lfgelatofresco.jpg",        font: "fonts/LF Gelato Fresco Regular.ttf",       id: "LF Gelato Fresco Regular.ttf" },
  { name: "LF Glifta",               styles: 2, image: "images/lfglifta.jpg",              font: "fonts/LF Glifta Regular.ttf",      id: "LF Glifta.zip" },
  { name: "LF Glitzier",             styles: 1, image: "images/lfglitzier.jpg",            font: "fonts/LF Glitzier.ttf",            id: "LF Glitzier.ttf" },
  { name: "LF Hatter Display Pro",   styles: 1, image: "images/lfhatterdisplaypro.jpg",    font: "fonts/LF Hatter Display Pro.ttf",  id: "LF Hatter Display Pro.ttf" },
  { name: "LF Heycomic",             styles: 1, image: "images/lfheycomic.jpg",            font: "fonts/LF Hey Comic.ttf",            id: "LF Hey Comic.ttf" },
  { name: "LF Hit The Road",         styles: 1, image: "images/lfhittheroad.jpg",          font: "fonts/LF Hit The Road.ttf",        id: "LF Hit The Road.ttf" },
  { name: "LF Viva La Fiesta",       styles: 1, image: "images/LFVivaLaFiesta.jpg",        font: "fonts/LF Viva La Fiesta - Uno Base.ttf",            id: "LF Viva La Fiesta - Uno Base.ttf" },
  { name: "LF Huggie Bunny",         styles: 1, image: "images/lfhuggiebunny.jpg",         font: "fonts/LF Huggie Bunny.ttf",        id: "LF Huggie Bunny.ttf" },
  { name: "LF Jambie",               styles: 1, image: "images/lfjambie.jpg",              font: "fonts/LF Jambie.ttf",              id: "LF Jambie.ttf" },
  { name: "LF JasmineUPC",           styles: 1, image: "images/lfjasmineupc.jpg",          font: "fonts/LF JasmineUPC.ttf",          id: "LF JasmineUPC.ttf" },
  { name: "LF Klaristha",            styles: 1, image: "images/lfklaristha.jpg",           font: "fonts/LF Klaristha.ttf",           id: "LF Klaristha.ttf" },
  { name: "LF Lagona",               styles: 1, image: "images/lflagona.jpg",              font: "fonts/LF Lagona.ttf",              id: "LF Lagona.ttf" },
  { name: "LF Losbanditos",          styles: 1, image: "images/lflosbanditos.jpg",         font: "fonts/LF IFC LOS BANDITOS.ttf",    id: "LF IFC LOS BANDITOS.ttf" },
  { name: "LF Loyola Pro",           styles: 1, image: "images/lfloyolapro.jpg",           font: "fonts/LF Loyola Pro.ttf",          id: "LF Loyola Pro.ttf" },
  { name: "LF Luna Morta",           styles: 1, image: "images/lflunamortamystical.jpg",   font: "fonts/LF Luna Morta Mystical.ttf", id: "LF Luna Morta Mystical.ttf" },
  { name: "LF Magic School One",     styles: 1, image: "images/lfmagicschoolone.jpg",      font: "fonts/LF Magic School One.ttf",    id: "LF Magic School One.ttf" },
  { name: "LF Migra",                styles: 1, image: "images/lfmigra.jpg",               font: "fonts/LF Migra.ttf",               id: "LF Migra.ttf" },
  { name: "LF Milven",               styles: 1, image: "images/lfmilven.jpg",              font: "fonts/LF Milven.ttf",              id: "LF Milven.ttf" },
  { name: "LF Mithella",             styles: 1, image: "images/lfmithella.jpg",            font: "fonts/LF Mithella.ttf",            id: "LF Mithella.ttf" },
  { name: "LF Monarda",              styles: 1, image: "images/lfmonarda.jpg",             font: "fonts/LF Monarda.ttf",             id: "LF Monarda.ttf" },
  { name: "LF Neofolia",             styles: 1, image: "images/lfneofolia.jpg",            font: "fonts/LF Neofolia.ttf",            id: "LF Neofolia.ttf" },
  { name: "LF Nghich Thuy Han",      styles: 1, image: "images/lfnghichthuyhan.jpg",       font: "fonts/LF Nghich Thuy Han.ttf",     id: "LF Nghich Thuy Han.ttf" },
  { name: "LF Oregano",              styles: 2, image: "images/lforegano.jpg",             font: "fonts/LF Oregano Regular.ttf",     id: "LF Oregano.zip" },
  { name: "LF Playful",              styles: 1, image: "images/lfplayful.jpg",             font: "fonts/LF Playful.ttf",             id: "LF Playful.ttf" },
  { name: "LF Alkatra",              styles: 1, image: "images/lfalkatra.jpg",             font: "fonts/LF Alkatra.ttf",             id: "LF Alkatra.ttf" },
  { name: "LF Rancho",               styles: 1, image: "images/lfrancho.jpg",              font: "fonts/LF Rancho.ttf",              id: "LF Rancho.ttf" },
  { name: "LF Rochester",            styles: 1, image: "images/lfrochester.jpg",           font: "fonts/LF Rochester.ttf",           id: "LF Rochester.ttf" },
  { name: "LF Satisfy",              styles: 1, image: "images/lfsatisfy.jpg",             font: "fonts/LF Satisfy.ttf",             id: "LF Satisfy.ttf" },
  { name: "LF Shantay",              styles: 1, image: "images/lfshantay.jpg",             font: "fonts/LF Shantay.ttf",             id: "LF Shantay.ttf" },
  { name: "LF Smile Delight",        styles: 1, image: "images/lfsmiledelight.jpg",        font: "fonts/LF Smile Delight.ttf",       id: "LF Smile Delight.ttf" },
  { name: "LF Sounds Analog",        styles: 1, image: "images/lfsoundsanalog.jpg",        font: "fonts/LF Sounds Analog.ttf",       id: "LF Sounds Analog.ttf" },
  { name: "LF Stager",               styles: 2, image: "images/lfstager.jpg",              font: "fonts/LF Stager Regular.ttf",      id: "LF Stager.zip" },
  { name: "LF Sue Ellen Francisco",  styles: 1, image: "images/lfsueellenfrancisco.jpg",   font: "fonts/LF Sue Ellen Francisco.ttf", id: "LF Sue Ellen Francisco.ttf" },
  { name: "LF TAN Jambore",          styles: 1, image: "images/lftanjambore.jpg",          font: "fonts/LF TAN Jambore.ttf",         id: "LF TAN Jambore.ttf" },
  { name: "LF Amigh",                styles: 1, image: "images/lfamigh.jpg",               font: "fonts/LF Amigh.ttf",               id: "LF Amigh.ttf" },
  { name: "LF Tratex",               styles: 1, image: "images/lftratex.jpg",              font: "fonts/LF Tratex Svart.ttf",        id: "LF Tratex.zip" },
  { name: "LF Verlag",               styles: 2, image: "images/lfverlag.jpg",              font: "fonts/LF Verlag Bold.ttf",         id: "LF Verlag.zip" },
  { name: "LF Vintage Goods",        styles: 1, image: "images/lfvintagegoods.jpg",        font: "fonts/LF Vintage Goods.ttf",       id: "LF Vintage Goods.ttf" },
  { name: "LF Ahsing",               styles: 1, image: "images/lfahsing.jpg",              font: "fonts/LF Ahsing.ttf",              id: "LF Ahsing.ttf" },

];

// ─── Config ───
const PAGE_SIZE = 24;

// ─── State ───
let currentList = [];
let shownCount  = 0;

// ─── DOM ───
const grid        = document.getElementById('fontGrid');
const searchInput = document.getElementById('searchInput');
const searchCount = document.getElementById('searchCount');
const loadMoreBtn = document.getElementById('btnLoadMore');

// ─── Helpers ───
function styleLabel(n) {
  return n === 1 ? '1 Style' : `${n} Styles`;
}

function getDownloadUrl(id) {
  return id ? `https://lengnef.github.io/store/fonts/${id}` : '#';
}

function createCard(font, index) {
  const card = document.createElement('div');
  card.className = 'font-card';
  card.dataset.font     = font.name;
  card.dataset.fontFile = font.font || "";
  card.style.animationDelay = `${(index % PAGE_SIZE) * 0.04}s`;
  const hasLink = font.id && font.id !== '#';

  // Load font nếu có file
  loadFontIfNeeded(font.name, font.font);

  card.innerHTML = `
    <div class="card-preview">
      <img src="${font.image}" alt="${font.name}" loading="lazy">
      <div class="preview-text-label"></div>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <div class="card-font-name">${font.name}</div>
        <div class="card-styles">
          <span class="style-badge">${styleLabel(font.styles)}</span>
        </div>
      </div>
      <button class="btn-download" data-href="${getDownloadUrl(font.id)}" ${!hasLink ? 'disabled' : ''}>
        <i class="${hasLink ? 'ri-download-2-line' : 'ri-time-line'}"></i>
        ${hasLink ? 'Download' : 'Chờ cập nhật'}
      </button>
    </div>
  `;

  // Áp dụng preview text nếu đang có
  const currentPreview = document.getElementById('previewInput')?.value.trim();
  if (currentPreview) {
    applyPreviewToCard(card, font.name, currentPreview, getPreviewFontSize());
  }

  card.querySelector('.btn-download').addEventListener('click', function () {
    const href = this.dataset.href;
    if (href && href !== '#') window.open(href, '_self');

    const original = this.innerHTML;
    this.innerHTML = `<i class="ri-check-line"></i> Đang tải...`;
    this.style.background = 'linear-gradient(90deg, #7db870, #6a9f5f)';
    setTimeout(() => {
      this.innerHTML = original;
      this.style.background = '';
    }, 1800);
  });

  return card;
}

// ─── Render batch (append) ───
function appendBatch() {
  const batch = currentList.slice(shownCount, shownCount + PAGE_SIZE);
  batch.forEach((font, i) => grid.appendChild(createCard(font, i)));
  shownCount += batch.length;

  // Xem tiếp
  if (shownCount >= currentList.length) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
    loadMoreBtn.querySelector('.load-more-remaining').textContent =
      `(còn ${currentList.length - shownCount} font)`;
  }

  // Cập nhật count
  const total = FONTS.length;
  searchCount.textContent = currentList.length < total
    ? `${currentList.length} / ${total} font`
    : `${total} font`;
}

// ─── Reset & render từ đầu ───
function renderFonts(list) {
  currentList = list;
  shownCount  = 0;
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 0;color:var(--muted);font-size:1rem;">
      <i class="ri-file-search-line" style="font-size:2.5rem;display:block;margin-bottom:12px;"></i>
      Không tìm thấy font
    </div>`;
    loadMoreBtn.classList.add('hidden');
    return;
  }

  appendBatch();
}

// ─── Search ───
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  searchClear.classList.toggle('visible', q.length > 0);
  renderFonts(q ? FONTS.filter(f => f.name.toLowerCase().includes(q)) : FONTS);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  renderFonts(FONTS);
  searchInput.focus();
});

// ─── Load more ───
loadMoreBtn.addEventListener('click', () => {
  appendBatch();
});

// ─── Preview text helpers ───
function getPreviewFontSize() {
  const slider = document.getElementById('previewSize');
  return slider ? parseInt(slider.value) : 30;
}

function applyPreviewToCard(card, fontName, text, fontSize) {
  const preview = card.querySelector('.card-preview');
  const label   = card.querySelector('.preview-text-label');
  const img     = card.querySelector('.card-preview img');
  if (!preview || !label) return;
  preview.classList.add('preview-text-mode');
  if (img && !img.dataset.origSrc) {
    img.dataset.origSrc = img.src;
    img.src = "images/blur.jpg";
  }
  label.textContent = text;
  const hasFontFile = !!(card.dataset.fontFile);
  label.style.fontFamily = hasFontFile ? `"${fontName}", sans-serif` : 'sans-serif';
  label.style.fontSize = (fontSize || getPreviewFontSize()) + 'px';
}

function clearPreviewFromCard(card) {
  const preview = card.querySelector('.card-preview');
  const label   = card.querySelector('.preview-text-label');
  const img     = card.querySelector('.card-preview img');
  if (!preview || !label) return;
  preview.classList.remove('preview-text-mode');
  if (img && img.dataset.origSrc) {
    img.src = img.dataset.origSrc;
    delete img.dataset.origSrc;
  }
  label.textContent = '';
  label.style.fontFamily = '';
  label.style.fontSize = '';
}

function applyPreviewToAll(text, fontSize) {
  const fs = fontSize || getPreviewFontSize();
  document.querySelectorAll('.font-card').forEach(card => {
    const fontName = card.dataset.font || '';
    applyPreviewToCard(card, fontName, text, fs);
  });
}

function clearPreviewFromAll() {
  document.querySelectorAll('.font-card').forEach(card => {
    clearPreviewFromCard(card);
  });
}

// ─── Preview Input events ───
const previewInput    = document.getElementById('previewInput');
const previewClear    = document.getElementById('previewClear');
const previewSize     = document.getElementById('previewSize');
const previewSizeLabel = document.getElementById('previewSizeLabel');
const previewSliderRow = document.querySelector('.preview-slider-row');

previewInput.addEventListener('input', () => {
  const text = previewInput.value.trim();
  previewClear.classList.toggle('visible', previewInput.value.length > 0);
  previewSliderRow.classList.toggle('visible', previewInput.value.length > 0);
  if (text) {
    applyPreviewToAll(text);
  } else {
    clearPreviewFromAll();
  }
});

previewClear.addEventListener('click', () => {
  previewInput.value = '';
  previewClear.classList.remove('visible');
  previewSliderRow.classList.remove('visible');
  clearPreviewFromAll();
  previewInput.focus();
});

// ─── Slider events ───
previewSize.addEventListener('input', () => {
  const fs = parseInt(previewSize.value);
  previewSizeLabel.textContent = fs + 'px';
  const text = previewInput.value.trim();
  if (text) applyPreviewToAll(text, fs);
});

// ─── Init ───
renderFonts(FONTS);
const targetFont = decodeURIComponent(window.location.hash.slice(1));
if (targetFont) {
  searchInput.value = targetFont;
  searchClear.classList.add('visible');
  renderFonts(FONTS.filter(f => f.name.toLowerCase().includes(targetFont.toLowerCase())));
}

// BACK TO TOP
const backToTopBtn = document.querySelector('.backtotop-btn');

window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 800 ? 'flex' : 'none';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
