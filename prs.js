//  Script.js 
const rangevalue =  
    document.querySelector(".slider-container .price-slider"); 
const rangeInputvalue =  
    document.querySelectorAll(".range-input input"); 
  
// Set the price gap 
let priceGap = 500; 
  
// Adding event listners to price input elements 
const priceInputvalue =  
    document.querySelectorAll(".price-input input"); 
for (let i = 0; i < priceInputvalue.length; i++) { 
    priceInputvalue[i].addEventListener("input", e => { 
  
        // Parse min and max values of the range input 
        let minp = parseInt(priceInputvalue[0].value); 
        let maxp = parseInt(priceInputvalue[1].value); 
        let diff = maxp - minp 
  
        if (minp < 0) { 
            alert("minimum price cannot be less than 0"); 
            priceInputvalue[0].value = 0; 
            minp = 0; 
        } 
  
        // Validate the input values 
        if (maxp > 10000) { 
            alert("maximum price cannot be greater than 10000"); 
            priceInputvalue[1].value = 10000; 
            maxp = 10000; 
        } 
  
        if (minp > maxp - priceGap) { 
            priceInputvalue[0].value = maxp - priceGap; 
            minp = maxp - priceGap; 
  
            if (minp < 0) { 
                priceInputvalue[0].value = 0; 
                minp = 0; 
            } 
        } 
  
        // Check if the price gap is met  
        // and max price is within the range 
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) { 
            if (e.target.className === "min-input") { 
                rangeInputvalue[0].value = minp; 
                let value1 = rangeInputvalue[0].max; 
                rangevalue.style.left = `${(minp / value1) * 100}%`; 
            } 
            else { 
                rangeInputvalue[1].value = maxp; 
                let value2 = rangeInputvalue[1].max; 
                rangevalue.style.right =  
                    `${100 - (maxp / value2) * 100}%`; 
            } 
        } 
    }); 
  
    // Add event listeners to range input elements 
    for (let i = 0; i < rangeInputvalue.length; i++) { 
        rangeInputvalue[i].addEventListener("input", e => { 
            let minVal =  
                parseInt(rangeInputvalue[0].value); 
            let maxVal =  
                parseInt(rangeInputvalue[1].value); 
  
            let diff = maxVal - minVal 
              
            // Check if the price gap is exceeded 
            if (diff < priceGap) { 
              
                // Check if the input is the min range input 
                if (e.target.className === "min-range") { 
                    rangeInputvalue[0].value = maxVal - priceGap; 
                } 
                else { 
                    rangeInputvalue[1].value = minVal + priceGap; 
                } 
            } 
            else { 
              
                // Update price inputs and range progress 
                priceInputvalue[0].value = minVal; 
                priceInputvalue[1].value = maxVal; 
                rangevalue.style.left = 
                    `${(minVal / rangeInputvalue[0].max) * 100}%`; 
                rangevalue.style.right = 
                    `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
            } 
        }); 
    } 
}

// Lorem Ipsum Generator
// Script.js 
  
// Constants for tag options 
const tagOptions = [ 
    "p", "h1", "h2", 
    "h3", "h4", "h5", 
    "h6", "span", 
]; 
  
// Get DOM elements 
const optionsContainer = 
    document.querySelector(".options"); 
const outputContainer = 
    document.querySelector(".output"); 
const tagsSelect = 
    document.getElementById("tags"); 
const paragraphsSlider = 
    document.getElementById( 
        "paragraphs"
    ); 
const wordsSlider = 
    document.getElementById("words"); 
const paragraphsValue = 
    document.getElementById( 
        "paragraphsValue"
    ); 
const wordsValue = 
    document.getElementById( 
        "wordsValue"
    ); 
  
// Create Options UI 
function createOptionsUI() { 
  
//  With tag options, fill up the <select> element. 
    tagOptions.forEach((tag) => { 
        const option = 
            document.createElement( 
                "option"
            ); 
        option.value = tag; 
        option.textContent = `<${tag}>`; 
        tagsSelect.appendChild(option); 
    }); 
  
//  Event listeners for sliders 
    paragraphsSlider.addEventListener( 
        "input", 
        updateParagraphsValue 
    ); 
    wordsSlider.addEventListener( 
        "input", 
        updateWordsValue 
    ); 
  
    const generateButton = 
        document.getElementById( 
            "generate"
        ); 
    generateButton.addEventListener( 
        "click", 
        generateLoremIpsum 
    ); 
} 
  
// Update the displayed value for Paragraphs 
function updateParagraphsValue() { 
    paragraphsValue.textContent = 
        paragraphsSlider.value; 
} 
  
// Words per Paragraph have got  
// to be updated on the display 
function updateWordsValue() { 
    wordsValue.textContent = 
        wordsSlider.value; 
} 
  
// Generate Lorem Ipsum text 
function generateLoremIpsum() { 
    const paragraphs = parseInt( 
        paragraphsSlider.value 
    ); 
    const tag = 
        document.getElementById( 
            "tags"
        ).value; 
    const includeHtml = 
        document.getElementById( 
            "include"
        ).value; 
    const wordsPerParagraph = parseInt( 
        wordsSlider.value 
    ); 
  
    const loremIpsumText = generateText( 
        paragraphs, 
        tag, 
        includeHtml, 
        wordsPerParagraph 
    ); 
    displayLoremIpsum(loremIpsumText); 
} 
  
// Function to generate Lorem Ipsum text 
function generateText( 
    paragraphs, 
    tag, 
    includeHtml, 
    wordsPerParagraph 
) { 
      
    //  Use a placeholder text as an  
    //  Example for illustrating. 
    const placeholderText = 
        `Lorem ipsum dolor sit amet  
        consectetur adipiscing elit sed  
        do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua.`; 
  
    // Create an array of paragraphs 
    const loremIpsumArray = new Array( 
        paragraphs 
    ).fill(""); 
  
    // Generate words for each paragraph 
    for ( 
        let i = 0; 
        i < paragraphs; 
        i++ 
    ) { 
        const words = generateWords( 
            wordsPerParagraph 
        ); 
        loremIpsumArray[i] = 
            includeHtml === "Yes"
                ? `<${tag}>${words}</${tag}>` 
                : words; 
    } 
  
    // Join paragraphs into a single string 
    return loremIpsumArray.join("\n"); 
} 
  
// Function to generate a specified number of words 
function generateWords(numWords) { 
      
    // Lorem Ipsum text for demonstration purposes 
    const loremIpsumText = 
        `Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc.`; 
  
  
    // Split the Lorem Ipsum text into words 
    const words = 
        loremIpsumText.split(" "); 
  
    // Ensure the number of words requested is  
    // within the bounds of the available words 
    if (numWords <= words.length) { 
        return words 
            .slice(0, numWords) 
            .join(" "); 
    } else { 
        return words.join(" "); 
    } 
} 
  
// Display Lorem Ipsum text 
function displayLoremIpsum(text) { 
    outputContainer.innerHTML = text; 
} 
  
// Initialize the app 
createOptionsUI();

// Export Data
// Script.js 
let CSV = document.getElementById('csv'); 
let button = document.getElementById('btn'); 
CSV.addEventListener('change', (event) => { 
    const file = event.target.files[0]; 
    const reader = new FileReader(); 
  
    reader.onload = (e) => { 
        const content = e.target.result; 
        const rows = content.split('\n') 
            .map(row => row.split(',')); 
  
        const table =  
            document.getElementById('table'); 
        table.innerHTML = ''; 
  
        for (let i = 0; i < rows.length; i++) { 
            let tr = document.createElement('tr'); 
            for (let j = 0; j < rows[i].length; j++) { 
                let td = document.createElement('td'); 
                td.textContent = rows[i][j]; 
                tr.appendChild(td);} 
            table.appendChild(tr);} 
        CSV.style.display = 'none'; 
        button.style.display = 'block';}; 
  
    reader.readAsText(file); 
}); 
  
button.addEventListener('click', () => { 
    const rows = document.querySelectorAll('#table tr'); 
    let csvContent = ''; 
  
    for (let i = 0; i < rows.length; i++) { 
        let row = rows[i]; 
        let cols = row.querySelectorAll('td'); 
        let rowContent = ''; 
  
        for (let j = 0; j < cols.length; j++) { 
            let col = cols[j]; 
            rowContent += col.textContent + ',';} 
  
        csvContent += rowContent.slice(0, -1) + '\n';} 
  
    const blob = new Blob([csvContent],  
        { type: 'text/csv' }); 
    const url = window.URL.createObjectURL(blob); 
  
    const a = document.createElement('a'); 
    a.href = url; 
    a.download = 'exported_data.csv'; 
    document.body.appendChild(a); 
    a.click(); 
    document.body.removeChild(a); 
    window.URL.revokeObjectURL(url); 
});

// Search a Github User
// script.js 
  
let api = 
"https://api.github.com/users/"; 
  
let fetch = 
    document.createElement("script"); 
fetch.src = 
`https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js`; 
  
fetch.integrity = 
`ha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==`; 
  
fetch.crossOrigin = "anonymous"; 
document.head.appendChild(fetch); 
let main = 
    document.getElementById("main"); 
let inputForm = 
    document.getElementById("userInput"); 
let inputBox = 
    document.getElementById("inputBox"); 
const userGetFunction = (name) => { 
    axios(api + name) 
        .then((response) => { 
            userCard(response.data); 
            repoGetFunction(name);}) 
        .catch((err) => { 
            if ( 
                err.response.status == 
                404) { 
                errorFunction( 
"No profile with this username");}});} 
const repoGetFunction = (name) => { 
    axios( 
        api + 
        name + 
        "/repos?sort=created") 
        .then((response) => { 
            repoCardFunction( 
                response.data);}) 
        .catch((err) => { 
            errorFunction( 
                "Problem fetching repos");});} 
const userCard = (user) => { 
    let id = user.name || user.login; 
    let info = user.bio 
        ? `<p>${user.bio}</p>`: ""; 
    let cardElement = ` 
<div class="card"> 
<div> 
<img src="${user.avatar_url}" 
     alt="${user.name}" 
     class="avatar"> 
</div> 
  
<div class="user-info"> 
<h2>${id}</h2>${info}<ul> 
<li>${user.followers} <strong>Followers</strong></li> 
<li>${user.following} <strong>Following</strong></li> 
<li>${user.public_repos} <strong>Repos</strong></li> 
</ul> 
<div id="repos"></div> 
</div> 
</div>`; 
    main.innerHTML = cardElement} 
  
const errorFunction = (error) => { 
    let cardHTML = ` 
<div class="card"> 
<h1>${error}</h1> 
</div>`; 
    main.innerHTML = cardHTML} 
  
const repoCardFunction = (repos) => { 
    let reposElement = 
        document.getElementById( 
            "repos"); 
    for (let i = 0; i < 5 && i < repos.length; i++) { 
        let repo = repos[i]; 
        let repoEl = document.createElement("a"); 
        repoEl.classList.add("repo"); 
        repoEl.href = repo.html_url; 
        repoEl.target = "_blank"; 
        repoEl.innerText = repo.name; 
        reposElement.appendChild(repoEl);}} 
inputForm.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    let user = inputBox.value; 
    if (user) { 
        userGetFunction(user); 
        inputBox.value = "";}});

        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }
