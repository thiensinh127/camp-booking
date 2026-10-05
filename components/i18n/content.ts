export type Locale = "vi" | "en";

export const content = {
  vi: {
    nav: ["Trang chủ", "Lưu trú", "Trải nghiệm", "Cẩm nang", "Thư viện"],
    login: "Đăng nhập", book: "Đặt chỗ", hero: "Ngủ dưới trời sao.\nThức dậy giữa Đà Lạt.",
    heroText: "Những khu cắm trại, glamping và trải nghiệm ngoài trời đáng nhớ giữa rừng thông Đà Lạt.",
    explore: "Khám phá chỗ ở", watch: "Xem trải nghiệm", filter: "Tìm chỗ ở",
    checkIn: "Ngày nhận phòng", checkOut: "Ngày trả phòng", guests: "Khách", stayType: "Loại lưu trú", selectDate: "Chọn ngày", summary: "Chọn ngày • 1 khách • Lều trại",
  },
  en: {
    nav: ["Home", "Stays", "Activities", "Journal", "Gallery"], login: "Login", book: "Book your stay", hero: "Sleep Under the Stars.\nWake Up in Da Lat.",
    heroText: "Thoughtful campsites, glamping stays and outdoor moments among Da Lat’s pine forests.", explore: "Explore stays", watch: "Watch experience", filter: "Search stays",
    checkIn: "Check in", checkOut: "Check out", guests: "Guests", stayType: "Stay type", selectDate: "Select date", summary: "Select dates • 1 guest • Tent site",
  },
} as const;
