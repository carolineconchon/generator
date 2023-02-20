// array of sentences used as data
const sentences = [
    'Fais toi confiance, les choses arrivent pour une raison',
    'N’oublie jamais que tu ne peux pas éclore si il ne pleut pas',
    'Sois toi même pour être aimé pour ce que tu es, plutot que ce que tu n\'es pas',
    'Tu es parfait.e comme tu es',
    'Entoure toi des personnes qui t\'aimes inconditionellement',
    'Je suis reconnaissant.e de t\'avoir dans ma vie',
    'Je t\'envoie 1000 calins pour quand tu as besoin',
    'Notre point commun que je préfére c\'est notre capacité à être bizzare',
    'Je crois en toi',
    'Ca va aller, promis',
    'Fais les choses pour toi',
    't\as le droit d\'être heureux.e',
    'Avancer n\'est pas linéaire',
    '<3',
    'Ma main sera toujours là pour t\accompagner',
    'Tu es courageux.e',
    'Je tiens à toi',
    '\"Toujours en cercle serré, toujours debout\" Fauve',
    'Tu comptes pour moi',
    'Tu es une belle personne',    
];

//function

function generator() {
    const randomSentence = sentences[Math.floor(Math.random()* sentences.length)];
    return randomSentence;

}
const button = document.getElementById("button");
const p = document.getElementById("sentence");

button.addEventListener("click", function() {
    p.innerHTML = generator();
});