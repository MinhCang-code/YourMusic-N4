//Banner
const banner =[
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535210/remix2025_h04vet.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535214/TLinh_tr4l3r.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535206/obito-danhdoi_lyxplt.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535176/DuongDomic_fp5q5x.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535178/hieuthuhai_cd5ixf.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535217/us-uk-rapper_t6mbvr.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535211/RockMusic_rxawtj.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535207/Remix_v9mdm6.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535200/MusicOSTVN_mitfke.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535179/HipHop_qqin87.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535174/DanceElectronic_igxec0.jpg')",
  "url('https://res.cloudinary.com/dfyyiq7rn/image/upload/v1744535173/Bolero_TruTinh_feub0x.jpg')",

];

let currentIndex = 0;
const bannerElement = document.querySelector(".banner");

function changeBanner() {
    currentIndex = (currentIndex + 1) % banner.length;
    bannerElement.style.backgroundImage = banner[currentIndex];
}

// Thiết lập hình ảnh ban đầu
bannerElement.style.backgroundImage = banner[currentIndex];

// Chuyển đổi banner mỗi 10 giây
setInterval(changeBanner, 6000);
//Đăng Nhập/Đăng Kí//
//     //    //    //
document.addEventListener("DOMContentLoaded", function () {
    const avatarIcon = document.querySelector(".avatar-icon");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const userInfo = document.getElementById("userInfo");
    const authLinks = document.getElementById("authLinks");
    const welcomeText = document.getElementById("welcomeText");
    const logoutBtn = document.getElementById("logoutBtn");
    let hideTimeout;

    // Hiển thị dropdown
    avatarIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(function () {
            if (!dropdownMenu.matches(":hover")) {
                dropdownMenu.classList.remove("show");
            }
        }, 2000);
    });

    // Ẩn khi click bên ngoài
    document.addEventListener("click", function (event) {
        if (!avatarIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
            clearTimeout(hideTimeout);
        }
    });

    dropdownMenu.addEventListener("mouseenter", function () {
        clearTimeout(hideTimeout);
    });

    dropdownMenu.addEventListener("mouseleave", function () {
        hideTimeout = setTimeout(function () {
            dropdownMenu.classList.remove("show");
        }, 100);
    });

    // Kiểm tra nếu đã đăng nhập
    const username = localStorage.getItem("username");
    if (username) {
        welcomeText.textContent = `Xin chào, ${username}`;
        userInfo.style.display = "block";
        authLinks.style.display = "none";
    } else {
        userInfo.style.display = "none";
        authLinks.style.display = "block";
    }

    // Xử lý đăng xuất
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("username");
        location.reload();
    });
});


// // // // // // // // // // // // // // // //
//Hiện Ẩn Danh Sách Bài Hát (Mới Cập Nhật Ngày 26.03.2025)
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.querySelectorAll(".TVQ button");
  let tables = document.querySelectorAll(".CacBaiNhac");

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          let category = this.getAttribute("data-category");

          // Ẩn tất cả bảng
          tables.forEach(table => table.style.display = "none");

          // Hiện bảng được chọn
          document.querySelector(`.CacBaiNhac[data-category="${category}"]`).style.display = "table";

          // Cập nhật class active cho nút
          buttons.forEach(btn => btn.classList.remove("active"));
          this.classList.add("active");
      });
  });
});
// // // // // // // // // // // // // // // //
/**nút Sáng/Tối */
const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;
const text = document.getElementById("text");
toggleBtn.addEventListener("change", function(){
  body.classList.toggle("dark-mode");
  if(body.classList.contains("dark-mode")){
    text.textContent = "Chế độ Tối";
  }else{
    text.textContent = "Chế độ Sáng";
  }
});
//Mặc Định Chế Độ Tối
document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const text = document.getElementById("text");
  const toggleBtn = document.getElementById("toggle-btn");

  // Mặc định bật chế độ tối khi vào trang
  body.classList.add("dark-mode");
  text.textContent = "Chế độ Tối";
  toggleBtn.checked = true; // Đảm bảo nút gạt đúng trạng thái
});
/*Setting*/ 
const settingsIcon = document.querySelector(".settings-icon");
    const settingsMenu = document.getElementById("settingsMenu");

    // Toggle menu khi nhấn vào biểu tượng cài đặt
    settingsIcon.addEventListener("click", () => {
        settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
    });

    // Ẩn menu khi nhấn ra ngoài
    document.addEventListener("click", (event) => {
        if (!settingsMenu.contains(event.target) && !settingsIcon.contains(event.target)) {
            settingsMenu.style.display = "none";
        }
    });
