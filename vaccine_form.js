// Code đơn giản, giữ nguyên tính năng theo yêu cầu bài 5
var form = document.getElementById("formDangKy");
var allInputs = form.querySelectorAll("input, textarea, select");
var tipLine = document.getElementById("tooltip");
var formError = document.getElementById("formError");

// Hiển thị dòng chú thích dưới form
function setTip(text) {
  if (!text) text = "";
  tipLine.textContent = text;
}

// Tooltip nổi cạnh ô 
var bubble = null;
function showBubble(el) {
  var tip = el.getAttribute("data-tip");
  if (!tip) return;

  if (!bubble) {
    bubble = document.createElement("div");
    bubble.className = "tip-bubble";
    document.body.appendChild(bubble);
  }
  bubble.textContent = tip;

  var rect = el.getBoundingClientRect();
  var pageTop = (window.scrollY || document.documentElement.scrollTop);
  var pageLeft = (window.scrollX || document.documentElement.scrollLeft);

  // đặt ngay phía trên ô
  bubble.style.left = (pageLeft + rect.left) + "px";
  bubble.style.top = (pageTop + rect.top - bubble.offsetHeight - 8) + "px";
  bubble.style.display = "block";
}
function hideBubble() {
  if (bubble) bubble.style.display = "none";
}

// Gán sự kiện hover/focus cho tất cả ô có data-tip
for (var i = 0; i < allInputs.length; i++) {
  (function(el) {
    var tip = el.getAttribute("data-tip") || "";

    el.addEventListener("mouseenter", function() {
      setTip(tip);
      showBubble(el);
    });

    el.addEventListener("mouseleave", function() {
      setTip("");
      hideBubble();
    });

    el.addEventListener("focus", function() {
      setTip(tip);
      showBubble(el);
    });

    el.addEventListener("blur", function() {
      setTip("");
      hideBubble();
    });
  })(allInputs[i]);
}

// Hàm báo lỗi + kéo lên chỗ lỗi
function errorOut(msg, el) {
  formError.textContent = msg;
  if (el && typeof el.focus === "function") {
    el.focus();
  }
  // kéo lên vùng báo lỗi
  var y = formError.getBoundingClientRect().top + (window.scrollY || document.documentElement.scrollTop) - 40;
  window.scrollTo(0, y);
}

// Kiểm tra email/điện thoại đơn giản
function emailOK(v) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(v).toLowerCase());
}
function phoneOK(v) {
  var re = /^[0-9]{9,11}$/;
  return re.test(v);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  formError.textContent = "";

  // Lấy nhanh phần tử theo id
  function get(id) { return form.querySelector("#" + id); }

  var ten_don_vi = get("ten_don_vi").value.trim();
  var mst = get("ma_so_thue").value.trim();
  var dia_chi = get("dia_chi").value.trim();
  var nganh_checked = form.querySelector('input[name="nganh"]:checked');
  var phuong_checked = form.querySelector('input[name="phuong"]:checked');
  var tong_ld = get("tong_ld").value;
  var da_tiem = get("da_tiem").value;
  var dong_thuan = get("dong_thuan").value;
  var ho_ten_dd = get("ho_ten_dd").value.trim();
  var sdt = get("sdt").value.trim();
  var email = get("email").value.trim();

  // Bắt buộc
  if (ten_don_vi === "") return errorOut("Vui lòng nhập Tên đơn vị.", get("ten_don_vi"));
  if (mst === "")        return errorOut("Vui lòng nhập Mã số thuế.", get("ma_so_thue"));
  if (dia_chi === "")    return errorOut("Vui lòng nhập Địa chỉ chi tiết.", get("dia_chi"));
  if (!nganh_checked)    return errorOut("Vui lòng chọn Ngành nghề.");
  if (!phuong_checked)   return errorOut("Vui lòng chọn Phường.");

  // Kiểm tra số
  if (tong_ld === "" || Number(tong_ld) < 0)  return errorOut("Tổng số lao động phải ≥ 0.", get("tong_ld"));
  if (da_tiem === "" || Number(da_tiem) < 0)  return errorOut("Số người đã tiêm phải ≥ 0.", get("da_tiem"));
  if (dong_thuan === "" || Number(dong_thuan) < 0) return errorOut("Số người đồng thuận phải ≥ 0.", get("dong_thuan"));

  if (Number(da_tiem) > Number(tong_ld))      return errorOut("Số đã tiêm không được vượt tổng lao động.", get("da_tiem"));
  if (Number(dong_thuan) > Number(tong_ld))   return errorOut("Số đồng thuận không được vượt tổng lao động.", get("dong_thuan"));

  // Thông tin liên hệ
  if (ho_ten_dd === "")  return errorOut("Vui lòng nhập Họ tên người đại diện.", get("ho_ten_dd"));
  if (!phoneOK(sdt))     return errorOut("Số điện thoại phải gồm 9–11 chữ số.", get("sdt"));
  if (!emailOK(email))   return errorOut("Email không hợp lệ (ví dụ: ten@domain.com).", get("email"));

  alert("Đăng ký thành công! Hệ thống đã ghi nhận phản hồi của đơn vị.");
  form.reset();
  setTip("");
});
