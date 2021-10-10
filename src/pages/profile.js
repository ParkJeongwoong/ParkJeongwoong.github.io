import React, { useContext, useEffect, useState } from "react";
import SEO from "components/seo";
import { store } from "store/store";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/Profile.module.css";

function Profile() {
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { profile } = value;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "GET_PROFILE" });
    setIsLoading(false);
  }, [dispatch]);

  return (
    <div>
      <SEO
        description="개발자 박정웅의 블로그 소개글입니다. 다우기술_키움증권 - SSAFY - SK 하이닉스 - KATUSA - 연세대학교"
        title="Profile"
        siteTitle="웅's 블로그"
      />

      <main>
        {isLoading ? (
          <div className={globalStyles.loader}>
            <span className={globalStyles.loader_text}>Loading...</span>
          </div>
        ) : (
          <div className={styles.Profile}>
            <h1>Profile</h1>
            <h2>소개</h2>
            <div className={styles.Profile__introduction}>
              {profile.introduction.split("\n").map((element, idx) => (
                <p key={idx}>{element}</p>
              ))}
            </div>
            <h2>기술스택</h2>
            <div className={styles.Profile__tech_stack}>
              <h3>Front-end</h3>
              <div className={styles.Profile__tech_stack_logo}>
                {profile.tech_stack.frontend.map((element, idx) => (
                  <img src={element} alt="tech_stack" key={idx} />
                ))}
              </div>
              <h3>Back-end</h3>
              <div className={styles.Profile__tech_stack_logo}>
                {profile.tech_stack.backend.map((element, idx) => (
                  <img src={element} alt="tech_stack" key={idx} />
                ))}
              </div>
              <h3>Version Control</h3>
              <div className={styles.Profile__tech_stack_logo}>
                {profile.tech_stack.version_control.map((element, idx) => (
                  <img src={element} alt="tech_stack" key={idx} />
                ))}
              </div>
              <h3>Studying</h3>
              <div className={styles.Profile__tech_stack_logo}>
                {profile.tech_stack.studying.map((element, idx) => (
                  <img src={element} alt="tech_stack" key={idx} />
                ))}
              </div>
            </div>
            <h2>경력</h2>
            <div className={styles.Profile__career}>
              {profile.career.map((element, idx) => (
                <div key={idx}>
                  <div className={styles.Profile__career_name}>
                    {element.name}
                  </div>
                  <div className={styles.Profile__career_content}>
                    {element.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;
