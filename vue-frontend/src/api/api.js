const {
  ROOT_MY_API,
  ROOT_FUND_API,
  ROOT_FUND_NEWS_API,
  ROOT_SUGGEST_API,
} = process.env;

module.exports = {
  singleFundData: ROOT_FUND_API,
  fundListData: ROOT_FUND_NEWS_API + "/FundMNFInfo",
  getDatabaseFundList: ROOT_MY_API + "/getAllFund",
  fundSuggest: ROOT_SUGGEST_API + "/FundSearch/api/FundSearchAPI.ashx",
  addFundToDatabase: ROOT_MY_API + "/addFund",
};
