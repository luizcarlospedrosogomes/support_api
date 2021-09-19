import {hide as btnStartHide, show as btnStartShow} from './ButtonStart.js'
import {hide as btnStopHide, show as btnStopShow} from './ButtonStop.js'
import {saveAs}  from './../util.js';

var recorder;

const captureScreen = (callback) => {
    invokeGetDisplayMedia(function(screen) {
        addStreamStopListener(screen, function() {
           stopRecordingCallback()
        });
        callback(screen);
    }, function(error) {
        console.error(error);
        alert('Unable to capture your screen. Please check console logs.\n' + error);
    });
}
const addStreamStopListener = (stream, callback) => {
    stream.addEventListener('ended', function() {
        callback();
        callback = function() {};
    }, false);
    stream.addEventListener('inactive', function() {
        callback();
        callback = function() {};
    }, false);
    stream.getTracks().forEach(function(track) {
        track.addEventListener('ended', function() {
            callback();
            callback = function() {};
        }, false);
        track.addEventListener('inactive', function() {
            callback();
            callback = function() {};
        }, false);
    });
}
function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Bytes';
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
const  stopRecordingCallback = () => {
    recorder.stopRecording(()=>{
        const url = URL.createObjectURL(recorder.getBlob())        
        recorder.screen.stop();
        recorder.destroy();
        recorder = null;
        btnStartShow();
        btnStopHide();
        saveAs(url, 'tela_gravada.gif')
    })
    
}

const invokeGetDisplayMedia = (success, error) => {
    var displaymediastreamconstraints = {
        video: {
            displaySurface: 'window', // monitor, window, application, browser
            logicalSurface: true,
            cursor: 'always' // never, always, motion
        }
    };

    // above constraints are NOT supported YET
    // that's why overriding them
    displaymediastreamconstraints = {
        video: true
    };

    if(navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
    }
    else {
        navigator.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
    }
}


const  startRecording = async () =>{
    btnStartHide();
    btnStopShow();
    captureScreen(function(screen) {
       
       recorder = RecordRTC(screen, {
            type: 'gif',
            frameRate: 1,
            quality: 30,            
            width: 1200,
            height: 800,
            hidden: 240,
            onGifRecordingStarted: function() {
               // document.querySelector('h1').innerHTML = 'Gif recording started.';
            },
            onGifPreview: function(gifURL) {
                //image.src = gifURL;
            }
        });

        recorder.startRecording();
        recorder.screen = screen;

    });
}

export {startRecording, stopRecordingCallback};