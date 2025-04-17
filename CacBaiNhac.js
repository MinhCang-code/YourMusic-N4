document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".BA, .AB");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Xóa class active khỏi tất cả
      tabs.forEach((t) => t.classList.remove("active"));

      // Thêm class active vào tab được chọn
      this.classList.add("active");
    });
  });
});
//Đăng Nhập/Đăng Kí//
//     //    //    //
document.addEventListener("DOMContentLoaded", function () {
  var avatarIcon = document.querySelector(".avatar-icon");
  var dropdownMenu = document.getElementById("dropdownMenu");
  var hideTimeout; // Biến để lưu timeout

  avatarIcon.addEventListener("click", function (event) {
      event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
      dropdownMenu.classList.toggle("show");

      // Xóa bất kỳ timeout nào trước đó để tránh xóa menu sớm
      clearTimeout(hideTimeout);

      // Đặt timeout để ẩn menu sau 2 giây nếu không di chuột vào
      hideTimeout = setTimeout(function () {
          if (!dropdownMenu.matches(":hover")) {
              dropdownMenu.classList.remove("show");
          }
      }, 2000);
  });

  // Khi nhấn ra ngoài, ẩn ngay lập tức
  document.addEventListener("click", function (event) {
      if (!avatarIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove("show");
          clearTimeout(hideTimeout); // Hủy timeout nếu đã nhấn ra ngoài
      }
  });

  // Khi di chuột vào dropdown, hủy timeout để không bị ẩn
  dropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(hideTimeout);
  });

  // Khi rời khỏi dropdown, bắt đầu lại bộ đếm 2 giây
  dropdownMenu.addEventListener("mouseleave", function () {
      hideTimeout = setTimeout(function () {
          dropdownMenu.classList.remove("show");
      }, 50);
  });
});
////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".BA, .AB");
  const categoryButtons = document.querySelectorAll(".TVQ button");
  const tables = document.querySelectorAll(".CacBaiNhac");

  // Xử lý chuyển đổi tab (Bài Hát / Album)
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Xử lý hiển thị bảng theo danh mục
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Ẩn tất cả bảng nhạc
      tables.forEach((table) => {
        table.style.display = "none";
      });

      // Hiển thị bảng tương ứng
      const activeTable = document.querySelector(`.CacBaiNhac[data-category='${category}']`);
      if (activeTable) {
        activeTable.style.display = "table";
      }

      // Cập nhật trạng thái nút
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Đặt mặc định hiển thị bảng "Tất Cả"
  document.querySelector(".CacBaiNhac[data-category='tatca']").style.display = "table";
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
//////////////////////////////////////////
    //Hiệu ứng xoay đĩa qua trái 
        document.querySelector(".AnhAlbum").addEventListener("click", function() {
            document.querySelector(".DiaAlbum").classList.toggle("rotate");
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
///////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const baiHatTab = document.querySelector(".BA");
  const albumTab = document.querySelector(".AB");
  const baiHatTables = document.querySelectorAll(".CacBaiNhac");
  const albumTables = document.querySelectorAll(".Album1, .Album2, .Album3, .Album4, .Album5");

  let isAlbumSelected = false; // Kiểm tra tab đang chọn

  // Khi nhấn vào "Bài Hát"
  baiHatTab.addEventListener("click", function () {
      isAlbumSelected = false;
      baiHatTables.forEach(table => table.style.display = "none"); // Ẩn tất cả bài hát
      albumTables.forEach(table => table.style.display = "none"); // Ẩn tất cả album
      document.querySelector(".CacBaiNhac[data-category='tatca']").style.display = "table"; // Chỉ hiển thị bảng "Tất Cả"
  });

  // Mặc định hiển thị "Bài Hát" và đặt active
  baiHatTab.classList.add("active");
  baiHatTables.forEach(table => table.style.display = "none"); // Ẩn tất cả
  document.querySelector(".CacBaiNhac[data-category='tatca']").style.display = "table"; // Hiển thị bảng "Tất Cả" mặc định
  albumTables.forEach(table => table.style.display = "none");

  // Khi nhấn vào "Album"
  albumTab.addEventListener("click", function () {
      isAlbumSelected = true;
      baiHatTables.forEach(table => table.style.display = "none");

      // Khi vào album, chỉ hiện Album1 mặc định
      albumTables.forEach(table => {
          if (table.classList.contains("Album1")) {
              table.style.display = "table";
          } else {
              table.style.display = "none";
          }
      });
  });

  // Xử lý khi nhấn vào nút lọc bài hát theo thể loại
  document.querySelectorAll(".TVQ button").forEach(button => {
      button.addEventListener("click", function () {
          let category = this.getAttribute("data-category");

          if (isAlbumSelected) {
              // Ẩn tất cả bài hát
              baiHatTables.forEach(table => table.style.display = "none");

              // Xử lý lọc album
              albumTables.forEach(table => {
                  if (
                      (category === "tatca" && table.classList.contains("Album1")) || // "Tất cả" chỉ hiện Album1
                      (category === "vietnam" && table.classList.contains("Album2")) || 
                      (category === "aumy" && table.classList.contains("Album3")) || 
                      (category === "hanquoc" && table.classList.contains("Album4")) || 
                      (category === "khac" && table.classList.contains("Album5")) 
                  ) {
                      table.style.display = "table";
                  } else {
                      table.style.display = "none";
                  }
              });

          } else {
              // Ẩn tất cả bài hát trước khi hiển thị bảng phù hợp
              baiHatTables.forEach(table => table.style.display = "none");

              // Nếu chọn "Tất Cả", chỉ hiển thị bảng có data-category="tatca"
              if (category === "tatca") {
                  document.querySelector(".CacBaiNhac[data-category='tatca']").style.display = "table";
              } else {
                  // Hiển thị bảng có category được chọn
                  baiHatTables.forEach(table => {
                      if (table.getAttribute("data-category") === category) {
                          table.style.display = "table";
                      }
                  });
              }
          }

          // Xóa class 'active' ở tất cả nút, sau đó thêm vào nút được chọn
          document.querySelectorAll(".TVQ button").forEach(btn => btn.classList.remove("active"));
          this.classList.add("active");
      });
  });

});
//////////////////////////////////////////////////////////////////////////////////
//Trái Tim Hồng
function toggleHeart(icon) {
  icon.classList.toggle("heart-active");
}
/////////////////////////////////////////////////////////////////////////////////
//Hiện Bảng Giao Diện
function togglePopup() {
  var popup = document.getElementById("BangGiaoDien");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
function changeBackground(color) {
  document.body.style.background = color;
}



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

    songTitle.textContent = title;
    songArtist.textContent = artist;
    songThumbnail.src = thumbnail;
    document.getElementById("audio-source").src = src;

    audio.load();
    audio.play();

    playerContainer.classList.add("show");
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

    progressBar.style.display = title.toLowerCase().includes("live") ? "none" : "block";
    document.getElementById("download-btn").addEventListener("click", () => {
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

    lyricsText.textContent = lyrics;
    currentSongIndex = songList.indexOf(element);

    updateRadioIcon(element, true);
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
let fullSongList = Array.from(document.querySelectorAll(".BaiNhac0")).map(
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





