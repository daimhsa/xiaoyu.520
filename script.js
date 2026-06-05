// 获取 DOM 元素
const loveBtn = document.getElementById('loveBtn');
const message = document.getElementById('message');
const musicBtn = document.getElementById('musicBtn');
const loveMusic = document.getElementById('loveMusic');
const heartsContainer = document.querySelector('.hearts-container');

// 按钮点击事件 - 显示文字
loveBtn.addEventListener('click', function() {
    message.classList.remove('hidden');
    createHearts(30); // 点击时创建更多心形
});

// 音乐播放按钮事件
let isPlaying = false;
musicBtn.addEventListener('click', function() {
    if (isPlaying) {
        loveMusic.pause();
        musicBtn.textContent = '🎵 播放音乐';
        isPlaying = false;
    } else {
        loveMusic.play();
        musicBtn.textContent = '⏸ 暂停音乐';
        isPlaying = true;
    }
});

// 创建心形飘落动画
function createHearts(count = 5) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        
        // 随机水平位置
        const randomX = Math.random() * 100;
        heart.style.left = randomX + '%';
        
        // 随机动画持续时间
        const duration = 3 + Math.random() * 2;
        heart.style.animationDuration = duration + 's';
        
        // 随机延迟
        const delay = Math.random() * 0.5;
        heart.style.animationDelay = delay + 's';
        
        heartsContainer.appendChild(heart);
        
        // 动画完成后移除元素
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }
}

// 页面加载完成后自动开始创建心形
window.addEventListener('load', function() {
    // 初始心形飘落
    createHearts(10);
    
    // 每隔2秒创建新的心形
    setInterval(() => {
        createHearts(3);
    }, 2000);
});

// 尝试自动播放音乐（某些浏览器需要用户交互）
document.addEventListener('click', function() {
    if (!isPlaying) {
        // 可选：自动播放音乐，需要取消注释
        // loveMusic.play();
        // isPlaying = true;
        // musicBtn.textContent = '⏸ 暂停音乐';
    }
}, { once: true });