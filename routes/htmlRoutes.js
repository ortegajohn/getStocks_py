var db = require("../models");
var sequelize = require("sequelize");
var request = require('request');

module.exports = function(app) {
  // // hmtl route to display homepage (index.html)
  // app.get("/", function(req, res) {
  //   res.render("index");
  // });

  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  
  app.get("/", function(req, res2) {
    // console.log(req)
    // console.log("redirected here!")
    // console.log("Object.keys(req): ", Object.keys(req));

        send_this = []
        request('http://127.0.0.1:5000/companies', { json: true }, (err, res, body) => {
          if (err) { return console.log(err); }
          console.log("qqqZAZqqq: ", body)
          var currentDate = Date.now();


          for(i = 0; i < body.length; i++){
            var random = Math.floor((Math.random() * 10000) + 1);
            var id_of_stock = currentDate.toString() + random.toString()
            
            send_this[i] = {
              price : body[i][0].price,
              ticker : body[i][0].symbol,
              id : id_of_stock
            }
            
          }

          // send_this.price = body[0][0].price
          // send_this.ticker = body[0][0].symbol  
          // console.log("currentDate: ", currentDate.toString())
          // send_this.id = currentDate.toString()
          console.log("send_thisA: ", send_this)
          res2.render("index", { stocks: send_this });
  });
  
    // if(req.user !== undefined  ){
    //   db.Stocks.findAll({

    //     where: sequelize.where(
    //       sequelize.literal('user_id'),
    //       '=',
    //       req.user.id
    //     )
    //   }).then(function(dbStocks) {
    //     // var hbsObject = {
    //     //   examples: dbStocks
    //     // };
    //     // console.log("hbsObject: " + JSON.stringify(hbsObject));
    //     console.log("Object.keys(dbStocks): ", Object.keys(dbStocks));
    //     res.render("index", { stocks: dbStocks });
    //     // location.reload();
    //     // return res.redirect("/");
    //   });
    // }else{

    //   db.Stocks.findAll({
    //     where: {
    //       user_id: {
    //         $eq: null
    //       }
    //   }
    //   }).then(function(dbStocks) {
    //     // var hbsObject = {
    //     //   examples: dbStocks
    //     // };
    //     // console.log("hbsObject: " + JSON.stringify(hbsObject));
    //     console.log("Object.keys(dbStocks): ", Object.keys(dbStocks));
    //     res.render("index", { stocks: dbStocks });
    //     // location.reload();
    //     // return res.redirect("/");
    //   });
    // }

   
  });



  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Stocks.findOne({ where: { id: req.params.id } }).then(function(
      dbStocks
    ) {
      res.render("Stocks", {
        example: dbStocks
      });
    });
  });
};

