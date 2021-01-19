// const lib = require('./lib/moment')

var weekBeurt = function(){
    var weekNr =  moment().week();
    var theirTurn = weekNr%6;
    switch(theirTurn){
        case 0:
            return "Onno en Wessel";
        case 1:
            return "Annemien en Lise";
        case 2:
            return "Simon en Wouter";
        case 3:
            return "Flip en Sten";
        case 4:
            return "Isabel en Marieke";
        case 5:
            return "Nadia en Eline";
    }
};

var prullenBakken = function(){
    var weekNr =  moment().week();
    var theirTurn = (weekNr-1)%6;
    switch(theirTurn){
        case 0:
            return "Onno en Wessel";
        case 1:
            return "Annemien en Lise";
        case 2:
            return "Simon en Wouter";
        case 3:
            return "Flip en Sten";
        case 4:
            return "Isabel en Marieke";
        case 5:
            return "Nadia en Eline";
    }
};