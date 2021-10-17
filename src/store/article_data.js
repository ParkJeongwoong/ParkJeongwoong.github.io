import cs from "./article_data/cs.js";
import develop from "./article_data/develop.js";
import web from "./article_data/web.js";

const articles = {
  categoryId: -1,
  categoryList: [
    { id: 0, category: "Develop", itemList: develop },
    { id: 1, category: "CS", itemList: cs },
    { id: 2, category: "Algorithm", itemList: [] },
    { id: 3, category: "Web", itemList: web },
    { id: 4, category: "Etc", itemList: [] },
  ],
};

export default articles;
