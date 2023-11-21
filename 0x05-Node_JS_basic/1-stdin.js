/**
 * Display the message 'Welcome to Holberton School, what is your name?'
 * followed by a new line
 * Ask user for input
 * Display 'Your name is: ' followed by the user's input
 * When user ends program print 'This important software is now closing'
 * followed by a new line
 */

const myPogram = () => {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name !== null) {
      process.stdout.write(`Your name is: ${name}`);
    }
  });
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
};

myPogram();
