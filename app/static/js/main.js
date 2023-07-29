$(document).ready(function() {
    var socket = io.connect('http://' + document.domain + ':' + location.port);

    // Send message
    $('#send-button').click(function() {
        var msg = $('#message-input').val();
        socket.emit('send_message', {message: msg});
        $('#message-input').val('');
    });

    // Receive message
    socket.on('receive_message', function(msg) {
        var time = new Date(msg.timestamp);
        var formattedTime = time.getHours() + ":" + time.getMinutes();
        $('#message-list').append('<li>' + formattedTime + ' - ' + msg.message + '</li>');
    });

    // Login
    $('#login-form').submit(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        socket.emit('login', {username: username, password: password});
    });

    // Register
    $('#register-form').submit(function(e) {
        e.preventDefault();
        var username = $('#reg-username').val();
        var password = $('#reg-password').val();
        socket.emit('register', {username: username, password: password});
    });

    // View profile
    $('#user-profile').click(function() {
        var username = $(this).data('username');
        socket.emit('view_profile', {username: username});
    });
});