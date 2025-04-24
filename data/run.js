const fs = require('fs');

fs.readFile('newsRoom.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        console.log('JSON Data:', jsonData);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
