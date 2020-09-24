function saveNoteTitle() {
  if (typeof(Storage) !== 'undefined') {
    var input = document.getElementById('noteTitle').value;
    localStorage.setItem('noteTitle', input);
    document.getElementById('noteTitle').value = localStorage.getItem('noteTitle');
  } else {
    document.getElementById('test').innerHTML('Oh no, your browser does not support localStorage, sorry.')
  }
}

document.getElementById('noteTitle').value = localStorage.getItem('noteTitle')

function saveNoteBodyText() {
  if (typeof(Storage) != 'undefined') {
    var messageInput = document.getElementById('noteBodyText').value;
    localStorage.setItem('noteBodyText', messageInput);
    document.getElementById('noteBodyText').value = localStorage.getItem('noteBodyText')
    console.log('Body text saved.')
  } else {
    document.getElementById('test').innerHTML('Oh no, your browser does not support localStorage, sorry.')
  }
}

document.getElementById('noteBodyText').value = localStorage.getItem('noteBodyText')
