import { Console } from "@woowacourse/mission-utils";

const DEFAULT_DELIMITERS = /[,\n:]/;
const CUSTOM_DELIMITER_REGEX = /^\/\/(.)(?:\\n|\r?\n)(.*)$/;

export const calculator = async () => {
  try {
    let sum = 0;
    const answer = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    //쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우
    if (DEFAULT_DELIMITERS.test(answer)) {
      answer.split(DEFAULT_DELIMITERS).forEach((num) => {
        if (Number(num) < 0) {
          throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
        }
        sum += Number(num);
      });
    }
    // 커스텀 구분자 문자열인 경우
    else if (CUSTOM_DELIMITER_REGEX.test(answer)) {
      const match = answer.match(CUSTOM_DELIMITER_REGEX);
      if (!match)
        throw new Error("[ERROR] 올바른 커스텀 구분자 형식이 아닙니다.");
      const CUSTOM_DELIMITER = match[1];
      const SPLIT_ANSWER = match[2];

      SPLIT_ANSWER.split(CUSTOM_DELIMITER).forEach((num) => {
        if (Number(num) < 0) {
          throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
        }
        sum += Number(num);
      });
    } else {
      throw new Error("[ERROR] 올바른 문자열을 입력해 주세요.");
    }
    Console.print("결과 : " + sum);
  } catch (error) {
    Console.print(error.message);
  }
};
