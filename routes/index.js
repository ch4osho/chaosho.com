const md5 = require("js-md5");
const mysqlConfig = require("../utils/mysqlConfig.js");
var mysql = require("mysql");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "chaos" });
});

router.get("/getAllFund", function (req, res, next) {
  console.log("这是请求get", req.query);
  const { fund_code, optCode } = req.query;
  if (optCode !== md5("chaos_all_fund")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        code: 500,
        desc: "请求失败",
      })
    );
  }

  var connection = mysql.createConnection(mysqlConfig);

  connection.connect();

  connection.query(`SELECT * FROM fund`, function (error, results, fields) {
    if (error) {
      throw error;
    } else {
      var data = {
        data: {
          msg: "获取基金列表成功",
          data: results,
        },
        code: 200,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    }
  });

  connection.end();
});

router.get("/addFund", function (req, res, next) {
  const { fund_code, optCode } = req.query;

  if (optCode !== md5("chaos_add_fund")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        code: 500,
        desc: "请求失败",
      })
    );
  }

  var connection = mysql.createConnection(mysqlConfig);

  connection.connect();

  connection.query(
    `INSERT INTO fund (fund_name, fund_code, fund_desc) VALUES ('${"test"}','${fund_code}','${"test"}')`,
    function (error, results, fields) {
      if (error) {
        throw error;
      } else {
        var data = {
          data: {
            msg: "新增基金成功",
            fund_code,
          },
          code: 200,
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      }
    }
  );

  connection.end();
});

router.get("/deleteFund", function () {});

router.post("/post", function (req, res, next) {
  console.log("这是请求post", req.query);
  var data = {
    data: "这是post请求",
    code: 200,
  };
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify(data));
});

module.exports = router;
