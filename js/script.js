/**
 * Enerji Oto Yıkama - Premium Auto Detailing Website
 * Modüler Vanilla JavaScript
 */

/* ============================================
   YAPILANDIRMA - Kolayca güncellenebilir
   ============================================ */
const CONFIG = {
  phone: '905016662726',
  phoneDisplay: '+90 501 666 27 26',
  whatsapp: '905016662726',
  whatsappMessage: 'Merhaba, aracıma işlem yaptırmak istiyorum. Fiyat ve uygunluk hakkında bilgi alabilir miyim?',
  businessName: 'Enerji Oto Yıkama',
  address: 'Mustafa Kemal Mah., 2078. Sokak No:4, 06690 Çankaya/Ankara',
  workingHours: 'Pazartesi - Cumartesi: 09:00 - 19:00\nPazar: Kapalı',
  mapLat: 39.907528,
  mapLng: 32.741556,
  mapZoom: 17,
  mapOpenUrl: 'https://www.google.com/maps/search/?api=1&query=Enerji+Oto+Y%C4%B1kama,+Mustafa+Kemal,+2078.+Sokak+No:4,+06690+%C3%87ankaya,+Ankara',
  social: {
    tiktok: 'https://tiktok.com/@enerjiotoyikama'
  }
};

/* ============================================
   HİZMETLER VERİSİ
   ============================================ */
