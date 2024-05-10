import interact from 'interactjs';

// Habilitar el arrastre de asignaturas
function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// Objeto para almacenar el número de asignaturas en cada profesor
var numAsignaturasPorProfesor = {};

interact('.asignatura').draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
        })
    ],
    autoScroll: true,
    listeners: {
        move: dragMoveListener,
        end: function (event) {
            var target = event.target;
            var profesor = event.relatedTarget;

            if (event.dropzone) {
                target.style.backgroundColor = '#aed581'; // Verde claro
            } else {
                target.style.backgroundColor = '#ffeb3b'; // Amarillo pastel
            }

            if (numAsignaturasPorProfesor[profesor.id]) {
                numAsignaturasPorProfesor[profesor.id]++;
            } else {
                numAsignaturasPorProfesor[profesor.id] = 1;
            }

            // Ajustar tamaño del profesor al soltar la asignatura dentro
            profesor.style.width = (140 + numAsignaturasPorProfesor[profesor.id] * 10) + 'px';
            profesor.style.height = (140 + numAsignaturasPorProfesor[profesor.id] * 10) + 'px';
        }
    }
});

interact('.profesor').dropzone({
    accept: '.asignatura',
    overlap: 0.75,

    ondropactivate: function (event) {
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;

        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
        draggableElement.textContent = 'Asignatura dentro';
    },
    ondragleave: function (event) {
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;

        dropzoneElement.classList.remove('drop-target');
        draggableElement.classList.remove('can-drop');
        draggableElement.textContent = 'Asignatura fuera';

        // Ajustar tamaño del profesor al sacar la asignatura
        var numAsignaturas = numAsignaturasPorProfesor[dropzoneElement.id];
        if (numAsignaturas) {
            dropzoneElement.style.width = (140 + numAsignaturas * 10) + 'px';
            dropzoneElement.style.height = (140 + numAsignaturas * 10) + 'px';
        }
    },
    ondrop: function (event) {
        event.relatedTarget.textContent = 'Asignatura asignada a ' + event.target.textContent;
    },
    ondropdeactivate: function (event) {
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});
