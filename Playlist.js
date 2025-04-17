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
////////////////////////////////
//Trái Tim Hồng 
function toggleHeart(icon) {
    icon.classList.toggle("heart-active");
}
//Hiện Bảng Giao Diện
function togglePopup() {
    var popup = document.getElementById("BangGiaoDien");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
function changeBackground(color) {
    document.body.style.background = color;
}
////////////////////////////////////////
// Gán sự kiện click cho icon "+"
document.querySelector('.ThemPL .TaoPL1').addEventListener('click', function() {
    // Kích hoạt input file khi người dùng nhấn dấu "+"
    document.querySelector('#fileInput').click();
  });
  
  // Khi người dùng chọn ảnh từ máy tính
  document.querySelector('#fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const preview = document.querySelector('#previewImage');
        preview.src = event.target.result;
        preview.style.display = 'block';  // Hiển thị ảnh
      };
      reader.readAsDataURL(file);  // Đọc file dưới dạng data URL
    }
  });
/////////////////////////////////////////////////////////////////////
// Lắng nghe sự thay đổi trạng thái checkbox trong Album1
  