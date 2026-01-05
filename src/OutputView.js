import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants.js";

class OutputView {
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  }
  printResult(coaches, categories, menus) {
    Console.print(OUTPUT_MESSAGE.RECOMMEND_RESULT);
    Console.print(OUTPUT_MESSAGE.DAY_INDEX);
    Console.print(
      `${OUTPUT_MESSAGE.CATEGORIES_TEMPLATE}${categories.join(" | ")} ]`
    );

    coaches.forEach((coach) => {
      Console.print(`[ ${coach} | ${menus[coach].join(" | ")} ]`);
    });
  }
  printComplete() {
    Console.print(OUTPUT_MESSAGE.COMPLETE);
  }
}

export default OutputView;
