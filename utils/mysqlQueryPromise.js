module.exports = function (connect, sql) {
  return new Promise((resolve, reject) => {
    connect.query(sql, (error, results, fields) => {
      console.log(error);
      if (error) reject(error);
      else {
        results.success = true;
        resolve(results);
      }
    });
  });
};
