📌 ĐĂNG KÝ TIÊM VẮC XIN COVID-19 – FORM (HTML/CSS/JS)

Dự án xây dựng lại biểu mẫu đăng ký tiêm vắc xin COVID-19 theo yêu cầu của Bài 5 – Lab 4 (JavaScript Cơ bản) từ tài liệu gốc môn học .
Form được phát triển bằng HTML + CSS thuần + JavaScript thuần, có xử lý tooltip, kiểm tra dữ liệu và hiển thị thông báo lỗi.
🚀 Chức năng chính
✔ Tooltip tiếng Việt khi hover vào từng ô

Mỗi input đều có data-tip, JS sẽ hiển thị chú thích ở 2 dạng:
• Dòng tooltip phía dưới form
• Bong bóng tooltip ngay sát ô khi hover/focus (code trong vaccine_form.js )

✔ Kiểm tra dữ liệu người dùng nhập

Dựa trên yêu cầu đề bài (PDF) :
• Bắt buộc nhập các trường có dấu *
• Kiểm tra radio ngành nghề, phường
• Kiểm tra số hợp lệ ≥ 0
• Không cho “đã tiêm” hoặc “đồng thuận tiêm” > tổng lao động
• Validate điện thoại (9–11 số)
• Validate email chuẩn

✔ Giao diện mô phỏng mẫu đăng ký thật

CSS viết thủ công theo style hiện đại, responsive, cấu trúc sạch dựa trên file vaccine_form.css

✔ Reset form và thông báo thành công

Sau khi submit hợp lệ → alert + reset.
📂 Cấu trúc thư mục
project/
│── vaccine_form.html     # Giao diện chính của form (HTML)  :contentReference[oaicite:6]{index=6}
│── vaccine_form.css      # Toàn bộ phần style & responsive    :contentReference[oaicite:7]{index=7}
│── vaccine_form.js       # Tooltip + validate + submit logic  :contentReference[oaicite:8]{index=8}
│── Lab4_1_JS_coban.pdf   # Tài liệu gốc bài Lab (tham khảo)   :contentReference[oaicite:9]{index=9}
└── README.md             # Tệp mô tả (file bạn đang đọc)
🛠 Cách chạy project
Mở file: vaccine_form.html
👨‍💻 Tác giả
VuTrungKien
Project hoàn thành theo bài Lab môn HTML/CSS/JS cơ bản.
