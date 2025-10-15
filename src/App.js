import readLine from "readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;

class App {
  async run() {
    rl.question("덧셈할 문자열을 입력해 주세요.\n", (answer) => {
      answer.split(/[,\n:]/).forEach((num) => {
        sum += parseInt(num);
      });
      console.log("결과 : " + sum);
      rl.close();
    });
  }
}

export default App;
