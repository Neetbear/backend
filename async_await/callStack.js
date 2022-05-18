// call stack -> 호출 순으로 쌓이고 처리 (바로 처리 되는 애들은 쌓이자마라 처리) 
//            -> 함수 쌓고 처리 잘 이해해야함

function main() {
    fn2()
    console.log("main");

    function fn2() {
        console.log('fn2')
        fn3()
    }

    function fn3() {
        console.log('fn3')
        fn4()
    }

    function fn4() {
        console.log('fn4')
        fn5()
    }

    function fn5() {
        console.log('fn5')
        fn6()
    }

    function fn6() {
        console.log('fn6')
    }
}

main()

/*
    fn2
    fn3
    fn4
    fn5
    fn6
    main
*/

function main() {
    fn2()
    console.log("main");

    function fn2() {
        fn3()
        console.log('fn2')
    }

    function fn3() {
        fn4()
        console.log('fn3')
    }

    function fn4() {
        console.log('fn4')
        fn5()
    }

    function fn5() {
        console.log('fn5')
        fn6()
    }

    function fn6() {
        console.log('fn6')
    }
}

main()

/*
    fn4
    fn5
    fn6
    fn3
    fn2
    main
*/