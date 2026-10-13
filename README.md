# Camp Booking

Trang web giới thiệu khu cắm trại Camp Haven, xây dựng với Next.js và tối ưu cho trải nghiệm đặt chỗ trên thiết bị di động.

## Demo

Xem bản demo đã triển khai tại [camp-booking-kjsn.vercel.app](https://camp-booking-kjsn.vercel.app/).

## Công nghệ

- Next.js 15
- React 19 và TypeScript
- Tailwind CSS
- Radix UI

## Chạy dự án local

### Yêu cầu

- Node.js 20 LTS hoặc mới hơn
- npm 10 hoặc mới hơn

### Cài đặt và khởi chạy

```bash
git clone https://github.com/thiensinh127/camp-booking.git
cd camp-booking
npm ci
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng. Mã nguồn sẽ được tự động tải lại khi bạn chỉnh sửa.

## Các lệnh hữu ích

```bash
# Chạy môi trường phát triển
npm run dev

# Tạo production build
npm run build

# Chạy production server sau khi build
npm start

# Kiểm tra regression cho các bề mặt mobile
npm run verify:mobile-surfaces
```

## Triển khai

Dự án được triển khai trên Vercel. Tạo production build bằng `npm run build` trước khi phát hành hoặc kiểm tra thay đổi.
