import CS from "./article_data/CS.js";
import Develop from "./article_data/Develop.js";
import Web from "./article_data/Web.js";
import BlockChain from "./article_data/BlockChain.js";
import Failure from "./article_data/Failure.js";
import Studied from "./article_data/Studied.js";

const articles = {
  categoryId: -1,
  categoryList: [
    { id: 0, category: "Develop", subCategory: [], itemList: Develop },
    { id: 1, category: "CS", subCategory: [], itemList: CS },
    { id: 2, category: "Web", subCategory: [], itemList: Web },
    { id: 3, category: "BlockChain", subCategory: [], itemList: BlockChain },
    { id: 4, category: "Algorithm", subCategory: [], itemList: [] },
    {
      id: 5,
      category: "Studied",
      subCategory: ["CleanCode"],
      itemList: Studied,
    },
    { id: 6, category: "Failure", subCategory: [], itemList: Failure },
  ],
};

export default articles;
