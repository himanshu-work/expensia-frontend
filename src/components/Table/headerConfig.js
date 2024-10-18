import Amount from "../Common/Amount/index";
import Badge from "../Common/Badge/index";
import Category from "../Common/Category";
import DateComponent from "../Common/Date/index";
import RecordAction from "../Common/RecordAction";
import Text from "../core/Text/index";

export const TABLE_HEADER_CONFIG = [
  { key: "description", label: "Description", classes: "text-left" },
  { key: "date", label: "Created date", classes: "text-right" },
  {
    key: "transactionAmount",
    label: "Amount",
    classes: "text-left",
  },
  { key: "category", label: "Expensify category", classes: "text-left" },
  { key: "type", label: "Status" },
];
export const TABLE_HEADER_CONFIG_INCOME = [
  { key: "description", label: "Description", classes: "text-left" },
  { key: "date", label: "Created date", classes: "text-right" },
  { key: "amount", label: "Amount", classes: "text-left" },
  { key: "category", label: "Expensify category", classes: "text-left" },
  { key: "action", label: "Edit or Delete Record" },
];

export const TABLE_COMPONENT_CONFIG = {
  amount: Amount,
  transactionAmount: Amount,
  incomeAmout: Amount,
  expenseAmout: Amount,
  investmentAmout: Amount,
  date: DateComponent,
  category: Category,
  description: Text,
  type: Badge,
  action: RecordAction,
};

// export const TABLE_COMPONENT_CONFIG_SECOND = {
//   transactionAmount: Amount,
//   date: DateComponent,
//   category: Category,
//   description: Text,
//   type: Badge,
// };
