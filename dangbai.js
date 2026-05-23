/* ═══════════════════════════════════════
   Font - lengnef | postbai.js
   ═══════════════════════════════════════ */

const FONTS = [

  { name: "LF Plumage",              styles: 1, image: "images/lfplumage.jpg",             id: "15XwyGSwVEeoCgit1D34sMqNZ6KhjRyyS" },
  { name: "LF Christmas Fecsival",   styles: 1, image: "images/lfchristmasfecsival.jpg",   id: "1EXihNccGiplbWVjKZvad1J5-wh2Izn0q" },
  { name: "LF Winstgue",             styles: 1, image: "images/lfwinstgue.jpg",            id: "13mj7EYg-XNIJTfEH2qiy9byKmHIvEvWR" },
  { name: "LF Berishye",             styles: 1, image: "images/lfberishye.jpg",            id: "1WxTahekjb5oLPO4s_fy7biT8HsOqE1V-" },
  { name: "LF Queen Of Silence",     styles: 1, image: "images/lfqueenofsilence.jpg",      id: "1UayfdBOGdfJVz_j692Gr8HXGPQ4EEetg" },
  { name: "LF Tisk",                 styles: 1, image: "images/lftisk.jpg",                id: "11ecwFG8j9oxd-zR2RRpwYjN78zSupbRl" },
  { name: "LF Cezanne",              styles: 1, image: "images/lfcezanne.jpg",             id: "1dKutAFryxMEFV_NzKnV9HiDJo6hnm92K" },
  { name: "LF Amoresa",              styles: 1, image: "images/lfamoresa.jpg",             id: "1HE8kPtDBLeOaEW1avYO7QLBmnr1GVy-8" },
  { name: "LF Aniyah Script",        styles: 1, image: "images/lfaniyahscript.jpg",        id: "1WU4BhnsMxF9j-HvlL3bEMNEYIIHa2cav" },
  { name: "LF Aquiline Two",         styles: 1, image: "images/lfaquilinetwo.jpg",         id: "1mRziKT967iZ-YQuAIBDEpXPQb4wYmfZ7" },
  { name: "LF Hoshiko Satsuki",      styles: 1, image: "images/lfhoshikosatsuki.jpg",      id: "147TRoPEkaiM5NbXx4rUT5mlRsbFa6WfG" },
  { name: "LF Aretha Bridge",        styles: 1, image: "images/lfarethabridge.jpg",        id: "1PAoALEqEorxURx9aBh3OGKTZnOHd3F4z" },
  { name: "LF Argue",                styles: 1, image: "images/lfargue.jpg",               id: "18fd6GxSEkE9lLK6AZch_QrHajVi-64IG" },
  { name: "LF Aughris",              styles: 1, image: "images/lfaughris.jpg",             id: "1yZfJNmrjtT9zKnamqATvcJ7KB8C-4t1V" },
  { name: "LF Austyns Sakyra",       styles: 2, image: "images/lfaustynssakyra.jpg",       id: "https://drive.google.com/drive/folders/11TsQSlZFUAPFl5pNqqzAfbbaNka3WKqh?usp=drive_link" },
  { name: "LF Bridget",              styles: 1, image: "images/lfbridget.jpg",             id: "1h1C6yAlJwcCZfgi21iLjauJKBnYEx2BX" },
  { name: "LF Cadet",                styles: 1, image: "images/lfcadet.jpg",               id: "1SnubvbX6slFBss-ZQN-_vvxl-0wcfPh_" },
  { name: "LF Catherine",            styles: 1, image: "images/lfcatherine.jpg",           id: "15goxTqoUf4GNK8d73KJUQIj1e40CsfxK" },
  { name: "LF Archer",               styles: 2, image: "images/lfarcher.jpg",              id: "https://drive.google.com/drive/folders/1iK6S9R1G2JwD3p7uI1O7q0Kg1rddF3M6?usp=drive_link" },
  { name: "LF Cyrene",               styles: 1, image: "images/lfcyrene.jpg",              id: "1pxmQEelZ-QzUrf0A_18kGEsQRDBNpxlq" },
  { name: "LF Fagibestin",           styles: 1, image: "images/lffagibestin.jpg",          id: "183Q5Fz2qMYrJs7h5ZDYMR7yRf7BwCTkH" },
  { name: "LF Geizer",               styles: 1, image: "images/lfgeizer.jpg",              id: "1z6conzEp4jn8kf-NXwBsLHtRSEWWpVHo" },
  { name: "LF Gelato Fresco",        styles: 1, image: "images/lfgelatofresco.jpg",        id: "1AGzJZmZ-pT4g5aMfmPK6Th4sONm07ffs" },
  { name: "LF Glifta",               styles: 2, image: "images/lfglifta.jpg",              id: "https://drive.google.com/drive/folders/1bQQ-g4MxqlMrcyXnv1z3tqSRX6BClz9c?usp=drive_link" },
  { name: "LF Glitzier",             styles: 1, image: "images/lfglitzier.jpg",            id: "18ObFhU8kGS3KE_znB4NWu-PPjhlMFwPq" },
  { name: "LF Hatter Display Pro",   styles: 1, image: "images/lfhatterdisplaypro.jpg",    id: "11FR9AvfnTq5_iG4IoIPXJWDE37bp7pqc" },
  { name: "LF Heycomic",             styles: 1, image: "images/lfheycomic.jpg",            id: "1DCPBN3c8ZV5OcxS3s6CBJtonshGRZC1Q" },
  { name: "LF Hit The Road",         styles: 1, image: "images/lfhittheroad.jpg",          id: "1N8SKIcbi_GX8ycNVQjQzTff7zs2XZ9Q3" },
  { name: "LF Huggie Bunny",         styles: 1, image: "images/lfhuggiebunny.jpg",         id: "1J-QjYXYGdV3eh-DKAhmGiY2BQ7cEhPOa" },
  { name: "LF Jambie",               styles: 1, image: "images/lfjambie.jpg",              id: "1tiHUlP9DvvACQC8rAAK1viM2oiao2RJT" },
  { name: "LF Jasmineupc",           styles: 1, image: "images/lfjasmineupc.jpg",          id: "1qCkKe44LdWaskK8gwkNxZB1kQyRHRyO-" },
  { name: "LF Klaristha",            styles: 1, image: "images/lfklaristha.jpg",           id: "1U4Y0kqt5P3BjgznYo5VTiiBugEjmXECR" },
  { name: "LF Lagona",               styles: 1, image: "images/lflagona.jpg",              id: "1oesGCO_FjTQy49wQij_x1Ali7iiKegdc" },
  { name: "LF Losbanditos",          styles: 1, image: "images/lflosbanditos.jpg",         id: "1HEVkdX8eE2vlNcENMBilDRnvMpAq0sRl" },
  { name: "LF Loyola Pro",           styles: 1, image: "images/lfloyolapro.jpg",           id: "1TYcQ3H13LfTxm2qFM3oFvvX2etGhUGPo" },
  { name: "LF Luna Morta Font",      styles: 1, image: "images/lflunamortamystical.jpg",   id: "1m_f6EfaQQOlOU94YfFrMEKfnXz4S-s-6" },
  { name: "LF Magic School One",     styles: 1, image: "images/lfmagicschoolone.jpg",      id: "1zQ7xPmabV5amDYnItaSWVMMqp7DWN3gH" },
  { name: "LF Migra",                styles: 1, image: "images/lfmigra.jpg",               id: "1HaF77IXbKSAQwZv5_VGf75JXjWyUt5zO" },
  { name: "LF Milven",               styles: 1, image: "images/lfmilven.jpg",              id: "1smOv30r3wxTvGLGBzxLftwZKXlFTXxgq" },
  { name: "LF Mithella",             styles: 1, image: "images/lfmithella.jpg",            id: "1smOv30r3wxTvGLGBzxLftwZKXlFTXxgq" },
  { name: "LF Monarda",              styles: 1, image: "images/lfmonarda.jpg",             id: "1WLciG1kcwoEHGt0baqjHiq1Cft7hQE3J" },
  { name: "LF Neofolia",             styles: 1, image: "images/lfneofolia.jpg",            id: "1-YdGqM5gLn1dD5JH2yPvi2fRRm3xxOx0" },
  { name: "LF Nghich Thuy Han",      styles: 1, image: "images/lfnghichthuyhan.jpg",       id: "1Ew-9Cd88pvXQAE6KKw9w2t9R1I6st2Cz" },
  { name: "LF Oregano",              styles: 2, image: "images/lforegano.jpg",             id: "https://drive.google.com/drive/folders/1qhlZEPI4Pv7T6LwQbxppOxVgB9FfL84n?usp=drive_link" },
  { name: "LF Playful",              styles: 1, image: "images/lfplayful.jpg",             id: "1CcLG_zFeO4l9OtXEb8Rr68y34Fy-K-t8" },
  { name: "LF Alkatra",              styles: 1, image: "images/lfalkatra.jpg",             id: "1hFJ6Jwon07rJhdx2BFZfqW5dWM8v4sVX" },
  { name: "LF Rancho",               styles: 1, image: "images/lfrancho.jpg",              id: "1v0FXQ7RdZdw66Md0g9FY1NjuMz2rhe-c" },
  { name: "LF Rochester",            styles: 1, image: "images/lfrochester.jpg",           id: "1sbdYQX9aDqCHqZhx232GS_yZs-O-w60Z" },
  { name: "LF Satisfy",              styles: 1, image: "images/lfsatisfy.jpg",             id: "1Ybq4DTu4jvLgyNhs6eG-W4emwu9Ltfuu" },
  { name: "LF Shantay",              styles: 1, image: "images/lfshantay.jpg",             id: "1oCG5kfOl2xkNhfK1NewE769iPLgAqHyw" },
  { name: "LF Smile Delight",        styles: 1, image: "images/lfsmiledelight.jpg",        id: "17YFSpa7_1t1XIUKN8FaLkcg2-7vY-Xpg" },
  { name: "LF Sounds Analog",        styles: 1, image: "images/lfsoundsanalog.jpg",        id: "15--YUi7FtwkAm0nANhMDEZw5x9RKOI4z" },
  { name: "LF Stager",               styles: 2, image: "images/lfstager.jpg",              id: "https://drive.google.com/drive/folders/17AQmNGdy6b3q-Lf623BTVSQzjBpAQ4BR?usp=drive_link" },
  { name: "LF Sue Ellen Francisco",  styles: 1, image: "images/lfsueellenfrancisco.jpg",   id: "1xBwf2jrsMLtmnqwdw54VvFud4L2OYCZT" },
  { name: "LF TAN Jambore",          styles: 1, image: "images/lftanjambore.jpg",          id: "1MbDUKCG0a7quZjb3217aLEdBpSiWfFRj" },
  { name: "LF Amigh",                styles: 1, image: "images/lfamigh.jpg",               id: "10m8rTbg41ctc8StnOOGdnHat6mDUJGiC" },
  { name: "LF Tratex",               styles: 1, image: "images/lftratex.jpg",              id: "https://drive.google.com/drive/folders/1YDRuZ9j2_RBCMRPZ56WrgBtY0wzbU0tD?usp=drive_link" },
  { name: "LF Verlag",               styles: 2, image: "images/lfverlag.jpg",              id: "https://drive.google.com/drive/folders/1bj7AsDngBusdnoaO_AOkQ7TtRB6XEbqF?usp=drive_link" },
  { name: "LF Vintage Goods",        styles: 1, image: "images/lfvintagegoods.jpg",        id: "1kucUssY7VNi2c-Sdtz63YJxu06D8UdEE" },
  { name: "LF Ahsing",               styles: 1, image: "images/lfahsing.jpg",              id: "17PKt-GA5s7G1kpurjqixIjr-qcwoSiEM" },

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
  card.style.animationDelay = `${(index % PAGE_SIZE) * 0.04}s`;
  const hasLink = font.id && font.id !== '#';
  card.innerHTML = `
    <div class="card-preview">
      <img src="${font.image}" alt="${font.name}" loading="lazy">
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

  // Cập nhật nút Xem tiếp
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
  // Scroll nhẹ xuống để người dùng thấy card mới
  loadMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// ─── Init ───
renderFonts(FONTS);
