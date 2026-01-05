import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constants.js';

class InputView {
    async readUserNames() {
        const input = await Console.readLineAsync(
            INPUT_MESSAGE.COACH_NAME
        );
        return input.split(",").map(name => name.trim());
    }

    async readBlackListMenu(coachName) {
        const input = await Console.readLineAsync(
            `${coachName}${INPUT_MESSAGE.BLACKLIST_TEMPLATE}`
        );
        if (!input) return [];
        return input.split(",").map(menu => menu.trim());
    }
}

export default InputView;