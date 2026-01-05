import { Console } from '@woowacourse/mission-utils';

class InputView {
    async readUserNames() {
        const input = await Console.readLineAsync(
            "코치의 이름을 입력해 주세요. (, 로 구분)\n"
        );
        return input.split(",").map(name => name.trim());
    }

    async readBlackListMenu(coachName) {
        const input = await Console.readLineAsync(
            `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`
        );
        if (!input) return [];
        return input.split(",").map(menu => menu.trim());
    }
}

export default InputView;