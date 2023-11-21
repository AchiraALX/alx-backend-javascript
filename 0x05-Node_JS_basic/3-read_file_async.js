const fs = require('fs');

/**
 * Reads the database.csv asynchronously
 * @param {string} path
 * @AchiraALX
 */

const worker = (data) => {
  const lines = data.toString()
    .trim()
    .split('\n');
  const groups = {};
  const columns = lines[0].split(',');
  const studentNames = columns.slice(0, columns.length - 1);

  for (const line of lines.slice(1)) {
    const record = line.split(',');
    const values = record.slice(0, record.length - 1);
    const field = record[record.length - 1];
    if (!Object.keys(groups).includes(field)) {
      groups[field] = [];
    }

    const entries = studentNames
      .map((name, idx) => [name, values[idx]]);
    groups[field].push(Object.fromEntries(entries));
  }

  const allStudents = Object.values(groups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${allStudents}`);

  const downFields = [];
  downFields.push(`Number of students: ${allStudents}`);

  for (const [field, group] of Object.entries(groups)) {
    const names = group.map((student) => student.firstname).join(',');
    const out = `Number of students in ${field}: ${group.length}. List: ${names}`;
    downFields.push(out);
    console.log(out);
  }

  return downFields;
};

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      resolve(worker(data));
    }
  });
});

module.exports = countStudents;
