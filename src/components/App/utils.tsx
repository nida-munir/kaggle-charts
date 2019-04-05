export async function readFile() {
  // read file and return data
  // supply file path here
  let fileData = {};
  await fetch("http://localhost:5000/api/csvToJson")
    .then(response => response.json())
    .then(data => {
      fileData = data;
    });
  return fileData;
}
