# 자동화 스크립트

# article_data 파일 읽기
search_dir=./src/store/article_data
# js 파일에 기록된 목록
js_list=()

for entry in `ls $search_dir`; do

    # js 파일일 경우
    if [ -f $search_dir/$entry ]; then
      is_address=false
      
      while read line; do
        # 파일 주소 확인
        if [[ "$line" == *"content"* ]]; then
          is_address=true
        fi
        if [[ "$line" == *"},"* ]]; then
          is_address=false
        fi
        # content: 만 있는 문자열 제거
        if $is_address && [[ "${line: (-2):1}" != ":" ]] ; then
          echo $line | sed 's/content:/ /g' | tr -d ' ",'
          js_list+=($line | sed 's/content:/ /g' | tr -d ' ",')
        fi

      done < $search_dir/$entry

    # # 폴더일 경우  
    # elif [ -d $search_dir/$entry ]; then
    #   echo "directory"
    fi

done



# 배포
#npm run deploy