function showYesMessage() {
    document.getElementById('proposalPage').classList.add('hidden');
    document.getElementById('yesPage').classList.remove('hidden');
    document.getElementById('responseArea').classList.remove('hidden');
}

function showNoMessage() {
    document.getElementById('proposalPage').classList.add('hidden');
    document.getElementById('noPage').classList.remove('hidden');
    document.getElementById('responseArea').classList.remove('hidden');
}

window.onload = function() {
    const floatingImagesContainer = document.getElementById('floatingImages');
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = 'data:image/png;base64,INSERT_YOUR_BASE64_HERE';
        img.classList.add('floating-image');
        img.style.top = `${Math.random() * 80}%`;
        img.style.left = `${Math.random() * 80}%`;
        floatingImagesContainer.appendChild(img);
    }
};