const SERVICES = [
  {
    title: 'İç ve Dış Detaylı Yıkama',
    desc: 'Profesyonel ekipmanlarla aracınızın iç ve dış yüzeylerinin derinlemesine temizliği.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
  },
  {
    title: 'PPF (Şeffaf Koruma) Kaplama',
    desc: 'Boyayı taş, çizik ve dış etkenlerden koruyan şeffaf poliüretan film uygulaması.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  },
  {
    title: 'Tampon Tamiri ve Lokal Boya',
    desc: 'Hasarlı tampon ve kaporta bölgelerinde profesyonel tamir ve lokal boya işlemleri.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>'
  },
  {
    title: 'Jant Boyama ve Restorasyon',
    desc: 'Jantlarınızın yeniden boyanması, çizik giderme ve parlaklık kazandırma hizmeti.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>'
  },
  {
    title: 'Pasta Cila ve Hare Giderme',
    desc: 'Boya yüzeyindeki hareleri, çizikleri ve matlaşmayı gideren profesyonel pasta cila.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
  },
  {
    title: 'Seramik Kaplama ve Boya Koruma',
    desc: 'Uzun ömürlü seramik kaplama ile aracınıza ekstra parlaklık ve koruma sağlayın.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
  },
  {
    title: 'Detaylı İç Temizlik ve Sterilizasyon',
    desc: 'Koltuk, tavan, döşeme ve tüm iç yüzeylerin derinlemesine temizliği ve dezenfeksiyonu.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
  },
  {
    title: 'Motor Temizleme ve Koruma',
    desc: 'Motor bölmesinin güvenli temizliği ve koruyucu ürünlerle bakımı.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>'
  },
  {
    title: 'Far Temizleme ve Restorasyon',
    desc: 'Sararmış ve matlaşmış farların parlatılması ve UV koruma uygulaması.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
  },
  {
    title: 'Renk Değişim (Folyo) Kaplama',
    desc: 'Aracınıza yeni bir görünüm kazandıran profesyonel folyo kaplama hizmeti.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>'
  },
  {
    title: 'Koltuk ve Döşeme Onarımı',
    desc: 'Deri ve kumaş koltuklarda yırtık, leke ve aşınma onarımı.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    title: 'Klima Dezenfeksiyonu ve Ozon Temizliği',
    desc: 'Klima sisteminin dezenfeksiyonu ve ozon ile kötü koku giderme.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>'
  },
  {
    title: 'Yağmur Kaydırıcı Cam Uygulaması',
    desc: 'Ön cam ve yan camlara su itici nano kaplama uygulaması.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>'
  },
  {
    title: 'Lastik Bakım ve Yanak Parlatma',
    desc: 'Lastiklerin temizlenmesi, koruyucu jel uygulaması ve yanak parlatma.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
  },
  {
    title: 'Alt Takım Yıkama ve Zift Temizliği',
    desc: 'Araç altının yüksek basınçlı yıkanması ve zift/kir birikintilerinin temizlenmesi.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>'
  }
];

/* ============================================
   GALERİ VERİSİ - Araç fotoğraflarını buradan ekleyin
   Örnek: { title: 'BMW Detay', image: 'assets/images/foto1.jpg' }
   ============================================ */
const GALLERY = [
  { title: 'Çalışmamız 1', image: 'assets/images/galeri-1.webp' },
  { title: 'Çalışmamız 2', image: 'assets/images/galeri-2.webp' },
  { title: 'Çalışmamız 3', image: 'assets/images/galeri-3.webp' },
  { title: 'Çalışmamız 4', image: 'assets/images/galeri-4.webp' },
  { title: 'Çalışmamız 5', image: 'assets/images/galeri-5.webp' },
  { title: 'Çalışmamız 6', image: 'assets/images/06ev7525.webp' }
];

/* ============================================
   NEDEN BİZ VERİSİ
   ============================================ */
const WHY_US = [
  {
    title: 'Profesyonel Ekip',
    desc: 'Alanında uzman, sertifikalı ve deneyimli detaylandırma uzmanları.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>'
  },
  {
    title: 'Son Teknoloji Ekipman',
    desc: 'En güncel makine ve ekipmanlarla kusursuz sonuçlar.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  },
  {
    title: 'Premium Ürünler',
    desc: 'Dünya standartlarında, araç dostu premium bakım ürünleri.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
  },
  {
    title: 'Garantili Hizmet',
    desc: 'Tüm işlemlerimizde yazılı garanti ve müşteri memnuniyeti.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'
  },
  {
    title: 'Uygun Fiyat',
    desc: 'Kaliteden ödün vermeden rekabetçi ve şeffaf fiyatlandırma.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>'
  },
  {
    title: 'Hızlı Teslim',
    desc: 'Zamanınıza saygı duyarak hızlı ve kaliteli hizmet sunuyoruz.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  }
];

/* ============================================
   MÜŞTERİ YORUMLARI
   ============================================ */
const TESTIMONIALS = [
  {
    name: 'Efe Özkan Şahin',
    text: 'Aracımı iç dış temizliğe götürdüm sağ ön koltuğuma meyve suyu dökülmüştü leke yapmıştı gayet başarılı bir şekilde leke giderildi. Bayiden çıkmış gibi teslim aldım aracımı.İşletenler de çok güler yüzlü titizdi güzel bir temizlik oldu. Konum ulaşılabilirliği hızlı çalışma ve samimiyetleri tekrar buraya gelmemi ve tavsiye etmemi sağlayacak.',
    rating: 5,
    date: '5 ay önce'
  },
  {
    name: 'Orhan Alakuş',
    text: 'Detaylı ve titizlikle güzelce temizlediler, sohbetleri güzel, güler yüzlü insanlardı sektörde daha ileri giderler inşallah.',
    rating: 5,
    date: '5 ay önce'
  },
  {
    name: 'Bünyamin Berberkayar',
    text: 'Çok kaliteli hizmet, güler yüzlü ekip. Gözünüz kapalı aracınızı teslim edebilirsiniz.',
    rating: 5,
    date: '5 ay önce'
  },
  {
    name: 'Şükran Selçuk',
    text: 'Muadillerine göre gayet uygun fiyat var. Kurum otoparkı olması ise güvenlik açısından güzel bir şey.',
    rating: 5,
    date: '8 ay önce'
  },
  {
    name: 'Bedirhan Yalçın',
    text: 'Far restorasyonu yaptırdım, gece görüşüm çok arttı. Hızlı ve kaliteli işçilik. Teşekkürler Enerji Oto Yıkama!',
    rating: 5,
    date: '11 ay önce'
  }
];

/* ============================================
   MODÜLLER
   ============================================ */

/** Loader */
function initLoader() {
  const loader = document.getElementById('loader');
  document.body.classList.add('loading');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 2200);
  });
}

