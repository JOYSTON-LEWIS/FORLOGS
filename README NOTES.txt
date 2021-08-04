PS Z:\WORK DRIVE\Studies\Languages Training\Angular2\FORBLOG> netstat -a -n -o | findStr "7200"
  TCP    127.0.0.1:7200         0.0.0.0:0              LISTENING       9676
PS Z:\WORK DRIVE\Studies\Languages Training\Angular2\FORBLOG> taskkill -f /pid 9676
SUCCESS: The process with PID 9676 has been terminated.

This is to terminate existing angular instances in Cisual Studio 2019.
