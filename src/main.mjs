import { fetchDataAsync } from "../src/script.mjs"
import teams from "../src/teamsID.json" assert { type: 'json' };

/** 
 * For use put your API token/key in Key and erase "//"
 */

//const Key = 'PUT HERE YOUR API KEY'

function main(){

    
    const teamsIds = teams["teams-ids"]

    let chain = Promise.resolve(); 
    let i = 1

    //timeout for testing fetch all teams
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    teamsIds.forEach((id) => {
    chain = chain

      // fetch data for this team  
      .then(() => fetchDataAsync(id, Key)) 
    
      //number of teams fetch
      .then(() => console.log(`Team ${i++} already fetch`))  

      //wait 5 second between requests
      .then(() => wait(5000))       
  });

    chain.then(() => console.log("All teams fetched, just wait some time for create a file \nor more fast just look for files in explore"));

}

main()
