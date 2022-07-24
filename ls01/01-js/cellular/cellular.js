const programs = {
   'Future Gold 5G': 69.9,
   'Future 5G': 59.9
}

function selectedProgram(obj) {
   const { program, first } = obj;

   console.log(program.value, first.value);
   return 'you selected ' + program.value +
      ' with price ' + programs[program.value];

}

const btn = document.querySelector('form button').addEventListener('click', function (e) {
   e.preventDefault();
   document.getElementById('msg').innerHTML = selectedProgram(document.forms['selectCellular']);
});
console.log(btn);