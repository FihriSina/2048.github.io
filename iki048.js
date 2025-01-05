document.addEventListener('DOMContentLoaded', () => {
    // HTML elemanlarını seç
    const oyunKonteyneri = document.getElementById('oyun-konteyneri');
    const yeniOyunButton = document.getElementById('yeniOyun');
    const skorSıfırlaButton = document.getElementById('skorSıfırla');
    const koyuTemaButton = document.getElementById('koyuTema');
    const acikTemaButton = document.getElementById('acikTema');
    // Grid ve skor verileri
    let grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    let puan = 0;
    let enYuksekSkor = localStorage.getItem('enYuksekSkor') || 0;
    let enYuksekSkorlar = JSON.parse(localStorage.getItem('enYuksekSkorlar')) || [];
    
    // En yüksek skoru ve tabloyu güncelle
    document.getElementById('enYuksekSkor').textContent = `En Yüksek Skor: ${enYuksekSkor}`;
    güncelleSkorTablosu();

    // Tema değişiklikleri
    koyuTemaButton.addEventListener('click', () => document.body.classList.add('koyu-tema'));
    acikTemaButton.addEventListener('click', () => document.body.classList.remove('koyu-tema'));

    // Grid'i oluştur ve oyun alanına ekle
    for (let satır = 0; satır < grid.length; satır++) {
        for (let sütun = 0; sütun < grid[satır].length; sütun++) {
            const hücre = document.createElement('div');
            hücre.classList.add('hücre');
            oyunKonteyneri.appendChild(hücre);
        }
    }

    // Rastgele başlangıç taşları ekle
    rastgeleTaşEkle();
    rastgeleTaşEkle();

    // Buton işlevleri
    yeniOyunButton.addEventListener('click', yeniOyun);
    skorSıfırlaButton.addEventListener('click', enYuksekSkoruSıfırla);

    // Yeni oyun başlatma
    function yeniOyun() {
        // En yüksek skoru kontrol et ve güncelle
        if (puan > enYuksekSkor) {
            enYuksekSkor = puan;
            localStorage.setItem('enYuksekSkor', enYuksekSkor);
            document.getElementById('enYuksekSkor').textContent = `En Yüksek Skor: ${enYuksekSkor}`;
        }

        // Skorları listeye ekle
        if (puan > 0) {
            enYuksekSkorlar.push(puan);
            enYuksekSkorlar.sort((a, b) => b - a);
            enYuksekSkorlar = enYuksekSkorlar.slice(0, 10);
            localStorage.setItem('enYuksekSkorlar', JSON.stringify(enYuksekSkorlar));
        }

        güncelleSkorTablosu();

        // Grid'i sıfırla
        grid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        puan = 0;
        document.getElementById('puan').textContent = `Puan: ${puan}`;
        oyunKonteyneri.innerHTML = '';

         // Hücreleri yeniden oluştur
        for (let satır = 0; satır < grid.length; satır++) {
            for (let sütun = 0; sütun < grid[satır].length; sütun++) {
                const hücre = document.createElement('div');
                hücre.classList.add('hücre');
                oyunKonteyneri.appendChild(hücre);
            }
        }
        rastgeleTaşEkle();
        rastgeleTaşEkle();
    }

    // En yüksek skoru sıfırla
    function enYuksekSkoruSıfırla() {
        enYuksekSkor = 0;
        localStorage.setItem('enYuksekSkor', enYuksekSkor);
        document.getElementById('enYuksekSkor').textContent = `En Yüksek Skor: ${enYuksekSkor}`;
        enYuksekSkorlar = [];
        localStorage.setItem('enYuksekSkorlar', JSON.stringify(enYuksekSkorlar));
        güncelleSkorTablosu();
    }

    // Skor tablosunu güncelle
    function güncelleSkorTablosu() {
        const skorListesi = document.getElementById('enYuksekSkorlar');
        skorListesi.innerHTML = '';
        enYuksekSkorlar.forEach((skor) => {
            const listItem = document.createElement('li');
            listItem.textContent = skor; // Sadece skor değeri ekleniyor
            skorListesi.appendChild(listItem);
        });
    }
    
    // Grid'e rastgele taş ekle
    function rastgeleTaşEkle() {
        const boşHücreler = [];
        for (let satır = 0; satır < grid.length; satır++) {
            for (let sütun = 0; sütun < grid[satır].length; sütun++) {
                if (grid[satır][sütun] === 0) {
                    boşHücreler.push({ satır, sütun });
                }
            }
        }
        if (boşHücreler.length > 0) {
            const rastgeleIndex = Math.floor(Math.random() * boşHücreler.length);
            const { satır, sütun } = boşHücreler[rastgeleIndex];
            grid[satır][sütun] = Math.random() < 0.9 ? 2 : 4;
            gridGüncelle();
        }
    }

    // Grid'i güncelle ve hücreleri doldur
    function gridGüncelle() {
        const hücreler = document.querySelectorAll('.hücre');
        hücreler.forEach((hücre, index) => {
            const satır = Math.floor(index / 4);
            const sütun = index % 4;
            hücre.textContent = grid[satır][sütun] === 0 ? '' : grid[satır][sütun];
            hücre.setAttribute('data-değer', grid[satır][sütun]);
        });
    }

    // Klavye kontrolü
    document.addEventListener('keydown', klavyeKontrol);

    // Klavye ile hareketi kontrol et
    function klavyeKontrol(event) {
        let hareketEttiMi = false;
        switch (event.key) {
            case 'ArrowUp':
                hareketEttiMi = hareketYukari();
                break;
            case 'ArrowDown':
                hareketEttiMi = hareketAsagi();
                break;
            case 'ArrowLeft':
                hareketEttiMi = hareketSola();
                break;
            case 'ArrowRight':
                hareketEttiMi = hareketSaga();
                break;
        }
        if (hareketEttiMi) {
            rastgeleTaşEkle();
            if (oyunBittiMi()) {
                alert("Oyun Bitti!");
                if (puan > enYuksekSkor) {
                    enYuksekSkor = puan;
                    localStorage.setItem('enYuksekSkor', enYuksekSkor);
                    document.getElementById('enYuksekSkor').textContent = `En Yüksek Skor: ${enYuksekSkor}`;
                }
                if (puan > 0) {
                    enYuksekSkorlar.push(puan);
                    enYuksekSkorlar.sort((a, b) => b - a);
                    enYuksekSkorlar = enYuksekSkorlar.slice(0, 10);
                    localStorage.setItem('enYuksekSkorlar', JSON.stringify(enYuksekSkorlar));
                }
                güncelleSkorTablosu();
            }
        }
    }

    // Yukarı hareket
    function hareketYukari() {
        let hareketEttiMi = false;
        for (let sütun = 0; sütun < 4; sütun++) {
            let yeniSütun = [];
            let birleşme = [];
            for (let satır = 0; satır < 4; satır++) {
                yeniSütun.push(grid[satır][sütun]);
                birleşme.push(false);
            }
            for (let i = 0; i < 4; i++) {
                for (let j = i + 1; j < 4; j++) {
                    if (yeniSütun[j] !== 0) {
                        if (yeniSütun[i] === 0) {
                            yeniSütun[i] = yeniSütun[j];
                            yeniSütun[j] = 0;
                            hareketEttiMi = true;
                        } else if (yeniSütun[i] === yeniSütun[j] && !birleşme[i]) {
                            yeniSütun[i] *= 2;
                            yeniSütun[j] = 0;
                            puan += yeniSütun[i];
                            document.getElementById('puan').textContent = `Puan: ${puan}`;
                            birleşme[i] = true;
                            hareketEttiMi = true;
                        } else if (yeniSütun[i] !== yeniSütun[j]) {
                            break;
                        }
                    }
                }
            }
            for (let satır = 0; satır < 4; satır++) {
                grid[satır][sütun] = yeniSütun[satır];
            }
        }
        gridGüncelle();
        return hareketEttiMi;
    }

    // Aşağı hareket
    function hareketAsagi() {
        let hareketEttiMi = false;
        for (let sütun = 0; sütun < 4; sütun++) {
            let yeniSütun = [];
            let birleşme = [];
            for (let satır = 3; satır >= 0; satır--) {
                yeniSütun.push(grid[satır][sütun]);
                birleşme.push(false);
            }
            for (let i = 0; i < 4; i++) {
                for (let j = i + 1; j < 4; j++) {
                    if (yeniSütun[j] !== 0) {
                        if (yeniSütun[i] === 0) {
                            yeniSütun[i] = yeniSütun[j];
                            yeniSütun[j] = 0;
                            hareketEttiMi = true;
                        } else if (yeniSütun[i] === yeniSütun[j] && !birleşme[i]) {
                            yeniSütun[i] *= 2;
                            yeniSütun[j] = 0;
                            puan += yeniSütun[i];
                            document.getElementById('puan').textContent = `Puan: ${puan}`;
                            birleşme[i] = true;
                            hareketEttiMi = true;
                        } else if (yeniSütun[i] !== yeniSütun[j]) {
                            break;
                        }
                    }
                }
            }
            for (let satır = 3; satır >= 0; satır--) {
                grid[satır][sütun] = yeniSütun[3 - satır];
            }
        }
        gridGüncelle();
        return hareketEttiMi;
    }

    // Sola hareket
    function hareketSola() {
        let hareketEttiMi = false;
        for (let satır = 0; satır < 4; satır++) {
            let yeniSatır = [];
            let birleşme = [];
            for (let sütun = 0; sütun < 4; sütun++) {
                yeniSatır.push(grid[satır][sütun]);
                birleşme.push(false);
            }
            for (let i = 0; i < 4; i++) {
                for (let j = i + 1; j < 4; j++) {
                    if (yeniSatır[j] !== 0) {
                        if (yeniSatır[i] === 0) {
                            yeniSatır[i] = yeniSatır[j];
                            yeniSatır[j] = 0;
                            hareketEttiMi = true;
                        } else if (yeniSatır[i] === yeniSatır[j] && !birleşme[i]) {
                            yeniSatır[i] *= 2;
                            yeniSatır[j] = 0;
                            puan += yeniSatır[i];
                            document.getElementById('puan').textContent = `Puan: ${puan}`;
                            birleşme[i] = true;
                            hareketEttiMi = true;
                        } else if (yeniSatır[i] !== yeniSatır[j]) {
                            break;
                        }
                    }
                }
            }
            for (let sütun = 0; sütun < 4; sütun++) {
                grid[satır][sütun] = yeniSatır[sütun];
            }
        }
        gridGüncelle();
        return hareketEttiMi;
    }

    // Sağa hareket
    function hareketSaga() {
        let hareketEttiMi = false;
        for (let satır = 0; satır < 4; satır++) {
            let yeniSatır = [];
            let birleşme = [];
            for (let sütun = 3; sütun >= 0; sütun--) {
                yeniSatır.push(grid[satır][sütun]);
                birleşme.push(false);
            }
            for (let i = 0; i < 4; i++) {
                for (let j = i + 1; j < 4; j++) {
                    if (yeniSatır[j] !== 0) {
                        if (yeniSatır[i] === 0) {
                            yeniSatır[i] = yeniSatır[j];
                            yeniSatır[j] = 0;
                            hareketEttiMi = true;
                        } else if (yeniSatır[i] === yeniSatır[j] && !birleşme[i]) {
                            yeniSatır[i] *= 2;
                            yeniSatır[j] = 0;
                            puan += yeniSatır[i];
                            document.getElementById('puan').textContent = `Puan: ${puan}`;
                            birleşme[i] = true;
                            hareketEttiMi = true;
                        } else if (yeniSatır[i] !== yeniSatır[j]) {
                            break;
                        }
                    }
                }
            }
            for (let sütun = 3; sütun >= 0; sütun--) {
                grid[satır][sütun] = yeniSatır[3 - sütun];
            }
        }
        gridGüncelle();
        return hareketEttiMi;
    }

    function birleşmeİşlemi(değer) {
        puan += değer;
        document.getElementById('puan').textContent = `Puan: ${puan}`;
    }

    // Oyun bitti mi kontrolü
    function oyunBittiMi() {
        for (let satır = 0; satır < 4; satır++) {
            for (let sütun = 0; sütun < 4; sütun++) {
                if (grid[satır][sütun] === 0) return false;
                if (sütun < 3 && grid[satır][sütun] === grid[satır][sütun + 1]) return false;
                if (satır < 3 && grid[satır][sütun] === grid[satır + 1][sütun]) return false;
            }
        }
        return true;
    }
});
