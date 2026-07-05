const NAV_OFFSET = 100;

export function scrollToSection(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  window.history.replaceState(null, "", selector);
}
