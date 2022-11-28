document.write("Exercise 10<br>")

let numberCandidates = parseInt(prompt("Enter the number of candidate:"))
let numberVoters = 0;


function getCandidates() {
    let listCandidates = []
    for (let i=0; i < numberCandidates; i++) {
        let candidateName = prompt(`Enter the name for candidate:${i+1}`)
        let newCandidate = {
            name: candidateName,
            votes: 0
        }
        listCandidates.push(newCandidate)
    }
    return listCandidates
}

function vote(){
    numberVoters = parseInt(prompt("Enter the numbers of voter:"))
    for (let i = 0; i < numberVoters; i++) {
        let prompMessage = "Enter the candidate you vote for, the candidates are: "
        listCandidates.forEach(candidate => {
            prompMessage += candidate.name + ', '
        })
        let votedCandidate = prompt(prompMessage)

        let existingCandidate = listCandidates.filter(candidate => {
            return candidate.name === votedCandidate
        })
        listCandidates[listCandidates.indexOf(existingCandidate[0])].votes += 1
    }
}

let listCandidates = getCandidates()
vote()

listCandidates.sort((a,b) => {
    return b.votes - a.votes;
});

console.log(`The candidate recieved highest vote of ${listCandidates[0].votes} is ${listCandidates[0].name}.`)
console.log('results')
for (let i = 0; i < listCandidates.length; i++) {
    console.log(listCandidates[i].name + ': ' + listCandidates[i].votes + ' votes')
}