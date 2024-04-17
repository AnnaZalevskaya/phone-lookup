function wasPopupShownToday() {
    const lastShownDate = localStorage.getItem('cookiePopupShownDate');
    const today = new Date().toLocaleDateString();
    
    return lastShownDate === today;
}
  
function showPopup() {
    const popup = document.getElementById('cookiePopup');
    popup.classList.add('show');
}
  
function closePopup() {
    const popup = document.getElementById('cookiePopup');
    popup.classList.remove('show');
}
  
function handleAcceptCookies() {
    localStorage.setItem('cookiePopupShownDate', new Date().toLocaleDateString());
    closePopup();
}
  
function initializePopup() {
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const closePopupBtn = document.getElementById('closePopup');
  
    if (!wasPopupShownToday()) {
      showPopup();
    }
  
    acceptCookiesBtn.addEventListener('click', handleAcceptCookies);
    closePopupBtn.addEventListener('click', closePopup);
}
  
window.addEventListener('DOMContentLoaded', initializePopup);