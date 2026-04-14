// ============================================================
// AAPI Heritage Month — Hinge ERG NYC
// app.js — Full application logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 1. NAV SCROLL BEHAVIOR
  // ============================================================
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
  });

  // ============================================================
  // 2. HAMBURGER MENU
  // ============================================================
  const hamburger = document.querySelector('.nav-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.getElementById('nav').classList.toggle('menu-open');
    });
  }

  // Close mobile menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('menu-open');
    });
  });

  // ============================================================
  // 3. FOOD SECTION — RENDER RESTAURANT CARDS
  // ============================================================
  const restaurantGrid = document.getElementById('restaurant-grid');

  function getInitials(name) {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }

  function buildRestaurantCard(r) {
    const initials = getInitials(r.recommender);
    const topDishesHTML = r.topDishes
      .map(d => `<span class="dish-tag">${d}</span>`)
      .join('');
    const tagsHTML = r.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join('');

    const card = document.createElement('article');
    card.className = 'restaurant-card';
    card.dataset.id = r.id;
    card.innerHTML = `
      <div class="card-photos">
        <img class="card-photo-main" src="${r.photos[0]}" alt="${r.name}" loading="lazy">
        <div class="card-photo-row">
          <img src="${r.photos[1]}" alt="${r.name} interior" loading="lazy">
          <img src="${r.photos[2]}" alt="${r.name} dish" loading="lazy">
        </div>
      </div>
      <div class="card-body">
        <div class="card-top">
          <div class="card-title-group">
            <h3 class="card-name">${r.name}</h3>
            <p class="card-meta">${r.cuisine} · ${r.neighborhood}</p>
          </div>
          <span class="card-price">${r.priceRange}</span>
        </div>
        <div class="card-recommender">
          <div class="recommender-avatar">${initials}</div>
          <div>
            <p class="recommender-name">${r.recommender}</p>
            <p class="recommender-role">${r.recommenderTitle}</p>
          </div>
        </div>
        <p class="card-blurb">"${r.blurb}"</p>
        <div class="card-expanded" style="display:none">
          <div class="card-detail"><span>📍</span><span>${r.address}</span></div>
          <div class="card-detail"><span>🕐</span><span>${r.hours}</span></div>
          <div class="card-dishes">
            <span>🍜 Top Dishes</span>
            <div class="dishes-tags">${topDishesHTML}</div>
          </div>
          <div class="card-tags-row">${tagsHTML}</div>
        </div>
        <button class="card-toggle">Show details ↓</button>
      </div>
    `;

    // Expand / collapse toggle
    const toggleBtn = card.querySelector('.card-toggle');
    const expanded  = card.querySelector('.card-expanded');
    toggleBtn.addEventListener('click', () => {
      const isOpen = expanded.style.display !== 'none';
      expanded.style.display = isOpen ? 'none' : 'block';
      toggleBtn.textContent = isOpen ? 'Show details ↓' : 'Hide details ↑';
    });

    return card;
  }

  RESTAURANTS.forEach(r => {
    restaurantGrid.appendChild(buildRestaurantCard(r));
  });

  // ============================================================
  // 4. FOOD SECTION — VIEW TOGGLE (Map / List)
  // ============================================================
  const foodToggleBtns = document.querySelectorAll('.view-toggle .toggle-btn[data-view]');
  const mapView  = document.getElementById('map-view');
  const listView = document.getElementById('list-view');

  foodToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      foodToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.view === 'map') {
        mapView.style.display = 'block';
        listView.style.display = 'none';
        // Leaflet needs a size invalidation when shown after being hidden
        if (window._leafletMap) {
          setTimeout(() => window._leafletMap.invalidateSize(), 100);
        }
      } else {
        mapView.style.display = 'none';
        listView.style.display = 'block';
        // Trigger stagger animation
        const grid = document.getElementById('restaurant-grid');
        setTimeout(() => grid.classList.add('visible'), 50);
      }
    });
  });

  // ============================================================
  // 5. LEAFLET MAP
  // ============================================================
  const map = L.map('map', { center: [40.73, -73.98], zoom: 12 });
  window._leafletMap = map;

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  function customIcon(num) {
    return L.divIcon({
      className: '',
      html: `<div style="width:32px;height:32px;background:#E8652A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-size:13px;font-weight:600;color:white;border:2px solid rgba(255,255,255,0.4);box-shadow:0 2px 12px rgba(232,101,42,0.5)">${num}</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
  }

  const sidebar        = document.getElementById('map-sidebar');
  const sidebarContent = document.getElementById('sidebar-content');
  const sidebarClose   = document.getElementById('sidebar-close');

  function buildSidebarContent(r) {
    const initials    = getInitials(r.recommender);
    const dishesHTML  = r.topDishes.map(d => `<span class="dish-tag">${d}</span>`).join('');
    return `
      <img class="sidebar-photo" src="${r.photos[0]}" alt="${r.name}" loading="lazy">
      <h3 class="sidebar-restaurant-name">${r.name}</h3>
      <p class="sidebar-meta">${r.cuisine} · ${r.neighborhood} · ${r.priceRange}</p>
      <div class="sidebar-recommender">
        <div class="recommender-avatar">${initials}</div>
        <div>
          <p class="recommender-name">${r.recommender}</p>
          <p class="recommender-role">${r.recommenderTitle}</p>
        </div>
      </div>
      <p class="sidebar-blurb">"${r.blurb}"</p>
      <div class="sidebar-detail"><span>📍</span><span>${r.address}</span></div>
      <div class="sidebar-detail"><span>🕐</span><span>${r.hours}</span></div>
      <p class="sidebar-dishes-label">🍜 Top Dishes</p>
      <div class="dishes-tags" style="margin-bottom:16px">${dishesHTML}</div>
    `;
  }

  RESTAURANTS.forEach((r, idx) => {
    const marker = L.marker([r.lat, r.lng], { icon: customIcon(idx + 1) }).addTo(map);
    marker.on('click', () => {
      sidebarContent.innerHTML = buildSidebarContent(r);
      sidebar.classList.add('open');
    });
  });

  sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });

  // ============================================================
  // 6. EVENTS — RENDER EVENT CARDS
  // ============================================================
  const eventsGrid = document.getElementById('events-grid');

  function isFreeEvent(price) {
    return price.toLowerCase().startsWith('free');
  }

  EVENTS.forEach(ev => {
    const card = document.createElement('article');
    card.className = `event-card${ev.featured ? ' featured' : ''}`;
    card.innerHTML = `
      <div class="event-card-top">
        <span class="event-icon">${ev.icon}</span>
        <div class="event-badges">
          <span class="event-category">${ev.category}</span>
          <span class="event-price${isFreeEvent(ev.price) ? ' free' : ''}">${ev.price}</span>
        </div>
      </div>
      <h3 class="event-title">${ev.title}</h3>
      <div class="event-meta">
        <span>📅 ${ev.date}</span>
        <span>⏰ ${ev.time}</span>
        <span>📍 ${ev.location}</span>
      </div>
      <p class="event-desc">${ev.description}</p>
      <a href="${ev.link}" class="event-link">Learn More →</a>
    `;
    eventsGrid.appendChild(card);
  });

  // ============================================================
  // 7. BOOKS — RENDER BOOK CARDS + TAB SWITCHING
  // ============================================================
  const booksClassicGrid = document.getElementById('books-classic');
  const booksRecentGrid  = document.getElementById('books-recent');

  function buildBookCard(b) {
    const awardsHTML = b.awards
      .map(a => `<span class="award-badge">${a}</span>`)
      .join('');
    const card = document.createElement('article');
    card.className = 'book-card';
    card.innerHTML = `
      <div class="book-spine" style="--spine-color: ${b.coverColor}">
        <span class="spine-title">${b.title}</span>
      </div>
      <div class="book-info">
        <h3 class="book-title">${b.title}</h3>
        <p class="book-byline">${b.author} · ${b.year}</p>
        <p class="book-genre">${b.genre}</p>
        <blockquote class="book-quote">"${b.quote}"</blockquote>
        <p class="book-desc">${b.description}</p>
        <div class="book-awards">${awardsHTML}</div>
      </div>
    `;
    return card;
  }

  BOOKS.classic.forEach(b => booksClassicGrid.appendChild(buildBookCard(b)));
  BOOKS.recent.forEach(b  => booksRecentGrid.appendChild(buildBookCard(b)));

  // Books tab switching
  const booksToggleBtns = document.querySelectorAll('.toggle-btn[data-books]');
  booksToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      booksToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.books === 'classic') {
        booksClassicGrid.style.display = '';
        booksRecentGrid.style.display  = 'none';
        setTimeout(() => booksClassicGrid.classList.add('visible'), 50);
      } else {
        booksClassicGrid.style.display = 'none';
        booksRecentGrid.style.display  = '';
        setTimeout(() => booksRecentGrid.classList.add('visible'), 50);
      }
    });
  });

  // ============================================================
  // 8. HOLIDAYS — CALENDAR VIEW
  // ============================================================
  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const calendarContainer = document.getElementById('holidays-calendar');
  const today = new Date();

  // Color map for holiday dots
  const COLOR_MAP = {
    'east-asian':      '#E8652A',
    'south-asian':     '#D4A853',
    'southeast-asian': '#2A9D8F',
    'persian':         '#9B7DD0',
    'muslim':          '#4A90C4',
    'heritage':        '#C94B2D'
  };

  MONTH_NAMES.forEach((monthName, monthIndex) => {
    const monthHolidays = HOLIDAYS.filter(h => h.month === monthIndex);
    const firstDay      = new Date(2026, monthIndex, 1).getDay(); // 0=Sun
    const daysInMonth   = new Date(2026, monthIndex + 1, 0).getDate();

    const card = document.createElement('div');
    card.className = `month-card${monthHolidays.length > 0 ? ' has-holiday' : ''}`;

    // Month heading
    const monthNameEl = document.createElement('div');
    monthNameEl.className = 'month-name';
    monthNameEl.textContent = monthName;
    card.appendChild(monthNameEl);

    // Calendar grid
    const calGrid = document.createElement('div');
    calGrid.className = 'cal-grid';

    // Day labels header
    DAY_LABELS.forEach(label => {
      const labelEl = document.createElement('div');
      labelEl.className = 'cal-day-label';
      labelEl.textContent = label;
      calGrid.appendChild(labelEl);
    });

    // Blank cells for offset
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day empty';
      empty.textContent = '.';
      calGrid.appendChild(empty);
    }

    // Day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEl  = document.createElement('div');
      const holiday = monthHolidays.find(h => h.day === day);
      const isToday = (
        today.getFullYear() === 2026 &&
        today.getMonth()   === monthIndex &&
        today.getDate()    === day
      );

      let classes = 'cal-day';
      if (isToday)  classes += ' today';
      if (holiday)  classes += ` holiday ${holiday.color}`;

      dayEl.className = classes;
      dayEl.textContent = day;

      if (holiday) {
        dayEl.title = holiday.name;
        dayEl.dataset.holidayId = holiday.id;
        dayEl.addEventListener('click', () => openHolidayPanel(holiday));
      }

      calGrid.appendChild(dayEl);
    }

    card.appendChild(calGrid);

    // Holiday list below grid
    if (monthHolidays.length > 0) {
      const monthHolidayList = document.createElement('div');
      monthHolidayList.className = 'month-holidays';

      monthHolidays.forEach(h => {
        const item = document.createElement('div');
        item.className = 'month-holiday-item';
        item.dataset.holidayId = h.id;
        item.innerHTML = `
          <div class="month-holiday-dot" style="background:${COLOR_MAP[h.color] || '#E8652A'}"></div>
          <span>${h.emoji} ${h.name}</span>
        `;
        item.addEventListener('click', () => openHolidayPanel(h));
        monthHolidayList.appendChild(item);
      });

      card.appendChild(monthHolidayList);
    }

    calendarContainer.appendChild(card);
  });

  // ============================================================
  // 9. HOLIDAYS — LIST VIEW
  // ============================================================
  const holidaysListContainer = document.getElementById('holidays-list');

  // Group holidays by month
  const holidaysByMonth = {};
  HOLIDAYS.forEach(h => {
    if (!holidaysByMonth[h.month]) holidaysByMonth[h.month] = [];
    holidaysByMonth[h.month].push(h);
  });

  // Sort months in order
  Object.keys(holidaysByMonth)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach(monthIndex => {
      const group = document.createElement('div');
      group.className = 'holiday-month-group';

      const heading = document.createElement('h3');
      heading.className = 'holiday-month-heading';
      heading.textContent = MONTH_NAMES[monthIndex];
      group.appendChild(heading);

      const itemsContainer = document.createElement('div');
      itemsContainer.className = 'holiday-list-items';

      holidaysByMonth[monthIndex].forEach(h => {
        const countriesText = h.countries.join(', ');
        const item = document.createElement('article');
        item.className = `holiday-list-item ${h.color}`;
        item.dataset.holidayId = h.id;
        item.innerHTML = `
          <div class="hli-left">
            <span class="hli-emoji">${h.emoji}</span>
            <div class="hli-color-bar"></div>
          </div>
          <div class="hli-body">
            <div class="hli-header">
              <h4 class="hli-name">${h.name}</h4>
              <span class="hli-date">${h.displayDate.replace(', 2026', '')}</span>
            </div>
            <p class="hli-culture">${h.culture} · ${countriesText}</p>
            <p class="hli-desc">${h.description}</p>
          </div>
        `;
        item.addEventListener('click', () => openHolidayPanel(h));
        itemsContainer.appendChild(item);
      });

      group.appendChild(itemsContainer);
      holidaysListContainer.appendChild(group);
    });

  // ============================================================
  // 10. HOLIDAY DETAIL PANEL
  // ============================================================
  const holidayDetailPanel = document.getElementById('holiday-detail');
  const panelEmoji         = document.getElementById('panel-emoji');
  const panelCultureBadge  = document.getElementById('panel-culture-badge');
  const panelTitle         = document.getElementById('panel-title');
  const panelDate          = document.getElementById('panel-date');
  const panelDesc          = document.getElementById('panel-desc');
  const panelCountries     = document.getElementById('panel-countries');
  const panelCloseBtn      = document.querySelector('.panel-close');

  const CULTURE_LABELS = {
    'east-asian':      'East Asian',
    'south-asian':     'South Asian',
    'southeast-asian': 'Southeast Asian',
    'persian':         'Persian / Central Asian',
    'muslim':          'Muslim Observance',
    'heritage':        'AAPI Heritage'
  };

  function openHolidayPanel(h) {
    panelEmoji.textContent        = h.emoji;
    panelCultureBadge.textContent = CULTURE_LABELS[h.color] || h.culture;
    panelCultureBadge.className   = `panel-culture-badge ${h.color}`;
    panelTitle.textContent        = h.name;
    panelDate.textContent         = h.displayDate;
    panelDesc.textContent         = h.description;

    panelCountries.innerHTML = h.countries
      .map(c => `<span class="country-tag">${c}</span>`)
      .join('');

    holidayDetailPanel.classList.add('open');
  }

  function closeHolidayPanel() {
    holidayDetailPanel.classList.remove('open');
  }

  panelCloseBtn.addEventListener('click', closeHolidayPanel);

  // Close when clicking outside panel
  document.addEventListener('click', (e) => {
    if (
      holidayDetailPanel.classList.contains('open') &&
      !holidayDetailPanel.contains(e.target) &&
      !e.target.closest('.cal-day.holiday') &&
      !e.target.closest('.holiday-list-item') &&
      !e.target.closest('.month-holiday-item')
    ) {
      closeHolidayPanel();
    }
  });

  // ============================================================
  // 11. HOLIDAYS — VIEW TOGGLE (Calendar / List)
  // ============================================================
  const holidaysToggleBtns    = document.querySelectorAll('.toggle-btn[data-holidays]');
  const holidaysCalendarView  = document.getElementById('holidays-calendar');
  const holidaysListView      = document.getElementById('holidays-list');

  holidaysToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      holidaysToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.holidays === 'calendar') {
        holidaysCalendarView.style.display = '';
        holidaysListView.style.display     = 'none';
      } else {
        holidaysCalendarView.style.display = 'none';
        holidaysListView.style.display     = '';
      }
    });
  });

  // ============================================================
  // 12. SCROLL REVEAL (IntersectionObserver)
  // ============================================================
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));

});
