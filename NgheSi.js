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
///////////////////////////////////////////////////////////
//Nghệ Sĩ Lướt 12
document.addEventListener("DOMContentLoaded", function () {
    const musicCards1 = document.querySelectorAll(".music-card1");
    const musicCards2 = document.querySelectorAll(".music-card2");
    const buttons1 = document.querySelectorAll(".button1");
    const buttons2 = document.querySelectorAll(".button2");

    // Lặp qua từng cặp phần tử
    musicCards1.forEach((card1, index) => {
        const card2 = musicCards2[index]; // Lấy card2 tương ứng
        const button1 = buttons1[index]; // Lấy button1 tương ứng
        const button2 = buttons2[index]; // Lấy button2 tương ứng

        // Ban đầu chỉ hiển thị card1
        card1.style.display = "flex";
        card2.style.display = "none";
        button1.disabled = true;
        button1.style.opacity = "0.5";

        button2.addEventListener("click", function () {
            card1.style.display = "none";
            card2.style.display = "flex";

            button2.disabled = true;
            button2.style.opacity = "0.5";
            button1.disabled = false;
            button1.style.opacity = "1";
        });

        button1.addEventListener("click", function () {
            card1.style.display = "flex";
            card2.style.display = "none";

            button1.disabled = true;
            button1.style.opacity = "0.5";
            button2.disabled = false;
            button2.style.opacity = "1";
        });
    });
});

///////////////////////////////////////////
function toggleQuanTam(event) {
    let parent = event.target.closest('.QuanTam');
    if (parent.style.backgroundColor === 'purple') {
        parent.style.backgroundColor = '#666'; // Màu gốc
    } else {
        parent.style.backgroundColor = 'purple';
    }
}
//Hiện Bảng Giao Diện
function togglePopup() {
    var popup = document.getElementById("BangGiaoDien");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
function changeBackground(color) {
    document.body.style.background = color;
}
