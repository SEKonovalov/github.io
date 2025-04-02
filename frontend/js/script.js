// Конфигурация API
const API_URL = 'http://localhost:3001/api';

// ====================== Функции для модального окна ======================
const modal = document.getElementById('successModal');
const closeModalBtn = document.querySelector('.close-modal');
const okModalBtn = document.getElementById('modalOkBtn');

function showModal() {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
}

function hideModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
}

// Закрытие по клику на крестик
closeModalBtn.addEventListener('click', hideModal);

// Закрытие по клику на кнопку "Хорошо"
okModalBtn.addEventListener('click', hideModal);

// Закрытие по клику вне окна
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

// ====================== Обработка формы регистрации ======================
document.getElementById('regForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  // Валидация паролей
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (password !== confirmPassword) {
    alert('Пароли не совпадают!');
    return;
  }

  // Подготовка данных
  const formData = {
    username: this.username.value,
    email: this.email.value,
    password: password
  };

  try {
    // Отправка данных на сервер
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    // Обработка ошибок
    if (!response.ok) {
      throw new Error(data.error || 'Произошла ошибка при регистрации');
    }

    // Успешная регистрация
    showModal(); // Показываем модальное окно
    this.reset(); // Очищаем форму

  } catch (error) {
    console.error('Ошибка:', error);
    alert(error.message);
  }
});

// ====================== Загрузка данных (пример) ======================
document.getElementById('loadData')?.addEventListener('click', async function() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    
    const container = document.getElementById('dataContainer');
    container.innerHTML = data.map(item => `
      <div class="product-item">
        <h4>${item.name}</h4>
        <p>Цена: $${item.price}</p>
      </div>
    `).join('');
    
  } catch (error) {
    console.error('Ошибка загрузки:', error);
    document.getElementById('dataContainer').innerHTML = `
      <p class="error">Ошибка загрузки данных</p>
    `;
  }
});

// ====================== Инициализация ======================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Сайт загружен и готов к работе!');
});