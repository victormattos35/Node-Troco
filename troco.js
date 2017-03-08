module.exports = class Troco {
  // reais: Valor em reais podendo conter centavos
  // Deve retornar um objeto com a quantidadede notas
  getQtdeNotas (reais) {
    let qtdeNotas = {
      '100': 0,
       '50': 0,
       '20': 0,
       '10': 0,
        '5': 0,
        '2': 0,
        '1': 0,
      '0.5': 0,
     '0.25': 0,
      '0.1': 0,
     '0.01': 0,
    }

    let possuiNotas = {
      '100': 1,
       '50': 0,
       '20': 2,
       '10': 5,
        '5': 10,
        '2': 1,
        '1': 0,
      '0.5': 1,
     '0.25': 3,
      '0.1': 2,
     '0.01': 4,
    }

  var resto = 0;
  //Uso das váriaveis com o valor e a posição anterior para algumas tarefas
  var posiAnterior = 1;
  var valAnterior = 0;
  if (reais > 0) {
    while(reais != 0){
      for(var prop in qtdeNotas){
        if((reais/prop) >= 1){
          resto = (reais%prop).toFixed(1);
          qtdeNotas[prop] = ((reais - resto)/prop).toFixed();
          reais = (reais - (qtdeNotas[prop]*prop)).toFixed(2);
        //Uso de prop > 1 para não dividir pelos centavos
        }else if((posiAnterior*valAnterior)%prop == 0 && prop > 1){
          qtdeNotas[prop] = ((posiAnterior*valAnterior)/prop);
          qtdeNotas[posiAnterior] = 0;
        //Uso de prop > 1 para não dividir pelos centavos
        }else if((posiAnterior*valAnterior)%prop >= 1 && prop > 1){
          resto = ((posiAnterior*valAnterior)%prop);
          qtdeNotas[prop] = (((posiAnterior*valAnterior) - resto)/prop);
          qtdeNotas[posiAnterior] = (resto/posiAnterior);
          //IFs para arrumar o problema das moedas de 2 e 1.
          if(qtdeNotas[2] > 1 && qtdeNotas[2] < 2 && qtdeNotas[1] != 1){
            qtdeNotas[2] = 1;
            qtdeNotas[1] = 1;
          }else if(qtdeNotas[1] == 1 && qtdeNotas[2] < 1){
            qtdeNotas[2] = (qtdeNotas[2]).toFixed();
            qtdeNotas[1] = 0;
          }else if(qtdeNotas[2] < 1){
            qtdeNotas[2] = 0;
            qtdeNotas[1] = 1;
          }if(qtdeNotas[2] > 1 && qtdeNotas[2] < 2 && qtdeNotas[1] == 1){
            qtdeNotas[2] = 2;
            qtdeNotas[1] = 1;
          }
        }

        posiAnterior = prop;
        valAnterior = qtdeNotas[prop];
      }
      if(qtdeNotas[20]== 2 && qtdeNotas[10]==1){
        qtdeNotas[50] = 1;
        qtdeNotas[20] = 0;
        qtdeNotas[10] = 0;
      }
    }

    for(var prop in qtdeNotas){
      try{
        if(qtdeNotas[prop] > possuiNotas[prop]){
          throw new Error(prop);
        }
      }catch (ex) {
        console.error('Falta notas de ', ex.message);
      }
    }
 
  /*
  var resto = 0;
  if((reais/100) >= 1){
    resto = (reais%100).toFixed(1);
    qtdeNotas[100] = ((reais - resto)/100).toFixed();
    reais = (reais - (qtdeNotas[100]*100)).toFixed(2);
  }
  if((reais/50) >= 1){
    resto = (reais%50).toFixed(1);
    qtdeNotas[50] = ((reais - resto)/50).toFixed();
    reais = (reais - (qtdeNotas[50]*50)).toFixed(2);
  }
  if((reais/20) >= 1){
    resto = (reais%20).toFixed(1);
    qtdeNotas[20] = ((reais - resto)/20).toFixed();
    reais = (reais - (qtdeNotas[20]*20)).toFixed(2);
  }
  if((reais/10) >= 1){
    resto = (reais%10).toFixed(1);
    qtdeNotas[10] = ((reais - resto)/10).toFixed();
    reais = (reais - (qtdeNotas[10]*10)).toFixed(2);
  }
  if((reais/5) >= 1){
    resto = (reais%5).toFixed(1);
    qtdeNotas[5] = ((reais - resto)/5).toFixed();
    reais = (reais - (qtdeNotas[5]*5)).toFixed(2);
  }
  if((reais/1) >= 1){
    resto = (reais%1).toFixed(1);
    qtdeNotas[1] = ((reais - resto)/1).toFixed();
    reais = (reais - (qtdeNotas[1]*1)).toFixed(2);
  }
  if((reais/0.5) >= 1){
    resto = (reais%0.5).toFixed(0.5);
    qtdeNotas[0.5] = ((reais - resto)/0.5).toFixed();
    reais = (reais - (qtdeNotas[0.5]*0.5)).toFixed(2);
  }
  if((reais/0.25) >= 1){
    resto = (reais%0.25).toFixed(1);
    qtdeNotas[0.25] = ((reais - resto)/0.25).toFixed();
    reais = (reais - (qtdeNotas[0.25]*0.25)).toFixed(2);
  }
  if((reais/0.1) >= 1){
    resto = (reais%0.1).toFixed(1);
    qtdeNotas[0.1] = ((reais - resto)/0.1).toFixed();
    reais = (reais - (qtdeNotas[0.1]*0.1)).toFixed(2);
  }
  if((reais/0.01) >= 1){
    resto = (reais%0.01).toFixed(1);
    qtdeNotas[0.01] = ((reais - resto)/0.01).toFixed();
    reais = (reais - (qtdeNotas[0.01]*0.01)).toFixed(2);
  }


   */
      return qtdeNotas
    }
  }
}
