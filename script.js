// Banco de preguntas con todas las opciones y respuestas correctas
const questionBank = [
    {
        question: "¿Qué debe verificar el operador al ser asignado al área de carbón?",
        options: [
            "Que el radio de comunicaciones del equipo cuente con los canales de áreas de carbón y load out.",
            "Que el equipo cuente con los canales de comunicación generales.",
            "Que el sistema de aire acondicionado funcione correctamente, debido al polvo en el área.",
            "Que la tolva esté vacía y lista para cargar."
        ],
        correct: 0,
        feedback: "✅ Correcto! El operador debe verificar que el radio de comunicaciones cuente con los canales adecuados para el área de carbón y load out, informando al despacho si no es así."
    },
    {
        question: "Si estoy trabajando en una zona donde el camión podría estar expuesto a deslizamientos de tierra o caídas de rocas, ¿qué debo hacer antes de iniciar la operación?",
        options: [
            "Conducir con extrema lentitud para minimizar vibraciones que puedan desestabilizar el terreno.",
            "Revisar el área, asegurarme de que no haya riesgo de deslizamientos y reportar cualquier posible peligro.",
            "Esperar a que otro camión pase primero para ver si hay problemas antes de arriesgarme.",
            "Confiar en el equipo de seguridad ya instalado (como mallas antiderrumbe) y proceder sin más revisiones."
        ],
        correct: 1,
        feedback: "✅ Correcto! El operador debe revisar el área para asegurarse de que no haya riesgos de deslizamientos o caídas de rocas, y reportar cualquier condición peligrosa inmediatamente."
    },
    {
        question: "¿Qué acción de seguridad es obligatoria antes de poner en marcha el camión?",
        options: [
            "Acelerar de inmediato para poner en marcha el camión.",
            "Gritar ¡Cuidado, voy saliendo! por la ventana (por si el micrófono del radio no funciona).",
            "Encender la radio a todo volumen",
            "Aplicar el procedimiento de pito para encender y poner en marcha hacia adelante."
        ],
        correct: 3,
        feedback: "✅ Correcto! El operador debe aplicar el procedimiento de pito para encender el camión y ponerlo en marcha de manera segura."
    },
    {
        question: "Si el sistema hidráulico del camión comienza a hacer ruidos extraños, ¿qué debe hacer el operador?",
        options: [
            "Ignorar el sonido y continuar operando.",
            "Detener el camión y revisar el sistema hidráulico para evitar daños mayores.",
            "Acelerar ligeramente para verificar si el sonido desaparece.",
            "Reportar el problema después de terminar el turno."
        ],
        correct: 1,
        feedback: "✅ Correcto! Un fallo hidráulico puede comprometer la seguridad. Es esencial detener el camión y revisar el sistema de inmediato."
    },
    {
        question: "¿Qué se debe hacer cuando el camión presenta una sobrecarga de material?",
        options: [
            "Continuar operando el camión hasta llegar a destino.",
            "Intentar ajustar la carga usando el freno de emergencia del camión.",
            "Ignorar la sobrecarga si no afecta la velocidad."
            "Se debe avisar al supervisor del área y descargar en el lugar que él indique.",
        ],
        correct: 3,
        feedback: "✅ Correcto! La sobrecarga puede generar daños a los equipos y afectar la seguridad. Debe ser reportada y corregida inmediatamente."
    },
    {
        question: "Al operar en una zona con baja visibilidad, ¿qué debo hacer?",
        options: [
            "Encender las luces intermitentes y continuar a la misma velocidad, asumiendo que otros conductores me verán.",
            "Conducir pegado al vehículo de adelante para guiarme por sus luces y no perder tiempo.",
            "Asegurarme de que las luces estén funcionando correctamente y mantener la velocidad adecuada.",
            "Detenerme inmediatamente y esperar a que la visibilidad mejore."
        ],
        correct: 2,
        feedback: "✅ Correcto! El operaReducidor debe mantener la velocidad adecuada y asegurarse de que las luces estén funcionando correctamente para garantizar la seguridad en zonas de baja visibilidad."
    },
    {
        question: "Durante el cargue, el operador de la pala no está levantando el balde correctamente. ¿Qué debe hacer el operador del camión?",
        options: [
            "Esperar pacientemente hasta que el operador de la pala levante el balde correctamente.",
            "Acelerar y completar el cargue para evitar retrasos.",
            "Cambiar de posición y realizar el cargue en otro sitio."
            "Detener el camión y notificar al supervisor sobre el problema.",
        ],
        correct: 3,
        feedback: "✅ Correcto! Es fundamental que los operadores se coordinen para evitar accidentes. El supervisor debe ser notificado si algo no está funcionando correctamente."
    },
    {
        question: "Si al realizar la descarga del material noto que el camión está cerca de una pared o de otro equipo, ¿qué debo hacer antes de continuar?",
        options: [
            "Usar señales manuales para guiar a otros mientras continúo la descarga con precaución.",
            "Girar las llantas hacia el lado contrario para compensar la proximidad, sin detener la operación.",
            "Detenerme y verificar que el camión esté correctamente posicionado, asegurándome de que no haya riesgo de impacto."
            "Continuar con la descarga sin mover el camión.",
        ],
        correct: 2,
        feedback: "✅ Correcto! El operador debe asegurarse de que el camión esté correctamente posicionado y no haya riesgo de impacto con la pared o el equipo cercano antes de proceder con la descarga."
    },
    {
        question: "Si estoy operando el camión en una zona de carga y noto que hay personas cerca del área de trabajo, ¿cuál es el procedimiento correcto?",
        options: [
            "Usar la bocina intermitentemente para alertar a las personas, pero sin detener la operación.",
            "Detener la operación inmediatamente, asegurarme de que las personas se alejen, y continuar solo cuando la zona esté despejada.",
            "Reducir la velocidad del equipo y hacer contacto visual con las personas, confiando en que se apartarán solas.",
            "Ignorar a las personas cercanas, ya que no representan un peligro."
        ],
        correct: 1,
        feedback: "✅ Correcto! El operador debe detener la operación, asegurarse de que las personas se alejen de la zona de carga y continuar solo cuando el área esté completamente despejada."
    },
    {
        question: "Si estoy en una zona con alta concentración de polvo y no puedo ver claramente, ¿qué debo hacer?",
        options: [
            "Encender las luces antiniebla y reducir ligeramente la velocidad, asumiendo que esto es suficiente para operar con seguridad.",
            "Usar el radio para avisar a otros operadores de la baja visibilidad, pero continuar trabajando con precaución.",
            "Dirigirme a una zona menos polvorienta del mismo sitio para terminar la tarea, sin detener por completo la operación."
            "Detener la operación, esperar a que el polvo se disipen y tomar las medidas necesarias para continuar de forma segura.",
        ],
        correct: 3,
        feedback: "✅ Correcto! Es importante que el operador detenga la operación, espere a que el polvo se disipe y tome las medidas necesarias para continuar con seguridad."
    },
    {
        question: "¿Qué debe hacer el operador si necesita salir de la cabina durante el proceso de carga?",
        options: [
            "Por ningún motivo debe salir de la cabina mientras se produce el proceso de cargue.",
            "Salir rápidamente si lleva chaleco reflectivo y casco, verificando que no haya maquinaria en movimiento cerca.",
            "Puede salir de la cabina para verificar el estado del camión en cualquier momento.",
            "Coordinar con el operador de la pala para que pause brevemente el cargue mientras salgo."
        ],
        correct: 0,
        feedback: "✅ Correcto! El operador no debe salir de la cabina mientras se produce el proceso de cargue para evitar posibles accidentes."
    },
    {
        question: "Durante la operación nocturna de cargue, ¿qué debe hacer el operador respecto a las luces del camión?",
        options: [
            "Encender las luces altas intermitentemente para alertar a otros sin causar deslumbramiento constante.",
            "Dejar todas las luces encendidas, incluyendo las de trabajo, para maximizar la visibilidad del área.",
            "Apagar las luces frontales para no encandilar a los operadores de otros equipos o camiones.",
            "Apagar todas las luces del camión durante el cargue."
        ],
        correct: 2,
        feedback: "✅ Correcto! Durante la operación nocturna, el operador debe apagar las luces frontales para no encandilar a los operadores de otros equipos o camiones."
    },
    {
        question: "¿Qué debe hacer el operador si ocurre un incidente o accidente durante la realización de la tarea?",
        options: [
            "Informar inmediatamente al supervisor y no mover el equipo del área donde ocurrió el evento.",
            "Tomar fotos del área con su celular antes de mover el equipo, para luego informar al supervisor.",
            "Asegurar primero que nadie resulte herido, y solo después mover el equipo si bloquea el paso.",
            "Esperar a que llegue un supervisor y se encargue de la situación sin mover el equipo."
        ],
        correct: 0,
        feedback: "✅ Correcto! El operador debe informar inmediatamente a sus supervisores sobre cualquier incidente o accidente, sin mover el equipo del área donde ocurrió el evento para tomar las evidencias correspondientes."
    },
    {
        question: "¿Qué debe hacer el operador cuando el equipo cambia de estado disponible a fuera de servicio?",
        options: [
            "Verificar primero si el equipo puede volver a funcionar antes de reportar el cambio de estado.",
            "Solicitar a un compañero que revise el equipo para confirmar el estado antes de informar.",
            "Informar inmediatamente al supervisor y al despacho sobre el cambio de estado.",
            "No es necesario informar si el equipo está fuera de servicio."
        ],
        correct: 2,
        feedback: "✅ Correcto! Cuando el equipo cambia de estado disponible a fuera de servicio, el operador debe informar inmediatamente al despacho y al supervisor de camiones."
    },
    {
        question: "¿Qué debe hacer el operador respecto al radio de comunicaciones durante la operación?",
        options: [
            "Dejar el radio encendido pero con el volumen bajo para no distraerse, revisando periódicamente por si dan alguna información importante para mí o algo que necesite directamente.",
            "Estar atento al radio de comunicaciones y a la asignación del despacho a través de la pantalla.",
            "Responder solo cuando se le llame por nombre, asumiendo que las demás comunicaciones son para otros operadores.",
            "Apagar el radio si el ruido interfiere con su concentración durante maniobras críticas."
        ],
        correct: 1,
        feedback: "✅ Correcto! El operador debe mantener atención constante al radio de comunicaciones y a las instrucciones del despacho, ya que pueden transmitirse cambios operativos o emergencias en cualquier momento."
    }
];

