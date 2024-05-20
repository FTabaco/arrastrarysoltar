import interact from 'interactjs';

// Esta función se encarga de mover los elementos arrastrables (asignaturas).
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

// Configuro la funcionalidad de arrastre para los elementos con la clase 'asignatura'.
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
        // Función llamada cada vez que se mueve un elemento arrastrable.
        move: dragMoveListener,
        // Función llamada cuando termina el arrastre.
        end: function (event) {
            var target = event.target;
            var profesor = event.relatedTarget;

            if (event.dropzone) {
                target.style.backgroundColor = '#aed581'; // Verde claro
            } else {
                target.style.backgroundColor = '#ffeb3b'; // Amarillo pastel
            }

            // Incrementar el conteo de asignaturas por profesor
            if (profesor) {
                if (numAsignaturasPorProfesor[profesor.id]) {
                    numAsignaturasPorProfesor[profesor.id]++;
                } else {
                    numAsignaturasPorProfesor[profesor.id] = 1;
                }

                // Ajusto el tamaño del recuadro del profesor al soltar una asignatura.
                profesor.style.width = (140 + numAsignaturasPorProfesor[profesor.id] * 10) + 'px';
                profesor.style.height = (140 + numAsignaturasPorProfesor[profesor.id] * 10) + 'px';
            }
        }
    }
});

// Configuro la funcionalidad de zona de caída para los elementos con la clase 'profesor'.
interact('.profesor').dropzone({
    accept: '.asignatura',
    overlap: 0.75,

    // Función llamada cuando un elemento arrastrable es activado.
    ondropactivate: function (event) {
        event.target.classList.add('drop-active');
    },
    // Función llamada cuando un elemento arrastrable entra en una zona de caída.
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;

        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
        draggableElement.textContent = 'Asignatura dentro';
    },
    // Función llamada cuando un elemento arrastrable sale de una zona de caída.
    ondragleave: function (event) {
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;

        dropzoneElement.classList.remove('drop-target');
        draggableElement.classList.remove('can-drop');
        draggableElement.textContent = 'Asignatura fuera';

        // Decrementar el conteo de asignaturas por profesor
        if (numAsignaturasPorProfesor[dropzoneElement.id]) {
            numAsignaturasPorProfesor[dropzoneElement.id]--;

            // Ajustar tamaño del profesor al sacar la asignatura
            if (numAsignaturasPorProfesor[dropzoneElement.id] > 0) {
                dropzoneElement.style.width = (140 + numAsignaturasPorProfesor[dropzoneElement.id] * 10) + 'px';
                dropzoneElement.style.height = (140 + numAsignaturasPorProfesor[dropzoneElement.id] * 10) + 'px';
            } else {
                // Volver al tamaño original si no quedan asignaturas
                dropzoneElement.style.width = '140px';
                dropzoneElement.style.height = '140px';
            }
        }
    },
    // Función llamada cuando un elemento arrastrable se suelta en una zona de caída.
    ondrop: function (event) {
        event.relatedTarget.textContent = 'Asignatura asignada a ' + event.target.textContent;
    },
    // Función llamada cuando un elemento arrastrable es desactivado.
    ondropdeactivate: function (event) {
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});
