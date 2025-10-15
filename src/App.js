import readLine from "readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;

class App {
  async run() {
    rl.question("덧셈할 문자열을 입력해 주세요.\n", (answer) => {
      if (answer.includes("," || ":")) {
        answer.split(/[,\n:]/).forEach((num) => {
          sum += parseInt(num);
        });
      } else if (answer.includes("//")) {
        const CUSTOM_DELIMITER = answer.split("//")[1][0];
        const SPLIT_ANSWER = answer.split("\\n")[1];

        SPLIT_ANSWER.split(CUSTOM_DELIMITER).forEach((num) => {
          sum += parseInt(num);
        });
      }
      console.log("결과 : " + sum);
      rl.close();
    });
  }
}

export default App;
