# 2048 Oyunu

Bu proje, popüler 2048 oyununu HTML, CSS ve JavaScript kullanarak geliştirilmiştir. Oyunda hem açık hem de koyu tema seçeneği, skor takibi ve en yüksek skor kaydı gibi özellikler bulunmaktadır.

## Proje Tanımı

Bu proje, klasik 2048 oyununun HTML, CSS ve JavaScript kullanılarak tasarlanmış sürümüdür. Oyunda kullanıcılar, taşları birleştirerek en yüksek puana ulaşmayı hedefler.

## Özellikler

### Genel Özellikler

1. **Oyun Alanı**:
   - 4x4 bir ızgara (grid) üzerinde oynanır.
   - Taşlar, kullanıcı girişlerine (yukarı, aşağı, sağ, sol) göre hareket eder ve aynı değerli taşlar birleşir.

2. **Puanlama**:
   - Her birleşme ile oyuncunun puanı artar.
   - En yüksek puan, localStorage ile tarayıcıda saklanır.

3. **Tema Seçenekleri**:
   - **Koyu Tema**: Karanlık bir arayüz sağlar.
   - **Açık Tema**: Varsayılan açık renkli arayüz sunar.

4. **En Yüksek Skorlar**:
   - Oyun sonunda elde edilen skorlar bir liste halinde tutulur.
   - İlk 10 skor sıralanarak gösterilir.

5. **Başlat ve Sıfırla Butonları**:
   - Yeni oyun başlatma ve yüksek skorları sıfırlama seçenekleri içerir. Bu sayede proje daha test edilebilir hale getirilmiştir.

## Kod Tasarımı

### 1. HTML

- Oyun yapısını oluşturmak için temel bir HTML iskeleti kullanılmıştır.
- Elementler:
  - "Oyun Alanı"
  - "Puanlama Bölgesi"
  - "Tema Butonları"
  - "En Yüksek Skorlar" listesi

### 2. CSS

- Temalar ve arayüzün görselleştirilmesi için detaylı stiller tanımlandı.
- Açık Tema ve Koyu Tema için özel stiller uygulandı.
- CSS ile hücrelerin arka plan renkleri ve yazı renkleri taş değerine göre dinamik olarak değiştirildi.

### 3. JavaScript

- **Oyun Mekaniği**:
  - Taşların hareketi, birleşmesi ve yeni taşların oluşturulması JavaScript ile yönetilir.
  - Klavye olayları dinlenerek taşların grid üzerinde hareket etmesi sağlandı.

- **Tema Yönetimi**:
  - "Koyu Tema" ve "Açık Tema" butonları kullanılarak temalar arasında geçiş yapılır.
  - Kullanıcı tercihlerine uygun olarak tematik görsellik sağlandı.

- **Skor Yönetimi**:
  - LocalStorage kullanılarak en yüksek skor ve skor listesi saklanır.
  - Skor tablosu dinamik olarak güncellenir.

## Kullanıcı Deneyimi Açısından Özellikler

1. **Tema Geçişi**
   - Kullanıcılar, tek bir tıklamayla açık ve koyu temalar arasında geçiş yapabilir.
   - Her tema, görsel kontrast ve okunabilirlik açısından optimize edilmiştir.

2. **En Yüksek Skorlar**
   - Oyun sonunda elde edilen puanlar otomatik olarak listeye eklenir.
   - İlk 10 skor sıralı bir şekilde görüntülenir.

3. **Oyun Yeniden Başlatma**
   - "Yeni Oyun" butonu ile oyun sıfırlanabilir.
   - "En Yüksek Skoru Sıfırla" butonu ile tüm kayıtlı skorlar temizlenebilir.

## Dosyalar

- `iki048.html`: Projenin ana HTML yapısını içerir.
- `iki048.css`: Oyun için tasarım stillerini içerir.
- `iki048.js`: Oyunun işlevselliğini sağlayan JavaScript kodlarını içerir.

## Kurulum

1. Bu projeyi bilgisayarınıza kopyalayın:

   ```bash
   git clone https://github.com/FihriSina/AbdullahSinaKORKMAZ.github.io.git
   ```

2. Proje dosyalarını bir tarayıcıda açarak çalıştırabilirsiniz:

   - `iki048.html` dosyasını herhangi bir tarayıcıda açın.

## Kullanım

1. Oyunu başlatmak için "Oyuna Başla" butonuna tıklayın.
2. Oyunda puanlarınızı artırmak için kutuları birleştirin.
3. Açık veya koyu tema seçmek için ilgili butonları kullanın.
4. Skorlarınızı sıfırlamak için "En Yüksek Skoru Sıfırla" butonunu kullanabilirsiniz.

## Proje Hakkında

- **Yazar**: Abdullah Sina Korkmaz
- **Öğrenci No**: 2021221044

## Lisans

Bu proje MIT lisansı altında sunulmaktadır. Daha fazla bilgi için `LICENSE` dosyasını inceleyin.

