:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --dark-color: #212529;
    --light-color: #f8f9fa;
    --text-color: #495057;
    --shadow: 0 5px 15px rgba(0,0,0,0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Navigation */
.header {
    background: #fff;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 100;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}
.logo { display: flex; align-items: center; }
.logo img { height: 60px; margin-right: 15px; }
.school-name { font-size: 1.5rem; color: var(--primary-color); }
.hamburger { display: none; cursor: pointer; }
.bar { display: block; width: 25px; height: 3px; margin: 5px auto; background-color: var(--dark-color); transition: all 0.3s ease-in-out; }
.nav-menu { display: flex; list-style: none; }
.nav-menu a { text-decoration: none; color: var(--dark-color); margin-left: 30px; font-weight: 600; transition: color 0.3s; }
.nav-menu a:hover { color: var(--primary-color); }

/* Premium Hero Slider */
.hero-slider {
    position: relative;
    height: 90vh;
    overflow: hidden;
}
.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
    animation: kenBurns 20s infinite;
}
.slide.active {
    opacity: 1;
}
@keyframes kenBurns {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.1) rotate(1deg); }
}
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
}
.hero-text {
    position: relative;
    z-index: 2;
    color: #fff;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.hero-text h2 {
    font-size: 3.5rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
}
.hero-text p {
    font-size: 1.2rem;
}

/* Premium JS Parallax Section */
.parallax-container {
    position: relative;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.parallax-bg {
    position: absolute;
    left: 0;
    top: -50%;
    width: 100%;
    height: 200%;
    background-size: cover;
    background-position: center;
    z-index: -1;
}
.parallax-content {
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 40px 60px;
    text-align: center;
    border-radius: 10px;
}
.parallax-content h2 { font-size: 2.5rem; margin-bottom: 10px; }


/* Main Content & Gallery */
.main-content {
    padding: 80px 20px;
    text-align: center;
}
.section-title { font-size: 2.5rem; color: var(--primary-color); margin-bottom: 15px; }
.section-subtitle { max-width: 600px; margin: 0 auto 40px auto; }
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
.gallery-grid img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}
.gallery-grid img:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}


/* Image Popup Modal (Same as before) */
.popup { position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: none; justify-content: center; align-items: center; }
.popup.active { display: flex; }
.popup-content { display: flex; background: #fff; width: 90%; max-width: 1000px; height: 80vh; border-radius: 10px; overflow: hidden; position: relative; animation: zoomIn 0.3s; }
@keyframes zoomIn { from { transform: scale(0.5); } to { transform: scale(1); } }
.close-btn { position: absolute; top: 15px; right: 25px; color: #fff; font-size: 40px; font-weight: bold; cursor: pointer; z-index: 10; }
.popup-details { flex: 1; padding: 40px; overflow-y: auto; }
.popup-image-container { flex: 2; background: #000; }
.popup-image { width: 100%; height: 100%; object-fit: contain; }


/* Footer */
.footer {
    background: var(--dark-color);
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

/* Responsive Design */
@media(max-width: 768px) {
    .hamburger { display: block; }
    .nav-menu { position: fixed; left: -100%; top: 80px; flex-direction: column; background: #fff; width: 100%; text-align: center; transition: 0.3s; box-shadow: var(--shadow); }
    .nav-menu.active { left: 0; }
    .nav-menu li { padding: 15px 0; }
    .nav-menu a { margin: 0; }
    .hamburger.active .bar:nth-child(2) { opacity: 0; }
    .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

    .hero-text h2 { font-size: 2rem; }
    .popup-content { flex-direction: column; height: 90vh; }
}
