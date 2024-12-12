function submitTest() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked')
    };

    // Validasi apakah semua pertanyaan terjawab
    if (!answers.q1 || !answers.q2 || !answers.q3) {
        alert('Mohon jawab semua pertanyaan!');
        return;
    }

    const profile = {
        analitis: {
            title: "Analisis dan Teknis",
            hobi: ["Coding", "Riset", "Pemecahan Masalah"],
            bakat: ["Programmer", "Ilmuwan", "Konsultan"]
        },
        kreatif: {
            title: "Kreativitas dan Seni",
            hobi: ["Melukis", "Menulis", "Desain Grafis"],
            bakat: ["Desainer", "Penulis", "Fotografer"]
        },
        sosial: {
            title: "Sosial dan Komunikasi",
            hobi: ["Mengajar", "Berbicara di Depan Umum", "Volunteer"],
            bakat: ["Guru", "Trainer", "Konselor"]
        },
        teknis: {
            title: "Teknologi dan Inovasi",
            hobi: ["Robotika", "Elektronik", "Pemrograman"],
            bakat: ["Teknik Komputer", "Sistem Informasi", "Developer"]
        },
        seni: {
            title: "Seni dan Kreativitas Tinggi",
            hobi: ["Musik", "Teater", "Tari"],
            bakat: ["Musisi", "Aktor", "Koreografer"]
        },
        olahraga: {
            title: "Fisik dan Kesehatan",
            hobi: ["Fitness", "Cabang Olahraga", "Outdoor"],
            bakat: ["Pelatih", "Atlet", "Instruktur Kebugaran"]
        },
        individu: {
            title: "Mandiri dan Fokus",
            hobi: ["Menulis", "Penelitian", "Meditasi"],
            bakat: ["Peneliti", "Penulis", "Konsultan"]
        },
        tim: {
            title: "Kolaborasi dan Kerjasama",
            hobi: ["Olahraga Tim", "Diskusi", "Proyek Kelompok"],
            bakat: ["Manajer", "Koordinator", "Penggerak Tim"]
        },
        memimpin: {
            title: "Kepemimpinan dan Strategi",
            hobi: ["Debat", "Manajemen Proyek", "Pengembangan Tim"],
            bakat: ["Pemimpin", "Entrepreneur", "Konsultan Strategi"]
        }
    };

    const valueMap = {
        q1: answers.q1.value,
        q2: answers.q2.value,
        q3: answers.q3.value
    };

    // Menghitung profil dominan
    const scoreMap = {};
    Object.values(valueMap).forEach(value => {
        scoreMap[value] = (scoreMap[value] || 0) + 1;
    });

    const dominantProfile = Object.keys(scoreMap).reduce((a, b) => 
        scoreMap[a] > scoreMap[b] ? a : b
    );

    const result = profile[dominantProfile];

    document.getElementById('resultText').innerHTML = `
        <h3>${result.title}</h3>
        <p><strong>Hobi Potensial:</strong> ${result.hobi.join(", ")}</p>
        <p><strong>Bakat Tersarankan:</strong> ${result.bakat.join(", ")}</p>
        <p>Berdasarkan jawaban Anda, Anda memiliki potensi untuk mengembangkan keterampilan di bidang ${result.title.toLowerCase()}. Jelajahi hobi dan bakat yang disebutkan untuk mengembangkan potensi diri Anda!</p>
    `;

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}