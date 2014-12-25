function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function element_from_array(tableau) {
    var randomi = getRandomInt(0, window[tableau].length - 1);
    return window[tableau][randomi];
}
var utilisateurs = ["ouvrier", "paysan", "patron de ma PME", "chef d'entreprise", "expatrié en Suisse", "militaire"];
var gentils_pluriel = ["les bons français", "les vrais français", "les français de souche", "les honnêtes français", "les vrais patriotes", "les français qui aiment leur pays"];
var gentils_singulier = ["Nicolas Sarkozy", "Jean-François Copé", "Nadine Morano", "Alain Juppé", "Marine Le Pen", "Claude Guéant", "Patrick Balkany", "Eric Zemmour", "Alain Soral", "le général De Gaulle", "Jacques Chirac", "François Fillon"];
var nous = ["la France qui se lève tôt", "la France qui bosse", "la vraie France", "la France chrétienne", "la France traditionelle"];
var gentils_groupes = ["de l'UMP", "du FN", "du MEDEF", "de ma PME"];
var mechants_pluriel = ["les gauchistes", "les bobos", "les gauchos", "les arabes", "les français de papiers", "les assistés", "les chômeurs", "les bien-pensants", "les musulmans", "les gauchos bobos"];
var mechants_singulier = ["Hollande", "Taubira", "Royal", "Mohammed", "l'immigré", "la france qui fout rien", "la racaille", "la banlieue"];
var mechants_groupes = ["du PS", "de la LICRA", "du gouvernement", "de la gauche"];


function intro1() {
    var nous = element_from_array('nous');
    var eux = element_from_array('mechants_pluriel');
    var autres = element_from_array('mechants_pluriel');
    var groupe = element_from_array('mechants_groupes');
    return ("BRAVO!!! On voit où part l'argent de " + nous + " !! Pour aider " + eux + " et " + autres + " grâce aux idiots " + groupe);
}

function intro2() {
    var user = element_from_array('utilisateurs');
    var gentils = element_from_array('gentils_singulier');
    return ("En tant que " + user + ", ça me fait mal de voir ce qui arrive à " + gentils);
}

function intro3() {
    var user = element_from_array('utilisateurs');
    var gentils = element_from_array('gentils_pluriel');
    return ("En tant que " + user + ", je n'aime pas voir à quel point on persécute " + gentils);
}

function intro4() {
    var user = element_from_array('utilisateurs');
    var groupe = element_from_array('mechants_groupes');
    return ("Je suis " + user + " et la position " + groupe + " me dégoute profondément");
}

function intro5() {
    var user = element_from_array('utilisateurs');
    var groupe = element_from_array('gentils_groupes');
    return ("Je suis " + user + " et je soutiens les idées " + groupe + " dans cette histoire");
}

var intros = [intro1(), intro2(), intro3(), intro4(), intro5()];

function randomintro() {
    var rintro = element_from_array('intros');
    return rintro;
}


function conclusion1() {
    var gentil = element_from_array('gentils_singulier');
    return (" VIVEMENT que " + gentil + " vienne faire le ménage !!!!!!");
}

function conclusion2() {
    var gentil = element_from_array('gentils_singulier');
    return (" " + gentil + " VITE!!!");
}

function conclusion3() {
    var mechant = element_from_array('mechants_singulier');
    return (" RAS LE BOL DE " + mechant + " !");
}

function conclusion4() {
    var gentil = element_from_array('gentils_singulier');
    return (" " + gentil + " 2017!!!!!!! ON EN A BESOIN !!!");
}

var conclusions = [conclusion1(), conclusion2(), conclusion3(), conclusion4()];

function randomconclu() {
    var rconclu = element_from_array('conclusions');
    return rconclu;
}


document.getElementById("commentcontent").innerHTML = randomintro() + ", " + randomconclu();
