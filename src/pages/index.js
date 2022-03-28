import React, { useContext, useEffect, useState } from "react";
import SEO from "components/seo";
import { store } from "store/store";
import Link from "next/link";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/Home.module.css";
import { useRouter } from "next/router";
import Api from "api/api";

export default function Home() {
  const router = useRouter();
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { home } = value;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "GET_HOME" });
    setIsLoading(false);

    // 방문 확인
    Api.visited({
      url: "https://parkjeongwoong.github.io" + router.asPath,
    });
  }, [dispatch, router.asPath]);

  return (
    <div>
      <SEO
        description="안녕하세요! 금융 IT 개발자 박정웅입니다!
        공부한 내용을 기록하고 포트폴리오를 정리하는 개인 블로그입니다.
        끊임없이 배우고 성장하는 것을 즐겨 반도체 엔지니어에서 개발자로 전직했습니다.
        효율적이고 깔끔한 코드에 관심이 많습니다.        
        피아노, 운동, 여행을 좋아합니다.        
        Yonsei Univ.
        Material Science & Engineering
        KATUSA, USFK
        United States Forces Korea
        SK Hynix
        NAND Flash CMP Engineering
        SSAFY
        Samsung SW Academy For Youth
        DAOU Tech.
        : KIWOOM Securities
        Financial SW Developer"
        title="Home"
        siteTitle="웅's 블로그"
      />

      <main>
        {isLoading ? (
          <div className={globalStyles.loader}>
            <span className={globalStyles.loader_text}>Loading...</span>
          </div>
        ) : (
          <div className={styles.Home}>
            {/* 왼쪽 */}
            <div className={styles.Home__left}>
              <div>
                <div className={styles.Home__profile_img}>
                  {/* 프로필 이미지 */}
                  <img src={home.profile_img} alt="profile" />
                </div>
                <div className={styles.Home__profile_content}>
                  <h3>박정웅</h3>
                  <div>
                    {home.summary.split("\n").map((element, idx) =>
                      element[0] === "\t" ? (
                        <div
                          key={idx}
                          className={styles.Home__profile_content_detail}
                        >
                          {element}
                        </div>
                      ) : (
                        <div
                          key={idx}
                          className={styles.Home__profile_content_list}
                        >
                          {element}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* 오른쪽 */}
            <div className={styles.Home__right}>
              <div>
                <p>
                  <strong>{home.welcome_word}</strong>
                </p>
                <hr className={styles.Horizontal_Line} />
                <p>
                  <strong>소개글</strong>
                </p>
                <div>
                  {home.introduction.split("\n").map((element, idx) => (
                    <p key={idx}>{element}</p>
                  ))}
                </div>
                <hr className={styles.Horizontal_Line} />
                <div>
                  <Link href="/profile">
                    <a className={globalStyles.link_tag}>자세히 보러가기</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
