window.onload = function () {

    var form = document.getElementById("form1");

    let defaultConfig = {
        // class of the parent element where the error/success class is added
        classTo: 'form-group',
        errorClass: 'error',
        successClass: 'has-success',
        // class of the parent element where error text element is appended
        errorTextParent: 'form-group',
        // type of element to create for the error text
        errorTextTag: 'div',
        // class of the error text element
        errorTextClass: 'text-help' 
    };
    // create the pristine instance
    var pristine = new Pristine(form, defaultConfig);

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       
       // check if the form is valid
       var valid = pristine.validate(); // returns true or false
    if (valid) {
        console.log('ok');
        // send
    }
    });

    $(() => {
        $('a[href*="#"]:not([href="#"])').click((e) => {
          const target = $(e.target.hash);
      
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
      
            return false;
          }
        });
      });
};