
function createCookie(name, value, days) {
  var expires;

  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
  } else {
      expires = "";
  }
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ')
          c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
          return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}
// $(window).unload(function() {
//   eraseCookie(form-filled);
//  });
$(document).ready(function () {
  if(readCookie('form-filled')){
    $('.plan1-img').html(
      `
      <a data-src="img/bptpImg/tower26-overall.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower26-overall.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan2-img').html(
      `
      <a data-src="img/bptpImg/tower26-unit1.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower26-unit1.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan3-img').html(
      `
      <a data-src="img/bptpImg/tower26-unit2.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower26-unit2.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan4-img').html(
      `
      <a data-src="img/bptpImg/tower26-unit3.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower26-unit3.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan5-img').html(
      `
      <a data-src="img/bptpImg/tower26-unit4.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower26-unit4.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan6-img').html(
      `
      <a data-src="img/bptpImg/tower27-overall.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower27-overall.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan7-img').html(
      `
      <a data-src="img/bptpImg/tower27-unit1.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower27-unit1.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan8-img').html(
      `
      <a data-src="img/bptpImg/tower27-unit2.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower27-unit2.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan9-img').html(
      `
      <a data-src="img/bptpImg/tower27-unit3.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower27-unit3.jpg" alt="flat plan">
      </a>
      `
    );
    $('.plan10-img').html(
      `
      <a data-src="img/bptpImg/tower27-unit4.jpg" data-fancybox="flatplan">
        <img src="img/bptpImg/tower27-unit4.jpg" alt="flat plan">
      </a>
      `
    );
    $('.viewPlanBtn').hide();
    // console.log(readCookie('form-filled')+"----");
  }

  $('#enquiryForm').submit(function (event) {

    // Reset previous error messages
    $('.error-message').remove();

    // Validate inputs
    var isValid = true;

    // Name validation
    var name = $('#name').val();
    if (!name) {
      $('#name').after('<div class="error-message">Please enter your first name</div>');
      isValid = false;
    }

    // Last Name validation
    var last_name = $('#last_name').val();
    if (!last_name) {
      $('#last_name').after('<div class="error-message">Please enter your last name</div>');
      isValid = false;
    }

    // Phone validation
    var phone = $('#phone').val();
    if (!phone) {
      $('#phone').after('<div class="error-message">Please enter your phone number</div>');
      isValid = false;
    } else if (!(/^\d{10}$/.test(phone))) {
      $('#phone').after('<div class="error-message">Please enter a valid 10-digit phone number</div>');
      isValid = false;
    }
    
    // Email validation
     var email = $('#email').val();
    if (!email) {
      $('#email').after('<div class="error-message">Please enter your email id</div>');
      isValid = false;
    } else if (!(/^\S+@\S+\.\S+$/.test(email))) {
      $('#email').after('<div class="error-message">Please enter a valid email address</div>');
      isValid = false;
    } 

    // Message validation
    /* var message = $('#text_message').val();
    if (!message) {
      $('#text_message').after('<div class="error-message">Please enter your message</div>');
      isValid = false;
    } */

    // WhatsApp Notification checkbox validation
    var whats_app_notification = $('#whats_app_notification').is(':checked');
    if (!whats_app_notification) {
      $('#whats_app_notification ~ label').after('<div class="error-message">Please check the WhatsApp Notifications checkbox</div>');
      isValid = false;
    }


    // If all inputs are valid, submit the form
    if (isValid) {
         // Continue with form submission
        // $(".enquiryFormSubmit").prop('disabled', true);
        // // $(".enquiryFormSpinner").show();
        // //$('.thanku').show();
        // // $('#enquiryForm')[0].reset();
        // setTimeout(() => {
        //   // $('.thanku').fadeOut();
        //   return false;
        // }, 3000);
        $.ajax({
          type: 'POST',
          url: 'https://o4nzozyh09.execute-api.ap-south-1.amazonaws.com/googleWebhooks?pid=65d5fd89061027f9c64ca61b&clid=65c20f5107d4dd09fb3d59b0',
          // url: '../send_email.php',
          data: formData,
          success: function (response) {
            $('.enquiryFormSpinner').hide();
            $('#enquiry.userInfoForm').hide();
            $('#enquiryForm')[0].reset();
            $('#enquiry.enquiryFormThanku').fadeIn();
          },
          error: function (error) {
            alert('An error occurred. Please try again later.');
          }
        });

    } else {
        event.preventDefault(); // Prevent the form from submitting
        return false;
    }

  });

  
  $('#enquiryForm1').submit(function (e) {
    // e.preventDefault();

    // Reset previous error messages
    $('.error-message').remove();

    // Validate inputs
    var isValid = true;

    // Name validation
    var name1 = $('#name1').val();
    if (!name1) {
      $('#name1').after('<div class="error-message">Please enter your first name</div>');
      isValid = false;
    }

    // Last Name validation
    var last_name1 = $('#last_name1').val();
    if (!last_name1) {
      $('#last_name1').after('<div class="error-message">Please enter your last name</div>');
      isValid = false;
    }

    // Phone validation
    var phone1 = $('#phone1').val();
    if (!phone1) {
      $('#phone1').after('<div class="error-message">Please enter your phone number</div>');
      isValid = false;
    } else if (!(/^\d{10}$/.test(phone1))) {
      $('#phone1').after('<div class="error-message">Please enter a valid 10-digit phone number</div>');
      isValid = false;
    }


    // WhatsApp Notification checkbox validation
    var whats_app_notification1 = $('#whats_app_notification1').is(':checked');
    if (!whats_app_notification1) {
      $('#whats_app_notification1 ~ label').after('<div class="error-message">Please check the WhatsApp Notifications checkbox</div>');
      isValid = false;
    }


    // If all inputs are valid, submit the form
    if (isValid) {
      // Your form submission code here
      $('.enquiryForm1Submit').prop('disabled', true);      
      //$('.enquiryForm1Spinner').fadeIn();
      //$('#enquiry1 .userInfoForm').hide();
      //$('.enquiryForm1Thanku').show();
      //$('.enquiryForm1Submit').prop('disabled', false);
       setTimeout(() => {
        return false;
        }, 3000);
      } else {
        e.preventDefault(); // Prevent the form from submitting
        return false;
    }
    //$('form').trigger('reset');

  });
  


  $('#enquiryForm2').submit(function (e) {
    // e.preventDefault();

    // Reset previous error messages
    $('.error-message').remove();

    // Validate inputs
    var isValid = true;

    // Name validation
    var name2 = $('#name2').val();
    if (!name2) {
      $('#name2').after('<div class="error-message">Please enter your fisrt name</div>');
      isValid = false;
    }

    // Last Name validation
    var last_name2 = $('#last_name2').val();
    if (!last_name2) {
      $('#last_name2').after('<div class="error-message">Please enter your last name</div>');
      isValid = false;
    }

    // Phone validation
    var phone2 = $('#phone2').val();
    if (!phone2) {
      $('#phone2').after('<div class="error-message">Please enter your phone number</div>');
      isValid = false;
    } else if (!(/^\d{10}$/.test(phone2))) {
      $('#phone2').after('<div class="error-message">Please enter a valid 10-digit phone number</div>');
      isValid = false;
    }


    // WhatsApp Notification checkbox validation
    var whats_app_notification2 = $('#whats_app_notification2').is(':checked');
    if (!whats_app_notification2) {
      $('#whats_app_notification2 ~ label').after('<div class="error-message">Please check the WhatsApp Notifications checkbox</div>');
      isValid = false;
    }


    // If all inputs are valid, submit the form
/*     if (isValid) {
        return true; // Continue with form submission
    } else {
        event.preventDefault(); // Prevent the form from submitting
        return false;
    } */



    // If all inputs are valid, submit the form
    if (isValid) {
      $('.enquiryForm2Submit').prop('disabled', true);
      $('#enquiry2 .userInfoForm').hide();
      //$('#enquiry2 .enquiryForm2Thanku').fadeIn();
      $('.enquiryForm2Submit').prop('disabled', false);
      // Your form submission code here
      // $('.enquiryForm2Spinner').fadeIn();
      // var formData = {
      //   name2: $('#name2').val(),
      //   last_name2: $('#last_name2').val(),
      //   phone2: $('#phone2').val(),
      //   /* email1: $('#email1').val(),
      //   text_message1: $('#text_message1').val(), */
      //   whats_app_notification2: whats_app_notification2,  
      // };
      // console.log(formData);
      

      $.ajax({
        type: 'POST',
        url: 'https://o4nzozyh09.execute-api.ap-south-1.amazonaws.com/googleWebhooks?pid=65d5fd89061027f9c64ca61b&clid=65c20f5107d4dd09fb3d59b0',
        // url: '../send_email.php',
        data: formData,
        success: function (response) {
          $('.enquiryForm2Spinner').hide();
          $('#enquiry2 .userInfoForm').hide();
          $('#enquiryForm2')[0].reset();
          $('#enquiry2 .enquiryForm2Thanku').fadeIn();
        },
        error: function (error) {
          alert('An error occurred. Please try again later.');
        }
      });
      return true;
    }else{
      return false;
    }
    $('form').trigger('reset');

  });

  $('#enquiryForm3').submit(function (e) {
    // e.preventDefault();

    // Reset previous error messages
    $('.error-message').remove();

    // Validate inputs
    var isValid = true;

    // Name validation
    var name3 = $('#name3').val();
    if (!name3) {
      $('#name3').after('<div class="error-message">Please enter your first name</div>');
      isValid = false;
    }

    // Last Name validation
    var last_name3 = $('#last_name3').val();
    if (!last_name3) {
      $('#last_name3').after('<div class="error-message">Please enter your last name</div>');
      isValid = false;
    }

    // Phone validation
    var phone3 = $('#phone3').val();
    if (!phone3) {
      $('#phone3').after('<div class="error-message">Please enter your phone number</div>');
      isValid = false;
    } else if (!(/^\d{10}$/.test(phone3))) {
      $('#phone3').after('<div class="error-message">Please enter a valid 10-digit phone number</div>');
      isValid = false;
    }


    // WhatsApp Notification checkbox validation
    var whats_app_notification3 = $('#whats_app_notification3').is(':checked');
    if (!whats_app_notification3) {
      $('#whats_app_notification3 ~ label').after('<div class="error-message">Please check the WhatsApp Notifications checkbox</div>');
      isValid = false;
    }


    // If all inputs are valid, submit the form
/*     if (isValid) {
        return true; // Continue with form submission
    } else {
        event.preventDefault(); // Prevent the form from submitting
        return false;
    } */



    // If all inputs are valid, submit the form
    if (isValid) {
      // Your form submission code here
      // $('.enquiryForm3Spinner').fadeIn();
      $('.enquiryForm3Submit').prop('disabled', true);
      $('#enquiry3 .userInfoForm').hide();
      //$('#enquiry3 .enquiryForm3Thanku').fadeIn();
      $('.enquiryForm3Submit').prop('disabled', false);
      // var formData = {
      //   name3: $('#name3').val(),
      //   last_name3: $('#last_name3').val(),
      //   phone3: $('#phone3').val(),
      //   /* email3: $('#email3').val(),
      //   text_message3: $('#text_message3').val(), */
      //   whats_app_notification3: whats_app_notification3,  
      // };
      // console.log(formData);


      // $.ajax({
      //   type: 'POST',
      //   url: 'user_enquiry_assets_2',
      //   // url: '../send_email.php',
      //   data: $("#enquiryForm3").serializeArray(),
      //   success: function (response) {
      //     $('.enquiryForm3Spinner').hide();
      //     $('#enquiry3 .userInfoForm').hide();
      //     $('#enquiryForm3')[0].reset();
      //     $('#enquiry3 .enquiryForm3Thanku').fadeIn();
      //   },
      //   error: function (error) {
      //     alert('An error occurred. Please try again later.');
      //   }
      // });
      return true;
    }else{
      return false;
    }
    $('form').trigger('reset');

  });
  
  $('#viewPlanForm').submit(function (e) {
    e.preventDefault();

    // Reset previous error messages
    $('.error-message').remove();

    // Validate inputs
    var isValid = true;

    // Name validation
    var name4 = $('#name4').val();
    if (!name4) {
      $('#name4').after('<div class="error-message">Please enter your first name</div>');
      isValid = false;
    }

    // Last Name validation
    var last_name4 = $('#last_name4').val();
    if (!last_name4) {
      $('#last_name4').after('<div class="error-message">Please enter your last name</div>');
      isValid = false;
    }

    // Phone validation
    var phone4 = $('#phone4').val();
    if (!phone4) {
      $('#phone4').after('<div class="error-message">Please enter your phone number</div>');
      isValid = false;
    } else if (!(/^\d{10}$/.test(phone4))) {
      $('#phone4').after('<div class="error-message">Please enter a valid 10-digit phone number</div>');
      isValid = false;
    }

    // WhatsApp Notification checkbox validation
    var whats_app_notification4 = $('#whats_app_notification4').is(':checked');
    if (!whats_app_notification4) {
      $('#whats_app_notification4 ~ label').after('<div class="error-message">Please check the WhatsApp Notifications checkbox</div>');
      isValid = false;
    }


    // If all inputs are valid, submit the form
/*     if (isValid) {
        return true; // Continue with form submission
    } else {
        event.preventDefault(); // Prevent the form from submitting
        return false;
    } */



    // If all inputs are valid, submit the form
    if (isValid) {
      // Your form submission code here
      $('.viewPlanSpinner').fadeIn();
      $('.viewPlanSubmit').prop('disabled', true);
      $.ajax({
        type: 'POST',
        url: 'user_enquiry',
        data: $("#viewPlanForm").serializeArray(),
        success: function (response) {
          createCookie("form-filled", true,1);
          $('.viewPlanFormSpinner').hide();
          // $('#viewPlanPP .userInfoForm').hide();
          $('#viewPlanForm')[0].reset();

          $('.ppOverlay').fadeOut();
          $('#viewPlanPP').fadeOut();
          //$('#viewPlanPP .viewPlanThanku').fadeIn();

          $('.plan1-img').html(
            `
            <a data-src="img/bptpImg/tower26-overall.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower26-overall.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan2-img').html(
            `
            <a data-src="img/bptpImg/tower26-unit1.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower26-unit1.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan3-img').html(
            `
            <a data-src="img/bptpImg/tower26-unit2.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower26-unit2.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan4-img').html(
            `
            <a data-src="img/bptpImg/tower26-unit3.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower26-unit3.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan5-img').html(
            `
            <a data-src="img/bptpImg/tower26-unit4.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower26-unit4.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan6-img').html(
            `
            <a data-src="img/bptpImg/tower27-overall.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower27-overall.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan7-img').html(
            `
            <a data-src="img/bptpImg/tower27-unit1.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower27-unit1.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan8-img').html(
            `
            <a data-src="img/bptpImg/tower27-unit2.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower27-unit2.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan9-img').html(
            `
            <a data-src="img/bptpImg/tower27-unit3.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower27-unit3.jpg" alt="flat plan">
            </a>
            `
          );
          $('.plan10-img').html(
            `
            <a data-src="img/bptpImg/tower27-unit4.jpg" data-fancybox="flatplan">
              <img src="img/bptpImg/tower27-unit4.jpg" alt="flat plan">
            </a>
            `
          );
          $('.viewPlanBtn').hide();
        },
        error: function (error) {
          alert('An error occurred. Please try again later.');
        }
      });

    }

  });

  $('#enquiryForm5').submit(function (e) {
    // e.preventDefault();

    // Reset previous error messages
    $('.error-message').remove();

    // Validate inputs
    var isValid = true;

    // Name validation
    var name5 = $('#name5').val();
    if (!name5) {
      $('#name5').after('<div class="error-message">Please enter your first name</div>');
      isValid = false;
    }

    // Last Name validation
    var last_name5 = $('#last_name5').val();
    if (!last_name5) {
      $('#last_name5').after('<div class="error-message">Please enter your last name</div>');
      isValid = false;
    }

    // Phone validation
    var phone6 = $('#phone6').val();
    if (!phone6) {
      $('#phone6').after('<div class="error-message">Please enter your phone number</div>');
      isValid = false;
    } else if (!(/^\d{10}$/.test(phone6))) {
      $('#phone6').after('<div class="error-message">Please enter a valid 10-digit phone number</div>');
      isValid = false;
    }


    // WhatsApp Notification checkbox validation
    var whats_app_notification5 = $('#whats_app_notification5').is(':checked');
    if (!whats_app_notification5) {
      $('#whats_app_notification5 ~ label').after('<div class="error-message">Please check the WhatsApp Notifications checkbox</div>');
      isValid = false;      
    }

    // If all inputs are valid, submit the form
/*     if (isValid) {
        return true; // Continue with form submission
    } else {
        event.preventDefault(); // Prevent the form from submitting
        return false;
    } */



    // If all inputs are valid, submit the form
    if (isValid) {
      // Your form submission code here
      // $('.enquiryForm5Spinner').fadeIn();
      $('.enquiryForm5Submit').prop('disabled', true);
      $('#enquiry5 .userInfoForm').hide();
      //$('#enquiry5 .enquiryForm5Thanku').fadeIn();
      $('.enquiryForm5Submit').prop('disabled', false);
      // var formData = {
      //   name5: $('#name5').val(),
      //   last_name5: $('#last_name5').val(),
      //   phone5: $('#phone5').val(),
      //   whats_app_notification5: whats_app_notification1,  
      // };
      // console.log(formData);
      

      // $.ajax({
      //   //type: 'POST',
      //   //url: 'user_enquiry',
      //   // url: '../send_email.php',
      //   data: formData,
      //   success: function (response) {
      //     $('.enquiryForm5Spinner').hide();
      //     $('#enquiry5 .userInfoForm').hide();
      //     $('#enquiryForm5')[0].reset();
      //     $('#enquiry5 .enquiryForm5Thanku').fadeIn();
      //   },
      //   error: function (error) {
      //     alert('An error occurred. Please try again later.');
      //   }
      // });
      return true;
    }else{
      return false;
    }
    $('form').trigger('reset');

  });


});