/** Navbar scroll & mobile menu */
function initNavbar() {
  const header = document.getElementById('header');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const links = menu.querySelectorAll('.nav__link');

  function handleScroll() {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  toggle.addEventListener('click', () => {
    const isActive = menu.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(section => observer.observe(section));
}

/** Contact & WhatsApp links */
function initContact() {
  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  const telUrl = `tel:+${CONFIG.phone}`;

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  const setHref = (id, href) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  };

  setHref('heroWhatsapp', waUrl);
  setHref('heroCall', telUrl);
  setHref('contactWhatsapp', waUrl);
  setHref('whatsappFloat', waUrl);
  setHref('contactPhone', telUrl);
  setHref('footerPhone', telUrl);

  setText('contactPhone', CONFIG.phoneDisplay);
  setText('contactWhatsapp', CONFIG.phoneDisplay);
  setText('contactAddress', CONFIG.address);
  setText('contactHours', CONFIG.workingHours);
  setText('footerPhone', CONFIG.phoneDisplay);
  setText('footerAddress', CONFIG.address);
  setText('footerHours', CONFIG.workingHours.replace('\n', ' | '));
  setText('currentYear', new Date().getFullYear());

  setText('mapBusinessName', CONFIG.businessName);
  setText('mapBusinessAddress', CONFIG.address);
  setHref('mapOpenLink', CONFIG.mapOpenUrl);

  initSocialLinks();
}

/** Interactive map with red business pin */
function initMap() {
  const container = document.getElementById('mapContainer');
  if (!container || typeof L === 'undefined') return;

  const { mapLat, mapLng, mapZoom, businessName, address } = CONFIG;

  const map = L.map(container, {
    scrollWheelZoom: false
  }).setView([mapLat, mapLng], mapZoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(map);

  // Kırmızı + işareti (artı) ile harita işaretçisi
  const markerIcon = L.divIcon({
    className: 'map-marker',
    html: `
      <div class="map-marker__red-pin">
        <div class="map-marker__cross">+</div>
        <div class="map-marker__label">${businessName}</div>
        <div class="map-marker__needle"></div>
      </div>
    `,
    iconSize: [160, 80],
    iconAnchor: [80, 78]
  });

  const marker = L.marker([mapLat, mapLng], { icon: markerIcon }).addTo(map);

  marker.bindPopup(`
    <div class="map-popup">
      <strong>${businessName}</strong>
      <p>${address}</p>
      <p style="margin-top:6px;color:#e11d48;font-weight:600;">📍 EPDK Binası Alt Katı</p>
    </div>
  `).openPopup();

  container.addEventListener('mouseenter', () => map.scrollWheelZoom.enable());
  container.addEventListener('mouseleave', () => map.scrollWheelZoom.disable());

  setTimeout(() => map.invalidateSize(), 300);
}

/** Social media links */
function initSocialLinks() {
  const container = document.getElementById('footerSocial');
  if (!container) return;

  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

  const icons = {
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.4a8.28 8.28 0 005.58 2.18V12.1a4.85 4.85 0 01-3.77-1.73V6.69h3.77z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
  };

  const links = [
    { name: 'tiktok', url: CONFIG.social.tiktok },
    { name: 'whatsapp', url: waUrl }
  ];

  container.innerHTML = links
    .filter(link => link.url)
    .map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.name}">${icons[link.name]}</a>`)
    .join('');
}

/** Render services */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  grid.classList.add('stagger-children');
  grid.innerHTML = SERVICES.map((service, i) => `
    <article class="service-card animate-on-scroll" data-animation="fade-up" style="--stagger-index: ${i}">
      <div class="service-card__icon">${service.icon}</div>
      <h3 class="service-card__title">${service.title}</h3>
      <p class="service-card__desc">${service.desc}</p>
    </article>
  `).join('');
}

/** Render why us */
function renderWhyUs() {
  const grid = document.getElementById('whyUsGrid');
  if (!grid) return;

  grid.classList.add('stagger-children');
  grid.innerHTML = WHY_US.map((item, i) => `
    <article class="why-card animate-on-scroll" data-animation="fade-up" style="--stagger-index: ${i}">
      <div class="why-card__icon">${item.icon}</div>
      <h3 class="why-card__title">${item.title}</h3>
      <p class="why-card__desc">${item.desc}</p>
    </article>
  `).join('');
}

/** Render gallery */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = GALLERY.map((item, i) => `
    <article class="gallery-card" data-index="${i}" role="button" tabindex="0" aria-label="${item.title} - Görseli büyüt">
      <div class="gallery-card__img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" width="800" height="600">
        <div class="gallery-card__overlay">
          <span class="gallery-card__zoom">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </span>
        </div>
      </div>
      <p class="gallery-card__title">${item.title}</p>
    </article>
  `).join('');
}

