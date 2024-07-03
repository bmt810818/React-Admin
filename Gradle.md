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

Test: Gradle cũng có thể chạy các bài test và tạo báo cáo kết quả test.
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

03/7/2024
========================================================

# Wrapper
- Có sẵn dưới dạng tệp gradlew hoặc gradlew.bat.
- Nó sinh ra với mục đích thống nhất 1 version gradle cho dự án, tránh trường hợp mỗi thành viên trong 1 dự án khi chạy ./gralde.bat build, lệnh chạy này sẽ build gradle dựa trên version trong hệ thống của người đó dẫn đến lỗi và toàn những lỗi khó sửa.
## Giải pháp: ./gradlew.bat build
- Khi bạn chạy lệnh này, Gradle sẽ sử dụng một wrapper (tập lệnh) đi kèm với dự án của bạn. Wrapper này sẽ đảm bảo rằng phiên bản Gradle chính xác được sử dụng cho dự án, ngay cả khi Gradle không được cài đặt trên hệ thống của bạn.
  
# build.gradle có gì?
- chỉ chấp nhận 2 loại ngôn ngữ trong file: [Groovy DSL](https://docs.gradle.org/current/dsl/index.html) và [Kotlin DSL](https://docs.gradle.org/current/kotlin-dsl/index.html)

# Dependency Management là quản lý phụ thuộc nhưng nó quản lý như thế nào?
```
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.1.2'
    id 'io.spring.dependency-management' version '1.1.2'
}

```
- >> Ngay cả khi bạn đã cấu hình phiên bản spring-boot-starter-web là 3.1.2, các thư viện này lại phụ thuộc vào các phiên bản khác của những thư viện khác, dẫn đến việc sử dụng các phiên bản khác nhau trong cây dependency.
- >> Ví dụ: Khi bạn thêm implementation 'org.springframework.boot:spring-boot-starter-web:3.1.2', Gradle sẽ tải về không chỉ spring-boot-starter-web mà còn tất cả các dependencies mà spring-boot-starter-web cần để hoạt động.
  >> Sử dụng lệnh:
```
./gradlew dependencyInsight --dependency <dependency-name>
```
để kiểm tra chi tiết về một dependency cụ thể.

# Task
- Biên dịch các lớp, tạo JAR, tạo Javadoc hoặc xuất bản các kho lưu trữ => Những công việc này được gọi là các task
- Tất cả các task có sẵn trong dự án của bạn đều đến từ plugin Gradle và build script
- Bạn có thể liệt kê tất cả các tác vụ có sẵn trong dự án bằng cách chạy lệnh sau trong terminal:
  ```
  ./gradlew tasks
  ```
  - Nhiều khi, một tác vụ yêu cầu một tác vụ khác chạy trước.
- Ví dụ: Để Gradle thực thi tác vụ **build**, trước tiên mã Java phải được biên dịch. Vì vậy, tác vụ **build** phụ thuộc vào tác vụ biên dịch Java
- Điều này có nghĩa là tác vụ biên dịch Java sẽ chạy trước tác vụ xây dựng
- Các build script có thể tùy ý xác định dependencies của tác vụ. Sau đó, Gradle sẽ tự động xác định thứ tự thực hiện nhiệm vụ.
