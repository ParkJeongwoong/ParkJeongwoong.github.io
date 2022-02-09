echo "몇 분 뒤에 Push 종료를 예약하실건가요: "
read ptime

sleep ${ptime}m

shutdown.exe -s -t 300
sh ./auto-script.sh