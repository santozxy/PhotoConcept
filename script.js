(function() {
  // Inicialização da biblioteca AOS
  AOS.init();

  // Função para mostrar o conteúdo da aba selecionada
  function showTabContent(evt, nav) {
      var i, tabcontent, tablinks;

      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active");
      }

      document.getElementById(nav).style.display = "block";
      evt.currentTarget.classList.add("active");
  }

  // Exibir a aba "Ensaio" por padrão ao carregar a página
  document.getElementById("essays").style.display = "block";
})();