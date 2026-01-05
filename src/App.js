import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import MenuRecommender from "./MenuRecommender.js";

class App {
  async play() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const recommender = new MenuRecommender();

    outputView.printStart();

    const coaches = await inputView.readUserNames();
    const blacklists = await this.#readBlackLists(inputView, coaches);

    const { categories, menus } = recommender.recommend(coaches, blacklists);

    outputView.printResult(coaches, categories, menus);
    outputView.printComplete();
  }

  async #readBlackLists(inputView, coaches) {
    const blacklists = {};
    for (const coach of coaches) {
      blacklists[coach] = await inputView.readBlackListMenu(coach);
    }
    return blacklists;
  }
}

export default App;
