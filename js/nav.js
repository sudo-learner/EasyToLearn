// EasyToLearn — Shared nav enhancement
// Adds Dashboard link + user greeting to inner page navs dynamically.
// Runs after icon.js so the brand icon is already injected.
(async function () {
  var nav = document.querySelector('.site-nav .inner');
  if (!nav) return;

  var right = document.createElement('div');
  right.style.cssText = 'display:flex;align-items:center;gap:8px;';
  nav.appendChild(right);

  var user = (window.ETLAuth) ? await ETLAuth.getUser() : null;

  if (user) {
    var name = (user.user_metadata && user.user_metadata.full_name) || user.email || 'You';
    right.innerHTML =
      '<a href="dashboard.html" class="back-pill" style="color:var(--indigo);border-color:rgba(124,113,240,.4);display:flex;align-items:center;gap:5px;">' +
        '\uD83D\uDCCA Dashboard' +
      '</a>' +
      '<div style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary);padding:5px 10px;border:1px solid var(--border);border-radius:99px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' +
        '\uD83D\uDC64 ' + name +
      '</div>';
  } else {
    right.innerHTML =
      '<a href="login.html" class="back-pill">Sign In</a>';
  }
})();
