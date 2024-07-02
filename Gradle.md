![structureOfGradle](https://docs.gradle.org/current/userguide/img/gradle-basic-2.png)

# Khi gõ lệnh ./gradlew.bat :{sub-application}:bootrun, quá trình hoạt động của Gradle sẽ diễn ra theo các bước chính như sau:

## 1. Project Structure
settings.gradle: File này định nghĩa các dự án con (sub-projects) và cấu trúc của toàn bộ dự án.
sub-project-1 và sub-project-2: Mỗi dự án con có file build.gradle riêng, chứa cấu hình build và mã nguồn (source code).
## 2. Build Flow
Cache: Gradle sử dụng cache để lưu trữ các kết quả build nhằm tăng tốc độ cho các lần build tiếp theo.
Build Flow: Đây là quá trình chính mà Gradle thực hiện các nhiệm vụ (tasks) được định nghĩa trong các file build.gradle.
## 3. Dependency Management
Dependency Manager: Gradle quản lý các dependencies của dự án thông qua Dependency Manager. Nó sẽ tải các dependencies cần thiết từ các kho lưu trữ (repositories).
## 4. Plugins
Plugins: Gradle sử dụng các plugin để mở rộng chức năng. Ví dụ, plugin Spring Boot sẽ thêm các nhiệm vụ liên quan đến Spring Boot vào build flow.
## 5. Execution of Tasks
Tasks: Các nhiệm vụ như compile, test, package... được định nghĩa trong các file build.gradle. Khi bạn gõ lệnh ./gradlew.bat :subapplication:bootrun, Gradle sẽ thực hiện các nhiệm vụ này theo thứ tự phù hợp.
## 6. Output
Output: Kết quả của quá trình build bao gồm các file đầu ra như JAR, APK, ZIP, WAR...

![jar-apk-zip-war](https://velog.velcdn.com/images/ghkdwp018/post/7f292fe8-9a7b-43e4-9861-a471bb5f8002/image.png)

- >> Mặc dù các tệp nén thường có phần mở rộng .zip, nhưng cộng đồng Java lại sử dụng phần mở rộng .ear cho các ứng dụng doanh nghiệp dựa trên Java EE, .war cho các ứng dụng web và .jar cho các ứng dụng Java độc lập và [linkable libraries]

Test]s: Gradle cũng có thể chạy các bài test và tạo báo cáo kết quả test.
CI Server và Repository: Kết quả build và các báo cáo có thể được đẩy lên các server CI (Continuous Integration) và các kho lưu trữ để quản lý và phân phối.
# Chi Tiết Quá Trình Khi Chạy ./gradlew.bat :subapplication:bootrun
## Khởi Động Gradle Wrapper:

gradlew.bat là script của Gradle Wrapper, đảm bảo rằng bạn đang sử dụng đúng phiên bản Gradle.
## Đọc File settings.gradle:

Gradle sẽ đọc file settings.gradle để xác định các dự án con và cấu trúc dự án.
## Đọc File build.gradle:

Gradle sẽ đọc file build.gradle của dự án con subapplication để xác định các nhiệm vụ cần thực hiện.
## Dependency Resolution:

Gradle sẽ kiểm tra và tải về các dependencies được khai báo trong build.gradle nếu chúng chưa có trong cache.
## Thực Thi Nhiệm Vụ bootrun:

Gradle sẽ thực thi nhiệm vụ bootrun từ plugin Spring Boot, khởi động ứng dụng Spring Boot trong dự án con subapplication.
## Kết Quả:

Ứng dụng Spring Boot được khởi động và sẵn sàng phục vụ.
Sơ đồ cung cấp minh họa quá trình này một cách tổng quan, cho thấy các thành phần và bước quan trọng trong quá trình build với Gradle.
