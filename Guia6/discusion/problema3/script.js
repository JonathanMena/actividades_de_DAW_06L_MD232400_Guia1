document.addEventListener("DOMContentLoaded", function() {
    const filtroInput = document.getElementById("filtro");
    const listaPalabrasSelect = document.getElementById("listaPalabras");
    const areaDefinicion = document.getElementById("areaDefinicion");
    const mostrarDefinicionBtn = document.getElementById("mostrarDefinicion");
    
    
    const diccionario = {
        amor: "Sentimiento profundo de afecto, cariño y aprecio hacia alguien o algo.",
        amabilidad: "Actitud y comportamiento amigable, cortés y considerado hacia los demás.",
        amistad: ":Relación de afecto, simpatía y confianza que se establece entre personas que no son familiares.",
        belleza: ": Cualidad de lo que es bello, agradable a la vista o al espíritu.",
        compasión: "Sentimiento de simpatía y comprensión hacia el sufrimiento de los demás, acompañado de un deseo de ayudar.",
        creatividad: "Capacidad o facilidad para inventar o crear",
        diversidad: "Variabilidad y diferencia en la composición de un grupo o una población, incluyendo distintas culturas, razas o géneros.",
        dedicación: ": Acción de consagrar tiempo y esfuerzo a una actividad o tarea con interés y empeño.",
        educación: ": Proceso de enseñanza y aprendizaje que tiene como objetivo el desarrollo integral de la persona.",
        emprendimiento: "Iniciativa y capacidad para crear y desarrollar proyectos, negocios o actividades.",
        empatía: "abilidad para comprender y compartir los sentimientos y las experiencias de otra persona, mostrando compasión y solidaridad.",
        felicidad: ": Estado de ánimo caracterizado por la satisfacción, la alegría y el bienestar.",
        generosidad: "Cualidad de ser generoso, de compartir y dar sin esperar nada a cambio.",
        gratitud: ": Sentimiento de agradecimiento y reconocimiento hacia alguien que ha hecho un favor o ha brindado ayuda.",
        humildad: "Virtud que implica reconocer las limitaciones y errores personales, sin vanidad ni arrogancia.",
        honestidad: ": Cualidad de ser honesto, de actuar con sinceridad y rectitud en todas las acciones.",
        ilusión: ": Sentimiento de esperanza y entusiasmo hacia algo que se desea o se espera con interés.",
        justicia: ": Principio moral que implica dar a cada persona lo que le corresponde de acuerdo con sus méritos y derechos.",
        karma: ": En algunas creencias, la suma de las acciones pasadas que influyen en la situación actual de una persona.",
        libertad: "Estado de poder actuar y tomar decisiones sin restricciones o coerción externa.",
        lealtad: ": Fidelidad y sinceridad en el cumplimiento de compromisos y deberes hacia alguien o algo.",
        motivación: ": Conjunto de razones o incentivos que impulsan a una persona a actuar o a esforzarse por alcanzar un objetivo.",
        naturaleza: ": Conjunto de seres vivos y elementos que componen el mundo físico y que no son producto de la intervención humana.",
        optimismo: ": Actitud mental positiva que ve las situaciones desde un punto de vista favorable y esperanzador.",
        paciencia: ": Capacidad de tolerar situaciones difíciles o de esperar con calma el cumplimiento de algo.",
        Responsabilidad: ": Obligación de cumplir con los deberes y compromisos de manera adecuada y consciente.",
        sabiduría: "Conocimiento profundo y capacidad para tomar decisiones y resolver problemas de manera juiciosa y sensata.",
        solidaridad: ": Actitud de apoyo y colaboración con quienes necesitan ayuda o están en dificultades.",
        Tolerancia: ": Respeto y aceptación de las opiniones, creencias y diferencias de los demás, incluso cuando son diferentes a las propias.",
        resiliencia: "Habilidad para adaptarse y recuperarse de situaciones adversas o traumáticas, mostrando fortaleza emocional.",
        integridad: "Cualidad de actuar de manera honesta y ética, manteniendo una coherencia entre lo que se dice y lo que se hace.",
        valentía: ": Cualidad de ser valiente, de enfrentar el miedo y la adversidad con coraje y determinación.",
        vulnerabilidad: "Estado de estar expuesto a daños físicos o emocionales, o la capacidad de ser herido o afectado.",
        virtud: "Cualidad o característica positiva que se considera moralmente buena y deseable en una persona.",
        vitalidad: "Energía y fuerza que permite a una persona llevar a cabo sus actividades diarias de manera vigorosa y saludable.",
        victoria: "Triunfo o éxito en una competición, conflicto o desafío.",
        vanidad: "Exceso de orgullo y admiración por uno mismo, a menudo basado en la apariencia o logros personales.",
        voluntad: "Facultad de tomar decisiones y llevar a cabo acciones con determinación y autocontrol.",
        wifi: "Tecnología de comunicación inalámbrica que permite la conexión a Internet a través de ondas de radio.",
        website: "Término en inglés que se utiliza comúnmente en español para referirse a una página web o sitio web en Internet.",
        zapato: "Un calzado que cubre el pie y puede tener suela dura o flexible, usado para proteger los pies y caminar cómodamente.",
        zona: "Un área o región geográfica específica con características particulares o límites definidos.",
        yogur: "Producto lácteo obtenido mediante la fermentación bacteriana del yogur, generalmente con un sabor agrio y textura cremosa.",
        yunque: "Una herramienta de metal con una superficie plana y sólida sobre la que se golpean materiales para darles forma.",
        unión: "La acción de unir o unirse, así como el resultado de dicha acción."
    };
    
    // Llena la lista de palabras con las palabras del diccionario
    for (const palabra in diccionario) {
        const option = document.createElement("option");
        option.value = palabra;
        option.textContent = palabra;
        listaPalabrasSelect.appendChild(option);
    }
    
    // Función para mostrar la definición al hacer clic en el botón o doble clic en la palabra
    function mostrarDefinicion() {
        const palabraSeleccionada = listaPalabrasSelect.value;
        if (diccionario.hasOwnProperty(palabraSeleccionada)) {
            areaDefinicion.value = diccionario[palabraSeleccionada];
        } else {
            areaDefinicion.value = "La definición no está disponible.";
        }
    }
    
    mostrarDefinicionBtn.addEventListener("click", mostrarDefinicion);
    
    listaPalabrasSelect.addEventListener("dblclick", mostrarDefinicion);
    
    // Función para filtrar palabras mientras se escribe en el campo de filtro
    filtroInput.addEventListener("input", function() {
        const filtro = filtroInput.value.toLowerCase();
        const opciones = listaPalabrasSelect.options;
        
        for (let i = 0; i < opciones.length; i++) {
            const palabra = opciones[i].value.toLowerCase();
            if (palabra.includes(filtro)) {
                opciones[i].style.display = "block";
            } else {
                opciones[i].style.display = "none";
            }
        }
    });
});