///////////////////////////////////////////////////
//Hiện Bảng Giao Diện
function togglePopup() {
    var popup = document.getElementById("BangGiaoDien");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
function changeBackground(color) {
    document.body.style.background = color;
}
//BXH Âm Nhạc
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 1;
  const maxIndex = 3;
  const sections = [
      document.querySelector(".DSBXH1"),
      document.querySelector(".DSBXH2"),
      document.querySelector(".DSBXH3")
  ];
  const button1 = document.querySelector(".button1");
  const button2 = document.querySelector(".button2");

  function updateButtons() {
      button1.disabled = currentIndex === 1;
      button2.disabled = currentIndex === maxIndex;

      button1.style.opacity = button1.disabled ? "0.5" : "1";
      button2.style.opacity = button2.disabled ? "0.5" : "1";
  }

  function switchSection(nextIndex) {
      if (nextIndex < 1 || nextIndex > maxIndex) return;
      
      sections.forEach((section, index) => {
          if (index === nextIndex - 1) {
              section.style.display = "flex";
              section.classList.add("slide-in");
              section.classList.remove("slide-out");
          } else {
              section.style.display = "none";
              section.classList.remove("slide-in");
              section.classList.add("slide-out");
          }
      });
      
      currentIndex = nextIndex;
      updateButtons();
  }

  button1.addEventListener("click", () => switchSection(currentIndex - 1));
  button2.addEventListener("click", () => switchSection(currentIndex + 1));

  // Khởi tạo hiển thị ban đầu
  sections.forEach((section, index) => {
      section.style.display = index === 0 ? "flex" : "none";
  });

  updateButtons();
});
// Footer
document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("authorModal").style.display = "flex";
  });
  
  document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("authorModal").style.display = "none";
  });
  
  // Đóng khi click nền ngoài
  window.onclick = function(e) {
    const modal = document.getElementById("authorModal");
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

// Trình phát nhạc
// --- Biến toàn cục ---
const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const volumeBar = document.getElementById("volume-bar");
const playerContainer = document.querySelector(".music-player");
const downloadBtn = document.getElementById("download-btn");
const lyricsBtn = document.getElementById("lyrics-btn");
const likeBtn = document.getElementById("like-btn");
const lyricsPopup = document.getElementById("lyrics-popup");
const closeLyrics = document.getElementById("close-lyrics");
const lyricsText = document.getElementById("lyrics-text");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songThumbnail = document.getElementById("song-thumbnail");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

let currentSongIndex = 0;
let likedSongs = [];
let songList = Array.from(document.querySelectorAll(".BaiNhac0, .music-image"));

// --- Phát nhạc ---
function playMusic(element) {
    const title = element.getAttribute("data-title");
    const artist = element.getAttribute("data-artist");
    const src = element.getAttribute("data-src");
    const lyrics = element.getAttribute("data-lyrics") || "Chưa có lời bài hát.";
    const thumbnail = element.querySelector("img")?.src || "";

    if (!src) return;

    // Cập nhật giao diện trình phát
    songTitle.textContent = title;
    songArtist.textContent = artist;
    songThumbnail.src = thumbnail;
    document.getElementById("audio-source").src = src;
    audio.load();
    audio.play();

    playerContainer.classList.add("show");
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    progressBar.style.display = title.toLowerCase().includes("live") ? "none" : "block";

    // Gán lại sự kiện download
    downloadBtn.addEventListener("click", () => {
        const src = document.getElementById("audio-source").src;
        const title = document.getElementById("song-title").textContent;
        if (!src) return;
        const link = document.createElement("a");
        link.href = src;
        link.download = `${title}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Load lyrics vào popup lời bài hát
    lyricsText.textContent = lyrics;
    currentSongIndex = songList.indexOf(element);
    updateRadioIcon(element, true);

    // Load lyrics vào lyrics-container + chạy chữ
    loadLyrics(lyrics);

    // Reset scroll lyrics
    lyricsContainer.scrollTop = 0;
}

// --- Icon phát/tạm dừng trên danh sách nhạc ---
function updateRadioIcon(element, isPlaying) {
    let playIcon = element.querySelector(".play-button");
    if (playIcon) {
        playIcon.textContent = isPlaying ? "❚❚" : "▶";
    }
}

// --- Phát / Tạm dừng ---
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        updateRadioIcon(songList[currentSongIndex], true);
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        updateRadioIcon(songList[currentSongIndex], false);
    }
}

// --- Chuyển bài ---
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    playMusic(songList[currentSongIndex]);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    playMusic(songList[currentSongIndex]);
}

// --- Thanh tiến trình ---
audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percent;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// --- Âm lượng ---
volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value / 100;
});

// --- Kết thúc bài ---
audio.addEventListener("ended", nextSong);

// --- Khi metadata có sẵn ---
audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});

// --- Nút control ---
if (playBtn) playBtn.addEventListener("click", togglePlay);
if (nextBtn) nextBtn.addEventListener("click", nextSong);
if (prevBtn) prevBtn.addEventListener("click", prevSong);

// --- Nút đóng trình phát ---
document.getElementById("close-player").addEventListener("click", () => {
    playerContainer.classList.remove("show");
    audio.pause();
    updateRadioIcon(songList[currentSongIndex], false);
});

// --- Yêu thích bài hát ---
likeBtn.addEventListener("click", () => {
    const title = songTitle.textContent;
    const isLiked = likedSongs.includes(title);

    if (isLiked) {
        likedSongs = likedSongs.filter(t => t !== title);
        likeBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    } else {
        likedSongs.push(title);
        likeBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
});

// --- Hiện / Ẩn lời bài hát ---
lyricsBtn.addEventListener("click", () => {
    lyricsPopup.classList.remove("hidden");
});

closeLyrics.addEventListener("click", () => {
    lyricsPopup.classList.add("hidden");
});

// --- Định dạng thời gian ---
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
}

// --- Gán click cho từng bài ---
songList.forEach(item => {
    item.addEventListener("click", () => {
        playMusic(item);
    });
});


// Search Bài Hát
const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");
const historyList = document.getElementById("historyList"); // kiểm tra tồn tại

let searchHistory = [];
let fullSongList = Array.from(document.querySelectorAll(".BaiNhac0, .song")).map(
  (item) => ({
    title: item.getAttribute("data-title") || "",
    artist: item.getAttribute("data-artist") || "",
    lyrics: item.getAttribute("data-lyrics") || "",
    element: item,
  })
);

// --- Gợi ý khi gõ tìm kiếm ---
searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase().trim();
  suggestionList.innerHTML = "";

  if (!keyword) {
    suggestionList.style.display = "none"; // Ẩn nếu rỗng
    return;
  }

  const suggestions = fullSongList.filter(
    (song) =>
      song.title.toLowerCase().includes(keyword) ||
      song.artist.toLowerCase().includes(keyword) ||
      song.lyrics.toLowerCase().includes(keyword)
  );

  if (suggestions.length === 0) {
    suggestionList.style.display = "none"; // Không có kết quả -> ẩn
    return;
  }

  suggestions.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;
    li.classList.add("suggestion-item");

    li.addEventListener("click", () => {
      searchInput.value = song.title;
      addToHistory(song.title);
      suggestionList.innerHTML = "";
      suggestionList.style.display = "none"; // ẩn sau khi chọn
      playMusic(song.element); // phát bài nhạc
    });

    suggestionList.appendChild(li);
  });

  suggestionList.style.display = "block"; // Có gợi ý thì hiện ra
});

// --- Lưu vào lịch sử ---
function addToHistory(keyword) {
  if (!keyword || searchHistory.includes(keyword)) return;

  searchHistory.unshift(keyword);
  if (searchHistory.length > 5) searchHistory.pop(); // tối đa 5 mục

  renderHistory();
}

// --- Hiển thị lịch sử ---
function renderHistory() {
  if (!historyList) return; // nếu không có phần tử thì thoát

  historyList.innerHTML = "";
  searchHistory.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("history-item");

    li.addEventListener("click", () => {
      searchInput.value = item;
      suggestionList.innerHTML = "";
      suggestionList.style.display = "none";
    });

    historyList.appendChild(li);
  });
}

let lyricsContainer = document.getElementById("lyrics-container");
let lyricsArray = [];

function loadLyrics(lyricsText) {
    lyricsContainer.innerHTML = "";
    lyricsArray = [];

    let lines = lyricsText.split("\n");
    lines.forEach(line => {
        let match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
        if (match) {
            let time = parseInt(match[1]) * 60 + parseFloat(match[2]);
            let text = match[3];
            let div = document.createElement("div");
            div.className = "lyric-line";
            div.textContent = text;
            lyricsContainer.appendChild(div);
            lyricsArray.push({ time, element: div });
        }
    });
}

// Cập nhật lời chạy theo thời gian
audio.addEventListener("timeupdate", () => {
    let currentTime = audio.currentTime;
    for (let i = 0; i < lyricsArray.length; i++) {
        let line = lyricsArray[i];
        let nextLine = lyricsArray[i + 1];
        if (currentTime >= line.time && (!nextLine || currentTime < nextLine.time)) {
            document.querySelectorAll(".lyric-line").forEach(el => el.classList.remove("active"));
            line.element.classList.add("active");
            // Auto scroll
            lyricsContainer.scrollTop = line.element.offsetTop - lyricsContainer.offsetTop - 100;
            break;
        }
    }
});

  
