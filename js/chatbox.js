const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send');

// Data Hobi dengan kata kunci
const hobbies = [
    { hobby: "Melukis", keywords: ["lukis", "cat", "kanvas", "seni", "menggambar", "gambar", "canvas"] },
    { hobby: "Fotografi", keywords: ["foto", "kamera", "memotret", "lanskap", "portrait", "lensa"] },
    { hobby: "Bernyanyi", keywords: ["nyanyi", "lagu", "musik", "karaoke", "nada"] },
    { hobby: "Editing Video", keywords: ["edit", "video", "transisi", "efek", "rendering"] },
    { hobby: "Meditasi", keywords: ["tenang", "relaksasi", "meditasi", "damai", "yoga"] },
    { hobby: "Mancing", keywords: ["pancing", "ikan", "kail", "memancing", "umpan"] },
    { hobby: "Membaca Buku", keywords: ["novel", "cerita", "karya ilmiah", "fiksi", "petualangan", "membaca"] },
    { hobby: "Menonton Film", keywords: ["animasi", "romance", "horror", "petualangan", "sedih"] },
    { hobby: "Memasak", keywords: ["masak", "resep", "makanan", "dapur", "chef", "kue"] },
    { hobby: "Berkebun", keywords: ["tanaman", "kebun", "bunga", "sayuran", "taman", "tanah"] },
    { hobby: "Menjahit", keywords: ["jahit", "kain", "benang", "mesin jahit", "baju", "fashion"] },
    { hobby: "Origami", keywords: ["lipat", "kertas", "seni", "origami", "figura"] },
    { hobby: "Melukis Digital", keywords: ["digital", "tablet", "stylus", "menggambar", "desain"] },
    { hobby: "Menulis", keywords: ["cerita", "novel", "puisi", "karya", "jurnal"] },
    { hobby: "Bersepeda", keywords: ["sepeda", "bersepeda", "olah raga", "fitness", "jalan-jalan"] },
    { hobby: "Bermain Musik", keywords: ["musik", "gitar", "piano", "drum", "alat musik"] },
    { hobby: "Ih Wibu", keywords: ["anime"] }
];

// Fungsi untuk menampilkan pesan bot
const botReply = (text) => {
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.innerHTML = `
        <div class="avatar"></div>
        <div class="text">${text}</div>
    `;
    messagesContainer.appendChild(botMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

// Fungsi untuk menampilkan pesan pengguna
const userReply = (text) => {
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerHTML = `
        <div class="text">${text}</div>
        <div class="avatar"></div>
    `;
    messagesContainer.appendChild(userMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

// Fungsi untuk memberikan rekomendasi berdasarkan input pengguna
const getHobbyRecommendation = (userText) => {
    const normalizedText = userText.toLowerCase();
    const matchedHobbies = hobbies.filter(hobby =>
        hobby.keywords.some(keyword =>
            normalizedText.includes(keyword.toLowerCase())
        )
    );

    if (matchedHobbies.length > 0) {
        const hobbyNames = matchedHobbies.map(hobby => hobby.hobby).join(", ");
        return `Saya merekomendasikan untuk melakukan hobi : ${hobbyNames}. Selamat mencoba!`;
    } else {
        return "Maaf, saya tidak dapat menemukan hobi yang cocok. Coba deskripsikan lebih spesifik.";
    }
};

// Event listener untuk tombol kirim
sendBtn.addEventListener("click", () => {
    const userText = userInput.value.trim();
    if (!userText) return;

    userReply(userText); // Menampilkan pesan pengguna
    userInput.value = '';

    setTimeout(() => { // Simulasi delay bot untuk respons yang lebih alami
        const response = getHobbyRecommendation(userText);
        botReply(response);

        // Komunikasi tambahan untuk interaksi lebih
        setTimeout(() => {
            botReply("Ada lagi yang bisa saya bantu?");
        }, 2000);
    }, 1000);
});

// Event listener untuk tombol kirim menggunakan Enter
userInput.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});
