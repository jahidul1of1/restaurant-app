const db= require("./mysql.config")
db.connect()
// connection.query(
//   "CREATE TABLE `dry_node`.`products` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `quantity` VARCHAR(100) NOT NULL , `price` FLOAT(50) NOT NULL , `image` VARCHAR(200) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB",
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log("The solution is: ", results);
//   }
// );

// create user table
db.query("CREATE TABLE IF NOT EXISTS `dry_node`.`users` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(100) NOT NULL , `password` VARCHAR(100) NOT NULL , `phone` VARCHAR(100) NOT NULL , `address` VARCHAR(100) NOT NULL , `image` VARCHAR(200) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
})

// create product table
db.query(
  "CREATE TABLE IF NOT EXISTS `dry_node`.`products` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `name` VARCHAR(200) NOT NULL , `price` INT(100) NOT NULL , `image` VARCHAR(200) NOT NULL , `discription` VARCHAR(255) NOT NULL , `quantity` INT(255) NOT NULL , `date` TIMESTAMP(6) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;",
  (error, results, fields) => {
    if (error) throw error;
    console.log("The solution is: ", results);
  }
);
// create order table
/**
 * * order table
 * !params:  name, address, cart, total, customer_id, phone_no, comment
 * @param {string} name
 * @param {string} address
 * @param {json} cart => [{id:1,quantity:1},{id:2,quantity:2}...{id:n,quantity:n}]
 * @param {int} total
 * @param {int} customer_id
 * @param {string} phone_no
 * @param {string} comment
 */
db.query(
  "CREATE TABLE IF NOT EXISTS `dry_node`.`orders` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `address` VARCHAR(100) NOT NULL , `cart` JSON NOT NULL , `total` INT(100) NOT NULL , `customer_id` INT(100) NOT NULL , `phone_no` VARCHAR(100) NOT NULL , `comment` VARCHAR(100) NOT NULL , `date` TIMESTAMP(6) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;",
);

