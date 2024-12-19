const hobbies = {
    analitis: ['Memprogram', 'Robotika', 'Astronomi'],
    kreatif: ['Melukis', 'Desain Digital', 'Musik'],
    sosial: ['Podcasting', 'Menulis Blog', 'Coaching'],
    teknis: ['Coding', 'Elektronika', 'Drone Photography'],
    seni: ['Ilustrasi', 'Musik', 'Fotografi'],
    olahraga: ['Mendaki', 'Bersepeda', 'Yoga'],
    individu: ['Menulis', 'Seni', 'Coding'],
    tim: ['Olahraga Tim', 'Musik Band', 'Proyekan'],
    memimpin: ['Coaching', 'Manajemen Proyek', 'Entrepreneurship'],
    berpikir: ['Matematika', 'Coding', 'Analisis Data'],
    bergerak: ['Olahraga', 'Pendaki', 'Dancer'],
    berinteraksi: ['Komunikasi', 'Public Speaking', 'Konsultan'],
    menciptakan: ['Desain', 'Musisi', 'Penulis'],
    menyelesaikan: ['Insinyur', 'Akuntan', 'Peneliti'],
    membantu: ['Psikolog', 'Guru', 'Konselor']
};

function submitTest() {
    const results = {};
    for (let i = 1; i <= 5; i++) {
        const selectedValue = document.querySelector(`input[name="q${i}"]:checked`).value;
        results[selectedValue] = (results[selectedValue] || 0) + 1;
    }

    const topChoices = Object.entries(results)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2);

    const suggestedHobbies = topChoices.flatMap(([choice]) => 
        hobbies[choice] || []
    );

    const uniqueHobbies = [...new Set(suggestedHobbies)];
    const recommendedHobbies = uniqueHobbies.slice(0, 3).join(', ');

    document.getElementById('resultText').innerHTML = 
        `Berdasarkan jawaban Anda, kami merekomendasikan hobi: <strong>${recommendedHobbies}</strong>. 
        Hobi ini cocok dengan kepribadian dan minat Anda.`;

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