// Variables de estado del test
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 120; // 2 minutos por pregunta
let userAnswers = [];
let shuffledQuestions = [];
let currentShuffledIndexes = [];

// Referencias a elementos del DOM
const elements = {
    introScreen: document.getElementById('intro-screen'),
    quizContainer: document.getElementById('quiz-container'),
    resultsScreen: document.getElementById('results-screen'),
    startBtn: document.getElementById('start-btn'),
    nextBtn: document.getElementById('next-btn'),
    restartBtn: document.getElementById('restart-btn'),
    questionNumber: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackBox: document.getElementById('feedback-box'),
    progressBar: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    timerElement: document.getElementById('timer'),
    scoreCircle: document.getElementById('score-circle'),
    correctAnswersElement: document.getElementById('correct-answers'),
    incorrectAnswersElement: document.getElementById('incorrect-answers'),
    scorePercent: document.getElementById('score-percent'),
    performanceMessage: document.getElementById('performance-message'),
    badgeContainer: document.getElementById('badge-container')
};

/**
 * Mezcla un array usando el algoritmo Fisher-Yates
 * @param {Array} array - Array a mezclar
 * @returns {Array} - Array mezclado
 */
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * Inicializa el test mezclando preguntas y respuestas
 */
function initializeTest() {
    // 1. Mezclar el orden de las preguntas
    shuffledQuestions = shuffleArray([...questionBank]);
    
    // 2. Para cada pregunta, mezclar las opciones pero mantener referencia a la correcta
    currentShuffledIndexes = [];
    shuffledQuestions = shuffledQuestions.map((q, qIndex) => {
        const correctAnswer = q.options[q.correct];
        const shuffledOptions = shuffleArray([...q.options]);
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
        
        // Guardar mapeo de índices para referencia
        const originalIndexes = q.options.map((_, i) => i);
        const shuffledIndexes = shuffleArray([...originalIndexes]);
        currentShuffledIndexes[qIndex] = shuffledIndexes;
        
        return {
            ...q,
            options: shuffledOptions,
            correct: newCorrectIndex
        };
    });
    
    // 3. Reiniciar variables de estado
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = Array(shuffledQuestions.length).fill(null);
    
    // 4. Mostrar primera pregunta
    showQuestion();
    startTimer();
}

