# Khi tìm cách kết nối server Springboot <-> React-Admin UI, tôi gặp lỗi "Failed to fetch"
- Tôi giải quyết bằng cách thêm anotation @CrossOrigin(origins = "http://localhost:5173") vào controller của Springboot
# React-Admin sau đó đã gọi được API và có 1 lỗi mới
- The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?
# Tôi có 2 câu hỏi:
## 1. Tại sao phải có @CrossOrigin(origins = "") thì React-Admin mới gọi được API? @CrossOrigin sinh ra để giải quyết vấn đề gì?
## 2. Nguyên nhân gây ra lỗi "The X-Total-Count header is missing in the HTTP Response" là gì? Có bao nhiêu cách giải quyết? Cách tốt nhất để xử lý cho context này là gì?

# Caused by: org.postgresql.util.PSQLException: FATAL: password authentication failed for user "toanbui"
- Lỗi xảy ra khi tôi cố kết nối Springboot với Postgres mới (tôi tạo mới 1 container khác)
- Tôi thử tắt 1 container khác có image trùng với container trên, và vấn đề đã được giải quyết, vậy lý do là gì?
