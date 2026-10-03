/* ============================================
   MK Café — Complete Web Application
   app.js — Application Logic
   ============================================ */

// ============================================
// 1. PRODUCT DATA
// ============================================

const PRODUCT_ASSET_BASE = new URL('./', document.currentScript.src);

const PRODUCTS = [
  // === القهوة ===
  {
    id: 1,
    name: 'إسبريسو',
    englishName: 'Espresso',
    description: 'شوت إسبريسو مركز بنكهة غنية وكريمة ذهبية مميزة',
    category: 'coffee',
    price: 45,
    image: 'imag/products/espresso.jpg',
    rating: 4.8,
    popular: true,
    sizes: [
      { name: 'سينجل', price: 0 },
      { name: 'دبل', price: 15 },
    ],
    extras: [
      { name: 'إضافة حليب', price: 5 },
      { name: 'كراميل', price: 10 },
      { name: 'فانيليا', price: 10 },
    ],
  },
  {
    id: 2,
    name: 'كابتشينو',
    englishName: 'Cappuccino',
    description: 'مزيج متوازن من الإسبريسو والحليب المبخر ورغوة الحليب الكثيفة',
    category: 'coffee',
    price: 55,
    image: 'imag/products/cappuccino.jpg',
    rating: 4.7,
    popular: true,
    sizes: [
      { name: 'صغير', price: 0 },
      { name: 'وسط', price: 10 },
      { name: 'كبير', price: 20 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كراميل', price: 10 },
      { name: 'فانيليا', price: 10 },
      { name: 'كريمة', price: 10 },
    ],
  },
  {
    id: 3,
    name: 'لاتيه',
    englishName: 'Latte',
    description: 'إسبريسو ناعم مع حليب مبخر كريمي وطبقة خفيفة من الرغوة',
    category: 'coffee',
    price: 60,
    image: 'imag/products/latte.jpg',
    rating: 4.9,
    popular: true,
    sizes: [
      { name: 'صغير', price: 0 },
      { name: 'وسط', price: 10 },
      { name: 'كبير', price: 20 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كراميل', price: 10 },
      { name: 'فانيليا', price: 10 },
      { name: 'كريمة', price: 10 },
      { name: 'إضافة حليب', price: 5 },
    ],
  },
  {
    id: 4,
    name: 'أمريكانو',
    englishName: 'Americano',
    description: 'إسبريسو مع ماء ساخن لقهوة صافية وغنية بالنكهة',
    category: 'coffee',
    price: 40,
    image: 'imag/products/americano.jpg',
    rating: 4.5,
    popular: false,
    sizes: [
      { name: 'صغير', price: 0 },
      { name: 'وسط', price: 10 },
      { name: 'كبير', price: 15 },
    ],
    extras: [
      { name: 'إضافة حليب', price: 5 },
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كراميل', price: 10 },
    ],
  },
  {
    id: 5,
    name: 'موكا',
    englishName: 'Mocha',
    description: 'مزيج رائع من الإسبريسو والشوكولاتة الداكنة والحليب المبخر مع الكريمة',
    category: 'coffee',
    price: 65,
    image: 'imag/products/mocha.jpg',
    rating: 4.6,
    popular: true,
    sizes: [
      { name: 'صغير', price: 0 },
      { name: 'وسط', price: 10 },
      { name: 'كبير', price: 20 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كراميل', price: 10 },
      { name: 'كريمة', price: 10 },
      { name: 'فانيليا', price: 10 },
    ],
  },
  {
    id: 6,
    name: 'فلات وايت',
    englishName: 'Flat White',
    description: 'إسبريسو مزدوج مع حليب مبخر ناعم بدون رغوة للحصول على نكهة قوية',
    category: 'coffee',
    price: 60,
    image: 'imag/products/flat_white.jpg',
    rating: 4.7,
    popular: false,
    sizes: [
      { name: 'صغير', price: 0 },
      { name: 'كبير', price: 15 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كراميل', price: 10 },
      { name: 'فانيليا', price: 10 },
    ],
  },

  // === المشروبات الباردة ===
  {
    id: 7,
    name: 'آيس لاتيه',
    englishName: 'Iced Latte',
    description: 'لاتيه بارد منعش مع حليب كريمي وثلج مجروش',
    category: 'cold',
    price: 65,
    image: 'imag/products/latte.jpg',
    rating: 4.8,
    popular: true,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 15 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كراميل', price: 10 },
      { name: 'فانيليا', price: 10 },
      { name: 'كريمة', price: 10 },
    ],
  },
  {
    id: 8,
    name: 'آيس موكا',
    englishName: 'Iced Mocha',
    description: 'موكا مثلجة مع شوكولاتة غنية وكريمة مخفوقة',
    category: 'cold',
    price: 70,
    image: 'imag/products/mocha.jpg',
    rating: 4.6,
    popular: false,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 15 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كراميل', price: 10 },
      { name: 'كريمة', price: 10 },
    ],
  },
  {
    id: 9,
    name: 'فرابتشينو',
    englishName: 'Frappuccino',
    description: 'مشروب مثلج مخلوط بالقهوة والحليب والثلج مع كريمة مخفوقة',
    category: 'cold',
    price: 75,
    image: 'imag/products/mocha.jpg',
    rating: 4.7,
    popular: true,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 20 },
    ],
    extras: [
      { name: 'كراميل', price: 10 },
      { name: 'شوكولاتة', price: 10 },
      { name: 'كريمة', price: 10 },
      { name: 'فانيليا', price: 10 },
    ],
  },
  {
    id: 10,
    name: 'سبانش لاتيه',
    englishName: 'Iced Spanish Latte',
    description: 'لاتيه إسباني مثلج بالحليب المكثف المحلى مع الإسبريسو',
    category: 'cold',
    price: 70,
    image: 'imag/products/latte.jpg',
    rating: 4.9,
    popular: true,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 15 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كراميل', price: 10 },
      { name: 'فانيليا', price: 10 },
    ],
  },

  // === الشاي ===
  {
    id: 11,
    name: 'شاي بالنعناع',
    englishName: 'Mint Tea',
    description: 'شاي أحمر طازج مع أوراق النعناع الطبيعية',
    category: 'tea',
    price: 25,
    image: 'imag/products/flat_white.jpg',
    rating: 4.4,
    popular: false,
    sizes: [
      { name: 'عادي', price: 0 },
      { name: 'كبير', price: 10 },
    ],
    extras: [
      { name: 'عسل', price: 10 },
      { name: 'ليمون', price: 5 },
    ],
  },
  {
    id: 12,
    name: 'شاي أخضر',
    englishName: 'Green Tea',
    description: 'شاي أخضر صيني فاخر غني بمضادات الأكسدة',
    category: 'tea',
    price: 30,
    image: 'imag/products/flat_white.jpg',
    rating: 4.3,
    popular: false,
    sizes: [
      { name: 'عادي', price: 0 },
      { name: 'كبير', price: 10 },
    ],
    extras: [
      { name: 'عسل', price: 10 },
      { name: 'ليمون', price: 5 },
      { name: 'نعناع', price: 5 },
    ],
  },
  {
    id: 13,
    name: 'شاي كرك',
    englishName: 'Karak Tea',
    description: 'شاي كرك بالهيل والزعفران على الطريقة الخليجية',
    category: 'tea',
    price: 35,
    image: 'imag/products/cappuccino.jpg',
    rating: 4.8,
    popular: true,
    sizes: [
      { name: 'عادي', price: 0 },
      { name: 'كبير', price: 10 },
    ],
    extras: [
      { name: 'زعفران إضافي', price: 15 },
      { name: 'حليب إضافي', price: 5 },
    ],
  },

  // === الحلويات ===
  {
    id: 14,
    name: 'تشيز كيك',
    englishName: 'Cheesecake',
    description: 'تشيز كيك كريمي بقاعدة بسكويت مقرمشة وصوص التوت',
    category: 'desserts',
    price: 75,
    image: 'imag/products/cappuccino.jpg',
    rating: 4.9,
    popular: true,
    sizes: [
      { name: 'قطعة', price: 0 },
    ],
    extras: [
      { name: 'صوص شوكولاتة', price: 10 },
      { name: 'صوص كراميل', price: 10 },
      { name: 'آيس كريم', price: 20 },
    ],
  },
  {
    id: 15,
    name: 'براونيز',
    englishName: 'Brownies',
    description: 'براونيز شوكولاتة داكنة بقوام لزج ومكسرات محمصة',
    category: 'desserts',
    price: 55,
    image: 'imag/products/mocha.jpg',
    rating: 4.7,
    popular: false,
    sizes: [
      { name: 'قطعة', price: 0 },
      { name: 'قطعتين', price: 45 },
    ],
    extras: [
      { name: 'آيس كريم', price: 20 },
      { name: 'صوص شوكولاتة', price: 10 },
      { name: 'كريمة مخفوقة', price: 10 },
    ],
  },
  {
    id: 16,
    name: 'كوكيز',
    englishName: 'Cookies',
    description: 'كوكيز طازج برقائق الشوكولاتة مخبوز يومياً',
    category: 'desserts',
    price: 35,
    image: 'imag/products/espresso.jpg',
    rating: 4.5,
    popular: false,
    sizes: [
      { name: 'قطعة', price: 0 },
      { name: '3 قطع', price: 60 },
    ],
    extras: [
      { name: 'نوتيلا', price: 15 },
      { name: 'زبدة الفول السوداني', price: 10 },
    ],
  },
  {
    id: 17,
    name: 'كرواسون',
    englishName: 'Croissant',
    description: 'كرواسون فرنسي بالزبدة مخبوز طازجاً كل صباح',
    category: 'desserts',
    price: 40,
    image: 'imag/products/flat_white.jpg',
    rating: 4.6,
    popular: false,
    sizes: [
      { name: 'عادي', price: 0 },
    ],
    extras: [
      { name: 'شوكولاتة', price: 10 },
      { name: 'جبنة', price: 10 },
      { name: 'لوز', price: 15 },
    ],
  },

  // === العصائر ===
  {
    id: 18,
    name: 'عصير مانجو',
    englishName: 'Mango Juice',
    description: 'عصير مانجو طبيعي طازج بدون سكر مضاف',
    category: 'juices',
    price: 45,
    image: 'imag/products/americano.jpg',
    rating: 4.8,
    popular: true,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 15 },
    ],
    extras: [
      { name: 'سكر', price: 0 },
      { name: 'ثلج إضافي', price: 0 },
    ],
  },
  {
    id: 19,
    name: 'عصير فراولة',
    englishName: 'Strawberry Juice',
    description: 'عصير فراولة طازج منعش مع قطع الفراولة',
    category: 'juices',
    price: 45,
    image: 'imag/products/americano.jpg',
    rating: 4.6,
    popular: false,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 15 },
    ],
    extras: [
      { name: 'حليب', price: 10 },
      { name: 'عسل', price: 10 },
    ],
  },
  {
    id: 20,
    name: 'عصير برتقال',
    englishName: 'Orange Juice',
    description: 'عصير برتقال طبيعي معصور طازجاً',
    category: 'juices',
    price: 40,
    image: 'imag/products/americano.jpg',
    rating: 4.5,
    popular: false,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 15 },
    ],
    extras: [
      { name: 'نعناع', price: 5 },
    ],
  },
  {
    id: 21,
    name: 'ليمون بالنعناع',
    englishName: 'Lemon Mint',
    description: 'ليمون طازج مع أوراق النعناع والثلج المجروش',
    category: 'juices',
    price: 35,
    image: 'imag/products/flat_white.jpg',
    rating: 4.7,
    popular: true,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 10 },
    ],
    extras: [
      { name: 'عسل', price: 10 },
      { name: 'زنجبيل', price: 5 },
    ],
  },

  // === المشروبات الخاصة ===
  {
    id: 22,
    name: 'سيجنتشر لاتيه',
    englishName: 'Signature Latte',
    description: 'لاتيه MK المميز بخلطة خاصة من الكراميل والفانيليا والقرفة',
    category: 'special',
    price: 80,
    image: 'imag/products/latte.jpg',
    rating: 5.0,
    popular: true,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 20 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كريمة مخفوقة', price: 10 },
    ],
  },
  {
    id: 23,
    name: 'كراميل كلاود',
    englishName: 'Caramel Cloud',
    description: 'مشروب سحابي بالكراميل مع رغوة حريرية وصوص كراميل مملح',
    category: 'special',
    price: 85,
    image: 'imag/products/cappuccino.jpg',
    rating: 4.9,
    popular: true,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 20 },
    ],
    extras: [
      { name: 'كراميل إضافي', price: 10 },
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كريمة مخفوقة', price: 10 },
    ],
  },
  {
    id: 24,
    name: 'MK Special',
    englishName: 'MK Special',
    description: 'مشروب MK الخاص — مزيج سري من القهوة والشوكولاتة البلجيكية والتوابل',
    category: 'special',
    price: 90,
    image: 'imag/products/mocha.jpg',
    rating: 5.0,
    popular: true,
    sizes: [
      { name: 'وسط', price: 0 },
      { name: 'كبير', price: 25 },
    ],
    extras: [
      { name: 'إضافة شوت إسبريسو', price: 15 },
      { name: 'كريمة مخفوقة', price: 10 },
      { name: 'كراميل', price: 10 },
    ],
  },
].map((product) => ({
  ...product,
  image: new URL(product.image, PRODUCT_ASSET_BASE).href,
}));

