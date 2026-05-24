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

  { name: "LF Plumage",              styles: 1, image: "images/lfplumage.jpg",             font: "fonts/LF Plumage.ttf",             id: "15XwyGSwVEeoCgit1D34sMqNZ6KhjRyyS" },
  { name: "LF Christmas Fecsival",   styles: 1, image: "images/lfchristmasfecsival.jpg",   font: "fonts/LF Christmas Fecsival.ttf",  id: "1EXihNccGiplbWVjKZvad1J5-wh2Izn0q" },
  { name: "LF Winstgue",             styles: 1, image: "images/lfwinstgue.jpg",            font: "fonts/LF Winstgue.ttf",            id: "13mj7EYg-XNIJTfEH2qiy9byKmHIvEvWR" },
  { name: "LF Berishye",             styles: 1, image: "images/lfberishye.jpg",            font: "fonts/LF Berishye.ttf",            id: "1WxTahekjb5oLPO4s_fy7biT8HsOqE1V-" },
  { name: "LF Queen Of Silence",     styles: 1, image: "images/lfqueenofsilence.jpg",      font: "fonts/LF Queen Of Silence.ttf",    id: "1UayfdBOGdfJVz_j692Gr8HXGPQ4EEetg" },
  { name: "LF Tisk",                 styles: 1, image: "images/lftisk.jpg",                font: "fonts/LF Tisk.ttf",                id: "11ecwFG8j9oxd-zR2RRpwYjN78zSupbRl" },
  { name: "LF Cezanne",              styles: 1, image: "images/lfcezanne.jpg",             font: "fonts/LF Cezanne.ttf",             id: "1dKutAFryxMEFV_NzKnV9HiDJo6hnm92K" },
  { name: "LF Amoresa",              styles: 1, image: "images/lfamoresa.jpg",             font: "fonts/LF Amoresa.ttf",             id: "1HE8kPtDBLeOaEW1avYO7QLBmnr1GVy-8" },
  { name: "LF Aniyah Script",        styles: 1, image: "images/lfaniyahscript.jpg",        font: "fonts/LF Aniyah Script.ttf",       id: "1WU4BhnsMxF9j-HvlL3bEMNEYIIHa2cav" },
  { name: "LF Aquiline Two",         styles: 1, image: "images/lfaquilinetwo.jpg",         font: "fonts/LF Aquiline Two.ttf",        id: "1mRziKT967iZ-YQuAIBDEpXPQb4wYmfZ7" },
  { name: "LF Hoshiko Satsuki",      styles: 1, image: "images/lfhoshikosatsuki.jpg",      font: "fonts/LF Hoshiko Satsuki.ttf",     id: "147TRoPEkaiM5NbXx4rUT5mlRsbFa6WfG" },
  { name: "LF Aretha Bridge",        styles: 1, image: "images/lfarethabridge.jpg",        font: "fonts/LF Aretha Bridge.ttf",       id: "1PAoALEqEorxURx9aBh3OGKTZnOHd3F4z" },
  { name: "LF Argue",                styles: 1, image: "images/lfargue.jpg",               font: "fonts/LF Argue.ttf",               id: "18fd6GxSEkE9lLK6AZch_QrHajVi-64IG" },
  { name: "LF Aughris",              styles: 1, image: "images/lfaughris.jpg",             font: "fonts/LF ED Aughris.ttf",          id: "1yZfJNmrjtT9zKnamqATvcJ7KB8C-4t1V" },
  { name: "LF Austyns Sakyra",       styles: 2, image: "images/lfaustynssakyra.jpg",       font: "fonts/LF Austyns Sakyra Regular.ttf",      id: "https://drive.google.com/drive/folders/11TsQSlZFUAPFl5pNqqzAfbbaNka3WKqh?usp=drive_link" },
  { name: "LF Bridget",              styles: 1, image: "images/lfbridget.jpg",             font: "fonts/LF Bridget.ttf",             id: "1h1C6yAlJwcCZfgi21iLjauJKBnYEx2BX" },
  { name: "LF Cadet",                styles: 1, image: "images/lfcadet.jpg",               font: "fonts/LF Cadet.ttf",               id: "1SnubvbX6slFBss-ZQN-_vvxl-0wcfPh_" },
  { name: "LF Catherine",            styles: 1, image: "images/lfcatherine.jpg",           font: "fonts/LF Catherine.ttf",           id: "15goxTqoUf4GNK8d73KJUQIj1e40CsfxK" },
  { name: "LF Archer",               styles: 2, image: "images/lfarcher.jpg",              font: "fonts/LF Archer Bold Pro.ttf",     id: "https://drive.google.com/drive/folders/1iK6S9R1G2JwD3p7uI1O7q0Kg1rddF3M6?usp=drive_link" },
  { name: "LF Cyrene",               styles: 1, image: "images/lfcyrene.jpg",              font: "fonts/LF Cyrene.ttf",              id: "1pxmQEelZ-QzUrf0A_18kGEsQRDBNpxlq" },
  { name: "LF Fagibestin",           styles: 1, image: "images/lffagibestin.jpg",          font: "fonts/LF Fagibestin.ttf",          id: "183Q5Fz2qMYrJs7h5ZDYMR7yRf7BwCTkH" },
  { name: "LF Geizer",               styles: 1, image: "images/lfgeizer.jpg",              font: "fonts/LF Geizer.ttf",              id: "1z6conzEp4jn8kf-NXwBsLHtRSEWWpVHo" },
  { name: "LF Gelato Fresco",        styles: 1, image: "images/lfgelatofresco.jpg",        font: "fonts/LF Gelato Fresco.ttf",       id: "1AGzJZmZ-pT4g5aMfmPK6Th4sONm07ffs" },
  { name: "LF Glifta",               styles: 2, image: "images/lfglifta.jpg",              font: "fonts/LF Glifta Regular.ttf",      id: "https://drive.google.com/drive/folders/1bQQ-g4MxqlMrcyXnv1z3tqSRX6BClz9c?usp=drive_link" },
  { name: "LF Glitzier",             styles: 1, image: "images/lfglitzier.jpg",            font: "fonts/LF Glitzier.ttf",            id: "18ObFhU8kGS3KE_znB4NWu-PPjhlMFwPq" },
  { name: "LF Hatter Display Pro",   styles: 1, image: "images/lfhatterdisplaypro.jpg",    font: "fonts/LF Hatter Display Pro.ttf",  id: "11FR9AvfnTq5_iG4IoIPXJWDE37bp7pqc" },
  { name: "LF Heycomic",             styles: 1, image: "images/lfheycomic.jpg",            font: "fonts/LF Heycomic.ttf",            id: "#" },
  { name: "LF Hit The Road",         styles: 1, image: "images/lfhittheroad.jpg",          font: "fonts/LF Hit The Road.ttf",        id: "1N8SKIcbi_GX8ycNVQjQzTff7zs2XZ9Q3" },
  { name: "LF Huggie Bunny",         styles: 1, image: "images/lfhuggiebunny.jpg",         font: "fonts/LF Huggie Bunny.ttf",        id: "#" },
  { name: "LF Jambie",               styles: 1, image: "images/lfjambie.jpg",              font: "fonts/LF Jambie.ttf",              id: "1tiHUlP9DvvACQC8rAAK1viM2oiao2RJT" },
  { name: "LF Jasmineupc",           styles: 1, image: "images/lfjasmineupc.jpg",          font: "fonts/LF Jasmineupc.ttf",          id: "1qCkKe44LdWaskK8gwkNxZB1kQyRHRyO-" },
  { name: "LF Klaristha",            styles: 1, image: "images/lfklaristha.jpg",           font: "fonts/LF Klaristha.ttf",           id: "1U4Y0kqt5P3BjgznYo5VTiiBugEjmXECR" },
  { name: "LF Lagona",               styles: 1, image: "images/lflagona.jpg",              font: "fonts/LF Lagona.ttf",              id: "1oesGCO_FjTQy49wQij_x1Ali7iiKegdc" },
  { name: "LF Losbanditos",          styles: 1, image: "images/lflosbanditos.jpg",         font: "fonts/LF Losbanditos.ttf",         id: "1HEVkdX8eE2vlNcENMBilDRnvMpAq0sRl" },
  { name: "LF Loyola Pro",           styles: 1, image: "images/lfloyolapro.jpg",           font: "fonts/LF Loyola Pro.ttf",          id: "1TYcQ3H13LfTxm2qFM3oFvvX2etGhUGPo" },
  { name: "LF Luna Morta",           styles: 1, image: "images/lflunamortamystical.jpg",   font: "fonts/LF Luna Morta Mystical.ttf", id: "1m_f6EfaQQOlOU94YfFrMEKfnXz4S-s-6" },
  { name: "LF Magic School One",     styles: 1, image: "images/lfmagicschoolone.jpg",      font: "fonts/LF Magic School One.ttf",    id: "1zQ7xPmabV5amDYnItaSWVMMqp7DWN3gH" },
  { name: "LF Migra",                styles: 1, image: "images/lfmigra.jpg",               font: "fonts/LF Migra.ttf",               id: "1HaF77IXbKSAQwZv5_VGf75JXjWyUt5zO" },
  { name: "LF Milven",               styles: 1, image: "images/lfmilven.jpg",              font: "fonts/LF Milven.ttf",              id: "#" },
  { name: "LF Mithella",             styles: 1, image: "images/lfmithella.jpg",            font: "fonts/LF Mithella.ttf",            id: "1smOv30r3wxTvGLGBzxLftwZKXlFTXxgq" },
  { name: "LF Monarda",              styles: 1, image: "images/lfmonarda.jpg",             font: "fonts/LF Monarda.ttf",             id: "1WLciG1kcwoEHGt0baqjHiq1Cft7hQE3J" },
  { name: "LF Neofolia",             styles: 1, image: "images/lfneofolia.jpg",            font: "fonts/LF Neofolia.ttf",            id: "1-YdGqM5gLn1dD5JH2yPvi2fRRm3xxOx0" },
  { name: "LF Nghich Thuy Han",      styles: 1, image: "images/lfnghichthuyhan.jpg",       font: "fonts/LF Nghich Thuy Han.ttf",     id: "1Ew-9Cd88pvXQAE6KKw9w2t9R1I6st2Cz" },
  { name: "LF Oregano",              styles: 2, image: "images/lforegano.jpg",             font: "fonts/LF Oregano Regular.ttf",     id: "https://drive.google.com/drive/folders/1qhlZEPI4Pv7T6LwQbxppOxVgB9FfL84n?usp=drive_link" },
  { name: "LF Playful",              styles: 1, image: "images/lfplayful.jpg",             font: "fonts/LF Playful.ttf",             id: "1CcLG_zFeO4l9OtXEb8Rr68y34Fy-K-t8" },
  { name: "LF Alkatra",              styles: 1, image: "images/lfalkatra.jpg",             font: "fonts/LF Alkatra.ttf",             id: "1hFJ6Jwon07rJhdx2BFZfqW5dWM8v4sVX" },
  { name: "LF Rancho",               styles: 1, image: "images/lfrancho.jpg",              font: "fonts/LF Rancho.ttf",              id: "1v0FXQ7RdZdw66Md0g9FY1NjuMz2rhe-c" },
  { name: "LF Rochester",            styles: 1, image: "images/lfrochester.jpg",           font: "fonts/LF Rochester.ttf",           id: "1sbdYQX9aDqCHqZhx232GS_yZs-O-w60Z" },
  { name: "LF Satisfy",              styles: 1, image: "images/lfsatisfy.jpg",             font: "fonts/LF Satisfy.ttf",             id: "1Ybq4DTu4jvLgyNhs6eG-W4emwu9Ltfuu" },
  { name: "LF Shantay",              styles: 1, image: "images/lfshantay.jpg",             font: "fonts/LF Shantay.ttf",             id: "1oCG5kfOl2xkNhfK1NewE769iPLgAqHyw" },
  { name: "LF Smile Delight",        styles: 1, image: "images/lfsmiledelight.jpg",        font: "fonts/LF Smile Delight.ttf",       id: "17YFSpa7_1t1XIUKN8FaLkcg2-7vY-Xpg" },
  { name: "LF Sounds Analog",        styles: 1, image: "images/lfsoundsanalog.jpg",        font: "fonts/LF Sounds Analog.ttf",       id: "15--YUi7FtwkAm0nANhMDEZw5x9RKOI4z" },
  { name: "LF Stager",               styles: 2, image: "images/lfstager.jpg",              font: "fonts/LF Stager Regular.ttf",      id: "https://drive.google.com/drive/folders/17AQmNGdy6b3q-Lf623BTVSQzjBpAQ4BR?usp=drive_link" },
  { name: "LF Sue Ellen Francisco",  styles: 1, image: "images/lfsueellenfrancisco.jpg",   font: "fonts/LF Sue Ellen Francisco.ttf", id: "1xBwf2jrsMLtmnqwdw54VvFud4L2OYCZT" },
  { name: "LF TAN Jambore",          styles: 1, image: "images/lftanjambore.jpg",          font: "fonts/LF TAN Jambore.ttf",         id: "1MbDUKCG0a7quZjb3217aLEdBpSiWfFRj" },
  { name: "LF Amigh",                styles: 1, image: "images/lfamigh.jpg",               font: "fonts/LF Amigh.ttf",               id: "10m8rTbg41ctc8StnOOGdnHat6mDUJGiC" },
  { name: "LF Tratex",               styles: 1, image: "images/lftratex.jpg",              font: "fonts/LF Tratex.ttf",              id: "https://drive.google.com/drive/folders/1YDRuZ9j2_RBCMRPZ56WrgBtY0wzbU0tD?usp=drive_link" },
  { name: "LF Verlag",               styles: 2, image: "images/lfverlag.jpg",              font: "fonts/LF Verlag Bold.ttf",         id: "https://drive.google.com/drive/folders/1bj7AsDngBusdnoaO_AOkQ7TtRB6XEbqF?usp=drive_link" },
  { name: "LF Vintage Goods",        styles: 1, image: "images/lfvintagegoods.jpg",        font: "fonts/LF Vintage Goods.ttf",       id: "1kucUssY7VNi2c-Sdtz63YJxu06D8UdEE" },
  { name: "LF Ahsing",               styles: 1, image: "images/lfahsing.jpg",              font: "fonts/LF Ahsing.ttf",              id: "17PKt-GA5s7G1kpurjqixIjr-qcwoSiEM" },

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
  return id ? `https://drive.google.com/uc?export=download&id=${id}` : '#';
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
  loadMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
