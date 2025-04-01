// Функции-------
// 5. Задача со звездочкой. Написать функцию проверки числа на простоту. Число считается простым, если оно делится без остатка только на себя, и на 1. Пример - числа 3, 5, 7, 11, ...

function isEasy(number) {
    if(number < 2){
    return false
    }
    
        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            return false
          }
            
        }
        return true
    }
    console.log(isEasy(5));
    
    // 3. Доработайте функцию из задачи 2 - по умолчанию имя пользователя должно быть 'User', а возраст - 18.
    
    // function makeGreetingText(userName = 'user', userAge = 25) {
    //     const result = (userAge >= 21) ? `Привет ${userName}, ты совершеннолетний` : `Привет ${userName}, ты несовершеннолетний`;
    //     return result
      
    //     }
        
    //     console.log(makeGreetingText());
        
    // Циклы------
    // 4. пишем блок кода, который вычисляет факториал числа. Факториал - это произведение всех чисел от 1 до текущего числа. Т.е. факториал от 3 - это 1 * 2 * 3. Факториал от 5 - это 1 * 2 * 3 * 4 * 5. Наша задача - спросить у пользователя число методом `prompt`, запустить цикл (рекомендую с параметром), который посчитает факториал этого числа, и вывести в консоль результат.
    
    
    // let number = +prompt('enter number')
    // function searchFactorial(number) {
    //    let fac = 1;
    //     for (let i = 1; i <= number; i++) {
    // fac = fac * i
        
    // }
    // return(fac);
    // }
    // let result = searchFactorial(number)
    // console.log(result);
    
    
    
    
    // 5. добавляем условие. Теперь, запускаем расчет факториала только если введенное число меньше 15. Если пользователь ввел число больше 15 - выводим сообщение "Это я считать не буду - тяжко."
    
    // let number = +prompt('enter number')
    // function searchFactorial(number) {
    //     if (number > 15) {
    //         return "Это я считать не буду - тяжко."
    //     }
    //    let fac = 1;
    //     for (let i = 1; i <= number; i++) {
    // fac = fac * i
        
    // }
    // return(fac);
    // }
    // let result = searchFactorial(number)
    // console.log(result);
    
    