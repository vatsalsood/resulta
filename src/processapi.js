import myData from "./resulta.json";

export function getRows() {
  return myData.results.data.team;
}
export function getColumns() {
  return myData.results.columns;
}
