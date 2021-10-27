import cs from "./article_data/CS.js";
import develop from "./article_data/Develop.js";
import web from "./article_data/Web.js";

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
