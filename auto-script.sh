# 자동화 스크립트

# article_data 파일 읽기
search_dir=./src/store/article_data
file_dir=store/article_data

# js 파일에 기록된 목록
js_list=()

# sitemap (1) - 파일 준비
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
    </url>" > sample_sitemap.xml
# sitemap (1) END #####

for entry in `ls $search_dir`; do

    # js 파일일 경우
    if [ -f $search_dir/$entry ]; then
      
      # sitemap (2) - 카테고리 준비
      category="${entry%%.*}"
      url_idx=0
      echo "
<!-- ${category} -->" >> sample_sitemap.xml
      # sitemap (2) END #####
      
      is_address=false
      
      while read line; do
        # 파일 주소 확인
        if [[ "$line" == *"content"* ]]; then
          is_address=true
        fi
        if [[ "$line" == *"},"* ]]; then
          is_address=false

          # sitemap (3) - URL 추가
          echo "    <url>
        <loc>https://parkjeongwoong.github.io/articles/${category}/${url_idx}</loc>
        <changefreq>daily</changefreq>
    </url>" >> sample_sitemap.xml
          url_idx=`expr $url_idx + 1`
          # sitemap (3) END #####

        fi
        # content: 만 있는 문자열 제거
        if $is_address && [[ "${line: (-2):1}" != ":" ]] ; then
          GET_STRING_BACK="${line#*\"}"
          GET_STRING_FRONT="${GET_STRING_BACK%%\"*}"
          # echo $GET_STRING_FRONT/
          js_list+=($GET_STRING_FRONT)
        fi

      done < $search_dir/$entry

    # 폴더일 경우  
    elif [ -d $search_dir/$entry ]; then
      # ls $search_dir/$entry

      for file in `ls $search_dir/$entry`; do
        FILE_ADDRESS=$file_dir/$entry/$file
        echo $FILE_ADDRESS//
      done
    fi

done

# sitemap (4) - sitemap 태그 닫기
echo "
</urlset>" >> sample_sitemap.xml
# sitemap (4) END #####

echo "====="

for file in ${js_list[@]}; do
  echo $file
done
# echo ${js_list[@]}


# 배포
#npm run deploy