const CATEGORIES = [
  { id: 'all', name: 'الكل', icon: '🍽️' },
  { id: 'coffee', name: 'القهوة', icon: '☕' },
  { id: 'cold', name: 'المشروبات الباردة', icon: '🧊' },
  { id: 'tea', name: 'الشاي', icon: '🍵' },
  { id: 'desserts', name: 'الحلويات', icon: '🍰' },
  { id: 'juices', name: 'العصائر', icon: '🍹' },
  { id: 'special', name: 'المشروبات الخاصة', icon: '⭐' },
];

const DELIVERY_FEE = 30;

// ============================================
// 2. APPLICATION STATE
// ============================================

const state = {
  currentPage: 'home',
  currentCategory: 'all',
  searchQuery: '',
  cart: [],
  favorites: [],
  orders: [],
  theme: 'light',
  modalProduct: null,
  modalQty: 1,
  modalSize: 0,
  modalExtras: [],
  orderCounter: 1000,
};

// ============================================
// 3. LOCAL STORAGE
// ============================================

function loadState() {
  try {
    const fav = localStorage.getItem('mkCafeFavorites');
    if (fav) state.favorites = JSON.parse(fav);
  } catch (e) { state.favorites = []; }

  try {
    const cart = localStorage.getItem('mkCafeCart');
    if (cart) state.cart = JSON.parse(cart);
  } catch (e) { state.cart = []; }

  try {
    const orders = localStorage.getItem('mkCafeOrders');
    if (orders) state.orders = JSON.parse(orders);
  } catch (e) { state.orders = []; }

  try {
    const theme = localStorage.getItem('mkCafeTheme');
    if (theme) state.theme = theme;
  } catch (e) { state.theme = 'light'; }

  try {
    const counter = localStorage.getItem('mkCafeOrderCounter');
    if (counter) state.orderCounter = parseInt(counter, 10) || 1000;
  } catch (e) { state.orderCounter = 1000; }
}

