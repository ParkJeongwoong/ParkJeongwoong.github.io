import CS from "./article_data/CS.js";
import Develop from "./article_data/Develop.js";
import Web from "./article_data/Web.js";

const articles = {
  categoryId: -1,
  categoryList: [
    { id: 0, category: "Develop", itemList: Develop },
    { id: 1, category: "CS", itemList: CS },
    { id: 2, category: "Algorithm", itemList: [] },
    { id: 3, category: "Web", itemList: Web },
    { id: 4, category: "Etc", itemList: [] },
  ],
};

export default articles;
