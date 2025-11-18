const NAMES_LIBRARY_DATA = {
  pseudoNouns: [
    "aloe","basilic","menthe","lavande","sauge","thym","romarin","origan","persil","verveine","jasmin","tulipe","rose","lys","iris","lotus","pivoine","fuchsia","geranium","dahlia","yucca","bambou","pin","chene","erable","acacia","azalee","trefle","papyrus","monstera","agave","sedum","hosta","mimosa","gaura","salvia","lierre","orbea","aralia","prunelle","bleuet","camomille","melisse","coriandre","ciboulette","lin","chanvre","aloes","mentha"
  ],
  pseudoAdjectives: [
    "doux",
    "calme",
    "pur",
    "clair",
    "pale",
    "vif",
    "sobre",
    "simple",
    "sage",
    "leger",
    "frais",
    "souple",
    "subtil",
    "brut",
    "tendre",
    "serein",
    "vaporeux",
    "fluide",
    "dense",
    "humble",
    "noble",
    "lent",
    "rapide",
    "fort",
    "fin",
    "neuf",
    "ancien",
    "neutre",
    "sec",
    "moelleux",
    "brumeux",
    "radieux",
    "vibrant",
    "epais",
    "aerien",
    "neigeux",
    "marin",
    "forestier",
    "mince",
    "large",
    "court",
    "rond",
    "ferme"
  ],
  pseudoLocations: [
    "foret","prairie","clairiere","vallee","riviere","ruisseau","marecage","dune","plage","colline","plateau","grotte","sentier","lagon","baie","crique","oasis","bosquet","haie","sousbois","mare","marais","archipel","ilot","lagune","recif","toundra","steppe","taiga","canyon","desert","falaises","cascade","versant","source","embouchure","delta","promontoire","sapiniere","pineraie","bambouseraie","rivage","littoral","lande","sapineraie","tourbiere","belvedere","corniche"

  ]
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NAMES_LIBRARY_DATA;
  module.exports.default = NAMES_LIBRARY_DATA;
}
if (typeof window !== 'undefined') {
  window.NAMES_LIBRARY_DATA = NAMES_LIBRARY_DATA;
}