function saveFavorites() {
  try { localStorage.setItem('mkCafeFavorites', JSON.stringify(state.favorites)); } catch (e) {}
}

function saveCart() {
  try { localStorage.setItem('mkCafeCart', JSON.stringify(state.cart)); } catch (e) {}
}

function saveOrders() {
  try { localStorage.setItem('mkCafeOrders', JSON.stringify(state.orders)); } catch (e) {}
}

function saveTheme() {
  try { localStorage.setItem('mkCafeTheme', state.theme); } catch (e) {}
}

function saveOrderCounter() {
  try { localStorage.setItem('mkCafeOrderCounter', state.orderCounter.toString()); } catch (e) {}
}

// ============================================
// 4. THEME
// ============================================

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const darkToggle = document.getElementById('darkModeToggle');
  if (darkToggle) darkToggle.checked = state.theme === 'dark';
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  saveTheme();
}

// ============================================
// 5. NAVIGATION
// ============================================

function navigateTo(page) {
  closeMobileMenu();
  closeSearch();
  closeCartPanel();
  closeProductModal();

  state.currentPage = page;

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Update bottom nav
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
  });

  // Render page content
  switch (page) {
    case 'home':
      renderHome();
      break;
    case 'menu':
      renderMenu();
      break;
    case 'favorites':
      renderFavorites();
      break;
    case 'orders':
      renderOrders();
      break;
    case 'checkout':
      renderCheckout();
      break;
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile menu
function closeMobileMenu() {
  const panel = document.getElementById('mobileMenuPanel');
  if (panel) panel.classList.remove('open');
}

function toggleMobileMenu() {
  const panel = document.getElementById('mobileMenuPanel');
  if (!panel) return;
  panel.classList.toggle('open');
}

function closeCartPanel() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  if (!overlay) return;
  overlay.classList.remove('open');
  if (input) {
    input.value = '';
    state.searchQuery = '';
  }
  const results = document.getElementById('searchResults');
  if (results) results.innerHTML = '';
}

