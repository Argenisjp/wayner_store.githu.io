

function validarform(){
    let alias = document.getElementById('alias').value; 
    let textarea = document.getElementById('textarea').value;


    if (alias.trim() == '' || textarea.trim() == '') {
        // Si alguno de los campos está vacío, mostrar un mensaje de error
        alert('Por favor, complete todos los campos.');
        return false; // Evitar que el formulario se envíe
    }

     // Si todos los campos están completos, permitir que el formulario se envíe
     return alert('Comentario enviado con exito ✔');


}