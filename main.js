console.log('The story begins');

function percentageShare(totalShare, totalShareValue, totalOutstandingShares, foundersArray) {
    const equalSharePercentage = totalShare/3
    const equalShareValue = totalShareValue/3
    const equalOutstandingShareValue = totalOutstandingShares/3
    const printShareValue = `The total percentage of shares is ${totalShare}.\n It has a value of ${totalShareValue}.\nIt has ${totalOutstandingShares} number of shares.\n${foundersArray[0]} gets a share of ${equalSharePercentage}%, which is an outstanding share of ${equalOutstandingShareValue} shares at a value of ${equalShareValue}.`
    return printShareValue
}

const myFounders = ['mah', 'pet', 'zul']
console.log(percentageShare(100, 1000000000, 1000000, myFounders));


const form = document.querySelector('form')
// form.addEventListener('submit', (e) => {
//     // e.preventDefault()
//     alert('Received!')
// } )


// const button = document.querySelector('')