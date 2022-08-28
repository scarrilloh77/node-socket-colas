const lblEscritorio = document.querySelector('h1'); // Primer h1 que encuentre!
const btnAtender = document.querySelector('button');

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
  window.location = 'index.html';
  throw new Error('El escritorio es obligatorio!'); // No es return porque no es una función
}

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = escritorio;

const socket = io();

socket.on('connect', () => {
  btnAtender.disabled = false;
});

socket.on('disconnect', () => {
  btnAtender.disabled = true;
});

socket.on('ultimo-ticket', (ultimo) => {
  // lblNuevoTicket.innerText = `Ticket ${ultimo}`;
});

btnAtender.addEventListener('click', () => {
  // socket.emit('siguiente-ticket', null, (ticket) => {
  //   lblNuevoTicket.innerText = ticket;
  // });
});