/** Render testimonials */
function renderTestimonials() {
  const wrapper = document.getElementById('testimonialsWrapper');
  if (!wrapper) return;

  const starSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  wrapper.innerHTML = TESTIMONIALS.map(t => `
    <div class="swiper-slide">
      <div class="testimonial-card">
        <div class="testimonial-card__stars">${starSvg.repeat(t.rating)}</div>
        <p class="testimonial-card__text">"${t.text}"</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">${t.name.charAt(0)}</div>
          <div class="testimonial-card__info">
            <h4>${t.name}</h4>
            <span>${t.date}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/** Swiper sliders */
function initSliders() {
  if (typeof Swiper === 'undefined') return;

  new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.testimonials-pagination', clickable: true },
    effect: 'fade',
    fadeEffect: { crossFade: true }
  });
}

/** Lightbox */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!lightbox) return;

  let currentIndex = 0;
  const images = GALLERY.map(item => ({
    src: item.image,
    caption: item.title
  }));

  function open(index) {
    currentIndex = index;
    updateImage();
    lightbox.classList.add('active');
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function updateImage() {
    const item = images[currentIndex];
    img.src = item.src;
    img.alt = item.caption;
    caption.textContent = item.caption;
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    updateImage();
  }

  document.getElementById('galleryGrid')?.addEventListener('click', e => {
    const card = e.target.closest('.gallery-card');
    if (!card) return;
    open(parseInt(card.dataset.index, 10));
  });

  document.getElementById('galleryGrid')?.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.gallery-card');
    if (!card) return;
    e.preventDefault();
    open(parseInt(card.dataset.index, 10));
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

/** Scroll animations (AOS-style) */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('animated'), parseInt(delay, 10));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/** Hero entrance animations */
function initHeroAnimations() {
  const hero = document.querySelector('.hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  requestAnimationFrame(() => {
    hero.classList.add('hero--loaded');
  });
}

/** Parallax effect on hero content */
function initParallax() {
  const content = document.querySelector('.hero__content');
  if (!content || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      content.style.transform = `translateY(${scrolled * 0.2}px)`;
      content.style.opacity = 1 - scrolled / (window.innerHeight * 0.8);
    }
  }, { passive: true });
}

/** Initialize app */
function init() {
  initLoader();
  initNavbar();
  initContact();
  initMap();
  renderServices();
  renderWhyUs();
  renderGallery();
  renderTestimonials();
  initSliders();
  initLightbox();
  initScrollAnimations();
  initHeroAnimations();
  initParallax();
}

document.addEventListener('DOMContentLoaded', init);
