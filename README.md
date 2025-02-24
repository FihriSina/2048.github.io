
# 2048 Game

This project is a recreation of the popular 2048 game using HTML, CSS, and JavaScript. The game includes light and dark theme options, score tracking, and high score recording features.

## Project Description

This project is a version of the classic 2048 game designed with HTML, CSS, and JavaScript. Players aim to achieve the highest score by merging tiles with the same values.

## Features

### General Features

1. **Game Area**:

   - Played on a 4x4 grid.
   - Tiles move based on user inputs (up, down, left, right) and merge when values are the same.

2. **Scoring**:

   - Each merge increases the player's score.
   - High scores are stored in the browser using localStorage.

3. **Theme Options**:

   - **Dark Theme**: Provides a dark interface.
   - **Light Theme**: Offers a default light-colored interface.

4. **High Scores**:

   - Scores achieved at the end of the game are stored in a list.
   - The top 10 scores are displayed in order.

5. **Start and Reset Buttons**:

   - Options to start a new game and reset high scores are included, making the project more testable.

## Code Design

### 1. HTML

- A basic HTML structure is used to build the game layout.
- Elements:
  - "Game Area"
  - "Scoring Section"
  - "Theme Buttons"
  - "High Scores" list

### 2. CSS

- Detailed styles were defined for themes and the interface.
- Custom styles were applied for Light and Dark themes.
- Dynamic background and text colors for tiles were implemented based on their values.

### 3. JavaScript

- **Game Mechanics**:

  - Tile movement, merging, and generation of new tiles are managed using JavaScript.
  - Keyboard events are monitored to enable tile movements on the grid.

- **Theme Management**:

  - "Dark Theme" and "Light Theme" buttons allow users to switch between themes.
  - Thematic visuals are optimized according to user preferences.

- **Score Management**:

  - High scores and the score list are stored using localStorage.
  - The score table updates dynamically.

## User Experience Features

1. **Theme Switching**

   - Users can toggle between light and dark themes with a single click.
   - Each theme is optimized for visual contrast and readability.

2. **High Scores**

   - Scores achieved at the end of the game are automatically added to the list.
   - The top 10 scores are displayed in a sorted manner.

3. **Game Restart**

   - The "New Game" button resets the game.
   - The "Reset High Scores" button clears all stored scores.

## Files

- `iki048.html`: Contains the main HTML structure of the project.
- `iki048.css`: Includes the design styles for the game.
- `iki048.js`: Provides the JavaScript functionality for the game.

## Installation

1. Clone this project to your local machine:

   ```bash
   git clone https://github.com/FihriSina/2048.github.io.git
   ```

2. Open the project files in a browser to run:

   - Open `iki048.html` in any browser.

## Usage

1. Click the "Start Game" button to begin the game.
2. Merge tiles to increase your score.
3. Use the buttons to switch between light and dark themes.
4. Use the "Reset High Scores" button to clear stored scores.

## About the Project

- **Author**: Abdullah Sina Korkmaz

## License

This project is licensed under the MIT License. For more details, see the `LICENSE` file.


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
   git clone https://github.com/FihriSina/2048.github.io.git
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


## Lisans

Bu proje MIT lisansı altında sunulmaktadır. Daha fazla bilgi için `LICENSE` dosyasını inceleyin.

