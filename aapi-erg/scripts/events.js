// ============================================================
// events.js — Events page: list view + calendar view
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const eventsGrid = document.getElementById('events-grid');
  const listView   = document.getElementById('list-view');
  const calView    = document.getElementById('calendar-view');

  // ── Today detection ────────────────────────────────────────
  const today         = new Date();
  const isMay2026     = today.getFullYear() === 2026 && today.getMonth() === 4;
  const todayMayDay   = isMay2026 ? today.getDate() : null;

  // ── Category → chip color class ───────────────────────────
  function chipClass(category) {
    switch (category.toLowerCase()) {
      case 'performance': case 'music': case 'music & dance': case 'talk': return 'chip-warm';
      case 'festival':    case 'comedy':                                    return 'chip-teal';
      case 'food & market':                                                 return 'chip-gold';
      case 'film':        case 'literature':                                return 'chip-purple';
      case 'exhibition':                                                    return 'chip-purple';
      case 'parade':                                                        return 'chip-indigo';
      case 'sports':      case 'community':                                 return 'chip-teal';
      default:                                                              return 'chip-muted';
    }
  }

  // ── Today-aware event check ────────────────────────────────
  function isEventToday(ev) {
    if (!todayMayDay) return false;
    const days = getMayDays(ev);
    if (days === 'all' || days === 'ongoing') return true;
    return days.includes(todayMayDay);
  }

  // ── Today banner ───────────────────────────────────────────
  const bannerEl    = document.getElementById('today-banner');
  const todayEvents = EVENTS.filter(ev => isEventToday(ev));
  if (bannerEl && todayEvents.length > 0) {
    bannerEl.style.display = '';
    bannerEl.classList.add('visible');
    const label = todayEvents.length === 1
      ? `<strong>${todayEvents[0].title}</strong> is happening today`
      : `<strong>${todayEvents.length} events</strong> are happening today`;
    bannerEl.innerHTML = `<span class="today-banner-dot"></span><span class="today-banner-text">${label}</span>`;
  }

  // ── Build list view ────────────────────────────────────────
  EVENTS.forEach(ev => {
    const isFree    = ev.price.toLowerCase().startsWith('free');
    const evToday   = isEventToday(ev);
    const card      = document.createElement('article');
    card.className  = `event-card${ev.featured ? ' featured' : ''}`;
    card.innerHTML = `
      <div class="event-card-top">
        <span class="event-icon">${ev.icon}</span>
        <div class="event-badges">
          <span class="event-category">${ev.category}</span>
          <span class="event-price${isFree ? ' free' : ''}">${ev.price}</span>
        </div>
      </div>
      <h3 class="event-title">${ev.title}${evToday ? '<span class="today-badge">Today</span>' : ''}</h3>
      <div class="event-meta">
        <span>📅 ${ev.date}</span>
        <span>⏰ ${ev.time}</span>
        <span>📍 ${ev.location}</span>
      </div>
      <p class="event-desc">${ev.description}</p>
      <div class="event-footer">
        <a href="${ev.link}" class="event-link" target="_blank" rel="noopener">Learn More →</a>
        <span class="event-source">Source: ${ev.source}</span>
      </div>
    `;
    eventsGrid.appendChild(card);
  });

  // ── Date → May day numbers ─────────────────────────────────
  // Returns: 'all' | 'ongoing' | number[]
  function getMayDays(ev) {
    const d = ev.date;
    if (/throughout may/i.test(d)) return 'all';
    if (/every saturday/i.test(d)) return [2, 9, 16, 23, 30];
    if (/through may/i.test(d))    return 'ongoing';
    const range  = d.match(/May (\d+)[–\-](\d+)/i);
    if (range)   return Array.from({length: +range[2] - +range[1] + 1}, (_, i) => +range[1] + i);
    const single = d.match(/May (\d+)/i);
    if (single)  return [+single[1]];
    return 'ongoing';
  }

  // ── Build calendar view ────────────────────────────────────
  // May 2026 starts on Friday (col index 5, Sun = 0)
  const MAY_START_COL = 5;
  const MAY_DAYS      = 31;
  const TOTAL_CELLS   = Math.ceil((MAY_START_COL + MAY_DAYS) / 7) * 7; // 42

  const ongoingEvents = [];
  const dayMap = {}; // { dayNum: [ev, ...] }

  EVENTS.forEach(ev => {
    const days = getMayDays(ev);
    if (days === 'all' || days === 'ongoing') {
      ongoingEvents.push(ev);
    } else {
      days.forEach(d => {
        if (!dayMap[d]) dayMap[d] = [];
        dayMap[d].push(ev);
      });
    }
  });

  // Ongoing banner
  if (ongoingEvents.length) {
    const banner = document.createElement('div');
    banner.className = 'cal-ongoing';
    banner.innerHTML = `<span class="cal-ongoing-label">All Month</span>` +
      ongoingEvents.map(ev =>
        `<a class="cal-ongoing-chip" href="${ev.link}" target="_blank" rel="noopener">${ev.icon} ${ev.title}</a>`
      ).join('');
    calView.appendChild(banner);
  }

  // Calendar grid
  const grid = document.createElement('div');
  grid.className = 'cal-grid';

  // Day-of-week headers
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(label => {
    const h = document.createElement('div');
    h.className = 'cal-day-header';
    h.textContent = label;
    grid.appendChild(h);
  });

  // Day cells
  for (let i = 0; i < TOTAL_CELLS; i++) {
    const dayNum = i - MAY_START_COL + 1;
    const cell   = document.createElement('div');

    if (dayNum < 1 || dayNum > MAY_DAYS) {
      cell.className = 'cal-day empty';
      grid.appendChild(cell);
      continue;
    }

    const isCalToday = isMay2026 && dayNum === todayMayDay;
    cell.className = `cal-day${isCalToday ? ' today' : ''}`;

    const numEl = document.createElement('span');
    numEl.className = 'cal-day-num';
    numEl.textContent = dayNum;
    cell.appendChild(numEl);

    const eventsOnDay = dayMap[dayNum] || [];
    const MAX_CHIPS   = 3;

    eventsOnDay.slice(0, MAX_CHIPS).forEach(ev => {
      const chip = document.createElement('a');
      chip.className = `cal-chip ${chipClass(ev.category)}`;
      chip.href      = ev.link;
      chip.target    = '_blank';
      chip.rel       = 'noopener';
      chip.title     = `${ev.title} · ${ev.time} · ${ev.location}`;
      chip.innerHTML = `<span class="cal-chip-icon">${ev.icon}</span><span class="cal-chip-label">${ev.title}</span>`;
      cell.appendChild(chip);
    });

    if (eventsOnDay.length > MAX_CHIPS) {
      const more = document.createElement('span');
      more.className   = 'cal-more';
      more.textContent = `+${eventsOnDay.length - MAX_CHIPS} more`;
      cell.appendChild(more);
    }

    grid.appendChild(cell);
  }

  calView.appendChild(grid);

  // ── Toggle handler ─────────────────────────────────────────
  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const isCalendar = btn.dataset.view === 'calendar';
      listView.style.display = isCalendar ? 'none' : '';
      calView.style.display  = isCalendar ? ''     : 'none';
    });
  });
});
