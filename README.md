
# Football Clubs API
A simple way to access football club data using the Football-Data.org API.

Base URL:
http://football-data.org

# How can i use?

1. **Get an API key**  
   - Register at [Football-Data.org](https://www.football-data.org/client/register)  
   - Copy your API key.
   - It's free

2. **Make a request**  
   - After this in file main.mjs put your API key
     ```
     Your API key was send by mail
     Put your API key inside the ''
     ```
   - In teamsID, replace or add a ID's who have
   - After this open your terminal and put a code
    ```
    node main.mjs
    ```

3. **Results**  
    -Finishing, the API gonna create a file, in order of teamsID, for each club. 

# Example


---

## Example Response

```json
{
  "area": {
    "id": 2088,
    "name": "Germany",
    "code": "DEU",
    "flag": "https://crests.football-data.org/759.svg"
  },
  "id": 1,
  "name": "1. FC Köln",
  "shortName": "1. FC Köln",
  "tla": "KOE",
  "crest": "https://crests.football-data.org/1.png",
  "address": "Franz-Kremer-Allee 1 Köln 50937",
  "website": "http://www.fc-koeln.de",
  "founded": 1948,
  "clubColors": "Red / White",
  "venue": "RheinEnergieSTADION",
  "runningCompetitions": [
    {
      "id": 2011,
      "name": "DFB-Pokal",
      "code": "DFB",
      "type": "CUP",
      "emblem": "https://crests.football-data.org/DFB_CUP.png"
    },
    {
      "id": 2002,
      "name": "Bundesliga",
      "code": "BL1",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/BL1.png"
    }
  ],
  "coach": {
    "id": 179967,
    "firstName": "Łukasz",
    "lastName": "Kwasniok",
    "name": "Łukasz Kwasniok",
    "dateOfBirth": "1981-06-12",
    "nationality": "Germany",
    "contract": {
      "start": "2025-07",
      "until": "2028-06"
    }
  },
  "squad": [
    {
      "id": 7015,
      "name": "Matthias Köbbing",
      "position": "Goalkeeper",
      "dateOfBirth": "1997-05-28",
      "nationality": "Germany"
    },
 ....
    {
      "id": 186,
      "name": "Dominique Heintz",
      "position": "Centre-Back",
      "dateOfBirth": "1993-08-15",
      "nationality": "Germany"
    }
  ],
  "staff": [],
  "lastUpdated": "2022-02-25T16:49:46Z"
}
