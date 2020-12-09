function formaIme() {
    var name = document.forms["forma"]["ime"].value;
    if (name == "") {
      alert("Morate uneti ime");
      return false;
    }

    var surname = document.forms["forma"]["prezime"].value;
    if (surname == "") {
      alert("Morate uneti prezime");
      return false;
    }

    var adress = document.forms["forma"]["adresa"].value;
    if (adress == "") {
      alert("Morate uneti adresu");
      return false;
    }

    var kontakt = document.forms["forma"]["kontakt-telefon"].value;
    if (kontakt == "") {
      alert("Morate uneti kontakt telefon");
      return false;
    }

    var d = document.forms["forma"]["datum"].value;
    if (d == "") {
      alert("Morate uneti datum");
      return false;
    }
    
    if(true){
        confirm("Uspešno ste zakazali termin. Vidimo se " + d);
    }
    }
   
   



  

 