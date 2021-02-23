const { ROOT_MY_API, ROOT_FUND_API, ROOT_FUND_NEWS_API } = process.env;

module.exports = {
  singleFundData: ROOT_FUND_API,
  fundListData: ROOT_FUND_NEWS_API + "/FundMNFInfo",
  getDatabaseFundList: ROOT_MY_API + "/getAllFund",
};