/**
 * Muestra la pregunta actual en la interfaz
 */
function showQuestion() {
    // Actualizar progreso
    const progressPercent = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    elements.progressBar.style.width = `${progressPercent}%`;
    elements.progressText.textContent = `${currentQuestionIndex + 1}/${shuffledQuestions.length}`;

    const question = shuffledQuestions[currentQuestionIndex];
    elements.questionNumber.textContent = `Pregunta ${currentQuestionIndex + 1}`;
    elements.questionText.textContent = question.question;
    
    // Mostrar opciones de respuesta con letras (A, B, C, D)
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionElement.addEventListener('click', () => {
            clearInterval(timer);
            selectAnswer(index);
        });
        elements.optionsContainer.appendChild(optionElement);
    });
    
    // Configurar temporizador
    startTimer();
    
    // Resetear elementos de UI
    elements.nextBtn.style.display = 'none';
    elements.feedbackBox.style.display = 'none';
}

/**
 * Procesa la selección de una respuesta
 * @param {number} selectedIndex - Índice de la opción seleccionada
 */
function selectAnswer(selectedIndex) {
    const question = shuffledQuestions[currentQuestionIndex];
    const options = elements.optionsContainer.querySelectorAll('.option');
    
    // Deshabilitar todas las opciones
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    // Verificar respuesta
    const isCorrect = selectedIndex === question.correct;
    
    // Actualizar puntuación
    if (isCorrect) {
        score++;
        options[selectedIndex].classList.add('correct');
        elements.feedbackBox.textContent = question.feedback;
        elements.feedbackBox.className = 'feedback-box correct-feedback';
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        elements.feedbackBox.textContent = `❌ Incorrecto. La respuesta correcta es: ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}\n\n${question.feedback}`;
        elements.feedbackBox.className = 'feedback-box incorrect-feedback';
    }
    
    // Guardar respuesta del usuario
    userAnswers[currentQuestionIndex] = {
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect,
        timeOut: false
    };
    
    // Mostrar retroalimentación
    elements.feedbackBox.style.display = 'block';
    elements.nextBtn.style.display = 'block';
}

