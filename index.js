function myFunction() {
    var element = document.body;
    var elementinput = document.getElementById("prompt");
    element.classList.toggle("dark-mode");
    elementinput.classList.toggle("dark-mode-input");
    var elementtoggle = document.getElementById("toggleButton");

    const icon = document.getElementById('icon');

        // Verifique a classe do ícone atual e troque para a classe oposta
        if (icon.classList.contains('fa-moon')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            elementtoggle.style.color = 'black';
            elementtoggle.style.backgroundColor = 'white';

            // Adicione lógica para ativar o modo claro
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            elementtoggle.style.backgroundColor = 'black';
            elementtoggle.style.color = 'white';
            // Adicione lógica para ativar o modo escuro
        }
 }
