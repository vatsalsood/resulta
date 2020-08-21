import myData from "./resulta.json";

export function getRows() {
  console.log("rows", myData.results.data.team);
  return myData.results.data.team;
}
export function getColumns() {
  console.log(myData.results.columns);
  return myData.results.columns;
}
