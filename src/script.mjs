import { writeFile } from "fs/promises";

let numberFile = 1

export async function fetchDataAsync(idClub, KEY) {
    const URL = "http://api.football-data.org/v4/teams/" + idClub
    const requestOptions = {
        headers : {"X-Auth-Token": KEY},
    };

    try {
      const response = await fetch(URL,requestOptions)

      if(!response.ok){
        throw new Error("Error Detected, not fetch resource");
      }  
      const data = await response.json();
      
      await writeFile(`Teams${numberFile}.json`, JSON.stringify(data, null, 2));
      numberFile++;

    } catch(error) {
        console.error(error);
    }
}
