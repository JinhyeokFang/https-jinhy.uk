import styles from '../../styles/profile.module.css'

export const ProfileInformation = () => {
    return (
        <>
          <section>
              <p className={styles.link}><a href='https://github.com/JinhyeokFang'>https://github.com/JinhyeokFang</a></p>
              <p className={styles.link}>hyeki0206@naver.com, jinhyeokfang@gmail.com</p>
          </section>
          <section>
              <p className={styles.school}><b>경기대</b> 컴퓨터공학전공 재학 <span className={styles.studyPeriod}>(21.03 ~ )</span></p>
              <p className={styles.school}><b>선린인터넷고</b> 소프트웨어과 졸업 <span className={styles.studyPeriod}>(18.03 ~ 21.02)</span></p>
          </section>
          <section>
              <p className={styles.school}>정보처리기능사 | SQL 개발자</p>
              <p className={styles.school}>5th UMC | 20th IWOP</p>
          </section>
        </>
    )
}
