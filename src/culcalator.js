import { Console } from "@woowacourse/mission-utils";

export const calculator = async () => {
  let sum = 0;
  const answer = await Console.readLineAsync(
    "덧셈할 문자열을 입력해 주세요.\n"
  );
  //쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우
  if (answer.includes([",", ":"])) {
    answer.split(/[,\n:]/).forEach((num) => {
      if (num < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
      sum += parseInt(num);
    });
  }
  // 커스텀 구분자 문자열인 경우
  else if (answer.includes("//")) {
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
};
