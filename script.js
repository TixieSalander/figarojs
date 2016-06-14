function element_from_array( tableau ) {
    var randomi = Math.random() * tableau.length | 0;
    return tableau[randomi];
}

var gens = {
    'utilisateurs' : ["ouvrier", "paysan", "patron de ma PME", "chef d'entreprise", "expatrié en Suisse", "militaire"],
    'gentils_pluriel' : ["les bons français", "les vrais français", "les français de souche", "les honnêtes français", "les vrais patriotes", "les français qui aiment leur pays"],
    'gentils_singulier' : ["Nicolas Sarkozy", "Jean-François Copé", "Nadine Morano", "Alain Juppé", "Marine Le Pen", "Claude Guéant", "Patrick Balkany", "Eric Zemmour", "Alain Soral", "le général De Gaulle", "Jacques Chirac", "François Fillon"],
    'nous' : ["la France qui se lève tôt", "la France qui bosse", "la vraie France", "la France chrétienne", "la France traditionelle"],
    'gentils_groupes' : ["de l'UMP", "du FN", "du MEDEF", "de ma PME"],
    'mechants_pluriel' : ["les gauchistes", "les bobos", "les gauchos", "les arabes", "les français de papiers", "les assistés", "les chômeurs", "les bien-pensants", "les musulmans", "les gauchos bobos"],
    'mechants_singulier' : ["Hollande", "Taubira", "Royal", "Mohammed", "l'immigré", "la france qui fout rien", "la racaille", "la banlieue"],
    'mechants_groupes' : ["du PS", "de la LICRA", "du gouvernement", "de la gauche"],
}

var intros = [
    "BRAVO!!! On voit où part l'argent de %nous% !! Pour aider %mechants_pluriel% et %mechants_pluriel% grâce aux idiots %mechants_groupes%",
    "En tant que %utilisateurs%, ça me fait mal de voir ce qui arrive a %gentils_singulier%",
    "En tant que %utilisateurs%, je n'aime pas voir à quel point on persécute %gentils_pluriel%",
    "Je suis %utilisateurs% et la position %mechants_groupes% me dégoute profondément",
    "Je suis %utilisateurs% et je soutiens les idées %gentils_groupes% dans cette histoire",
];

var conclusions = [
    "VIVEMENT que %gentils_singulier% vienne faire le ménage !!!!!!",
    "%gentils_singulier% VITE!!!",
    "RAS LE BOL DE %mechants_singulier% !",
    "%gentils_singulier% 2017!!!!!!! ON EN A BESOIN !!!"
];

function remplir_phrase_avec( phrase, gens ) {
    return phrase.replace( /%(\w+)%/g, function(full, index) {
        return element_from_array( gens[index] );
    });
}

function commentaire_random() {
    var modele_intro = element_from_array(intros),
        modele_conclusion = element_from_array(conclusions),
        intro = remplir_phrase_avec( modele_intro, gens ),
        conclusion = remplir_phrase_avec( modele_conclusion, gens );
    return intro + ", " + conclusion;
}

var comment_content = document.getElementById("commentcontent");

function nouveau_commentaire() {
    comment_content.innerHTML = commentaire_random();
}

nouveau_commentaire();

var bouton = document.getElementById("refresh");

bouton.addEventListener( 'click', function() {
  nouveau_commentaire();
});
