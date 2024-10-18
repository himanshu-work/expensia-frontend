import React from "react";

import { ReactComponent as IncomeIcon } from "../../../assets/icons/salaryIncome.svg";
import { ReactComponent as Food } from "../../../assets/icons/food.svg";
import { ReactComponent as House } from "../../../assets/icons/house.svg";
import { ReactComponent as Transport } from "../../../assets/icons/car.svg";
import { ReactComponent as Cloth } from "../../../assets/icons/cloth.svg";
import { ReactComponent as Health } from "../../../assets/icons/health.svg";
import { ReactComponent as Education } from "../../../assets/icons/education.svg";
import { ReactComponent as Invest } from "../../../assets/icons/invest.svg";
import { ReactComponent as Gold } from "../../../assets/icons/gold.svg";
import { ReactComponent as Other } from "../../../assets/icons/other.svg";
import { ReactComponent as Money } from "../../../assets/icons/money.svg";

export const CATEGORY_ICON_CONFIG = {
  Salary: Money,
  Dividends: IncomeIcon,
  Investments: IncomeIcon,
  Food: Food,
  Housing: House,
  Transportation: Transport,
  Clothing: Cloth,
  Healthcare: Health,
  Education: Education,
  Stocks: Invest,
  "Mutual Funds": Invest,
  Bonds: Invest,
  ETF: Invest,
  Gold: Gold,
  "Real estate": Invest,
  Other: Other,
  Rental: Other,
  Utility: Other,
};
function Category({ data: { category: label } }) {
  const IconComponent = CATEGORY_ICON_CONFIG[label];

  return (
    <div className="flex gap-2 text-s items-center">
      <div className="category-accent-color mr-2">
        {IconComponent && (
          <div>
            <IconComponent className="category-accent-color" />
          </div>
        )}
      </div>

      {label}
    </div>
  );
}

export default Category;
