var express = require('express');

var router = express.Router();

router.route("/").get(
    function(req, res){
        // res.sendFile(__dirname + "/views/index.html");
        var data = {
            title: "Welcome to GTM",
            contactData: [
                {
                    playerName: "Good Joe",
                    commander: "Edric",
                    style: "(JANK AND DRAW CARDS) X 100000000",
                    email:"IWillDoThings....Eventually@Jank.com"
                },
                {
                    playerName:"Infect Joe",
                    commander:"saint Traft",
                    style:"'I want to win' - Infect Joe",
                    email:"IWillNotEndUpWinning@IWinn.com"
                },
                {
                    playerName:"Zac",
                    commander:"Inalla",
                    style:"Control",
                    email:"ISaidNo@Control.com"
                },
                {
                    playerName:"Steven",
                    commander:"Locus God",
                    style:"Combo",
                    email:"IdidntKnowThisComboExisted@BreakTheGame.com"
                },
                {
                    playerName:"Daniel",
                    commander:"Blade Wing",
                    style:"Budget",
                    email:"Daniella@Budget.com"
                },
                {
                    playerName:"Mr Cage",
                    commander:"Narsett",
                    style:"Eye of The Storm",
                    email:"IAmNotCage@NickCage.com"
                }
            ]
        };
        res.render("index", data);
    }
);

router.route("/items").get(
    function(req, res){
        // TODO: Get model from database
        // var model = repo.getContactUsData();
    
        var model = {
            title: "Items Page",
            Items: [
                {
                    name:"Edric, Spy Master of Trest",
                    image:"",
                    price:"$2.50",
                    description: "Draw cards and Group hug"
                },
                {
                    name:"Geist of Saint Traft",
                    image:"",
                    price:"$27.00",
                    description: "Angels and voltron me up"
                },
                {
                    name:"Inalla, Archmage Ritualist",
                    image:"",
                    price:"$1.98",
                    description: "Only have the Wizzards"
                },
                {
                    name:"The Locus God",
                    image:"",
                    price:"$13.00",
                    description: "Draw Cards and get 1/1's ya.."
                },
                {
                    name:"Bladewing the Risen",
                    image:"",
                    price:"$4.50",
                    description: "Im not as good as my price makes me out to be"
                },
                {
                    name:"Narset, Enlightened Master",
                    image:"",
                    price:"$2.00",
                    description: "Who doesnt like Free Stuff"
                }
            ]
        };
    
        // res.sendFile(__dirname + "/views/contactUs.html");
        res.render("items", model);
    }
);

router.route("/order").get(
    function(req, res){
        var order={
            title: "Orders"
        }

        res.render("order",order)
    }
);


module.exports = router;