function closeAllTopPanels() {
  closeMobileMenu();
  closeSearch();
  closeCartPanel();
  closeProductModal();
}

// ============================================
// 6. RENDERING UTILITIES
// ============================================

function createStarRating(rating) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) {
      html += '<span class="star filled">★</span>';
    } else if (i === full && hasHalf) {
      html += '<span class="star half">★</span>';
    } else {
      html += '<span class="star">★</span>';
    }
  }
  html += '<span class="rating-number">' + rating.toFixed(1) + '</span>';
  return html;
}

function isFavorite(productId) {
  return state.favorites.includes(productId);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function handleImageError(img) {
  // Create an SVG placeholder for broken images
  const wrapper = img.parentElement;
  img.style.display = 'none';
  if (!wrapper.querySelector('.img-placeholder')) {
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    placeholder.innerHTML = '☕';
    wrapper.appendChild(placeholder);
  }
}

// ============================================
// 7. PRODUCT CARD RENDERING
// ============================================

function renderProductCard(product) {
  const favClass = isFavorite(product.id) ? 'favorited' : '';
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="card-image-wrapper" onclick="openProductModal(${product.id})">
        <img src="${product.image}" alt="${product.name}" class="card-image" loading="lazy" onerror="handleImageError(this)">
        ${product.popular ? '<span class="card-badge">الأكثر طلباً</span>' : ''}
      </div>
      <button class="card-fav-btn ${favClass}" onclick="toggleFavorite(${product.id})" aria-label="${isFavorite(product.id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFavorite(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <div class="card-info" onclick="openProductModal(${product.id})">
        <h3 class="card-name">${product.name}</h3>
        <p class="card-description">${product.description}</p>
        <div class="card-rating">${createStarRating(product.rating)}</div>
        <div class="card-footer">
          <span class="card-price">${product.price} EGP</span>
          <button class="card-add-btn" onclick="event.stopPropagation(); quickAddToCart(${product.id})" aria-label="أضف إلى السلة">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// 8. HOME PAGE
// ============================================

function renderHome() {
  // Featured products (popular items)
  const featured = PRODUCTS.filter(p => p.popular).slice(0, 6);
  const featuredContainer = document.getElementById('featuredProducts');
  if (featuredContainer) {
    featuredContainer.innerHTML = featured.map(renderProductCard).join('');
  }

  // Categories preview
  const catPreview = document.getElementById('categoriesPreview');
  if (catPreview) {
    catPreview.innerHTML = CATEGORIES.filter(c => c.id !== 'all').map(cat => `
      <div class="category-preview-card" onclick="navigateTo('menu'); setTimeout(() => filterByCategory('${cat.id}'), 100);">
        <span class="category-icon">${cat.icon}</span>
        <span class="category-name">${cat.name}</span>
      </div>
    `).join('');
  }

  // Special products
  const special = PRODUCTS.filter(p => p.category === 'special');
  const specialContainer = document.getElementById('specialProducts');
  if (specialContainer) {
    specialContainer.innerHTML = special.map(renderProductCard).join('');
  }
}

// ============================================
// 9. MENU PAGE
// ============================================

function renderMenu() {
  renderCategoriesBar();
  renderMenuProducts();
}

function renderCategoriesBar() {
  const bar = document.getElementById('categoriesBar');
  if (!bar) return;
  bar.innerHTML = CATEGORIES.map(cat => `
    <button class="category-chip ${state.currentCategory === cat.id ? 'active' : ''}"
            onclick="filterByCategory('${cat.id}')">${cat.icon} ${cat.name}</button>
  `).join('');
}

function filterByCategory(categoryId) {
  state.currentCategory = categoryId;
  renderCategoriesBar();
  renderMenuProducts();
}

function renderMenuProducts() {
  const container = document.getElementById('menuProducts');
  if (!container) return;

  let products = PRODUCTS;
  if (state.currentCategory !== 'all') {
    products = products.filter(p => p.category === state.currentCategory);
  }

  if (products.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>لا توجد منتجات</h3>
        <p>جرّب تصنيف آخر</p>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(renderProductCard).join('');
}

// ============================================
// 10. SEARCH
// ============================================

function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  if (!overlay || !input) return;

  const isOpen = overlay.classList.contains('open');

  if (isOpen) {
    overlay.classList.remove('open');
    input.value = '';
    state.searchQuery = '';
    document.getElementById('searchResults').innerHTML = '';
    input.blur();
  } else {
    overlay.classList.add('open');
    setTimeout(() => input.focus(), 300);
  }
}

function handleSearch(query) {
  state.searchQuery = query.trim().toLowerCase();
  const resultsContainer = document.getElementById('searchResults');

  if (!state.searchQuery) {
    resultsContainer.innerHTML = '';
    return;
  }

  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(state.searchQuery) ||
    p.englishName.toLowerCase().includes(state.searchQuery) ||
    p.description.toLowerCase().includes(state.searchQuery)
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="search-empty">
        <p>لا توجد نتائج لـ "${query}"</p>
        <p>جرّب كلمة مختلفة</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="toggleSearch(); openProductModal(${p.id});">
      <img src="${p.image}" alt="${p.name}" class="search-result-img" loading="lazy" onerror="handleImageError(this)">
      <div class="search-result-info">
        <span class="search-result-name">${p.name}</span>
        <span class="search-result-price">${p.price} EGP</span>
      </div>
    </div>
  `).join('');
}

// ============================================
// 11. PRODUCT DETAIL MODAL
// ============================================

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  state.modalProduct = product;
  state.modalQty = 1;
  state.modalSize = 0;
  state.modalExtras = [];

  // Fill modal content
  const img = document.getElementById('modalImage');
  img.src = product.image;
  img.alt = product.name;
  img.onerror = function() { handleImageError(this); };

  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalRating').innerHTML = createStarRating(product.rating);

  // Sizes
  const sizesContainer = document.getElementById('modalSizes');
  sizesContainer.innerHTML = product.sizes.map((s, i) => `
    <button class="size-option ${i === 0 ? 'active' : ''}" onclick="selectSize(${i})">
      ${s.name}
      ${s.price > 0 ? '<span class="size-price">+' + s.price + '</span>' : ''}
    </button>
  `).join('');

  // Extras
  const extrasContainer = document.getElementById('modalExtras');
  extrasContainer.innerHTML = product.extras.map((e, i) => `
    <label class="extra-item">
      <input type="checkbox" onchange="toggleExtra(${i})">
      <span class="extra-check"></span>
      <span class="extra-name">${e.name}</span>
      <span class="extra-price">${e.price > 0 ? '+' + e.price + ' EGP' : 'مجاناً'}</span>
    </label>
  `).join('');

  // Quantity
  document.getElementById('modalQty').textContent = '1';

  // Update favorite button
  updateModalFavBtn();

  // Calculate total
  updateModalTotal();

  // Show modal
  document.getElementById('productModal').classList.add('open');
  document.getElementById('productModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('productModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  state.modalProduct = null;
}

function selectSize(index) {
  state.modalSize = index;
  document.querySelectorAll('.size-option').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  updateModalTotal();
}

function toggleExtra(index) {
  const idx = state.modalExtras.indexOf(index);
  if (idx > -1) {
    state.modalExtras.splice(idx, 1);
  } else {
    state.modalExtras.push(index);
  }
  updateModalTotal();
}

function changeModalQty(delta) {
  state.modalQty = Math.max(1, Math.min(20, state.modalQty + delta));
  document.getElementById('modalQty').textContent = state.modalQty;
  updateModalTotal();
}

function updateModalTotal() {
  if (!state.modalProduct) return;

  let price = state.modalProduct.price;

  // Add size price
  if (state.modalProduct.sizes[state.modalSize]) {
    price += state.modalProduct.sizes[state.modalSize].price;
  }

  // Add extras
  state.modalExtras.forEach(i => {
    if (state.modalProduct.extras[i]) {
      price += state.modalProduct.extras[i].price;
    }
  });

  const total = price * state.modalQty;

  document.getElementById('modalPrice').textContent = price + ' EGP';
  document.getElementById('modalTotal').textContent = total + ' EGP';
}

function updateModalFavBtn() {
  if (!state.modalProduct) return;
  const btn = document.getElementById('modalFavBtn');
  const svg = btn.querySelector('svg path');
  if (isFavorite(state.modalProduct.id)) {
    btn.classList.add('favorited');
    svg.setAttribute('fill', 'currentColor');
  } else {
    btn.classList.remove('favorited');
    svg.setAttribute('fill', 'none');
  }
}

function toggleFavoriteFromModal() {
  if (!state.modalProduct) return;
  toggleFavorite(state.modalProduct.id);
  updateModalFavBtn();
}

// ============================================
// 12. FAVORITES
// ============================================

function toggleFavorite(productId) {
  const index = state.favorites.indexOf(productId);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast('تم إزالة المنتج من المفضلة');
  } else {
    state.favorites.push(productId);
    showToast('تمت إضافة المنتج إلى المفضلة ❤️');
  }
  saveFavorites();
  // Re-render current view
  refreshCurrentPage();
}

function renderFavorites() {
  const container = document.getElementById('favoritesProducts');
  const emptyState = document.getElementById('emptyFavorites');

  if (state.favorites.length === 0) {
    container.style.display = 'none';
    emptyState.style.display = 'flex';
    return;
  }

  container.style.display = '';
  emptyState.style.display = 'none';

  const favProducts = PRODUCTS.filter(p => state.favorites.includes(p.id));
  container.innerHTML = favProducts.map(renderProductCard).join('');
}

// ============================================
// 13. CART
// ============================================

function getCartItemKey(productId, sizeName, extras) {
  return JSON.stringify({
    productId,
    size: sizeName || '',
    extras: [...extras].sort(),
  });
}

function quickAddToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const defaultSize = product.sizes[0] ? product.sizes[0].name : '';
  const cartKey = getCartItemKey(product.id, defaultSize, []);
  const existingItem = state.cart.find(item => getCartItemKey(item.productId, item.size, item.extras) === cartKey);

  if (existingItem) {
    existingItem.quantity = Math.min(20, existingItem.quantity + 1);
    saveCart();
    renderCartSidebar();
    updateCartBadge();
    showToast('تم تحديث الكمية لـ ' + product.name + ' في السلة');
    return;
  }

  const cartItem = {
    id: Date.now(),
    productId: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    size: defaultSize,
    sizePrice: 0,
    extras: [],
    extrasPrice: 0,
    quantity: 1,
  };

  state.cart.push(cartItem);
  saveCart();
  renderCartSidebar();
  updateCartBadge();
  showToast('تمت إضافة ' + product.name + ' إلى السلة');
}

function addToCartFromModal() {
  if (!state.modalProduct) return;

  const product = state.modalProduct;
  const size = product.sizes[state.modalSize];
  const selectedExtras = state.modalExtras.map(i => product.extras[i]).filter(Boolean);
  const selectedExtraNames = selectedExtras.map(e => e.name);
  const extrasPrice = selectedExtras.reduce((sum, e) => sum + e.price, 0);

  const cartKey = getCartItemKey(product.id, size ? size.name : '', selectedExtraNames);
  const existingItem = state.cart.find(item => getCartItemKey(item.productId, item.size, item.extras) === cartKey);

  if (existingItem) {
    existingItem.quantity = Math.min(20, existingItem.quantity + state.modalQty);
    saveCart();
    renderCartSidebar();
    updateCartBadge();
    closeProductModal();
    showToast('تم تحديث الكمية لـ ' + product.name + ' في السلة');
    return;
  }

  const cartItem = {
    id: Date.now(),
    productId: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    size: size ? size.name : '',
    sizePrice: size ? size.price : 0,
    extras: selectedExtraNames,
    extrasPrice: extrasPrice,
    quantity: state.modalQty,
  };

  state.cart.push(cartItem);
  saveCart();
  renderCartSidebar();
  updateCartBadge();
  closeProductModal();
  showToast('تمت إضافة ' + product.name + ' إلى السلة');
}

function removeCartItem(itemId) {
  state.cart = state.cart.filter(item => item.id !== itemId);
  saveCart();
  renderCartSidebar();
  updateCartBadge();
  showToast('تم حذف المنتج من السلة');
}

function changeCartItemQty(itemId, delta) {
  const item = state.cart.find(i => i.id === itemId);
  if (!item) return;

  const nextQuantity = item.quantity + delta;
  if (nextQuantity <= 0) {
    removeCartItem(itemId);
    return;
  }

  item.quantity = Math.min(20, nextQuantity);
  saveCart();
  renderCartSidebar();
  updateCartBadge();
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCartSidebar();
  updateCartBadge();
  showToast('تم إفراغ السلة');
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const itemPrice = item.price + item.sizePrice + item.extrasPrice;
    return sum + itemPrice * item.quantity;
  }, 0);
}

function getCartTotal() {
  const subtotal = getCartSubtotal();
  return subtotal > 0 ? subtotal + DELIVERY_FEE : 0;
}

function getCartItemCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBadge() {
  const count = getCartItemCount();
  const badge = document.getElementById('cartBadge');
  const badgeMobile = document.getElementById('cartBadgeMobile');

  if (badge) {
    badge.textContent = count > 0 ? String(count) : '';
    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.classList.remove('bounce');
    if (count > 0) {
      badge.classList.add('bounce');
      setTimeout(() => badge.classList.remove('bounce'), 300);
    }
  }

  if (badgeMobile) {
    badgeMobile.textContent = count > 0 ? String(count) : '';
    badgeMobile.style.display = count > 0 ? 'flex' : 'none';
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');

  if (isOpen) {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    renderCartSidebar();
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function renderCartSidebar() {
  const body = document.getElementById('cartBody');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');

  if (state.cart.length === 0) {
    body.style.display = 'none';
    empty.style.display = 'flex';
    footer.style.display = 'none';
    countEl.textContent = '';
    return;
  }

  body.style.display = '';
  empty.style.display = 'none';
  footer.style.display = '';
  countEl.textContent = '(' + getCartItemCount() + ')';

  body.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" onerror="handleImageError(this)">
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        ${item.size ? '<span class="cart-item-size">' + item.size + '</span>' : ''}
        ${item.extras.length > 0 ? '<span class="cart-item-extras">' + item.extras.join('، ') + '</span>' : ''}
        <span class="cart-item-price">${(item.price + item.sizePrice + item.extrasPrice) * item.quantity} EGP</span>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control quantity-sm">
          <button class="qty-btn" onclick="changeCartItemQty(${item.id}, -1)" aria-label="تقليل">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" onclick="changeCartItemQty(${item.id}, 1)" aria-label="زيادة">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${item.id})" aria-label="حذف">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');

  // Update totals
  const subtotal = getCartSubtotal();
  document.getElementById('cartSubtotal').textContent = subtotal + ' EGP';
  document.getElementById('cartDelivery').textContent = DELIVERY_FEE + ' EGP';
  document.getElementById('cartTotal').textContent = (subtotal + DELIVERY_FEE) + ' EGP';
}

// ============================================
// 14. CHECKOUT
// ============================================

function renderCheckout() {
  const itemsContainer = document.getElementById('checkoutItems');
  const totalsContainer = document.getElementById('checkoutTotals');

  if (state.cart.length === 0) {
    navigateTo('menu');
    showToast('السلة فارغة — أضف منتجات أولاً');
    return;
  }

  // Render items summary
  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="checkout-item">
      <span class="checkout-item-name">${item.name} × ${item.quantity}</span>
      <span class="checkout-item-price">${(item.price + item.sizePrice + item.extrasPrice) * item.quantity} EGP</span>
    </div>
  `).join('');

  const subtotal = getCartSubtotal();
  totalsContainer.innerHTML = `
    <div class="checkout-total-row">
      <span>المجموع الفرعي</span>
      <span>${subtotal} EGP</span>
    </div>
    <div class="checkout-total-row">
      <span>التوصيل</span>
      <span>${DELIVERY_FEE} EGP</span>
    </div>
    <div class="checkout-total-row checkout-total-final">
      <span>الإجمالي</span>
      <span>${subtotal + DELIVERY_FEE} EGP</span>
    </div>
  `;
}

function placeOrder() {
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const notes = document.getElementById('customerNotes').value.trim();
  const delivery = document.querySelector('input[name="deliveryMethod"]:checked')?.value || 'delivery';
  const payment = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cash';
  const errorEl = document.getElementById('checkoutError');

  // Validate
  const errors = [];
  if (!name) errors.push('الاسم مطلوب');
  if (!phone) errors.push('رقم الهاتف مطلوب');
  if (!address && delivery === 'delivery') errors.push('العنوان مطلوب للتوصيل');

  if (errors.length > 0) {
    errorEl.style.display = 'block';
    errorEl.innerHTML = errors.map(e => '<p>⚠️ ' + e + '</p>').join('');
    return;
  }

  errorEl.style.display = 'none';

  if (state.cart.length === 0) {
    showToast('السلة فارغة');
    return;
  }

  // Generate order
  state.orderCounter++;
  saveOrderCounter();

  const orderNumber = '#MK' + state.orderCounter;
  const subtotal = getCartSubtotal();
  const total = subtotal + DELIVERY_FEE;

  const order = {
    id: Date.now(),
    orderNumber: orderNumber,
    date: new Date().toISOString(),
    items: state.cart.map(item => ({
      name: item.name,
      size: item.size,
      extras: item.extras,
      quantity: item.quantity,
      price: (item.price + item.sizePrice + item.extrasPrice) * item.quantity,
    })),
    subtotal: subtotal,
    delivery: DELIVERY_FEE,
    total: total,
    customer: { name, phone, address, notes },
    deliveryMethod: delivery,
    paymentMethod: payment,
    status: 'preparing',
  };

  state.orders.unshift(order);
  saveOrders();

  // Clear cart
  state.cart = [];
  saveCart();
  renderCartSidebar();
  updateCartBadge();

  // Clear form
  document.getElementById('customerName').value = '';
  document.getElementById('customerPhone').value = '';
  document.getElementById('customerAddress').value = '';
  document.getElementById('customerNotes').value = '';

  // Show confirmation
  showConfirmation(order);
}

function showConfirmation(order) {
  document.getElementById('confirmationOrderNumber').textContent = 'رقم الطلب: ' + order.orderNumber;

  document.getElementById('confirmationDetails').innerHTML = `
    <div class="confirmation-summary">
      ${order.items.map(item => `
        <div class="confirmation-item">
          <span>${item.name} × ${item.quantity}</span>
          <span>${item.price} EGP</span>
        </div>
      `).join('')}
      <div class="confirmation-divider"></div>
      <div class="confirmation-item">
        <span>المجموع الفرعي</span>
        <span>${order.subtotal} EGP</span>
      </div>
      <div class="confirmation-item">
        <span>التوصيل</span>
        <span>${order.delivery} EGP</span>
      </div>
      <div class="confirmation-item confirmation-total">
        <span>الإجمالي</span>
        <span>${order.total} EGP</span>
      </div>
    </div>
  `;

  navigateTo('confirmation');
}

// ============================================
// 15. ORDERS
// ============================================

function renderOrders() {
  const container = document.getElementById('ordersList');
  const emptyState = document.getElementById('emptyOrders');

  if (state.orders.length === 0) {
    container.style.display = 'none';
    emptyState.style.display = 'flex';
    return;
  }

  container.style.display = '';
  emptyState.style.display = 'none';

  container.innerHTML = state.orders.map(order => {
    const date = new Date(order.date);
    const dateStr = date.toLocaleDateString('ar-EG', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });

    const statusMap = {
      preparing: { text: 'قيد التجهيز', class: 'status-preparing' },
      ready: { text: 'جاهز', class: 'status-ready' },
      delivered: { text: 'تم الاستلام', class: 'status-delivered' },
    };

    const status = statusMap[order.status] || statusMap.preparing;

    return `
      <div class="order-card">
        <div class="order-header">
          <span class="order-number">${order.orderNumber}</span>
          <span class="status-badge ${status.class}">${status.text}</span>
        </div>
        <div class="order-date">${dateStr}</div>
        <div class="order-items">
          ${order.items.map(item => `
            <div class="order-item-row">
              <span>${item.name} × ${item.quantity}</span>
              <span>${item.price} EGP</span>
            </div>
          `).join('')}
        </div>
        <div class="order-total">
          <span>الإجمالي</span>
          <span>${order.total} EGP</span>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// 16. TOAST NOTIFICATIONS
// ============================================

function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// 17. UTILITY / REFRESH
// ============================================

function refreshCurrentPage() {
  switch (state.currentPage) {
    case 'home': renderHome(); break;
    case 'menu': renderMenuProducts(); break;
    case 'favorites': renderFavorites(); break;
    case 'orders': renderOrders(); break;
  }
}

// ============================================
// 18. KEYBOARD & ACCESSIBILITY
// ============================================

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close modal
    if (document.getElementById('productModal').classList.contains('open')) {
      closeProductModal();
      return;
    }
    // Close cart
    if (document.getElementById('cartSidebar').classList.contains('open')) {
      toggleCart();
      return;
    }
    // Close search
    if (document.getElementById('searchOverlay').classList.contains('open')) {
      toggleSearch();
      return;
    }
  }
});

// ============================================
// 19. INITIALIZATION
// ============================================

function init() {
  loadState();
  applyTheme();
  closeAllTopPanels();
  updateCartBadge();
  renderHome();

  // Handle delivery method toggle for address requirement
  document.querySelectorAll('input[name="deliveryMethod"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const addressInput = document.getElementById('customerAddress');
      if (this.value === 'pickup') {
        addressInput.removeAttribute('required');
        addressInput.placeholder = 'اختياري عند الاستلام من الكافيه';
      } else {
        addressInput.setAttribute('required', '');
        addressInput.placeholder = 'أدخل عنوان التوصيل';
      }
    });
  });
}

// Run
document.addEventListener('DOMContentLoaded', init);
