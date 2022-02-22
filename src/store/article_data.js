import { CS, CS_SubCategory } from "./article_data/CS.js";
import { Develop, Develop_SubCategory } from "./article_data/Develop.js";
import { Web, Web_SubCategory } from "./article_data/Web.js";
import {
  BlockChain,
  BlockChain_SubCategory,
} from "./article_data/BlockChain.js";
import { Failure, Failure_SubCategory } from "./article_data/Failure.js";
import { Studied, Studied_SubCategory } from "./article_data/Studied.js";

const articles = {
  categoryId: -1,
  subCategoryId: -1,
  categoryList: [
    {
      id: 0,
      category: "Develop",
      subCategory: CS_SubCategory,
      itemList: Develop,
    },
    { id: 1, category: "CS", subCategory: Develop_SubCategory, itemList: CS },
    { id: 2, category: "Web", subCategory: Web_SubCategory, itemList: Web },
    {
      id: 3,
      category: "BlockChain",
      subCategory: BlockChain_SubCategory,
      itemList: BlockChain,
    },
    { id: 4, category: "Algorithm", subCategory: [], itemList: [] },
    {
      id: 5,
      category: "Studied",
      subCategory: Studied_SubCategory,
      itemList: Studied,
    },
    {
      id: 6,
      category: "Failure",
      subCategory: Failure_SubCategory,
      itemList: Failure,
    },
  ],
  page_from: 0,
  page_to: 10,
};

export default articles;
