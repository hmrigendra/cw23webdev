const topn = ["topname1", "topname2", "topname3", "topname4", "topname5", "topname6", "topname7", "topname8", "topname9", "topname10", "topname11"];
const avtr = ["bigcircle2", "bigcircle1", "bigcircle3", "avtrcircle4", "avtrcircle5", "avtrcircle6", "avtrcircle7", "avtrcircle8", "avtrcircle9", "avtrcircle10", "avtrcircle11"];
const pts = ["points1", "points2", "points3", "points4", "points5", "points6", "points7", "points8", "points9", "points10", "points11"];

const fetchData = async () => {
  try {
    const response = await fetch("https://www.coursehubiitg.in/api/codingweek/contributions");
    const data = await response.json();
    const sortedData = data.sort((a, b) => b.points - a.points);

    let counter = 0;
    for (let i of avtr) {
      const element = document.getElementById(i);
      const avatarId = avtr[counter];
      element.style.backgroundImage = `url(${sortedData[counter].avatar})`;
      element.style.backgroundSize = "cover";
      element.style.backgroundPosition = "center";
      element.style.backgroundRepeat = "no-repeat";
      counter++;
    }

    counter = 0;
    for (let i of topn){
        const element = document.getElementById(i);
        element.innerHTML=sortedData[counter].name;
        counter++;
    }

    counter = 0;
    for (let i of pts) {
      const element = document.getElementById(i);
      element.innerHTML = sortedData[counter].points;
      counter++;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
