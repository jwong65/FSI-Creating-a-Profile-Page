let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.textContent= 'Rizzo'

//This would have be the append('Rizzo)
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

//You append dogImage into dogContent that way it is in the div
let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)
//append the Details into dogContent

let header3 = document.createElement('h3')
header3.textContent ="Description"
dogDetails.append(header3)

//header 3 is appended into dog details.

let paragraph = document.createElement('p')
paragraph.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append(paragraph);

let headerThreeTwo = document.createElement('h3');
headerThreeTwo.textContent = 'Feeding times:'
dogDetails.append(headerThreeTwo)

//header three two will be appended into the dog details.


let ul = document.createElement('ul')

let feedingTimes = ['9:00 AM', '12:00 PM', "5:00 PM"]

for (let i=0; i< feedingTimes.length; i++ ){
    let li = document.createElement('li');
    li.textContent=feedingTimes[i];
    ul.append(li)
}

dogDetails.append(ul)

let button  = document.createElement('button')
button.textContent = "Click this button"
button.style.fontSize = '35px'
dogDetails.append(button)

button.addEventListener('click', function(){
    console.log("Button was clicked.")
    ul.remove()
    let link = document.createElement('link')
    link.setAttribute('rel','stylesheet')
    link.setAttribute('href', './styletwo.css')

    let head = document.querySelector('head');
    head.append(link)





    paragraph.setAttribute('id', 'white-text')
})