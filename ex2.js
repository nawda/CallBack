function jobFinished() {
    console.log('done');
}

function startJob(callback) {
    callback();
}

startJob(jobFinished);