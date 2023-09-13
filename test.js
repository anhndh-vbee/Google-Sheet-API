const constants = require("./configs/constants");
const { createIssue } = require("./services/createIssueOnJira");
const { getIssue } = require("./services/getInfoIssue");
const { getDataFromPBI } = require("./services/readDataFromSheet");
const { writeJiraIDForSheetPBI } = require("./services/writeDataToSheet");
const { checkSheet } = require("./utils/checkSheet");

const _data = [
  {
    "Jira ID": "SCRUM-390",
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
    "Jira ID": "SCRUM-391",
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
    "Jira ID": "SCRUM-392",
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
    "Jira ID": "SCRUM-393",
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
    "Jira ID": "SCRUM-394",
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
    "Jira ID": "SCRUM-395",
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
    "Jira ID": "SCRUM-396",
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
    "Jira ID": "SCRUM-397",
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
    "Jira ID": "SCRUM-398",
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
    "Jira ID": "SCRUM-399",
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
    "Jira ID": "SCRUM-400",
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
  },
  {
    "Jira ID": "SCRUM-401",
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
  },
  {
    "Jira ID": "SCRUM-402",
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
  },
  {
    "Jira ID": "SCRUM-403",
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
  },
  {
    "Jira ID": "SCRUM-404",
    "User Story Title": "Tích hợp bot SMD sang bot AI Call",
    Story:
      "Là Bot Manager, tôi muốn tích hợp Bot SmartDialog tích hợp với Bot AI Call, để khách hàng có thể chọn bot từ kịch bản",
    Who: "Bot Manager",
    What: "tích hợp Bot SmartDialog tích hợp với Bot AI Call",
    Why: "khách hàng có thể chọn bot từ kịch bản",
    "Product Type": "AICall",
    Sprint: "#5",
    Status: "To Do",
  },
  {
    "Jira ID": "SCRUM-405",
    "User Story Title": "Migrate kịch bản IVR sang thiết kế db mới",
    Story:
      "Là PO, tôi muốn migrate kịch bản IVR cũ sang thiết kế database mới, để để dùng chung với kịch bản tích hợp bot",
    Who: "PO",
    What: "migrate kịch bản IVR cũ sang thiết kế database mới",
    Why: "để dùng chung với kịch bản tích hợp bot",
    "Product Type": "AICall",
    Sprint: "#5",
    Status: "To Do",
  },
  {
    "Jira ID": "SCRUM-406",
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
    "Jira ID": "SCRUM-407",
    "User Story Title": "Thay đổi cơ chế xác thực từ AIVoice sang Payment Hub",
    Story:
      "Là PO, tôi muốn thay đổi cơ chế xác thực khi gọi sang Payment Hub, để không phải thực hiện reset token thủ công định kỳ",
    Who: "PO",
    What: "thay đổi cơ chế xác thực khi gọi sang Payment Hub",
    Why: "không phải thực hiện reset token thủ công định kỳ",
    "Product Type": "AIVoice",
    Sprint: "#5",
    Status: "To Do",
  },
  {
    "Jira ID": "SCRUM-408",
    "User Story Title": "Thông tin kịch bản",
    Story:
      "Là PO, tôi muốn cải tiến giao diện thông tin kịch bản, để cải thiện trải nghiệm người dùng",
    Who: "PO",
    What: "cải tiến giao diện thông tin kịch bản",
    Why: "cải thiện trải nghiệm người dùng",
    "Product Type": "AICall",
    Sprint: "#5",
    Status: "To Do",
  },
  {
    "Jira ID": "SCRUM-409",
    "User Story Title": "Chặn mua gói miễn phí",
    Story:
      "Là PO, tôi muốn người dùng không thể tự mua gói miễn phí, để chặn người dùng có thể dùng vô hạn số ký tự trong ngày",
    Who: "PO",
    What: "người dùng không thể tự mua gói miễn phí",
    Why: "chặn người dùng có thể dùng vô hạn số ký tự trong ngày",
    "Product Type": "AIVoice",
    Sprint: "#5",
    Status: "To Do",
  },
  {
    "Jira ID": "SCRUM-410",
    "User Story Title": "Sửa lỗi thay thế khi chuyển văn bản theo câu",
    Story:
      "Là người dùng, tôi muốn chức năng tìm kiếm và thay thế hoạt động ở trang chuyển văn bản theo câu, để có thể thay thế đồng thời nhiều từ",
    Who: "người dùng",
    What: "chức năng tìm kiếm và thay thế hoạt động ở trang chuyển văn bản theo câu",
    Why: "có thể thay thế đồng thời nhiều từ",
    "Product Type": "AIVoice",
    Sprint: "#5",
    Status: "To Do",
  },
  {
    "Jira ID": "SCRUM-411",
    "User Story Title": "Sửa lỗi thêm ký tự cho người dùng Studio",
    Story:
      "Là BO, tôi muốn sửa tính năng thêm ký tự cho dạng Studio, để thêm ký tự cho người dùng Studio",
    Who: "BO",
    What: "sửa tính năng thêm ký tự cho dạng Studio",
    Why: "thêm ký tự cho người dùng Studio",
    "Product Type": "AIVoice",
    Sprint: "#5",
    Status: "To Do",
  },
  {
    "Jira ID": "SCRUM-412",
    "User Story Title": "Bổ sung thêm ký tự cho người dùng API",
    Story:
      "Là BO, tôi muốn bổ sung tính năng thêm ký tự cho dạng API, để thêm ký tự cho người dùng API",
    Who: "BO",
    What: "bổ sung tính năng thêm ký tự cho dạng API",
    Why: "thêm ký tự cho người dùng API",
    "Product Type": "AIVoice",
    Sprint: "#5",
    Status: "To Do",
  },
  {
    "Jira ID": "SCRUM-413",
    "User Story Title": "Thiết kế luồng gọi theo thiết kế mới",
    Story:
      "Là Team Lead, tôi muốn thiết kế luồng gọi theo thiêt kế mới, để chuẩn bị implement luồng gọi cho AI Call",
    Who: "Team Lead",
    What: "thiết kế luồng gọi theo thiêt kế mới",
    Why: "chuẩn bị implement luồng gọi cho AI Call",
    "Product Type": "AICall",
    Sprint: "#5",
    Status: "To Do",
  },
];

const checkAndCreateIssue = async (value) => {
  const issueIds = [];

  for (const item of value) {
    const id = item["Jira ID"];
    const issueInfo = await getIssue(id);

    if (issueInfo === false) {
      const newIssue = await createIssue(item, constants.STORY);
      issueIds.push({ oldId: id, newId: newIssue.key });
    } else if (issueInfo) {
      issueIds.push({ oldId: id, newId: id });
    }
  }

  return issueIds;
};

const cronJobOnPBI = async () => {
  const data = await getDataFromPBI(constants.SHEETID);
  const check = checkSheet(data, constants.KEYPBI);

  if (check) {
    const res = await checkAndCreateIssue(data);
    if (res && res.length > 0) {
      const newListJiraID = res.map((item) => item.newId || item.oldId);
      console.log(newListJiraID);
      writeJiraIDForSheetPBI(newListJiraID);
    }
  }
};
const test = async () => {
  const res = await cronJobOnPBI();
  console.log(1);
};

test();

module.exports = _data;
