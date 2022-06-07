$(document).ready(function () {
  var child = 1;
  var length = $("section .register-usr").length - 1;

  $("section .register-usr").not("section .register-usr:nth-of-type(1)").hide();
  $("section .register-usr")
    .not("section .register-usr:nth-of-type(1)")
    .css("transform", "translateX(100px)");

  $(".individual-btn").click(function () {
    nextFunction();
  });

  $(".business-btn").click(function () {
    child = 12;
    nextFunction();
  });

  $(".btn-register").click(function () {
    var name = document.getElementById("usr_name").value;
    var email = document.getElementById("usr_email").value;
    var pass = document.getElementById("password-field").value;
    var check = document.getElementById("check_term").value;
    if (name == null || name == "") {
      alert("please enter name");
    } else if (email == null || email == "" || !validateEmail(email)) {
      alert("please enter Valid email address");
    } else if (pass == null || pass == "") {
      alert("please enter valid password");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-2").click(function () {
    var phone = document.getElementById("usr_phone").value;
    var address = document.getElementById("usr_address").value;
    var country = document.getElementById("usr_country").value;
    if (
      phone == null ||
      phone == "" ||
      phone.length < 10 ||
      phone.length > 10
    ) {
      alert("please Enter Phone");
    } else if (address == null || address == "") {
      alert("please Enter Valid address");
    } else if (country == null || country == "") {
      alert("please enter Country");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-3").click(function () {
    var birthdate = document.getElementById("usr_birthdate").value;
    var address = document.getElementById("usr_gender").value;
    var occupation = document.getElementById("usr_occupation").value;
    if (birthdate == null || birthdate == "") {
      alert("please Enter Birth Date");
    } else if (address == null || address == "") {
      alert("please Enter Valid address");
    } else if (occupation == null || occupation == "") {
      alert("please enter Occupation");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-4").click(function () {
    var joint_account = document.getElementById("joint_account").value;
    if (joint_account == "Yes") {
      nextFunction();
    } else {
      child = 10;
      nextFunction();
    }
  });

  $(".btn-register-5").click(function () {
    var name = document.getElementById("another_name").value;
    var email = document.getElementById("another_email").value;
    var pass = document.getElementById("another_password").value;
    var check = document.getElementById("check_term").value;
    if (name == null || name == "") {
      alert("please enter name");
    } else if (email == null || email == "" || !validateEmail(email)) {
      alert("please enter Valid email address");
    } else if (pass == null || pass == "") {
      alert("please enter valid password");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-6").click(function () {
    var phone = document.getElementById("another_phone").value;
    var address = document.getElementById("another_address").value;
    var country = document.getElementById("another_country").value;
    if (
      phone == null ||
      phone == "" ||
      phone.length < 10 ||
      phone.length > 10
    ) {
      alert("please Enter Phone");
    } else if (address == null || address == "") {
      alert("please Enter Valid address");
    } else if (country == null || country == "") {
      alert("please enter Country");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-7").click(function () {
    var birthdate = document.getElementById("another_birthdate").value;
    var address = document.getElementById("another_gender").value;
    var occupation = document.getElementById("another_occupation").value;
    if (birthdate == null || birthdate == "") {
      alert("please Enter Birth Date");
    } else if (address == null || address == "") {
      alert("please Enter Valid address");
    } else if (occupation == null || occupation == "") {
      alert("please enter Occupation");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-8").click(function () {
    var signature = document.getElementById("signature").value;
    var photo = document.getElementById("photo").value;
    if (signature == null || signature == "") {
      alert("please upload signature");
    } else if (photo == null || photo == "") {
      alert("please upload photo");
    } else {
      document.getElementById("registration_form").submit();
      document.getElementById("complete_profile1").submit();
      document.getElementById("complete_profile2").submit();
      document.getElementById("complete_profile3").submit();
      document.getElementById("complete_profile4").submit();
      document.getElementById("complete_profile5").submit();
      document.getElementById("complete_profile6").submit();
      document.getElementById("complete_profile7").submit();
    }
  });

  $(".btn-register-9").click(function () {
    var name = document.getElementById("kin_name").value;
    var occupation = document.getElementById("kin_occupation").value;
    if (name == null || name == "") {
      alert("please enter name");
    } else if (occupation == null || occupation == "") {
      alert("please Ocupation");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-10").click(function () {
    var phone = document.getElementById("kin_phone").value;
    var address = document.getElementById("kin_address").value;
    var country = document.getElementById("kin_country").value;
    if (
      phone == null ||
      phone == "" ||
      phone.length < 10 ||
      phone.length > 10
    ) {
      alert("please Enter Phone");
    } else if (address == null || address == "") {
      alert("please Enter Valid address");
    } else if (country == null || country == "") {
      alert("please enter Country");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-11").click(function () {
    var signature = document.getElementById("kin_signature").value;
    var photo = document.getElementById("kin_photo").value;
    if (signature == null || signature == "") {
      alert("please upload signature");
    } else if (photo == null || photo == "") {
      alert("please upload photo");
    } else {
      document.getElementById("registration_form").submit();
      document.getElementById("complete_profile1").submit();
      document.getElementById("complete_profile2").submit();
      document.getElementById("complete_profile3").submit();
      document.getElementById("complete_profile8").submit();
      document.getElementById("complete_profile9").submit();
      document.getElementById("complete_profile10").submit();
    }
  });

  $(".btn-register-12").click(function () {
    var name = document.getElementById("company_name").value;
    var number = document.getElementById("company_number").value;
    var tax_id = document.getElementById("tax_id").value;
    var check = document.getElementById("check_term").value;
    if (name == null || name == "") {
      alert("please enter name");
    } else if (number == null || number == "") {
      alert("please enter Valid number");
    } else if (tax_id == null || tax_id == "") {
      alert("please enter Tax ID");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-13").click(function () {
    var date = document.getElementById("company_date").value;
    var address = document.getElementById("company_email").value;
    var pass = document.getElementById("comapny_password").value;
    var check = document.getElementById("check_term").value;
    if (date == null || date == "") {
      alert("please Date");
    } else if (address == null || address == "") {
      alert("please enter Valid address");
    } else if (pass == null || pass == "") {
      alert("please enter valid password");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-14").click(function () {
    var phone = document.getElementById("company_phone").value;
    var address = document.getElementById("company_address").value;
    var country = document.getElementById("company_country").value;
    if (
      phone == null ||
      phone == "" ||
      phone.length < 10 ||
      phone.length > 10
    ) {
      alert("please Enter Phone");
    } else if (address == null || address == "") {
      alert("please Enter Valid address");
    } else if (country == null || country == "") {
      alert("please enter Country");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-15").click(function () {
    var name1 = document.getElementById("exetive_name1").value;
    var name2 = document.getElementById("exetive_name2").value;
    var name3 = document.getElementById("exetive_name3").value;
    var name4 = document.getElementById("exetive_name4").value;
    if (name1 == null || name1 == "") {
      alert("please enter name");
    } else if (name2 == null || name2 == "") {
      alert("please enter Valid number");
    } else if (name3 == null || name3 == "") {
      alert("please enter Valid number");
    } else if (name4 == null || name4 == "") {
      alert("please enter Valid number");
    } else {
      nextFunction();
    }
  });

  $(".btn-register-16").click(function () {
    var signature = document.getElementById("company_signature").value;
    var photo = document.getElementById("company_photo").value;
    if (signature == null || signature == "") {
      alert("please upload signature");
    } else if (photo == null || photo == "") {
      alert("please upload photo");
    } else {
      document.getElementById("registration_form").submit();
      document.getElementById("complete_profile11").submit();
      document.getElementById("complete_profile12").submit();
      document.getElementById("complete_profile13").submit();
      document.getElementById("complete_profile14").submit();
      document.getElementById("complete_profile15").submit();
    }
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function nextFunction() {
    console.log("before", child);
    if (child <= length) {
      child++;
      console.log("next funct", child);
    } else {
      console.log("finish");
    }
    var currentSection = $("section .register-usr:nth-of-type(" + child + ")");
    currentSection.fadeIn();
    currentSection.css("transform", "translateX(0)");
    currentSection
      .nextAll("section .register-usr")
      .css("transform", "translateX(100px)");
    $("section .register-usr").not(currentSection).hide();
  }

  $(".prev-sec").click(function () {
    if (child == 13) {
      child = 1;
    } else if (child == 11) {
      child = 6;
    }
    if (child > 1) {
      child--;
      console.log("prv funct", child);
    }

    var currentSection = $("section .register-usr:nth-of-type(" + child + ")");
    currentSection.fadeIn();
    currentSection.css("transform", "translateX(0)");
    currentSection
      .nextAll("section .register-usr")
      .css("transform", "translateX(100px)");
    $("section .register-usr").not(currentSection).hide();
  });
});
