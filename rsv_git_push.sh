echo "몇 분 뒤에 Push 종료를 예약하실건가요: "
read ptime

while [ 1 -le $ptime ]
do
	echo "${ptime}분 뒤 프로젝트 Push 후 종료됩니다..."
	sleep 1m
	ptime=$(($ptime-1))
done

shutdown.exe -s -t 300
sh ./auto-script.sh