// script.js

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typed-text');
    const qrSection = document.getElementById('qr-section');
    
    // 元のテキストを取得し、20文字ごとに改行を挿入
    const originalText = textElement.textContent;
    const formattedText = originalText.replace(/(.{40})/g, "$1\n");

    textElement.textContent = '';
    let index = 0;

    function type() {
        if (index < formattedText.length) {
            textElement.textContent += formattedText.charAt(index);
            index++;
            setTimeout(type, 70); // タイピング速度調整
        } else {
            qrSection.style.display = 'block'; // QRコードとリンクを表示
        }
    }

    type(); // タイピング開始
});
