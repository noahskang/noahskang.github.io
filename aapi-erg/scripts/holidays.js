// ============================================================
// holidays.js — Holidays calendar page
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  const MONTH_NAMES = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  const DAY_LABELS = ['S','M','T','W','T','F','S'];
  const COLOR_MAP  = {
    'east-asian':      '#E8652A',
    'south-asian':     '#D4A853',
    'southeast-asian': '#2A9D8F',
    'persian':         '#9B7DD0',
    'muslim':          '#4A90C4',
    'heritage':        '#C94B2D'
  };
  const CULTURE_LABELS = {
    'east-asian':      'East Asian',
    'south-asian':     'South Asian',
    'southeast-asian': 'Southeast Asian',
    'persian':         'Persian / Central Asian',
    'muslim':          'Muslim Observance',
    'heritage':        'AAPI Heritage'
  };

  // ── Holiday detail panel ──────────────────────────────────
  const panel         = document.getElementById('holiday-detail');
  const panelClose    = document.querySelector('.panel-close');

  function openHolidayPanel(h) {
    document.getElementById('panel-emoji').textContent         = h.emoji;
    const badge = document.getElementById('panel-culture-badge');
    badge.textContent = CULTURE_LABELS[h.color] || h.culture;
    badge.className   = `panel-culture-badge ${h.color}`;
    document.getElementById('panel-title').textContent         = h.name;
    document.getElementById('panel-date').textContent          = h.displayDate;
    document.getElementById('panel-desc').textContent          = h.description;
    document.getElementById('panel-countries').innerHTML       =
      h.countries.map(c => `<span class="country-tag">${c}</span>`).join('');
    panel.classList.add('open');
  }

  function closeHolidayPanel() { panel.classList.remove('open'); }

  if (panelClose) panelClose.addEventListener('click', closeHolidayPanel);

  document.addEventListener('click', e => {
    if (
      panel.classList.contains('open') &&
      !panel.contains(e.target) &&
      !e.target.closest('.cal-day.holiday') &&
      !e.target.closest('.holiday-list-item') &&
      !e.target.closest('.month-holiday-item')
    ) closeHolidayPanel();
  });

  // ── Today detection ────────────────────────────────────────
  const today = new Date();

  function isHolidayToday(h) {
    if (today.getFullYear() !== 2026) return false;
    if (today.getMonth() !== h.month) return false;
    const d = today.getDate();
    const rangeMatch = h.displayDate.match(/\w+ (\d+)[–\-](\d+)/);
    if (rangeMatch) return d >= +rangeMatch[1] && d <= +rangeMatch[2];
    return d === h.day;
  }

  const todayHolidays = HOLIDAYS.filter(h => isHolidayToday(h));
  const bannerEl = document.getElementById('today-banner');
  if (bannerEl && todayHolidays.length > 0) {
    bannerEl.style.display = '';
    bannerEl.classList.add('visible');
    const label = todayHolidays.length === 1
      ? `<strong>${todayHolidays[0].name}</strong> is today ${todayHolidays[0].emoji}`
      : todayHolidays.map(h => `<strong>${h.name}</strong> ${h.emoji}`).join(' · ') + ' — today';
    bannerEl.innerHTML = `<span class="today-banner-dot"></span><span class="today-banner-text">${label}</span>`;
  }

  // ── Calendar view ─────────────────────────────────────────
  const calendarContainer = document.getElementById('holidays-calendar');

  if (calendarContainer) {
    MONTH_NAMES.forEach((monthName, monthIndex) => {
      const monthHolidays = HOLIDAYS.filter(h => h.month === monthIndex);
      const firstDay      = new Date(2026, monthIndex, 1).getDay();
      const daysInMonth   = new Date(2026, monthIndex + 1, 0).getDate();

      const card = document.createElement('div');
      card.className = `month-card${monthHolidays.length > 0 ? ' has-holiday' : ''}`;

      const nameEl = document.createElement('div');
      nameEl.className = 'month-name';
      nameEl.textContent = monthName;
      card.appendChild(nameEl);

      const calGrid = document.createElement('div');
      calGrid.className = 'cal-grid';

      DAY_LABELS.forEach(label => {
        const el = document.createElement('div');
        el.className = 'cal-day-label';
        el.textContent = label;
        calGrid.appendChild(el);
      });

      for (let i = 0; i < firstDay; i++) {
        const el = document.createElement('div');
        el.className = 'cal-day empty';
        el.textContent = '.';
        calGrid.appendChild(el);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const dayEl  = document.createElement('div');
        const holiday = monthHolidays.find(h => h.day === day);
        const isToday = today.getFullYear() === 2026 && today.getMonth() === monthIndex && today.getDate() === day;

        let cls = 'cal-day';
        if (isToday) cls += ' today';
        if (holiday) cls += ` holiday ${holiday.color}`;

        dayEl.className   = cls;
        dayEl.textContent = day;

        if (holiday) {
          dayEl.title = holiday.name;
          dayEl.addEventListener('click', () => openHolidayPanel(holiday));
        }

        calGrid.appendChild(dayEl);
      }

      card.appendChild(calGrid);

      if (monthHolidays.length > 0) {
        const listEl = document.createElement('div');
        listEl.className = 'month-holidays';
        monthHolidays.forEach(h => {
          const item = document.createElement('div');
          item.className = 'month-holiday-item';
          item.dataset.color = h.color;
          item.innerHTML = `
            <div class="month-holiday-dot" style="background:${COLOR_MAP[h.color] || '#E8652A'}"></div>
            <span>${h.emoji} ${h.name}</span>
          `;
          item.addEventListener('click', () => openHolidayPanel(h));
          listEl.appendChild(item);
        });
        card.appendChild(listEl);
      }

      calendarContainer.appendChild(card);
    });
  }

  // ── List view ─────────────────────────────────────────────
  const listContainer = document.getElementById('holidays-list');

  if (listContainer) {
    const byMonth = {};
    HOLIDAYS.forEach(h => {
      if (!byMonth[h.month]) byMonth[h.month] = [];
      byMonth[h.month].push(h);
    });

    Object.keys(byMonth).map(Number).sort((a, b) => a - b).forEach(mIdx => {
      const group = document.createElement('div');
      group.className = 'holiday-month-group';

      const heading = document.createElement('h3');
      heading.className = 'holiday-month-heading';
      heading.textContent = MONTH_NAMES[mIdx];
      group.appendChild(heading);

      const itemsWrap = document.createElement('div');
      itemsWrap.className = 'holiday-list-items';

      byMonth[mIdx].forEach(h => {
        const hToday = isHolidayToday(h);
        const item = document.createElement('article');
        item.className = `holiday-list-item ${h.color}`;
        item.innerHTML = `
          <div class="hli-left">
            <span class="hli-emoji">${h.emoji}</span>
            <div class="hli-color-bar"></div>
          </div>
          <div class="hli-body">
            <div class="hli-header">
              <h4 class="hli-name">${h.name}${hToday ? '<span class="today-badge">Today</span>' : ''}</h4>
              <span class="hli-date">${h.displayDate.replace(', 2026', '')}</span>
            </div>
            <p class="hli-culture">${h.culture} · ${h.countries.join(', ')}</p>
            <p class="hli-desc">${h.description}</p>
          </div>
        `;
        item.addEventListener('click', () => openHolidayPanel(h));
        itemsWrap.appendChild(item);
      });

      group.appendChild(itemsWrap);
      listContainer.appendChild(group);
    });
  }

  // ── Legend chip filtering ─────────────────────────────────
  const legendItems = document.querySelectorAll('.legend-item');
  const activeFilters = new Set();

  function applyFilter() {
    const hasFilter = activeFilters.size > 0;

    // Calendar view: show/dim month cards and individual day/list items
    document.querySelectorAll('.month-card').forEach(card => {
      if (!hasFilter) {
        card.classList.remove('filter-dim');
        card.querySelectorAll('.cal-day.holiday').forEach(d => d.classList.remove('filter-dim'));
        card.querySelectorAll('.month-holiday-item').forEach(i => i.classList.remove('filter-dim'));
        return;
      }
      const cardHolidays = card.querySelectorAll('.cal-day.holiday');
      let cardHasMatch = false;
      cardHolidays.forEach(d => {
        const matches = [...activeFilters].some(f => d.classList.contains(f));
        d.classList.toggle('filter-dim', !matches);
        if (matches) cardHasMatch = true;
      });
      card.querySelectorAll('.month-holiday-item').forEach(item => {
        const matches = [...activeFilters].some(f => item.dataset.color === f);
        item.classList.toggle('filter-dim', !matches);
      });
      card.classList.toggle('filter-dim', !cardHasMatch);
    });

    // List view: show/dim holiday items and month groups
    document.querySelectorAll('.holiday-month-group').forEach(group => {
      if (!hasFilter) {
        group.classList.remove('filter-dim');
        group.querySelectorAll('.holiday-list-item').forEach(i => i.classList.remove('filter-dim'));
        return;
      }
      let groupHasMatch = false;
      group.querySelectorAll('.holiday-list-item').forEach(item => {
        const matches = [...activeFilters].some(f => item.classList.contains(f));
        item.classList.toggle('filter-dim', !matches);
        if (matches) groupHasMatch = true;
      });
      group.classList.toggle('filter-dim', !groupHasMatch);
    });
  }

  legendItems.forEach(chip => {
    // Derive color key from the chip's class list
    const colorKey = [...chip.classList].find(c => COLOR_MAP[c]);
    if (!colorKey) return;

    chip.style.cursor = 'pointer';
    chip.addEventListener('click', () => {
      if (activeFilters.has(colorKey)) {
        activeFilters.delete(colorKey);
        chip.classList.remove('filter-active');
      } else {
        activeFilters.add(colorKey);
        chip.classList.add('filter-active');
      }
      // Dim all chips that are not in the active set (when any filter is on)
      legendItems.forEach(c => {
        const ck = [...c.classList].find(k => COLOR_MAP[k]);
        if (activeFilters.size === 0) {
          c.classList.remove('filter-inactive');
        } else {
          c.classList.toggle('filter-inactive', !activeFilters.has(ck));
        }
      });
      applyFilter();
    });
  });

  // ── Calendar / List view toggle ───────────────────────────
  const toggleBtns      = document.querySelectorAll('.toggle-btn[data-holidays]');
  const calView         = document.getElementById('holidays-calendar');
  const listView        = document.getElementById('holidays-list');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.holidays === 'calendar') {
        calView.style.display  = '';
        listView.style.display = 'none';
      } else {
        calView.style.display  = 'none';
        listView.style.display = '';
      }
    });
  });

});
