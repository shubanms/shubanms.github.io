const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000);
};

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000);
};

start();
stop();