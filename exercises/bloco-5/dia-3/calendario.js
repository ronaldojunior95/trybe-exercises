function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Ex 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  function addDaysToMonth(){
    const days = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1){
        let day = document.createElement('li');
        day.innerHTML = dezDaysList[i];
        day.classList = 'days';

        //Adiciona classes dependendo do dia.
        if (day.innerHTML === '24' || day.innerHTML === '31'){;
            day.classList.add('holiday');
        } else if (day.innerHTML === '4' || day.innerHTML === '11' || day.innerHTML === '18'){
            day.classList.add('friday');
        } else if (day.innerHTML === '25'){
            day.classList.add('holiday');
            day.classList.add('friday');
        }

        days.appendChild(day);
    }
  }

  addDaysToMonth();

  //Ex 2
  function holidaysButton(Feriados){
    const btnContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.innerHTML = Feriados;
    button.id = 'btn-holiday';
    btnContainer.appendChild(button);
  }

  holidaysButton('Feriados');

  //Ex 3
  function changeHolidaysColor(){
    const days = document.querySelectorAll('.holiday');
    let newColor = 'red';
    let backgroundColor = 'rgb(238,238,238)';
    for (day of days){
        if (day.style.backgroundColor !== newColor){
            day.style.backgroundColor = newColor;
        } else{
            day.style.backgroundColor = backgroundColor;
        }
    }
  }

  const button = document.querySelector('#btn-holiday');
  button.addEventListener('click', changeHolidaysColor);

  //Ex 4
  function fridayButton(Sexta){
    const btnContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.innerHTML = Sexta;
    button.id = 'btn-friday';
    btnContainer.appendChild(button);
  }

  fridayButton('Sexta-Feira');


  



