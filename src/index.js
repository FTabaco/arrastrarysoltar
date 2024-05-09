import interact from 'interactjs';

// Función para iniciar el arrastre
function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// Habilita el arrastre de los módulos
interact('.modulo').draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
        })
    ],
    autoScroll: true,
    listeners: { move: dragMoveListener }
});

// Habilita el soltar de los módulos en los contenedores de profesores
interact('.profesor .dropzone').dropzone({
    accept: '.modulo',
    overlap: 0.75,

    ondropactivate: function (event) {
        event.target.classList.add('drop-active');
    },
    ondropdeactivate: function (event) {
        event.target.classList.remove('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;

        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;

        dropzoneElement.appendChild(draggableElement);

        // Agrega una clase para indicar visualmente que el módulo fue soltado correctamente
        draggableElement.classList.add('dropped');

        // Elimina la clase después de un tiempo para volver al estado original
        setTimeout(function() {
            draggableElement.classList.remove('dropped');
        }, 1000);

        // Muestra un mensaje de confirmación
        var moduloId = draggableElement.getAttribute('data-modulo');
        var profesorId = dropzoneElement.closest('.profesor').getAttribute('id');
        console.log(`Has añadido el módulo ${moduloId} al Profesor ${profesorId}`);
    }
});
