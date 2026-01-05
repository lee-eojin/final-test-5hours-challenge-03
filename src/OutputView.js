import { Console } from '@woowacourse/mission-utils';

class OutputView {
    printStart() {
        Console.print("점심 메뉴 추천을 시작합니다.\n");
    }
    printResult(coaches, categories, menus) {
        Console.print("메뉴 추천 결과입니다.");
        Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
        Console.print(`[ 카테고리 | ${categories.join(" | ")} ]`);

        coaches.forEach(coach => {
            Console.print(`[ ${coach} | ${menus[coach].join(" | ")} ]`);
        });
    }
    printComplete() {
        Console.print("\n추천을 완료했습니다.");
    }
}


export default OutputView;