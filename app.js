// Утилиты
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU');
}

function getStatusClass(status) {
  const map = {
    'Новый': 'new',
    'На согласовании': 'approval',
    'Одобрен': 'approved',
    'Отклонён': 'rejected',
    'Выполнен': 'done'
  };
  return map[status] || 'new';
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Экспорт для использования в других файлах
window.escapeHtml = escapeHtml;
window.formatDate = formatDate;
window.getStatusClass = getStatusClass;
window.showToast = showToast;