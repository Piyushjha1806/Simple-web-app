function sayHello() {
  const name = document.getElementById('nameInput').value;
  const greeting = `Hello , ${name || 'stranger'}! 👋`;
  document.getElementById('greeting').textContent = greeting;
}
