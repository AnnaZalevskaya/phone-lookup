function wasPopupShownToday() {
    const lastShownDate = localStorage.getItem('cookiePopupShownDate');
    const today = new Date().toLocaleDateString();
    return lastShownDate === today;
}
  
function showPopup() {
    const popup = document.getElementById('cookiePopup');
    popup.classList.add('show');
}
  
function handleAcceptCookies() {
    localStorage.setItem('cookiePopupShownDate', new Date().toLocaleDateString());
}
  
function initializePopup() {
    const acceptCookiesBtn = document.getElementById('acceptCookies');
  
    if (!wasPopupShownToday()) {
      showPopup();
    }
  
    acceptCookiesBtn.addEventListener('click', handleAcceptCookies);
}
  
window.addEventListener('DOMContentLoaded', initializePopup);