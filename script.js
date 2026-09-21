function hitungSemua() {
    // Mengambil nilai dari kalkulatormmm.html
    let n1 = parseFloat(document.getElementById("number1").value);
    let n2 = parseFloat(document.getElementById("number2").value);
    let n3 = parseFloat(document.getElementById("number3").value);
    let n4 = parseFloat(document.getElementById("number4").value);
    let n5 = parseFloat(document.getElementById("number5").value);

    // Memeriksa apakah input valid
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    // Menghitung min, max, dan mean
    let min = Math.min(n1, n2, n3, n4, n5);
    let max = Math.max(n1, n2, n3, n4, n5);
    let mean = (n1 + n2 + n3 + n4 + n5) / 5;

    // Menampilkan hasil
    let tempatHasil = document.getElementById("hasil");

    tempatHasil.innerHTML =
        "Nilai Terkecil (Min): " + min + "<br>" +
        "Nilai Terbesar (Max): " + max + "<br>" +
        "Rata-rata (Mean): " + mean;
}