// Слайдер продукции
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    // Функция для показа слайда
    function showSlide(n) {
        // Скрываем все слайды
    slides.forEach(slide => {
        slide.style.opacity = '0';
        slide.classList.remove('active');
    });
    
    // Убираем активный класс со всех точек
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Корректируем индекс
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Показываем текущий слайд и активируем точку
    slides[currentSlide].style.opacity = '1';
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    }
    
    // Следующий слайд
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Предыдущий слайд
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Обработчики событий для кнопок
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Обработчики событий для точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Автопереключение слайдов каждые 15 секунд
    setInterval(nextSlide, 15000);
    
    // Инициализация первого слайда
    showSlide(0);
    
    // ... остальной код (прокрутка, форма, анимации и т.д.)
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Обработчики для кнопок WhatsApp
    document.querySelectorAll('.whatsapp-btn').forEach(button => {
        if (button.tagName === 'BUTTON') {
            button.addEventListener('click', function() {
                window.open('https://wa.me/+79885866609', '_blank');
            });
        }
    });
    
    // Обработчики для кнопок Telegram
    document.querySelectorAll('.telegram-btn').forEach(button => {
        if (button.tagName === 'BUTTON') {
            button.addEventListener('click', function() {
                window.open('https://t.me/Verbenko', '_blank');
            });
        }
    });
    
    
    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(38, 38, 38, 0.98)'; /* Полупрозрачный серый */
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = '#000000'; /* Черный */
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});
});