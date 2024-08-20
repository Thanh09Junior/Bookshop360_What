document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.sec2');
    const header = document.querySelector('header');
    const links = header.querySelectorAll('a');
    const paragraphs = header.querySelectorAll('p');
    const icon = header.querySelectorAll('i');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rect = entry.boundingClientRect;
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                const sectionCenter = rect.top + rect.height / 2;
                const viewportCenter = viewportHeight / 2;

                if (Math.abs(sectionCenter - viewportCenter) < rect.height / 2) {
                    links.forEach(link => link.style.color = 'black');
                    paragraphs.forEach(p => p.style.color = 'black');
                    icon.forEach(i => i.style.color = 'black');
                } else {
                    links.forEach(link => link.style.color = '');
                    paragraphs.forEach(p => p.style.color = '');
                    icon.forEach(i => i.style.color = 'white');
                }
            } else {
                links.forEach(link => link.style.color = '');
                paragraphs.forEach(p => p.style.color = '');
                icon.forEach(i => i.style.color = 'white');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});




document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var icon = playPauseBtn.querySelector('i');

    // Tự động phát nhạc khi tải trang
    audio.play();

    // Thay đổi biểu tượng khi nhạc đang phát hoặc dừng
    audio.addEventListener('play', function() {
        icon.classList.remove('fa-caret-right');
        icon.classList.add('fa-pause');
    });

    audio.addEventListener('pause', function() {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-caret-right');
    });

    // Điều khiển phát/dừng nhạc khi nhấp vào biểu tượng
    playPauseBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});