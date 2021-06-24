var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
];

//print product names only

var product_names=products.map(item=>item.name);
console.log(product_names);

//print all product names in uppercase

var p_names=products.map(item=>item.name.toUpperCase());
console.log(p_names);

//print all products whose mrp<50

console.log("products whose mrp<50");
var pro=products.filter(item=>item.mrp<50);
console.log(pro);

//print outof stock items

console.log("out of stock items");
var out_stock_items=products.filter(item=>item.aval_qty<1);
console.log(out_stock_items);

//if mrp>55 add offer 5% <50 offer 0%
var offer=products.filter(item=>item.mrp>50?item.offer="5%":item.offer="0%")
console.log(offer);

//costly product
console.log("costly product");
var costly=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2);
console.log(costly);

//low cost product
console.log("low cost product");
var low_cost=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2);
console.log(low_cost);


//search for carrot
console.log("search result");
var pro_search=products.find(item=>item.name=="carrot");
console.log(pro_search);

//is there produts greater than rs 50
var is_available=products.some(item=>item.mrp>50);
console.log(is_available);