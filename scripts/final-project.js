const getRoundDetails = async (roundName) => {
    try {
        const params = new URLSearchParams({
            league: 1032,
            season: 2023,
            round: roundName,
            
        });
        const endpoint = "fixtures/"
        
        const response = await fetch(`https://v3.football.api-sports.io/${endpoint}?${params}`, {
        
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "730c79a1e540bef859ec0254afdea392"
            }
        });

        if (response.ok) {
            const data = await response.json();
            displayFixtures(data);
            
            return data
            
        } else {
            console.log("Request failed with status:", response.status);

        }
    } catch (err) {
        console.error("An error occurred:", err);
    }
}


const getRounds = async () => {
    try {
        const params = new URLSearchParams({
            league: 1032,
            season: 2023,
            
            
        });
        const endpoint = "fixtures/rounds/"
        
        const response = await fetch(`https://v3.football.api-sports.io/${endpoint}?${params}`, {
        
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "730c79a1e540bef859ec0254afdea392"
            }
        });

        if (response.ok) {
            const data = await response.json();
            displayRounds(data);
            
            return data
            
        } else {
            console.log("Request failed with status:", response.status);

        }
    } catch (err) {
        console.error("An error occurred:", err);
    }
}



const reset = () => 
  {
    const fixtureList = document.getElementById("fixtureList"); 
   

    while (fixtureList.firstChild) {
        fixtureList.removeChild(fixtureList.firstChild);
    }
  };


function executeFunction(roundname) {
    //clear the screen first
    reset();
    //get the rounds
    getRoundDetails(roundname);
    
    //console.log(`Executing function for round: ${round}`);
}




function displayRounds(data){

    const roundMain = document.getElementById("roundList");
    const roundResponse = data.response;
    console.log(roundResponse);

    
    
    roundResponse.forEach(round =>{
        console.log("round" + round);
        // Round container 
        const roundContainer =  document.createElement("div");
        roundContainer.classList.add("main-round");

        // create the li
        const listItem = document.createElement("li");
        listItem.classList.add("round-li");
        listItem.textContent = round;
        listItem.addEventListener("click", () =>executeFunction(round))

        roundContainer.appendChild(listItem);

        roundMain.appendChild(roundContainer);

    }
    )
    }



function displayFixtures(data) {
    const fixtureList = document.getElementById("fixtureList");
    const matchList = data.response;
    const round = data.parameters.round;
    const roundTitle = document.createElement("h2");
    roundTitle.textContent = `Round ${round}`;
    roundTitle.classList.add("round-title")
    fixtureList.appendChild(roundTitle);

    matchList.forEach(fixture => {
        // Create the div
        const fixtureDiv = document.createElement("div");
        fixtureDiv.classList.add("fixture");

        // Date
        const dateElement = document.createElement("p");
        dateElement.classList.add("date");
        const date = new Date(fixture.fixture.date);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        const time = fixture.fixture.status.long;
        dateElement.textContent = `Date: ${formattedDate} Time: ${time}`;
        fixtureDiv.appendChild(dateElement);

        // Home Team Container
        const homeTeamContainer = document.createElement("div");
        homeTeamContainer.classList.add("team-container");

        // Home Team Name
        const homeTeamName = document.createElement("p");
        homeTeamName.classList.add("team-name");
        homeTeamName.textContent = fixture.teams.home.name;
        homeTeamContainer.appendChild(homeTeamName);

        // Home Team Logo
        const logoHomeTeam = document.createElement("img");
        logoHomeTeam.classList.add("team-logo");
        logoHomeTeam.src = fixture.teams.home.logo;
        homeTeamContainer.appendChild(logoHomeTeam);

        fixtureDiv.appendChild(homeTeamContainer);

        // Away Team Container
        const awayTeamContainer = document.createElement("div");
        awayTeamContainer.classList.add("team-container");

        // Away Team Name
        const awayTeamName = document.createElement("p");
        awayTeamName.classList.add("team-name");
        awayTeamName.textContent = fixture.teams.away.name;
        awayTeamContainer.appendChild(awayTeamName);

        // Away Team Logo
        const logoAwayTeam = document.createElement("img");
        logoAwayTeam.classList.add("team-logo");
        logoAwayTeam.src = fixture.teams.away.logo;
        awayTeamContainer.appendChild(logoAwayTeam);

        fixtureDiv.appendChild(awayTeamContainer);

        // Append the fixture element to the fixture list
        fixtureList.appendChild(fixtureDiv);
    });
}





getRounds();

