function solution(numbers, target) {
    var answer = 0;
    getAnswer(0,0);
    function getAnswer(x, value) {
        if(x < numbers.length) {
            getAnswer(x + 1, value + numbers[x]);
            getAnswer(x + 1, value - numbers[x]);
        } else {
            if(value === target) {
                answer++;
            }
        }
    } 
    return answer;
}

console.log(solution([1,1,1,1,1],3));
// 재귀 함수