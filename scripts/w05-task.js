/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');

var templeList = [];
/* async displayTemples Function */

const displayTemples = (temples) => 
{
    temples.forEach(element => {
        let article = document.createElement('article');
        
        let h3 = document.createElement('h3');
        h3.textContent = element['templeName'];

        let img = document.createElement('img');
        img.src = element['imageUrl'];

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}



/* async getTemples Function using fetch()*/

const getTemples = async () =>
{
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
    const response = await fetch(url);
    
    if (response.ok)
    {
        templeList = await response.json()
        //console.log(templeList);
        displayTemples(templeList);
    }
}
/* reset Function */
const reset = () => 
  {
    const templesElement = document.querySelector('#temples'); 
   

    while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
    }
  };
  
  // Call the 'reset' function when needed
  reset();
  

/* sortBy Function */

const sortBy = (temples) =>
{
    reset();
    //temples = getTemples();
    //console.log(templeList);
    let filter = document.querySelector('#sortBy').value;
    console.log(filter);
    //const templeList = getTemples();
    switch (filter) {
        case "utah":
            
        //console.log(templeList);
        const utahList = [];
        temples.forEach(element => 
            {
                const location = element["location"];
                //console.log(location);
                //console.log(element["location"])
                if (location.includes("Utah"))
                {
                    //console.log("Utah found");
                    //console.log(location);
                    //console.log(element)
                    utahList.push(element);
                    //console.log(utahList);
                    //console.log("New utah added");

                }
            });
            console.log(utahList);
            displayTemples(utahList);
            
            break;
        
        case "notutah":
            
            const noUtahList = [];
            
            temples.forEach(element => 
            {
                const noLocation = element["location"];
                if (!noLocation.includes("Utah"))
                {
                    // console.log("no Utah found");
                    // console.log(location);
                    // console.log(element)
                    noUtahList.push(element);
                    // console.log(noUtahList);
                    // console.log("New non utah added");
                }
            });
            console.log(noUtahList);
            displayTemples(noUtahList);
            break;

        case "older":
            var olderList = [];
            const olderDate = new Date(1950, 0, 1);
            
            temples.forEach(element => 
            {
                const newDate = element["dedicated"];
                const dedicatedDate = new Date(newDate);
                if (dedicatedDate < olderDate )
                {
                    olderList.push(element);
                }
            });
            displayTemples(olderList);
            
            break;

        case "all":
            var temples = getTemples();   
        displayTemples(templeList);
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)})
