document.addEventListener("DOMContentLoaded", function () {
    function handleFeedback(tag, status, text) {
        if (status === "failed") {
            $(`#${tag}`).css({
                border: "1px solid red",
            });
            $(`#${tag}`).focus();
            $(`.error-${tag}`).addClass("error-feedback").text(text);
        } else {
            $(`#${tag}`).css({
                border: "1px solid rgba(50, 51, 50, 0.39)",
            });
            $(`.error-${tag}`).removeClass("error-feedback").text(text);
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function checkName(name) {
        if (name === "") {
            handleFeedback("name", "failed", "Name is required");
            return false;
        } else {
            handleFeedback("name", "success", "");
            return true;
        }
    }

    function checkEmail(email) {
        if (email === "") {
            handleFeedback("email", "failed", "Email is required");
            return false;
        } else {
            if (!validateEmail(email)) {
                handleFeedback("email", "failed", "Invalid email address");
                return false;
            } else {
                handleFeedback("email", "success", "");
                return true;
            }
        }
    }

    function checkMessage(message) {
        if (message === "") {
            handleFeedback("message", "failed", "Message is required");
            return false;
        } else {
            handleFeedback("message", "success", "");
            return true;
        }
    }

    $("#btn-submit").on("click", function (e) {
        e.preventDefault();
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        if (checkName(name) && checkEmail(email) && checkMessage(message)) {
            const data = { name, email, message };
            // Can't convert the response from the server
            // Can't get the response from the server through ajax
            // So every after submission of the form,
            // It will then show the sent successfully notification
            $.ajax({
                type: "POST",
                url:
                    "https://script.google.com/macros/s/AKfycbwT9QRCgaFilEKw7cxIRWjxMVZQUb5dIrt_nPfD/exec",
                data,
            });
            setTimeout(() => {
                Swal.fire({
                    icon: "success",
                    title: "Sent successfully",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    $("#name, #email, #message").val("");
                    $("#name").focus();
                });
            }, 1500);
        }
    });

    $("#btn-clear").on("click", function (e) {
        e.preventDefault();
        const arrTags = ["name", "email", "message"];
        arrTags.forEach((tag) => {
            handleFeedback(tag, "success", "");
        });
        $("#name, #email, #message").val("");
        $("#name").focus();
    });

    // Keyup function, avoid displaying error when the user start to type
    $("#name").keyup(() => {
        $("#name").css({
            border: "1px solid rgba(50, 51, 50, 0.39)",
        });
        $(".error-name").removeClass("error-feedback").text("");
    });
    $("#email").keyup(() => {
        $("#email").css({
            border: "1px solid rgba(50, 51, 50, 0.39)",
        });
        $(".error-email").removeClass("error-feedback").text("");
    });
    $("#message").keyup(() => {
        $("#message").css({
            border: "1px solid rgba(50, 51, 50, 0.39)",
        });
        $(".error-message").removeClass("error-feedback").text("");
    });
});
