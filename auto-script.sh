# 자동화 스크립트

# article_data 파일 읽기
search_dir=./src/store/article_data
file_dir=store/article_data

##### sitemap (1) - 파일 준비
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\">

<!-- 메뉴 -->
    <url>
        <loc>https://parkjeongwoong.github.io/</loc>
        <changefreq>monthly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/profile</loc>
        <changefreq>monthly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/articles</loc>
        <changefreq>daily</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/archives</loc>
        <changefreq>weekly</changefreq>
    </url>" > sitemap.xml
##### sitemap (1) END #####


##### 폴더 / 파일 구분
directories=()

for entry in `ls $search_dir`; do
  if [ -d $search_dir/$entry ]; then
    directories+=($entry)
  fi
done

echo Directories : ${directories[@]}



############### [폴더] ###############
for dir in ${directories[@]}; do
  echo [D : ${dir} 폴더 진입]
  CATEGORY=$dir
  ARTICLE_ID=0

##### js file (1) - Category 파일 생성
  echo "const ${CATEGORY} = [" > $search_dir/${CATEGORY}.js
##### js file (1) END #####

  ##### 폴더의 파일 하나씩 추출 -> 날짜, 위치
  for file in `ls $search_dir/$dir`; do
    DATE="${file%%_*}"

    REL_ADDRESS=$search_dir/$dir/$file
    FILE_ADDRESS=$file_dir/$dir/$file
    
    ##### 파일 읽기 -> 제목 추출
    while read line; do

      if [[ ${line:0:2} == "# " ]]; then
        TITLE="${line#*# }" # 각 파일의 첫 번째 H1을 제목으로 선택
        TITLE="${TITLE::-1}" # 개행문자 제거
        break
      fi

    done < $REL_ADDRESS

##### js file (2) - Article Data 추가
    echo "  {
    category: \"${CATEGORY}\",
    id: ${ARTICLE_ID},
    title: \"${TITLE}\",
    date: new Date(\"${DATE:0:4}-${DATE:4:2}-${DATE:6:2}\"),
    content: \"${FILE_ADDRESS}\",
  }," >> $search_dir/${CATEGORY}.js
  
    ARTICLE_ID=`expr $ARTICLE_ID + 1`
##### js file (2) END #####

  done

##### js file (3) - Category 파일 완료
  echo "];

export default ${CATEGORY};
" >> $search_dir/${CATEGORY}.js
##### js file (3) END #####

  echo -D : ${entry}.js 파일 생성-
done
######################################



files=()

for entry in `ls $search_dir`; do
  if [ -f $search_dir/$entry ]; then
    files+=($entry)
  fi
done

echo Files : ${files[@]}



############### [파일] ###############
for file in ${files[@]}; do
  echo [F : ${file} 파일 진입]
      
##### sitemap (2) - 카테고리 준비
  category="${file%%.*}"
  url_index=0
  echo "
<!-- ${category} -->" >> sitemap.xml
##### sitemap (2) END #####
      
  while read line; do

    # 파일 위치 확인
    if [[ "$line" == *"{"* ]]; then

##### sitemap (3) - URL 추가
      echo "    <url>
        <loc>https://parkjeongwoong.github.io/articles/${category}/${url_index}</loc>
        <changefreq>daily</changefreq>
    </url>" >> sitemap.xml

      url_index=`expr $url_index + 1`
##### sitemap (3) END #####

    fi

  done < $search_dir/$file

  echo -F : sitemap에 ${file} 정보 추가-
done
######################################


##### sitemap (4) - sitemap 태그 닫기
echo "
</urlset>" >> sitemap.xml
##### sitemap (4) END #####


############### [배포] ###############
npm run deploy
######################################