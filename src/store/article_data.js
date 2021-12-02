import CS from "./article_data/CS.js";
import Develop from "./article_data/Develop.js";
import Web from "./article_data/Web.js";
import BlockChain from "./article_data/BlockChain.js";

const articles = {
  categoryId: -1,
  categoryList: [
    { id: 0, category: "Develop", itemList: Develop },
    { id: 1, category: "CS", itemList: CS },
    { id: 2, category: "Web", itemList: Web },
    { id: 3, category: "BlockChain", itemList: BlockChain },
    { id: 4, category: "Algorithm", itemList: [] },
  ],
};

export default articles;
