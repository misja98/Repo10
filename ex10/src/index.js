function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP",
            },
gold: true            
},
002: {
    artist: "Michael Jackson",
            title: "Off the Wall",
            release_year: 1979,
            formats: {
                1: "LP",
                2: "Cassette",
                3: "CD",
            },
gold: true 

    
}
        };
        return myMusic;
    }
console.log(myFunction()[2]);
module.exports = myFunction;