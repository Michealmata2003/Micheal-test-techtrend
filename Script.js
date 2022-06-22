// script for the nav

const openNav = document.querySelector('.menu');
const closeNav = document.querySelector('.cancel');
const navlink = document.querySelector('.navlink');
const navbar1 = document.querySelector('.mid-nav');
const navbar2 = document.querySelector('.end-nav');

openNav.addEventListener('click', show);
closeNav.addEventListener('click', comot);

function show() {
     navbar1.style.display = 'block';
     navbar2.style.display = 'block';
     openNav.style.display = 'none';
     closeNav.style.display = 'block';
}

function comot() {
     navbar1.style.display = 'none';
     navbar2.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function shift() {
     navbar1.style.display = 'none';
     navbar2.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}


var overlay = document.getElementById('overlay');
        var output1 = document.getElementById('count1');
        var output2 = document.getElementById('count2');
        var output3 = document.getElementById('count3');
        var output4 = document.getElementById('count4');
        var output5 = document.getElementById('count5');
        var output6 = document.getElementById('count6');
        var output7 = document.getElementById('count7');
        var output8 = document.getElementById('count8');
        var output9 = document.getElementById('count9');
        var output10 = document.getElementById('count10');
        var output11 = document.getElementById('count11');
        var output12 = document.getElementById('count12');

        output1.innerHTML = 1
        output2.innerHTML = 1
        output3.innerHTML = 1
        output4.innerHTML = 1
        output5.innerHTML = 1
        output6.innerHTML = 1
        output7.innerHTML = 1
        output8.innerHTML = 1
        output9.innerHTML = 1
        output10.innerHTML = 1
        output11.innerHTML = 1
        output12.innerHTML = 1
      

        
        function add() {
          output1.innerHTML ++
          output2.innerHTML ++
          output3.innerHTML ++
          output4.innerHTML ++
          output5.innerHTML ++
          output6.innerHTML ++
          output7.innerHTML ++
          output8.innerHTML ++
          output9.innerHTML ++
          output10.innerHTML ++
          output11.innerHTML ++
          output12.innerHTML ++
        }

        function minus() {
          output1.innerHTML --
          output2.innerHTML --
          output3.innerHTML --
          output4.innerHTML --
          output5.innerHTML --
          output6.innerHTML --
          output7.innerHTML --
          output8.innerHTML --
          output9.innerHTML --
          output10.innerHTML --
          output11.innerHTML --
          output12.innerHTML --
        }
        
        function vote() {
            overlay.style.display = "block";

        }
        function closeMenu() {
            overlay.style.display = "none";
        }



        var layIt = document.getElementById('layIt');

        function showResult() {
            layOn.style.display = "block";
        
        }
        function closeUp() {
            layOn.style.display = "none";
        }