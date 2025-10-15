import { Console } from "@woowacourse/mission-utils";

let sum = 0;
class App {
  async run() {
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then((answer) => {
      if (answer.includes("," || ":")) {
        answer.split(/[,\n:]/).forEach((num) => {
          if (num < 0) {
            throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
          }
          sum += parseInt(num);
        });
      } else if (answer.includes("//")) {
        const CUSTOM_DELIMITER = answer.split("//")[1][0];
        const SPLIT_ANSWER = answer.split("\\n")[1];

        SPLIT_ANSWER.split(CUSTOM_DELIMITER).forEach((num) => {
          if (num < 0) {
            throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
          }
          sum += parseInt(num);
        });
      } else {
        throw new Error("[ERROR] 올바른 문자열을 입력해 주세요.");
      }
      Console.print("결과 : " + sum);
    });
  }
}

export default App;
