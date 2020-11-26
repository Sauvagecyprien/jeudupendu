$( document ).ready(function() {

    var motAleatoire = ''
    var lettreMot = []
    var essaie = 1;
    var totalLettre;
    var echec = 10;
    var error = 0;

        console.log('nouvelle partie !');
       
        var urlData = "dictionnaire.json";
        var request = new XMLHttpRequest();
        request.open('GET', urlData);
        request.responseType = 'json';
        request.send();

        request.onload = function() {

            var total = request.response.total
            motAleatoire = request.response[Math.floor(Math.random() * 11)].toUpperCase()
            lettreMot = motAleatoire.split('');
             totalLettre = motAleatoire.length
            var depart = 0
            var error = 0;
            var contenu = ''

            contenu += `<input type='hidden' id='etat' value='${depart}'><input type='hidden' id='total_etat' value='${totalLettre}'>`

            for (let index = 0; index < totalLettre; index++) {

                contenu += `<span id='${lettreMot[index]}'>_</span> `
                
                depart++;

            }

            $('.contenu').html(contenu)
            $('#rejouer').hide()
            $('#leslettres').hide()
        	document.querySelector('#longueur').textContent = totalLettre;
        
        }

       

        });
        function remplacement (lettre){
            $('#boutton'+ lettre).addClass('disabled');
            $('#boutton'+ lettre).attr('onclick', '');
            $('#boutton'+ lettre).attr('tabindex', '-1');
            var tt = document.querySelectorAll('#'+ lettre);
            tcheck (tt); 
         win();
            tt.forEach(element => {
                chiffre =  document.querySelector('#lettre').textContent ;
                chiffre ++;
                document.querySelector('#lettre').textContent = chiffre;
                element.textContent = lettre;
            });
            win();
        }

        function tcheck (tt){
            error =  document.querySelector('#error').textContent ;
            changeimage(error);

            if (tt.length === 0){
                error =  document.querySelector('#error').textContent ;	
              error ++;
                document.querySelector('#error').textContent = error;
                console.log("test");
                error =  document.querySelector('#error').textContent ;	
                changeimage(error);
                
            }
            
        }

        function win(){
            totalLettre = document.querySelector('#longueur').textContent;
            chiffre =  document.querySelector('#lettre').textContent ;

            if (chiffre === totalLettre){
                document.querySelector('#mot').textContent = "Vous avez gagné wouuuuuuhouuuu !"; 
                $('#imagedupendu').attr('src', 'asset/images/win.gif');
                $('#rejouer').show()           
            }
        }
        function changeimage(error){
            switch (error) {
                case "0":
                    $('#imagedupendu').attr('src', 'asset/images/pendu0.png');
                   
                    break;
                case "1":
                    $('#imagedupendu').attr('src', 'asset/images/pendu1.png');
                   
                    break;
                case "2":
                    $('#imagedupendu').attr('src', 'asset/images/pendu2.png');
                  
                    break;
                case "3":
                    $('#imagedupendu').attr('src', 'asset/images/pendu3.png');
                    
                    break;
                case "4":
                    $('#imagedupendu').attr('src', 'asset/images/pendu4.png');
                    
                    break;
                case "5":
                    $('#imagedupendu').attr('src', 'asset/images/pendu5.png');
                   
                    break;
                case "6":
                    $('#imagedupendu').attr('src', 'asset/images/pendu6.png');
                   
                    break;
                    case "7":
                    $('#imagedupendu').attr('src', 'asset/images/pendu7.png');
                   
                    break;
                    case "8":
                    $('#imagedupendu').attr('src', 'asset/images/pendu8.png');
                   
                    break;
                    case "9":
                    $('#imagedupendu').attr('src', 'asset/images/pendu9.png');
                   
                    break;
                   
                    case "10":
                    $('#imagedupendu').attr('src', 'asset/images/pendu10.png');
                    document.querySelector('#mot').textContent = "Vous avez perdu dommage !";
                    setTimeout(function(){$('#imagedupendu').attr('src', 'asset/images/drole.gif');} , 1000);
                    setTimeout(function(){document.location.href="index.php";} , 8000);

                    break;
                default:
                    break;
                    
            } 
        }