# 1. Client -> Server 
```Method Call(EX: handleDelete()) ====> [data provider object] ====> HTTP requests```
### Step1: Khi người dùng thao tác bất kì thứ gì trên UI, khi đó các *method call* mà chúng ta code sẽ được gọi
### Step2: *data provider object*: sẽ translate  các *method call* thành các *HTTP request*
### Step3: các *HTTP request* sẽ được gửi đi tới server

```
const handleDelete = async () => {
        try {
            await dataProvider.delete('posts', { id: record.id });
            notify('Record deleted', { type: 'info' });
            refresh();
        } catch (error) {
            notify('Error deleting record', { type: 'warning' });
        }
    };

    return (
        <Button label="Delete" onClick={handleDelete}>
            <DeleteIcon />
        </Button>
    );

//handleDelete chính là method call, vì nó được gọi khi người dùng nhấn vào button Delete trên màn hình
```


# 2. Server -> Client
```[Record format by reac-admin]<====DataProvider<====Anything API (JSON server, Loopback4 CRUD, Spring Boot, Strapi, ...)```
### Step1: *Server* trả về response
### Step2: Bất kể là API gì (JSON server, Loopback4 CRUD, Spring Boot, Strapi, ...) *Data provider* sẽ xử lý *response* thành *record* theo tiêu chuẩn format của React-Admin
### Step3: các *record* chứa các *properties*, các *component* sẽ được dúng ta custom để hiển thị các *properties* lên UI theo các hình thái mà chúng ta đã kiến trúc khi code.


