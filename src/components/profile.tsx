import Image from 'next/image'
import profileImage from '../../public/profile.jpg'
import styles from '../styles/profile.module.css'

export const Profile = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.imageSection}>
                    <Image className={styles.image} src={profileImage} alt="" width="260" height="260" />
                </div>
                <div className={styles.infoSection}>
                    <div>
                        <h1 className={styles.name}>개발자 방진혁 | <span className={styles.catchword}>성장하는 코드를 지향합니다.</span></h1>
                        <p className={styles.description}>
                            미래를 예측하기보단 현재에 집중하고자 노력합니다. <br/>
                            확장성을 고려하는 코드를 지향합니다.
                        </p>
                    </div>
                    <hr className='lighter' />
                    <div>
                        <p className={styles.link}>깃허브 링크: <a href='https://github.com/JinhyeokFang'>https://github.com/JinhyeokFang</a></p>
                        <p className={styles.link}>이메일: hyeki0206@naver.com 또는 jinhyeokfang@gmail.com</p>
                    </div>
                    <hr className='lighter' />
                    <div>
                        <h2>학력</h2>
                        <p className={styles.school}>경기대학교 AI컴퓨터공학부 컴퓨터공학전공 <span className={styles.studyPeriod}>(21.03 ~ )</span></p>
                        <p className={styles.school}>선린인터넷고등학교 소프트웨어과 <span className={styles.studyPeriod}>(18.03 ~ 21.02)</span></p>
                    </div>
                    <hr className='lighter' />
                    <div>
                        <h2 className={styles.duty}>병역</h2>
                        <p>복무중</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}