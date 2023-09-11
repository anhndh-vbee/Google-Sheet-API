const data = [
  [
    {
      "Jira ID": "SCRUM-900",
      "User Story Title": "Browse kịch bản theo trạng thái",
      Story:
        "Là PO, tôi muốn update lại màn danh sách kịch bản browse theo trạng thái, để dễ dàng hơn cho user trong việc xem hoặc tìm kiếm kịch bản trong phạm vi các trạng thái",
      Who: "PO",
      What: "update lại màn danh sách kịch bản browse theo trạng thái",
      Why: "dễ dàng hơn cho user trong việc xem hoặc tìm kiếm kịch bản trong phạm vi các trạng thái",
      "Acceptance Criteria":
        "- Các trạng thái browse trên màn hình là: all, đang làm, hoàn thành, đã duyệt, không được duyệt (các trạng thái này là các trạng thái sẵn có của kịch bản)\n" +
        "- Màn hình của kịch bản giống như thiết kế và đặc tả\n" +
        "- Refactor mã nguồn trong quá trình làm\n" +
        "- Các trạng thái được quản lý theo đúng luồng được đặc tả trong https://drive.google.com/file/d/1MIqsRo0nWL9nx6aOQuHS-lx9oijbEMWS/view?usp=drive_link",
      "Product Type": "AICall",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "2",
    },
    {
      "User Story Title": "Browse kịch bản theo thư mục",
      Story:
        "Là PO, tôi muốn update lại màn danh sách kịch bản browse theo thư mục, để dễ dàng hơn cho user trong việc xem hoặc tìm kiếm kịch bản trong phạm vi thư mục",
      Who: "PO",
      What: "update lại màn danh sách kịch bản browse theo thư mục",
      Why: "dễ dàng hơn cho user trong việc xem hoặc tìm kiếm kịch bản trong phạm vi thư mục",
      "Acceptance Criteria":
        "- Browse theo thư mục. Một kịch bản sẽ nằm trong 1 thư mục. Do đó, user có thể browse kịch bản theo thư mục nhằm xem được danh sách các kịch bản trong 1 thư mục đã chọn.\n" +
        "- Màn hình của kịch bản giống như thiết kế và đặc tả\n" +
        "- Refactor mã nguồn trong quá trình làm",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "To Do",
      Priority: "5",
      "Jira ID": "SCRUM-903",
    },
    {
      "Jira ID": "SCRUM-907",
      "User Story Title": "Điều chỉnh giọng đọc",
      Story:
        "Là PO, tôi muốn cải tiến phần điều chỉnh giọng đọc trong màn hình setup kịch bản khi chỉnh sửa chiến dịch, để cải thiện trải nghiệm người dùng",
      Who: "PO",
      What: "cải tiến phần điều chỉnh giọng đọc trong màn hình setup kịch bản khi chỉnh sửa chiến dịch",
      Why: "cải thiện trải nghiệm người dùng",
      "Acceptance Criteria":
        "- Màn hình của kịch bản giống như thiết kế và đặc tả\n" +
        "- Refactor mã nguồn trong quá trình làm\n" +
        "- Không cần thay đổi các phần phía ngoài bao gồm menu, thanh breadcrumb",
      "Product Type": "AICall",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-911",
      "User Story Title": "Lời thoại và cá nhân hoá",
      Story:
        "Là PO, tôi muốn cải tiến phần lời thoại và trường cá nhân hoá trong màn hình setup kịch bản khi chỉnh sửa chiến dịch, để cải thiện trải nghiệm người dùng",
      Who: "PO",
      What: "cải tiến phần lời thoại và trường cá nhân hoá trong màn hình setup kịch bản khi chỉnh sửa chiến dịch",
      Why: "cải thiện trải nghiệm người dùng",
      "Acceptance Criteria":
        "- Màn hình của kịch bản giống như thiết kế và đặc tả\n" +
        "- Refactor mã nguồn trong quá trình làm\n" +
        "- Không cần thay đổi các phần phía ngoài bao gồm menu, thanh breadcrumb",
      "Product Type": "AICall",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-914",
      "User Story Title": "Phím bấm",
      Story:
        "Là PO, tôi muốn cải tiến phần cây phím bấm trong màn hình setup kịch bản khi chỉnh sửa chiến dịch, để cải thiện trải nghiệm người dùng",
      Who: "PO",
      What: "cải tiến phần cây phím bấm trong màn hình setup kịch bản khi chỉnh sửa chiến dịch",
      Why: "cải thiện trải nghiệm người dùng",
      "Acceptance Criteria":
        "- Màn hình của kịch bản giống như thiết kế và đặc tả\n" +
        "- Refactor mã nguồn trong quá trình làm\n" +
        "- Không cần thay đổi các phần phía ngoài bao gồm menu, thanh breadcrumb",
      "Product Type": "AICall",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-918",
      "User Story Title": "Cấu hình khi có tương tác phím bấm",
      Story:
        "Là PO, tôi muốn cải tiến phần cấu hình khi có tương tác phím bấm trong màn hình setup kịch bản khi chỉnh sửa chiến dịch, để cải thiện trải nghiệm người dùng",
      Who: "PO",
      What: "cải tiến phần cấu hình khi có tương tác phím bấm trong màn hình setup kịch bản khi chỉnh sửa chiến dịch",
      Why: "cải thiện trải nghiệm người dùng",
      "Acceptance Criteria":
        "- Màn hình của kịch bản giống như thiết kế và đặc tả\n" +
        "- Refactor mã nguồn trong quá trình làm\n" +
        "- Không cần thay đổi các phần phía ngoài bao gồm menu, thanh breadcrumb",
      "Product Type": "AICall",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-922",
      "User Story Title": "Phản hồi nâng cao",
      Story:
        "Là PO, tôi muốn cải tiến việc thiết lập phản hồi nâng cao khi setup kịch bản trong quá trình tạo mới chiến dịch, để cải thiện trải nghiệm người dùng",
      Who: "PO",
      What: "cải tiến việc thiết lập phản hồi nâng cao khi setup kịch bản trong quá trình tạo mới chiến dịch",
      Why: "cải thiện trải nghiệm người dùng",
      "Acceptance Criteria":
        "- Màn hình của kịch bản giống như thiết kế và đặc tả\n" +
        "- Refactor mã nguồn trong quá trình làm\n" +
        "- Không cần thay đổi các phần phía ngoài bao gồm menu, thanh breadcrumb",
      "Product Type": "AICall",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-925",
      "User Story Title": "Tạo mới và chỉnh sửa kịch bản",
      Story:
        "Là PO, tôi muốn cải tiến màn hình tạo mới và chỉnh sửa kịch bản, để cải thiện trải nghiệm người dùng",
      Who: "PO",
      What: "cải tiến màn hình tạo mới và chỉnh sửa kịch bản",
      Why: "cải thiện trải nghiệm người dùng",
      "Acceptance Criteria":
        "- Màn hình của kịch bản giống như thiết kế và đặc tả\n" +
        "- Refactor mã nguồn trong quá trình làm\n" +
        "- Không cần thay đổi các phần phía ngoài bao gồm menu, thanh breadcrumb",
      "Product Type": "AICall",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "User Story Title": "Xem danh sách chiến dịch",
      Story:
        "Là PO, tôi muốn cải tiến màn hình xem danh sách chiến dịch, bổ sung thêm các thông tin vận hành cơ bản cần thiết, để dễ dàng quan sát các thông tin vận hành mà không cần vào xem chi tiết",
      Who: "PO",
      What: "cải tiến màn hình xem danh sách chiến dịch, bổ sung thêm các thông tin vận hành cơ bản cần thiết",
      Why: "dễ dàng quan sát các thông tin vận hành mà không cần vào xem chi tiết",
      "Acceptance Criteria": "- Refactor mã nguồn trong quá trình làm",
      "Product Type": "AICall",
      Sprint: "#4",
      Status: "To Do",
      Priority: "4",
      "Jira ID": "SCRUM-927",
    },
    {
      "Jira ID": "SCRUM-929",
      "User Story Title": "Tìm lỗi đăng nhập",
      Story:
        "Là PO, tôi muốn tìm triệt để các lỗi liên quan đến việc đăng nhập vào các sản phẩm của Vbee, để tìm ra mọi vấn đề nhằm tìm cách khắc phục triệt để lỗi khi đăng nhập",
      Who: "PO",
      What: "tìm triệt để các lỗi liên quan đến việc đăng nhập vào các sản phẩm của Vbee",
      Why: "tìm ra mọi vấn đề nhằm tìm cách khắc phục triệt để lỗi khi đăng nhập",
      "Product Type": "Chung",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-931",
      "User Story Title": "Tìm lỗi đăng ký",
      Story:
        "Là PO, tôi muốn tìm triệt để các lỗi liên quan đến việc đăng ký trở thành người dùng của các sản phẩm Vbee, để tìm ra mọi vấn đề nhằm tìm cách khắc phục triệt để lỗi khi đăng ký",
      Who: "PO",
      What: "tìm triệt để các lỗi liên quan đến việc đăng ký trở thành người dùng của các sản phẩm Vbee",
      Why: "tìm ra mọi vấn đề nhằm tìm cách khắc phục triệt để lỗi khi đăng ký",
      "Product Type": "Chung",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-933",
      "User Story Title": "Duyệt kịch bản AICall trên Slack",
      Story:
        "Là BO, tôi muốn duyệt kịch bản trên Slack, để người dùng có thể sử dụng được kịch bản để chạy cho chiến dịch",
      Who: "BO",
      What: "duyệt kịch bản trên Slack",
      Why: "người dùng có thể sử dụng được kịch bản để chạy cho chiến dịch",
      "Product Type": "AICall",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "1",
    },
    {
      "User Story Title": "Test",
      Story:
        "Là BO, tôi muốn phê duyệt các chiến dịch chạy ngoài giờ được phép chạy (7:00-21:00), để đảm bảo đúng quy định của pháp luật",
      Who: "BO",
      What: "phê duyệt các chiến dịch chạy ngoài giờ được phép chạy (7:00-21:00)",
      Why: "đảm bảo đúng quy định của pháp luật",
      "Product Type": "AICall",
      Sprint: "#4",
      Status: "To Do",
      Priority: "3",
      "Jira ID": "SCRUM-935",
    },
    {
      "Jira ID": "SCRUM-938",
      "User Story Title": "Phê duyệt yêu cầu thanh toán Affiliate",
      Story:
        "Là BO, tôi muốn cập nhật yêu cầu thanh toán của khách hàng cho Affiliate, để thanh toán cho khách hàng đúng tiến độ",
      Who: "BO",
      What: "cập nhật yêu cầu thanh toán của khách hàng cho Affiliate",
      Why: "thanh toán cho khách hàng đúng tiến độ",
      "Product Type": "AIVoice",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-939",
      "User Story Title": "Xem danh sách khách hàng của Affiliate Marketer",
      Story:
        "Là BO, tôi muốn xem danh sách khách hàng giới thiệu bởi Affiliate, để quản lý các Affiliate",
      Who: "BO",
      What: "xem danh sách khách hàng giới thiệu bởi Affiliate",
      Why: "quản lý các Affiliate",
      "Product Type": "AIVoice",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-941",
      "User Story Title": "Cải tiến tính năng demo AIVoice",
      Story:
        "Là PO, tôi muốn cải tiến tính năng demo trong trang chủ của AIVoice, phản hồi dưới 3s, để cải thiện trải nghiệm khách hàng",
      Who: "PO",
      What: "cải tiến tính năng demo trong trang chủ của AIVoice, phản hồi dưới 3s",
      Why: "cải thiện trải nghiệm khách hàng",
      "Product Type": "AIVoice",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-943",
      "User Story Title": "Feature flag cho AICall",
      Story:
        "Là PO, tôi muốn thiết lập feature flag cho AICall, để tắt các tính năng chưa hoàn thành",
      Who: "PO",
      What: "thiết lập feature flag cho AICall",
      Why: "tắt các tính năng chưa hoàn thành",
      "Product Type": "AICall",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-946",
      "User Story Title": "Sửa lỗi đăng nhập cùng mail bằng nhiều phương thức",
      Story:
        "Là PO, tôi muốn sửa lỗi đăng nhập khi thay đổi cách đăng nhập/đăng ký, để cải thiện trải nghiệm khách hàng",
      Who: "PO",
      What: "sửa lỗi đăng nhập khi thay đổi cách đăng nhập/đăng ký",
      Why: "cải thiện trải nghiệm khách hàng",
      "Acceptance Criteria":
        "VD: Sau khi đã chọn một phương thức đăng nhập/đăng ký, sau đó đổi sang một phương thức đăng nhập/đăng ký khác thì bị lỗi",
      "Product Type": "Chung",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-948",
      "User Story Title": "Sửa lỗi đăng nhập trả về trạng thái 500",
      Story:
        "Là PO, tôi muốn sửa lỗi đăng nhập khi backend trả về trạng thái 500 Internal Server Error, để cải thiện trải nghiệm khách hàng",
      Who: "PO",
      What: "sửa lỗi đăng nhập khi backend trả về trạng thái 500 Internal Server Error",
      Why: "cải thiện trải nghiệm khách hàng",
      "Acceptance Criteria":
        "VD: đăng nhập bằng tài khoản @vbee của anh Đức sử dụng Gmail",
      "Product Type": "Chung",
      Sprint: "#4",
      Status: "Signed Off",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-950",
      "User Story Title": "Chặn sử dụng 1 email tạo nhiều tài khoản",
      Story:
        "Là PO, tôi muốn không cho user sử dụng 1 email mà đăng ký được nhiều lần, để giảm tỉ lệ spam dùng miễn phí sản phẩm",
      Who: "PO",
      What: "không cho user sử dụng 1 email mà đăng ký được nhiều lần",
      Why: "giảm tỉ lệ spam dùng miễn phí sản phẩm",
      "Acceptance Criteria":
        "VD: user đăng ký một tài khoản mới với cùng một email cũ chỉ khác dấu chấm",
      "Product Type": "Chung",
      Sprint: "#4",
      Status: "To Do",
      Priority: "2",
    },
    {
      "Jira ID": "SCRUM-953",
      "User Story Title": "Tích hợp JetPay",
      Story:
        "Là BO, tôi muốn tích hợp JetPay cho cổng thanh toán, để tự động hoá quá trình thanh toán",
      Who: "BO",
      What: "tích hợp JetPay cho cổng thanh toán",
      Why: "tự động hoá quá trình thanh toán",
      "Product Type": "Chung",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "2",
    },
    {
      "Jira ID": "SCRUM-955",
      "User Story Title": "Tắt bật hạ tầng AICall",
      Story:
        "Là PO, tôi muốn tắt bật hạ tầng AICall, để giảm chi phí hạ tầng vào các thời điểm khách hàng không chạy",
      Who: "PO",
      What: "tắt bật hạ tầng AICall",
      Why: "giảm chi phí hạ tầng vào các thời điểm khách hàng không chạy",
      "Acceptance Criteria": "21:00 tối hôm trước đến 7:00 sáng hôm sau",
      "Product Type": "AICall",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-957",
      "User Story Title": "Bắn đủ thông tin hạ tầng lên Metabase",
      Story:
        "Là PO, tôi muốn xem được thông tin hạ tầng đầy đủ trên Metabase, để kịp thời điều chỉnh khi có những vấn đề bất thường về hạ tầng",
      Who: "PO",
      What: "xem được thông tin hạ tầng đầy đủ trên Metabase",
      Why: "kịp thời điều chỉnh khi có những vấn đề bất thường về hạ tầng",
      "Acceptance Criteria":
        "- Nhìn được đơn giá hạ tầng của tất cả các sản phẩm theo thành phần, theo sản lượng hàng ngày, hàng tuần, hàng tháng từ tháng 1/2023-nay",
      "Product Type": "Chung",
      Sprint: "#4\n#5",
      Status: "To Do",
      Priority: "2",
    },
    {
      "Jira ID": "SCRUM-958",
      "User Story Title": "Hoàn thiện vbee.ai",
      Story:
        "Là PO, tôi muốn hoàn thiện các tính năng vbee.ai, để internal review và triển khai lên production",
      Who: "PO",
      What: "hoàn thiện các tính năng vbee.ai",
      Why: "internal review và triển khai lên production",
      "Product Type": "AICall",
      Sprint: "#4",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-959",
      "User Story Title": "Triển khai vbee.ai",
      Story:
        "Là PO, tôi muốn triển khai vbee.ai, để công ty triển khai các bước tiếp theo",
      Who: "PO",
      What: "triển khai vbee.ai",
      Why: "công ty triển khai các bước tiếp theo",
      "Product Type": "AICall",
      Sprint: "#4",
      Status: "To Do",
      Priority: "1",
    },
  ],
  [
    {
      "User Story Title": "Test1",
      Story:
        "Là BO, tôi muốn sửa lỗi chuyển văn bản khi ghép cả file, để tăng trải nghiệm của người dùng",
      Who: "BO",
      What: "sửa lỗi chuyển văn bản khi ghép cả file",
      Why: "tăng trải nghiệm của người dùng",
      "Acceptance Criteria":
        "BO báo thành công các đoạn nhưng ghép cả file thì thất bại",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "To Do",
      Priority: "3",
      "Jira ID": "SCRUM-899",
    },
    {
      "User Story Title": "Test2",
      Story:
        "Là PO, tôi muốn sửa lỗi bị mất hoặc lẫn phần cuối của đoạn văn bản, để tăng trải nghiệm của người dùng",
      Who: "PO",
      What: "sửa lỗi bị mất hoặc lẫn phần cuối của đoạn văn bản",
      Why: "tăng trải nghiệm của người dùng",
      "Acceptance Criteria":
        "Do bộ mã, VD: tiếng Việt trên Mac, khi không gõ đấu cách thì có thể không mất đấu gạch dưới dẫn đến không nhận từ cuối, hoặc bị lẫn từ cuối của lần chuyển văn bản trước đó",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "To Do",
      Priority: "3",
      "Jira ID": "SCRUM-902",
    },
    {
      "Jira ID": "SCRUM-906",
      "User Story Title": "Đồng bộ kịch bản AICall cũ lên mới",
      Story:
        "Là PO, tôi muốn đồng bộ kịch bản cũ lên kịch bản mới, để khách hàng sử dụng kịch bản cũ vẫn có thể gọi ra bình thường",
      Who: "PO",
      What: "đồng bộ kịch bản cũ lên kịch bản mới",
      Why: "khách hàng sử dụng kịch bản cũ vẫn có thể gọi ra bình thường",
      "Acceptance Criteria":
        "- Toàn bộ kịch bản cũ hoạt động bình thường\n" +
        "- Toàn bộ chiến dịch sử dụng kịch bản cũ hoạt động bình thường",
      "Product Type": "AICall",
      Sprint: "#4",
      Status: "To Do",
      Priority: "3",
    },
    {
      "Jira ID": "SCRUM-909",
      "User Story Title": "Đồng bộ đơn hàng AIVoice lên Google Sheet",
      Story:
        "Là Kế toán, tôi muốn bắn thông tin đơn hàng tự động lên Google Sheet, để Phòng hành chính kế toán dễ dàng nhập vào amis kế toán, xuất hoá đơn bằng cách import file vào amis kế toán ",
      Who: "Kế toán",
      What: "bắn thông tin đơn hàng tự động lên Google Sheet",
      Why: "Phòng hành chính kế toán dễ dàng nhập vào amis kế toán, xuất hoá đơn bằng cách import file vào amis kế toán ",
      "Acceptance Criteria":
        "Bắn thông tin các đơn hàng thành công lên gg sheet",
      "Product Type": "AIVoice",
      Sprint: "#4",
      Status: "To Do",
      Priority: "3",
    },
    {
      "Jira ID": "SCRUM-913",
      "User Story Title": "Nâng cao tải Call Center Core",
      Story:
        "Là Team Lead, tôi muốn tối ưu chiến thuật gọi, để nâng cao tải của hệ thống",
      Who: "Team Lead",
      What: "tối ưu chiến thuật gọi",
      Why: "nâng cao tải của hệ thống",
      "Acceptance Criteria":
        "- Gọi ra trên tổng đài đạt ngưỡng 1500 CCR\n- Báo cáo tải",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-916",
      "User Story Title": "Chạy chiến dịch theo luồng kịch bản mới",
      Story:
        "Là PO, tôi muốn chạy chiến dịch thành công, để KH chạy chiến dịch được khi áp dụng KB mới",
      Who: "PO",
      What: "chạy chiến dịch thành công",
      Why: "KH chạy chiến dịch được khi áp dụng KB mới",
      "Acceptance Criteria": "- Gọi ra thành công theo đúng kịch bản",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-920",
      "User Story Title": "Lưu lại kịch bản trong chiến dịch để dùng lại",
      Story:
        "Là người dùng, tôi muốn lưu kịch bản trong khi tạo chiến dịch, để tái sử dụng kịch bản này cho các chiến dịch khác",
      Who: "người dùng",
      What: "lưu kịch bản trong khi tạo chiến dịch",
      Why: "tái sử dụng kịch bản này cho các chiến dịch khác",
      "Acceptance Criteria":
        "- Kịch bản được lưu vào phần kịch bản (của tôi) nếu trường đó được check\n" +
        '- Nếu checkbox "Lưu kịch bản" được check thì sau khi user nhấn nút "Lưu và tiếp tục" thì hệ thống sẽ show pop-up yc điền thông tin kịch bản',
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-923",
      "User Story Title": "Tag trong kịch bản",
      Story:
        "Là người dùng, tôi muốn có chức năng tìm kiếm kịch bản theo tag đã gắn, để tìm kịch bản nhanh chóng",
      Who: "người dùng",
      What: "có chức năng tìm kiếm kịch bản theo tag đã gắn",
      Why: "tìm kịch bản nhanh chóng",
      "Acceptance Criteria":
        "- Tối đa 5 tag, mỗi tag tối đa 50 kí tự\n" +
        "- Tìm được kịch bản theo tag đã gắn",
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-926",
      "User Story Title": "Hiển thị và tìm kiếm danh sách chiến dịch",
      Story:
        "Là người dùng, tôi muốn xem danh sách chiến dịch, để tìm kiếm và theo dõi chiến dịch",
      Who: "người dùng",
      What: "xem danh sách chiến dịch",
      Why: "tìm kiếm và theo dõi chiến dịch",
      "Acceptance Criteria":
        "- Tìm kiếm theo trạng thái, tên, id chiến dịch, ngày tạo\n" +
        "- Xem được các chỉ số của chiến dịch khi",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-928",
      "User Story Title": "Tổng kết chiến dịch",
      Story:
        "Là người dùng, tôi muốn xem tổng kết chiến dịch, để kiểm tra lại trước khi tạo chiến dịch",
      Who: "người dùng",
      What: "xem tổng kết chiến dịch",
      Why: "kiểm tra lại trước khi tạo chiến dịch",
      "Acceptance Criteria":
        "- Màn hình xem báo cáo giống với thiết kế và đặc tả\n" +
        "- Thông tin chiến dịch chính xác",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-930",
      "User Story Title": "Báo cáo theo dõi chiến dịch",
      Story:
        "Là PO, tôi muốn xem báo cáo theo dõi chiến dịch, để quan sát và vận hành chiến dịch dễ dàng và nhanh chóng",
      Who: "PO",
      What: "xem báo cáo theo dõi chiến dịch",
      Why: "quan sát và vận hành chiến dịch dễ dàng và nhanh chóng",
      "Acceptance Criteria":
        "- Màn hình xem báo cáo giống với thiết kế và đặc tả\n" +
        "- Số liệu thống kê chính xác",
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-932",
      "User Story Title": "Cấu hình chiến dịch",
      Story:
        "Là PO, tôi muốn cấu hình chiến dịch theo thiết kế mới, để các phần cấu hình rõ ràng",
      Who: "PO",
      What: "cấu hình chiến dịch theo thiết kế mới",
      Why: "các phần cấu hình rõ ràng",
      "Acceptance Criteria":
        "- Giao diện cấu hình chiến dịch tuân theo thiết kế mới.\n" +
        "- Các chức năng khi cấu hình vẫn phải hoạt động bình thường",
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-934",
      "User Story Title": "Tích hợp bot SMD sang bot AI Call",
      Story:
        "Là Bot Manager, tôi muốn tích hợp Bot SmartDialog tích hợp với Bot AI Call, để khách hàng có thể chọn bot từ kịch bản",
      Who: "Bot Manager",
      What: "tích hợp Bot SmartDialog tích hợp với Bot AI Call",
      Why: "khách hàng có thể chọn bot từ kịch bản",
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-936",
      "User Story Title": "Gọi ra thành công với kịch bản bot",
      Story:
        "Là KH, tôi muốn gọi ra được từ kịch bản tích hợp Bot, để khách hàng trải nghiệm cuộc gọi tương tác bằng giọng nói",
      Who: "KH",
      What: "gọi ra được từ kịch bản tích hợp Bot",
      Why: "khách hàng trải nghiệm cuộc gọi tương tác bằng giọng nói",
      "Acceptance Criteria":
        "- Gọi ra thành công\n" +
        "- Bot phản hồi dưới 2s\n" +
        "- Kịch bản bot hoạt động đúng",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-937",
      "User Story Title": "Migrate kịch bản IVR sang thiết kế db mới",
      Story:
        "Là PO, tôi muốn migrate kịch bản IVR cũ sang thiết kế database mới, để để dùng chung với kịch bản tích hợp bot",
      Who: "PO",
      What: "migrate kịch bản IVR cũ sang thiết kế database mới",
      Why: "để dùng chung với kịch bản tích hợp bot",
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-940",
      "User Story Title": "Hoàn thiện vbee.ai",
      Story:
        "Là PO, tôi muốn hoàn thiện các tính năng vbee.ai, để internal review và triển khai lên production",
      Who: "PO",
      What: "hoàn thiện các tính năng vbee.ai",
      Why: "internal review và triển khai lên production",
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-942",
      "User Story Title":
        "Thay đổi cơ chế xác thực từ AIVoice sang Payment Hub",
      Story:
        "Là PO, tôi muốn thay đổi cơ chế xác thực khi gọi sang Payment Hub, để không phải thực hiện reset token thủ công định kỳ",
      Who: "PO",
      What: "thay đổi cơ chế xác thực khi gọi sang Payment Hub",
      Why: "không phải thực hiện reset token thủ công định kỳ",
      "Product Type": "AIVoice",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-944",
      "User Story Title": "Thông tin kịch bản",
      Story:
        "Là PO, tôi muốn cải tiến giao diện thông tin kịch bản, để cải thiện trải nghiệm người dùng",
      Who: "PO",
      What: "cải tiến giao diện thông tin kịch bản",
      Why: "cải thiện trải nghiệm người dùng",
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-945",
      "User Story Title": "Chặn mua gói miễn phí",
      Story:
        "Là PO, tôi muốn người dùng không thể tự mua gói miễn phí, để chặn người dùng có thể dùng vô hạn số ký tự trong ngày",
      Who: "PO",
      What: "người dùng không thể tự mua gói miễn phí",
      Why: "chặn người dùng có thể dùng vô hạn số ký tự trong ngày",
      "Product Type": "AIVoice",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-947",
      "User Story Title": "Sửa lỗi thay thế khi chuyển văn bản theo câu",
      Story:
        "Là người dùng, tôi muốn chức năng tìm kiếm và thay thế hoạt động ở trang chuyển văn bản theo câu, để có thể thay thế đồng thời nhiều từ",
      Who: "người dùng",
      What: "chức năng tìm kiếm và thay thế hoạt động ở trang chuyển văn bản theo câu",
      Why: "có thể thay thế đồng thời nhiều từ",
      "Product Type": "AIVoice",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-949",
      "User Story Title": "Sửa lỗi thêm ký tự cho người dùng Studio",
      Story:
        "Là BO, tôi muốn sửa tính năng thêm ký tự cho dạng Studio, để thêm ký tự cho người dùng Studio",
      Who: "BO",
      What: "sửa tính năng thêm ký tự cho dạng Studio",
      Why: "thêm ký tự cho người dùng Studio",
      "Product Type": "AIVoice",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-951",
      "User Story Title": "Bổ sung thêm ký tự cho người dùng API",
      Story:
        "Là BO, tôi muốn bổ sung tính năng thêm ký tự cho dạng API, để thêm ký tự cho người dùng API",
      Who: "BO",
      What: "bổ sung tính năng thêm ký tự cho dạng API",
      Why: "thêm ký tự cho người dùng API",
      "Product Type": "AIVoice",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "Jira ID": "SCRUM-952",
      "User Story Title": "Thiết kế luồng gọi theo thiết kế mới",
      Story:
        "Là Team Lead, tôi muốn thiết kế luồng gọi theo thiêt kế mới, để chuẩn bị implement luồng gọi cho AI Call",
      Who: "Team Lead",
      What: "thiết kế luồng gọi theo thiêt kế mới",
      Why: "chuẩn bị implement luồng gọi cho AI Call",
      "Product Type": "AICall",
      Sprint: "#5",
      Status: "To Do",
      Priority: "1",
    },
    {
      "User Story Title": "Migrate kịch bản IVR theo thiết kế DB mới",
      Story: "Là PO, tôi muốn Migrate kịch bản để có thể tích hợp callbot ",
      "Acceptance Criteria":
        "- API trả về cho frontend giữ nguyên cấu trúc\n" +
        "- Lưu kịch bản theo thiết kế DB mới\n" +
        "- Gọi ra thành công",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-954",
    },
    {
      "User Story Title": "Tích hợp Bot bên SMD sang kịch bản",
      Story:
        "Là Bot Manager, tôi muốn bot của AI Call tích hợp với kịch bản để có thể sử dụng Bot",
      "Acceptance Criteria": "- Lưu thông tin bot vào kịch bản",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-956",
    },
  ],
  [
    {
      "User Story Title":
        "Hiển thị và sử dụng version active của bot trên kịch bản",
      Story:
        "Là PO, tôi muốn hiển thị và active version mới nhất của bot để cập nhật được bot mới nhất",
      "Acceptance Criteria":
        "- Hiển thị version hiện tại và version mới nhất\n" +
        "- Actice được version mới nhất",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-898",
    },
    {
      "User Story Title": "Tạo kịch bản loại Bot",
      Story: "Là Bot Manager, tôi muốn tạo kịch bản Bot để có thể dùng Bot",
      "Acceptance Criteria": "- Tạo thành công kịch bản bot",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-901",
    },
    {
      "User Story Title": "Xem các bot đã tích hợp",
      Story:
        "Là Bot Manager, tôi muốn xem danh sách Bot của AI Call để tìm kiếm bot",
      "Acceptance Criteria":
        "- Xem và tìm kiếm theo tên bot\n" +
        "- Filter theo trạng thái tích hợp (Chưa/Đang/Hoàn thành/ Lỗi)\n" +
        "- Filter theo loại bot (PORTAL/ SYSTEM)",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-904",
    },
    {
      "User Story Title": "Xóa các bot đã tích hợp",
      Story: "Là Bot Manager, tôi muốn xóa Bot của AI Call để không muốn thấy",
      "Acceptance Criteria":
        "- Hiển thị số lượng kịch bản đang sử dụng bot\n" +
        "- Xóa thành công và xóa liên kết giữa kịch bản và bot ",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-905",
    },
    {
      "User Story Title": "Sửa các bot đã tích hợp",
      Story:
        "Là Bot Manager, tôi muốn sửa Bot của AI Call để thay đổi thông tin của bot",
      "Acceptance Criteria": "- Sửa thành công bot",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-908",
    },
    {
      "User Story Title": "Tích hợp bot với SMD",
      Story:
        "Là Bot Manager, tôi muốn tích hợp Bot của AI Call với Bot SMD để có thể sử dụng bot",
      "Acceptance Criteria":
        "- Lưu thông tin bot SMD thành công\n" +
        "- Cache TTS thành công\n" +
        "- Xem được trạng thái tích hợp",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-910",
    },
    {
      "User Story Title": "Gọi ra thành công với kịch bản Bot",
      Story: "Là KH, tôi muốn gọi ra thành công với kịch bản sử dụng Bot",
      "Acceptance Criteria": "- Gọi ra thành công theo đúng luồng của Bot\n",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-912",
    },
    {
      "User Story Title": "Xem kết quả cuộc gọi Bot",
      Story:
        "Là KH, tôi muốn xem kết quả cuộc gọi bot để kiểm tra lại chất lượng bot",
      "Acceptance Criteria":
        "- Hiển thị luồng hội thoại của Bot với người nghe máy\n" +
        "- Hiển thị các thông tin chi tiết của Bot (action code, drop step)",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-915",
    },
    {
      "User Story Title": "Xuất báo của Bot",
      Story: "Là KH, tôi muốn xuất báo cuộc gọi Bot để lấy dữ liệu đã gọi",
      "Acceptance Criteria":
        "- Xuất báo cáo thành công\n- Xuất đúng thông tin đã search",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-917",
    },
    {
      "User Story Title": "Biểu đồ thống kê chất lượng Bot",
      Story:
        "Là KH, tôi muốn xem biểu đồ thống kê kết quả của bot để theo dõi chất lượng bot",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-919",
    },
    {
      "User Story Title": "QC cuộc gọi",
      Story: "Là KH, tôi muốn QC cuộc gọi để kiểm định chất lượng của Bot",
      "Acceptance Criteria":
        "- QC theo intent\n" +
        "- QC theo ASR Intent\n" +
        "- QC theo UserSay\n" +
        "- QC theo Code/Sub Action Code",
      "Product Type": "AICall",
      Sprint: "#1",
      Status: "Draft",
      Priority: "1",
      "Jira ID": "SCRUM-921",
    },
    {
      "User Story Title": "Xuất báo cáo QC",
      Story:
        "Là KH, tôi muốn muốn xuất báo cáo QC của cuộc gọi để thống kê chất lượng bot",
      "Product Type": "AICall",
      Sprint: "#1",
      Priority: "1",
      "Jira ID": "SCRUM-924",
    },
  ],
];