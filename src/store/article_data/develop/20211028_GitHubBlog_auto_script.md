# [GitHub Blog 개발기] sitemap, 게시글 등록 자동화 (Shell Script)

지금까지 매번 글을 새로 작성할 때마다 다음과 같은 일을 해야 했었다.

1. 작성한 글의 Meta data(제목, 파일 위치, 작성시간, ID)를 **Meta data를 관리하는 JS 파일**에 추가
2. **sitemap.xml**에 해당 글의 url 추가
3. **배포**

처음에 계획했던 대로 위의 세 가지 프로세스를 자동화하고 싶었고 Shell Script를 이용해서 자동화를 구현했다.



## 동작 순서

1. Markdown이 있는 폴더와 안의 파일을 읽어 각 파일에 대한 Meta data를 얻고, <u>이를 바탕으로 Meta data 관리 JS 파일을 만든다.</u>

2. JS 파일에 있는 정보를 바탕으로 <u>sitemap.xml 생성</u>
3. 배포



## Shell Script 코드 전문

```bash
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
  CATEGORY="${dir%%/*}" # 윈도우에서 실행하는 경우 폴더명 끝에 /이 붙는 문제 해결
  ARTICLE_ID=0

##### js file (1) - Category 파일 생성
  echo "const ${CATEGORY} = [" > $search_dir/${CATEGORY}.js
##### js file (1) END #####

  ##### 폴더의 파일 하나씩 추출 -> 날짜, 위치
  for file in `ls $search_dir/$CATEGORY`; do
    DATE="${file%%_*}"

    REL_ADDRESS=$search_dir/$CATEGORY/$file
    FILE_ADDRESS=$file_dir/$CATEGORY/$file
    
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
```



## 쉘 스크립트 문법

### Array

- [ **변수명=()** ] 형태로 생성
- [ **변수명+=(값)** ] 형태로 값 추가 가능

- [ $변수명 ] 은 0번째 인덱스의 값만 불러옴
  - 따라서 전체 값을 가져올 때는 반드시 [@]을 붙여서 써야 한다
  - [ **${변수명[@]}** ]



### 조건문

```bash
if [조건문]; then
	실행문
fi
```

```bash
if [조건문]; then
	실행문
	
elif [조건문]; then
	실행문
	
else [조건문]; then
	실행문
fi
```



### 반복문

- for문

```bash
for 변수 in 나열된 값; do
	실행문
done
```

- while문

```bash
while [조건문]; do
	실행문
done
```



### 문자열 추출

- 기준값 뒤로 추출 : **GET_STRING_BACK="${STRING#*기준값}"**
- 기준값 앞으로 추출 : **GET_STRING_FRONT="${STRING%%기준값*}"**
- 인덱스 기준으로 자르기 : **${STRING:시작인덱스:개수}**



### 파일 읽기

- 한 줄씩 읽기

```bash
while read line; do
	echo $line
done < 파일위치
```

- 전체 읽기

  - cat 사용

  ```bash
  file=`cat 파일위치`
  echo "$file"
  ```

  - $() 사용

  ```bash
  file=$(<파일위치)
  echo "$file"
  ```



### 파일 저장

- 파일 생성/덮어쓰기 (>)

```bash
echo "내용" > 파일위치
```

- 기존 파일에 데이터 추가 (>>)

```bash
echo "내용" >> 파일위치
```



### Tip

- 변수에 값을 할당할 때 띄어쓰기를 하면 안 된다
  - a = Hi (X)     /     **a=Hi (O)**
- 변수는 기본적으로 문자열이기 때문에 계산을 하려면 **expr** 를 사용해야 한다.
  - **result='expr $var + 1'**