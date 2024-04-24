import { readFile } from 'fs/promises';

// Write your test helpers functions here

//Function to load the json test data
export const importJsonTestData = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonData = await readFile('./test-data.json', 'utf8');
      resolve(JSON.parse(jsonData));
    } catch (error) {
      reject(`Error reading JSON test data: ${error}`);
    }
  });
};
