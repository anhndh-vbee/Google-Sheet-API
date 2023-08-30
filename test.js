const arr = [
  {
    "Jira ID": "AIC-890",
    "Issue Type": "Story",
    Assignee: "HuongTTT",
    "Due Date": "2023-08-23",
    "User Story Title": "Điều chỉnh giọng đọc",
    Story:
      "Là PO, tôi muốn cải tiến phần điều chỉnh giọng đọc trong màn hình setup kịch bản khi chỉnh sửa chiến dịch, để cải thiện trải nghiệm người dùng",
    "Product Type": "AICall",
    Status: "Done",
    Priority: "1",
    "Sprint Priority": "3",
    HuongTTT: "10,0",
    LoiPNB: "14,0",
    TaiVD: "2,0",
    PhuongNT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    Story: "[Web][UI] Sửa lại giao diện chọn slide tốc độ đọc ở cuối",
    LoiPNB: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    "Due Date": "2023-08-21",
    Story: "[Web][UI] Ghép avatar vào chọn giọng đọc",
    LoiPNB: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    "Due Date": "2023-08-21",
    Story: "[Web][UI] Sửa lại vị trí hiện menu chọn giọng đọc",
    LoiPNB: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    Story: "[Web][UI] Ghép link nghe thử giọng đọc",
    LoiPNB: "6,0",
  },
  {
    "Jira ID": "AIC-896",
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story:
      "[Web][Intergrate] Tích hợp API lưu thông tin nhạc nền của khách hàng upload",
    HuongTTT: "2,0",
  },
  {
    "Jira ID": "AIC-897",
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story:
      "[Web][Intergrate] Tích hợp API lấy thông tin nhạc nền của khách hàng đã upload",
    HuongTTT: "2,0",
  },
  {
    "Jira ID": "AIC-898",
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story: "[Web][UI] Hiển thị ký tự hiện tại",
    Status: "Done",
    TaiVD: "2,0",
  },
  {
    "Jira ID": "AIC-944",
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story: "[Web][UI] Chọn và tải nhạc nền",
    HuongTTT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story: "[Web][UI] API lấy thông tin giọng đọc khi chỉnh sửa chiến dịch",
    HuongTTT: "2,0",
  },
  {
    Assignee: "HuongTTT",
    Story:
      "[Web][UI] API update thông tin setup giọng đọc khi chỉnh sửa chiến dịch",
    HuongTTT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIC-891",
    "Issue Type": "Story",
    Assignee: "LamNDH",
    "Due Date": "2023-08-25",
    "User Story Title": "Lời thoại và cá nhân hoá",
    Story:
      "Là PO, tôi muốn cải tiến phần lời thoại và trường cá nhân hoá trong màn hình setup kịch bản khi chỉnh sửa chiến dịch, để cải thiện trải nghiệm người dùng",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "1",
    "Sprint Priority": "1",
    HuongTTT: "9,0",
    LamNDH: "15,0",
    TaiVD: "19,0",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIC-899",
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story: "[Web][UI] Thêm thẻ cá nhân hóa",
    Status: "Done",
    TaiVD: "4,0",
  },
  {
    "Jira ID": "AIC-900",
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story:
      "[Web][UI] Chỉnh sửa thông tin của thẻ cá nhân hóa (tên thẻ, cách đọc)",
    Status: "Done",
    TaiVD: "3,0",
  },
  {
    "Jira ID": "AIC-901",
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story: "[Web][UI] Xóa thông tin của thẻ cá nhân hóa",
    Status: "Done",
    TaiVD: "4,0",
  },
  {
    "Jira ID": "AIC-945",
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story:
      "[Web][UI] Hiển thị hết chữ trong thẻ  khi hover vào với  trường hợp  chữ  quá  dài",
    Status: "Done",
    TaiVD: "1,0",
  },
  {
    "Jira ID": "AIC-945",
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story: "[Web][UI] Auto focus khi tạo thẻ cá nhân hóa mới",
    Status: "Done",
    TaiVD: "3,0",
  },
  {
    "Jira ID": "AIC-945",
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story:
      "[Web][UI] Giao diện thẻ cá nhân hóa xử lí các icon hiển thị và màu background lúc focus, disable",
    Status: "Done",
    TaiVD: "2,0",
  },
  {
    "Jira ID": "AIC-945",
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story: "[Web][UI] Mapping thẻ cá nhân hóa khi chỉnh sửa chiến  dịch",
    Status: "To Do",
    TaiVD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Ghép nghe thử kịch bản vào chiến dịch",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Ghép Nôi dung loại audio kịch bản vào chiến dịch",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Ghép Nôi dung loại văn bản kịch bản vào chiến dịch",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Nôi dung loại audio cho từng phím",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Nghe thử nội dung cho từng phím loại văn bản",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Nghe thử nội dung cho từng phím loại audio",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Nghe thử nội dung cho từng phím loại audio",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Giao diện kết nối tổng đài viên",
    Status: "To Do",
    LamNDH: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Luồng kết nối tổng đài viên cho từng phím",
    Status: "To Do",
    LamNDH: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story: "[Web][Integrate] Ghép API lấy thông tin kịch bản vào chiến dịch",
    HuongTTT: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story: "[Web][Integrate] Ghép API chỉnh sửa kịch bản trong chiến dịch",
    HuongTTT: "5,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIC-917",
    "Issue Type": "Story",
    Assignee: "HuongTTT",
    "Due Date": "2023-08-23",
    "User Story Title": "Phím bấm",
    Story:
      "Là PO, tôi muốn cải tiến phần cây phím bấm trong màn hình setup kịch bản khi chỉnh sửa chiến dịch, để cải thiện trải nghiệm người dùng",
    "Product Type": "AICall",
    Status: "Done",
    Priority: "1",
    "Sprint Priority": "1",
    Note: "- Đã deploy lên dev\n- Giao diện Cây phím bấm ở trong phần tạo/chỉnh sửa kịch bản\n- Giới hạn 4 cấp",
    HuongTTT: "1,0",
    LamNDH: "2,0",
    PhuongNT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story:
      "[Web][Integrate] API update thông tin phím bấm khi chỉnh sửa chiến dịch ",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story:
      "[Web][Integrate] API lấy thông tin phím bấm khi chỉnh sửa chiến dịch",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story: "[Web][UI] Giới hạn số lượng cấp tối đa của cây phím bấm",
    HuongTTT: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIC-919",
    "Issue Type": "Story",
    Assignee: "LamNDH",
    "Due Date": "2023-08-22",
    "User Story Title": "Phản hồi nâng cao",
    Story:
      "Là PO, tôi muốn cải tiến việc thiết lập phản hồi nâng cao khi setup kịch bản trong quá trình tạo mới chiến dịch, để cải thiện trải nghiệm người dùng",
    "Product Type": "AICall",
    Status: "Done",
    Priority: "1",
    "Sprint Priority": "2",
    Note: "- Đã deploy lên dev\n- Giao diện Lời thoại khi phản hồi không hợp lệ trong phần tạo/chỉnh sửa kịch bản",
    LamNDH: "9,0",
    PhuongNT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Thời gian chờ bấm phím cho từng phím",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story:
      "[Web][UI] Nôi dung lời thoại không hợp lệ loại văn bản cho từng phím",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Nôi dung lời thoại không hợp lệ loại audio cho từng phím",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story:
      "[Web][UI] Nghe thử lời thoại không hợp lệ cho từng phím loại văn bản",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Nghe thử lời thoại không hợp lệ cho từng phím loại audio",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Số lần lặp lại cho từng phím",
    Status: "Done",
    LamNDH: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LamNDH",
    Story: "[Web][UI] Ghép giao diện lời thoại không hợp lệ vào chiến dịch",
    Status: "Done",
    LamNDH: "3,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIC-920 ",
    "Issue Type": "Story",
    Assignee: "LamNDH",
    "Due Date": "2023-08-24",
    "User Story Title": "Tạo mới và chỉnh sửa kịch bản",
    Story:
      "Là PO, tôi muốn cải tiến màn hình tạo mới và chỉnh sửa kịch bản, để cải thiện trải nghiệm người dùng",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "1",
    "Sprint Priority": "1",
    HuongTTT: "6,0",
    PhuongNT: "3,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story: "[Web][Integrate] Tích hợp API lấy thông tin kịch bản",
    HuongTTT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story: "[Web][Integrate] Tích hợp API chỉnh sửa kịch bản",
    HuongTTT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuongTTT",
    Story: "[Web][Integrate] Tích hợp API tạo mới kịch bản ",
    HuongTTT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "3,0",
  },
  {
    "Jira ID": "AIV-1787",
    "Issue Type": "Story",
    Assignee: "ThanhNX",
    "Due Date": "2023-08-23",
    "User Story Title": "Cải tiến tính năng demo AIVoice",
    Story:
      "Là PO, tôi muốn cải tiến tính năng demo trong trang chủ của AIVoice, phản hồi dưới 3s, để cải thiện trải nghiệm khách hàng",
    "Product Type": "AIVoice",
    Status: "In Progress",
    Priority: "1",
    "Sprint Priority": "4",
    Note: "- Đã triển khai lên dev.vbee.vn giao diện phần tính năng demo, đang cần xử lý nốt phần responsive",
    HaiTD: "10,0",
    ThanhNX: "3,0",
    PhuongNT: "3,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[Web][UI] Xử lý audio, chỉ 1 audio phát tại một thời điểm",
    Status: "Done",
    Note: "Dev",
    HaiTD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[Web][UI] Hiệu ứng khi ấn vào 1 thẻ demo voice",
    Status: "Done",
    Note: "Dev",
    HaiTD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[Web][UI] Responsive ",
    Status: "Done",
    Note: "Git",
    HaiTD: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[Web][API] Tích hợp api sample voice",
    Status: "Done",
    Note: "Git",
    HaiTD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Upload audio sample lên S3",
    ThanhNX: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Viết script cập nhật thông tin sample cho voice",
    ThanhNX: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "3,0",
  },
  {
    "Jira ID": "AIC-911",
    "Issue Type": "Story",
    Assignee: "MinhPQ",
    "Due Date": "2023-08-25",
    "User Story Title": "Tắt bật hạ tầng AICall",
    Story:
      "Là PO, tôi muốn tắt bật hạ tầng AICall, để giảm chi phí hạ tầng vào các thời điểm khách hàng không chạy",
    "Product Type": "AICall",
    Status: "To Do",
    Priority: "1",
    "Sprint Priority": "3",
    MinhPQ: "7,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "Xây dựng cơ chế tắt bật hạ tầng SmartDialog",
    MinhPQ: "3,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "Triển khai tắt bật hạ tầng SmartDialog",
    MinhPQ: "4,0",
  },
  {
    "Jira ID": "AIV-1788",
    "Issue Type": "Story",
    Assignee: "ThanhNX",
    "Due Date": "2023-08-24",
    "User Story Title": "Đồng bộ đơn hàng AIVoice lên Google Sheet",
    Story:
      "Là Kế toán, tôi muốn bắn thông tin đơn hàng tự động lên Google Sheet, để Phòng hành chính kế toán dễ dàng nhập vào amis kế toán, xuất hoá đơn bằng cách import file vào amis kế toán ",
    "Product Type": "AIVoice",
    Status: "To Do",
    Priority: "3",
    "Sprint Priority": "5",
    ThanhNX: "7,0",
    PhuongNT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Thiết kế cơ chế bắn thông tin ",
    ThanhNX: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Kết nối với gg sheet",
    ThanhNX: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Bắn thông tin khi đơn hàng thành công",
    ThanhNX: "3,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIC-931",
    "Issue Type": "Story",
    Assignee: "DuyenTTT",
    "Due Date": "2023-08-22",
    "User Story Title": "Bắn đủ thông tin hạ tầng lên Metabase",
    Story:
      "Là PO, tôi muốn xem được thông tin hạ tầng đầy đủ trên Metabase, để kịp thời điều chỉnh khi có những vấn đề bất thường về hạ tầng",
    "Product Type": "Chung",
    Status: "In Progress",
    Priority: "2",
    "Sprint Priority": "5",
    Note: "- Đã deploy lên production.\n- Đã bắn lại thông tin sản lượng từ tháng 1 của các sản phẩm, xác nhận phần ASR và SmartDialog đã xong.\n- AICC đang chưa bắn thông tin của các môi trường FE, Sacombank và Mobifone\n- AIVoice bắn thông tin chưa đúng, cần kiểm tra lại",
    DuyenTTT: "2,0",
    HuanND: "4,0",
    MinhPQ: "5,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story: "[Chore] Kiểm tra dữ liệu đẩy lên ICS từ tháng 1-2023",
    DuyenTTT: "2,0",
  },
  {
    "Jira ID": "AIC-2200",
    "Issue Type": "Story",
    Assignee: "ThanhLD",
    "Due Date": "2023-08-25",
    "User Story Title": "Tích hợp bot SMD sang bot AI Call",
    Story:
      "Là Bot Manager, tôi muốn tích hợp Bot SmartDialog tích hợp với Bot AI Call, để khách hàng có thể chọn bot từ kịch bản",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "4",
    "Sprint Priority": "5",
    HuanND: "4,0",
    MinhPQ: "5,0",
    ThanhLD: "14,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhLD",
    Story: "[Chore] Thiết kế DB + thông tin Bot của AI Call",
    Status: "To Do",
    ThanhLD: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    "Due Date": "2023-08-24",
    Story: "API lấy danh sách bot đã active tối thiểu 1 version",
    MinhPQ: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    "Due Date": "2023-08-24",
    Story: "API thông tin chi tiết của 1 bot",
    MinhPQ: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhLD",
    Story:
      "[API] tạo bot của AI Call, convert từ bot SMD và thêm vào Workspace/Portal",
    ThanhLD: "6,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    "Due Date": "2023-08-24",
    Story:
      "Kích hoạt callback sang AICall khi có sự kiện active một version bot mới",
    MinhPQ: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhLD",
    Story: "API cập nhật bot khi SMD activate bot",
    ThanhLD: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuanND",
    Story: "Cung cấp CDN lưu trữ TTS nội dung cố định",
    HuanND: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhLD",
    Story:
      "TTS các nội dung cố định khi activate bot => chuyển sang story tuần sau, estimate = 8h",
  },
  {
    "Jira ID": "AIC-2202",
    "Issue Type": "Story",
    Assignee: "ThiemMV",
    "Due Date": "2023-08-25",
    "User Story Title": "Migrate kịch bản IVR sang thiết kế db mới",
    Story:
      "Là PO, tôi muốn migrate kịch bản IVR cũ sang thiết kế database mới, để để dùng chung với kịch bản tích hợp bot",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "4",
    "Sprint Priority": "3",
    ThiemMV: "34,0",
    PhuongNT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThiemMV",
    Story: "Tìm hiểu thiết kế database mới",
    Status: "In Progress",
    ThiemMV: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThiemMV",
    Story:
      "Refactor Script -> Scenario và bổ sung các trường dữ liệu (portal-api, template-controller)",
    Status: "To Do",
    ThiemMV: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThiemMV",
    Story: "Convert script cũ sang thiết kế mới",
    Status: "To Do",
    ThiemMV: "6,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThiemMV",
    Story: "Convert script mới sang thiết kế cũ",
    Status: "To Do",
    ThiemMV: "6,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThiemMV",
    Story: "Thống kê + tích hợp convert vào các API",
    Status: "To Do",
    ThiemMV: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThiemMV",
    Story: "Tích hợp Scenario với campaign",
    ThiemMV: "6,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThiemMV",
    Story: "Migrate model + dữ liệu cũ",
    Status: "To Do",
    ThiemMV: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIC-1902",
    "Issue Type": "Story",
    Assignee: "DuyenTTT",
    "Due Date": "2023-08-29",
    "User Story Title": "Báo cáo theo dõi chiến dịch",
    Story:
      "Là PO, tôi muốn xem báo cáo theo dõi chiến dịch, để quan sát và vận hành chiến dịch dễ dàng và nhanh chóng",
    "Product Type": "AICall",
    Status: "To Do",
    Priority: "4",
    "Sprint Priority": "3",
    DuyenTTT: "6,0",
    PhuongNT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story: "[Web][UI] Xây dựng khung báo cáo (Tiêu đề, Thanh điều hướng)",
    DuyenTTT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story:
      "[Web][UI] Tạo component biểu đồ tròn để hiển thị đúng như thiết kế  ",
    DuyenTTT: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIC-1903",
    "Issue Type": "Story",
    Assignee: "LoiPNB",
    "Due Date": "2023-08-24",
    "User Story Title": "Cấu hình chiến dịch",
    Story:
      "Là PO, tôi muốn cấu hình chiến dịch theo thiết kế mới, để các phần cấu hình rõ ràng",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "4",
    "Sprint Priority": "3",
    LoiPNB: "15,0",
    PhuongNT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    Story: "[Web][UI] Thời gian chạy chiến dịch",
    LoiPNB: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    Story: "[Web][UI] Nhóm đầu số",
    LoiPNB: "2,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    Story: "[Web][UI] Cấu hình số cuộc gọi tối đa và đồng thời",
    LoiPNB: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    Story: "[Web][UI] Cấu hình gọi lại tự động",
    LoiPNB: "3,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "LoiPNB",
    Story: "[Web][Integrate] Tích hợp luồng cấu hình chiến dịch",
    LoiPNB: "3,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "2,0",
  },
  {
    "Jira ID": "AIV-xyz",
    "Issue Type": "Story",
    Assignee: "ThanhNX",
    "Due Date": "2023-08-24",
    "User Story Title": "Thay đổi cơ chế xác thực từ AIVoice sang Payment Hub",
    Story:
      "Là PO, tôi muốn thay đổi cơ chế xác thực khi gọi sang Payment Hub, để không phải thực hiện reset token thủ công định kỳ",
    "Product Type": "AIVoice",
    Status: "To Do",
    Priority: "4",
    "Sprint Priority": "3",
    ThanhNX: "5,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Thiết kế cơ chế lấy token mới",
    ThanhNX: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Xây dựng cơ chế mới",
    ThanhNX: "3,0",
  },
  {
    "Jira ID": "AIC-xxx",
    "Issue Type": "Story",
    Assignee: "MinhPQ",
    "Due Date": "2023-08-23",
    "User Story Title": "Hoàn thiện vbee.ai",
    Story:
      "Là PO, tôi muốn hoàn thiện các tính năng vbee.ai, để internal review và triển khai lên production",
    "Product Type": "AICall",
    Status: "Done",
    Priority: "4",
    "Sprint Priority": "1",
    Note: "- Website dev.vbee.ai với các chức năng hoàn thiện\n- Có thể vào các trang phục vụ SEO như /products, /solutions ...\n- Nghe được các sample calls\n- Xem được video đầy đủ có âm thanh của AICall và SmartDialog",
    DuyenTTT: "6,0",
    MinhPQ: "7,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story: "[Web][UI] Tạo các tab ở trang gọi thử AICall",
    Status: "Done",
    DuyenTTT: "3,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "Xây dựng sitemap",
    Status: "Done",
    MinhPQ: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "[Web][UI] Trang products",
    Status: "Done",
    MinhPQ: "0,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "[Web][UI] Trang solutions",
    Status: "Done",
    MinhPQ: "0,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "[Web][UI] Trang resources",
    Status: "Done",
    Note: "- Thực hiện demo được cuộc gọi IVR, Callbot và Voice OTP",
    MinhPQ: "0,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "[Web][UI] Trang company",
    Status: "Done",
    MinhPQ: "0,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "Bổ sung content sample call",
    Status: "Done",
    MinhPQ: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "Tích hợp content demo IVR",
    Status: "Done",
    MinhPQ: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "MinhPQ",
    Story: "Tích hợp content demo Callbot",
    Status: "Done",
    MinhPQ: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story: "[Web][UI] Zoom video ở trang AICall và SmartDialog",
    Status: "Done",
    DuyenTTT: "3,0",
  },
  {
    "Jira ID": "AIC-x01",
    "Issue Type": "Story",
    Assignee: "TaiVD",
    "Due Date": "2023-08-25",
    "User Story Title": "Lưu lại kịch bản trong chiến dịch để dùng lại",
    Story:
      "Là người dùng, tôi muốn lưu kịch bản trong khi tạo chiến dịch, để tái sử dụng kịch bản này cho các chiến dịch khác",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "4",
    "Sprint Priority": "3",
    PhuongNT: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story: "[Web][UI] Giao diện checkbox  lưu kịch  bản",
    TaiVD: "0,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "TaiVD",
    Story: "[Web][UI] Tích hợp API  lưu kịch  bản",
    TaiVD: "3,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "1,0",
  },
  {
    "Jira ID": "AIC-x02",
    "Issue Type": "Story",
    Assignee: "HaiTD",
    "Due Date": "2023-08-24",
    "User Story Title": "Tag trong kịch bản",
    Story:
      "Là người dùng, tôi muốn có chức năng tìm kiếm kịch bản theo tag đã gắn, để tìm kịch bản nhanh chóng",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "4",
    "Sprint Priority": "3",
    HaiTD: "8,0",
    PhuongNT: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "Thêm tính năng tìm kiếm theo tag vào api tìm kiếm kịch bản",
    Status: "In Progress",
    HaiTD: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "Thêm tính năng tìm kiếm theo tag vào giao diện tìm kiếm kịch bản",
    Status: "Done",
    Note: "Dev",
    HaiTD: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "1,0",
  },
  {
    "Jira ID": "AIC-x03",
    "Issue Type": "Story",
    Assignee: "HaiTD",
    "Due Date": "2023-08-25",
    "User Story Title": "Thông tin kịch bản",
    Story:
      "Là PO, tôi muốn cải tiến giao diện thông tin kịch bản, để cải thiện trải nghiệm người dùng",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "4",
    "Sprint Priority": "3",
    HaiTD: "16,0",
    PhuongNT: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[UI] Giới hạn độ dài tên kịch bản",
    Status: "Done",
    Note: "Dev",
    HaiTD: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[API] Giới hạn độ dài tên kịch bản",
    Status: "In Progress",
    Note: "PR",
    HaiTD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[UI] Giới hạn độ dài mô tả kịch bản",
    Status: "Done",
    Note: "Dev",
    HaiTD: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[API] Giới hạn độ dài mô tả kịch bản",
    Status: "In Progress",
    Note: "PR",
    HaiTD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[UI] Giới hạn độ dài các tag",
    Status: "Done",
    Note: "Dev",
    HaiTD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "[API] Giới hạn độ dài các tag",
    Status: "In Progress",
    Note: "PR",
    HaiTD: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "Sửa lại giao diện input tên, mô tả, tag theo thiết kế",
    Note: "Không cần phải sửa giao diện tìm kiếm theo tag nữa nên sẽ đủ thời gian làm",
    HaiTD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HaiTD",
    Story: "Sửa lại giao diện upload ảnh theo thiết kế",
    Note: "Không cần phải sửa giao diện tìm kiếm theo tag nữa nên sẽ đủ thời gian làm",
    HaiTD: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "1,0",
  },
  {
    "Jira ID": "AIV-x05",
    "Issue Type": "Story",
    Assignee: "ThanhNX",
    "Due Date": "2023-08-22",
    "User Story Title": "Chặn mua gói miễn phí",
    Story:
      "Là PO, tôi muốn người dùng không thể tự mua gói miễn phí, để chặn người dùng có thể dùng vô hạn số ký tự trong ngày",
    "Product Type": "AIVoice",
    Status: "Done",
    Priority: "4",
    "Sprint Priority": "2",
    Note: "- Đã chặn mua gói miễn phí, người dùng không thể thực hiện tự kích hoạt gói miễn phí nhiều lần trong ngày. Khi người dùng vào trang https://studio.vbee.vn/studio/payments?package=STUDIO-BASIC thì sẽ bị điều hướng về trang danh sách gói cước.\n- Đã triển khai lên production.",
    ThanhNX: "6,0",
    PhuongNT: "1,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Chặn mua gói miễn phí ở giao diện",
    Status: "Done",
    ThanhNX: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Chặn ở backend",
    Status: "Done",
    ThanhNX: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "PhuongNT",
    Story: "Test",
    PhuongNT: "1,0",
  },
  {
    "Jira ID": "AIV-x06",
    "Issue Type": "Story",
    Assignee: "ThanhNX",
    "Due Date": "2023-08-24",
    "User Story Title": "Sửa lỗi thay thế khi chuyển văn bản theo câu",
    Story:
      "Là người dùng, tôi muốn chức năng tìm kiếm và thay thế hoạt động ở trang chuyển văn bản theo câu, để có thể thay thế đồng thời nhiều từ",
    "Product Type": "AIVoice",
    Status: "To Do",
    Priority: "4",
    "Sprint Priority": "4",
    ThanhNX: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Sửa lỗi tìm kiếm thay thế bị trắng trang khi chuyển đổi theo câu",
    ThanhNX: "2,0",
  },
  {
    "Jira ID": "AIV-x07",
    "Issue Type": "Story",
    Assignee: "ThanhNX",
    "Due Date": "2023-08-23",
    "User Story Title": "Sửa lỗi thêm ký tự cho người dùng Studio",
    Story:
      "Là BO, tôi muốn sửa tính năng thêm ký tự cho dạng Studio, để thêm ký tự cho người dùng Studio",
    "Product Type": "AIVoice",
    Status: "Done",
    Priority: "4",
    "Sprint Priority": "3",
    ThanhNX: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "ThanhNX",
    Story: "Sửa lỗi admin không thêm được ký tự cho người dùng Studio",
    ThanhNX: "2,0",
  },
  {
    "Jira ID": "AIC-2203",
    "Issue Type": "Story",
    Assignee: "HuanND",
    "Due Date": "2023-08-24",
    "User Story Title": "Thiết kế luồng gọi theo thiết kế mới",
    Story:
      "Là Team Lead, tôi muốn thiết kế luồng gọi theo thiêt kế mới, để chuẩn bị implement luồng gọi cho AI Call",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "3",
    "Sprint Priority": "5",
    HuanND: "12,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuanND",
    Story: "Xác định cấu trúc cây kịch bản trên tổng đài",
    HuanND: "4,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "HuanND",
    Story: "Implement gọi ra theo cây kịch bản trên tổng đài",
    HuanND: "8,0",
  },
  {
    "Jira ID": "AIC-1901",
    "Issue Type": "Story",
    Assignee: "DuyenTTT",
    "Due Date": "2023-08-24",
    "User Story Title": "Tổng kết chiến dịch",
    Story:
      "Là người dùng, tôi muốn xem tổng kết chiến dịch, để kiểm tra lại trước khi tạo chiến dịch",
    "Product Type": "AICall",
    Status: "In Progress",
    Priority: "4",
    "Sprint Priority": "3",
    DuyenTTT: "14,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story:
      "[Web][UI] Xây dựng khung Tổng kết (Tiêu đề, UI nút Gọi thử nghiệm, khung Lời thoại chính, UI 2 nút Hoàn thành và Chạy chiến dịch)",
    DuyenTTT: "5,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story: "[Web][UI] Xây dựng thông tin Giọng đọc",
    DuyenTTT: "1,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story: "[Web][UI] Xây dựng thông tin Lời thoại khi nhấc máy",
    DuyenTTT: "1,5",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story:
      "[Web][UI] Xây dựng cụm thông tin Cấu hình, Lịch trình, Tổng số khách hàng chưa gọi",
    DuyenTTT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story: "[Web][UI] Xử lý sự kiện nút Hoàn thành, Chạy chiến dịch",
    DuyenTTT: "2,0",
  },
  {
    "Issue Type": "Sub-task",
    Assignee: "DuyenTTT",
    Story: "[Web][UI] Xử lý sự kiện nút Gọi thử nghiệm",
    DuyenTTT: "2,0",
  },
];

const result = arr.reduce((acc, curr) => {
  const existingEntry = acc.find((item) => item.Assignee === curr.Assignee);
  const entryToAdd = { ...curr };
  //   delete entryToAdd.Assignee;

  if (existingEntry) {
    existingEntry.task.push(entryToAdd);
  } else {
    acc.push({
      Assignee: curr.Assignee,
      task: [entryToAdd],
    });
  }
  return acc;
}, []);

console.log(result[0]);
