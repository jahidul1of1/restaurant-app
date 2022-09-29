const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/mysql.config");

connection.connect();

//INSERT INTO `products` (`id`, `name`, `quantity`, `price`, `image`) VALUES (NULL, 'Burgar', '2', '100', 'asdfas/adfasdf/adsfasdf')

app.use(cors());
app.use(require("body-parser").json());
app.post("/addproduct", (req, res) => {
  const { name, quantity, price, image } = req.body;
  connection.query(
    "INSERT INTO `products` (`name`, `quantity`, `price`, `image`) VALUES (?, ?, ?, ?)",
    [name, quantity, price, image],
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    }
  );
  res.send("success");
});
app.get("/getorders", (req, res)=>{
  connection.query("SELECT * FROM `orders`", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results);
  });
})


app.post("/placeorder", (req, res) => {
  let { name, address, cart, total, customer_id, phone_no, comment} = req.body;
  cart= JSON.stringify(cart);
  try{
    connection.query(
    "INSERT INTO `orders` (`name`, `address`,`cart`, `total`, `customer_id`, `phone_no`,`comment`) VALUES ( ?, ?, ?, ?, ?, ?, ?)",
    [name, address, cart, total, customer_id, phone_no, comment],
    function (error, result, fields) {
      if (error) throw error;
      console.log("the solution is: ", result);
    }
  )
  }
  catch(err){
    res.status(500).send(err);
  };
  res.send(["success"]);
});




// app.post("/placeorder", (req, res) => {
// console.log(res)
//   res.send({ok: "success"});
// });
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
