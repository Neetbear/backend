# Promise

### Memory 
    heap & call stack
    변수나 선언 함수 -> heap (전역 객체에 들어간다는 느낌?)
    호출 함수 => call stack
### Call Stack 
    우리가 조작 가능한 스레드
### Back ground
    setTimeout, setInterval... etc
    비동기 
### Event-Loop, Task Queue
    백 그라운드에서 돌아가는 코드가 완성되면 task queue에 채우고
    -> call stack을 확인해서 비동기 함수를 call stack에 옮기는게 event loop
