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
    let allFilled = true;

    for (let i = 1; i <= 5; i++) {
        const radios = document.querySelectorAll(`input[name="q${i}"]`); // Select ALL radio buttons for each question
        let selected = false; // Flag to check if any radio is selected for the current question.

        radios.forEach(radio => {
            if (radio.checked) {
                results[radio.value] = (results[radio.value] || 0) + 1;
                selected = true; // Set to true if at least one radio is checked
            }
        });

        if (!selected) {
            allFilled = false;
        }
    }

    if (!allFilled) {
        alert("Harap jawab semua pertanyaan!");
        return;
    }

    const topChoices = Object.entries(results)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2);

    const suggestedHobbies = topChoices.flatMap(([choice]) => hobbies[choice] || []);
    const uniqueHobbies = [...new Set(suggestedHobbies)];
    const recommendedHobbies = uniqueHobbies.slice(0, 3).join(', ');

    document.getElementById('resultText').innerHTML = `Berdasarkan jawaban Anda, kami merekomendasikan hobi: <strong>${recommendedHobbies}</strong>. Hobi ini cocok dengan kepribadian dan minat Anda. Belum cocok? Klik "Selanjutnya"! Sudah pas? Klik "Kembali" ke beranda.`;

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}