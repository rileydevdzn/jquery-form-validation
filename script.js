$(function() {
    $("form[name='signup']").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                minlength: "Password requires a minimum of 6 characters"
            },
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});  