/**
 * Avanza a la siguiente pregunta o muestra resultados
 */
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

/**
 * Inicia el temporizador para la pregunta actual
 */
function startTimer() {
    clearInterval(timer);
    timeLeft = 120;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0 && !userAnswers[currentQuestionIndex]) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

/**
 * Maneja el evento de tiempo agotado
 */
function handleTimeOut() {
    const question = shuffledQuestions[currentQuestionIndex];
    const options = elements.optionsContainer.querySelectorAll('.option');
    
    options.forEach(opt => opt.style.pointerEvents = 'none');
    options[question.correct].classList.add('correct');
    
    elements.feedbackBox.textContent = `⏰ Tiempo agotado! La respuesta correcta es: ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}\n\n${question.feedback}`;
    elements.feedbackBox.className = 'feedback-box incorrect-feedback';
    elements.feedbackBox.style.display = 'block';
    elements.nextBtn.style.display = 'block';
    
    userAnswers[currentQuestionIndex] = {
        selected: null,
        correct: question.correct,
        isCorrect: false,
        timeOut: true
    };
}

/**
 * Actualiza la visualización del temporizador
 */
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    elements.timerElement.innerHTML = `<i class="fas fa-clock"></i> ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Cambiar color cuando quedan 30 segundos o menos
    elements.timerElement.classList.toggle('critical', timeLeft <= 30);
}

/**
 * Muestra la pantalla de resultados finales
 */
function showResults() {
    elements.quizContainer.style.display = 'none';
    elements.resultsScreen.style.display = 'block';
    
    // Calcular estadísticas
    const correct = userAnswers.filter(a => a.isCorrect).length;
    const incorrect = shuffledQuestions.length - correct;
    const percentage = Math.round((correct / shuffledQuestions.length) * 100);
    
    // Animación del porcentaje
    animateScoreCircle(percentage);
    
    // Mostrar resultados
    elements.correctAnswersElement.textContent = correct;
    elements.incorrectAnswersElement.textContent = incorrect;
    elements.progressText.textContent = `${shuffledQuestions.length}/${shuffledQuestions.length}`;
    
    // Mostrar mensaje según desempeño
    showPerformanceFeedback(percentage);
}

/**
 * Animación del círculo de puntuación
 * @param {number} finalPercent - Porcentaje final a mostrar
 */
function animateScoreCircle(finalPercent) {
    let currentPercent = 0;
    const animation = setInterval(() => {
        if (currentPercent >= finalPercent) {
            clearInterval(animation);
        } else {
            currentPercent++;
            elements.scoreCircle.style.background = `conic-gradient(var(--secondary-color) ${currentPercent}%, var(--light-color) ${currentPercent}%)`;
            elements.scorePercent.textContent = `${currentPercent}%`;
        }
    }, 20);
}

/**
 * Muestra el mensaje de retroalimentación según el desempeño
 * @param {number} percentage - Porcentaje de respuestas correctas
 */
function showPerformanceFeedback(percentage) {
    let message, badgeHTML;
    
    if (percentage >= 90) {
        message = "¡Excelente! 🎉 Dominas completamente los procedimientos de trabajo seguro.";
        badgeHTML = '<div class="badge badge-gold"><i class="fas fa-trophy"></i> Oro</div>';
    } else if (percentage >= 70) {
        message = "¡Buen trabajo! 👍 Tienes un buen conocimiento, pero hay áreas para mejorar.";
        badgeHTML = '<div class="badge badge-silver"><i class="fas fa-medal"></i> Plata</div>';
    } else if (percentage >= 50) {
        message = "¡Sigue practicando! 📚 Hay varios conceptos que necesitas repasar.";
        badgeHTML = '<div class="badge badge-bronze"><i class="fas fa-award"></i> Bronce</div>';
    } else {
        message = "Es importante repasar el manual de PTS. 📖 La seguridad es lo primero.";
        badgeHTML = '<div class="badge"><i class="fas fa-book"></i> En progreso</div>';
    }
    
    elements.performanceMessage.textContent = message;
    elements.badgeContainer.innerHTML = badgeHTML;
}

/**
 * Reinicia completamente el test
 */
function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    elements.resultsScreen.style.display = 'none';
    elements.introScreen.style.display = 'block';
}

// Event Listeners
elements.startBtn.addEventListener('click', () => {
    elements.introScreen.style.display = 'none';
    elements.quizContainer.style.display = 'block';
    initializeTest();
});

elements.nextBtn.addEventListener('click', nextQuestion);
elements.restartBtn.addEventListener('click', restartTest);

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});
