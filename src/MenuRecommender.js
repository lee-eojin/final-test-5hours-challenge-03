import { Random } from "@woowacourse/mission-utils";
import { CATEGORIES, MENUS } from "./constants.js";

class MenuRecommender {
  recommend(coaches, blacklists) {
    const weeklyCategories = [];
    const coachMenusByName = {};

    coaches.forEach((coachName) => {
      coachMenusByName[coachName] = [];
    });

    for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
      const selectedCategory = this.#pickCategoryWithLimit(weeklyCategories);
      weeklyCategories.push(selectedCategory);
    }

    for (const coachName of coaches) {
      for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
        const selectedMenu = this.#pickMenuForCoach(
          weeklyCategories[dayIndex],
          coachMenusByName[coachName],
          blacklists[coachName]
        );
        coachMenusByName[coachName].push(selectedMenu);
      }
    }

    return {
      categories: weeklyCategories,
      menus: coachMenusByName,
    };
  }

  #pickCategoryWithLimit(weeklyCategories) {
    while (true) {
      const randomCategoryNumber = Random.pickNumberInRange(1, 5);
      const selectedCategory = CATEGORIES[randomCategoryNumber];

      const sameCategoryCount = weeklyCategories.filter(
        (category) => category === selectedCategory
      ).length;

      if (sameCategoryCount < 2) {
        return selectedCategory;
      }
    }
  }

  #pickMenuForCoach(categoryName, coachPreviousMenus, coachBlacklist) {
    while (true) {
      const indices = [];
      for (let i = 1; i <= MENUS[categoryName].length; i++) {
        indices.push(i);
      }
      const shuffledIndices = Random.shuffle(indices);
      const candidateMenu = MENUS[categoryName][shuffledIndices[0] - 1];
      const isNotInBlacklist = !coachBlacklist.includes(candidateMenu);
      const isNotDuplicate = !coachPreviousMenus.includes(candidateMenu);

      if (isNotInBlacklist && isNotDuplicate) {
        return candidateMenu;
      }
    }
  }
}

export default MenuRecommender;
