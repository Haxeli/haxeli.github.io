"use client"
import React from 'react'
import styles from './ProfileSection.module.css'
import Image from 'next/image'
import profilePicture from '../../../public/profile-square3.jpg'
import { TypeAnimation } from 'react-type-animation'

const ProfileSection = () => {
  return (
    <section>
        <div className={styles.gridContainer}>
            <h1 className={styles.headerTitle}>{"Hello, I'm "}
                <br />
                <span className={styles.headerName}>
                    <TypeAnimation
                        sequence={[
                            'Aleksi',
                            1000,
                            'a web developer',
                            1000,
                            'a game developer',
                            1000,
                            'a UI/UX designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </span>
            </h1>
            <p className={styles.headerParagraph}>
                This project is a work-in-progress portfolio built by using Next.js and React
            </p>
            <div className={styles.socialMediaContainer}>
                <a className={styles.socialMediaLink} href='https://github.com/Haxeli' target='blank'>
                    GitHub
                </a>
                <a className={styles.socialMediaLink} href='https://www.linkedin.com/in/aleksi-hannula/' target='blank'>
                    LinkedIn
                </a>
                <a className={styles.socialMediaLink} href='https://gamedevgains.itch.io/' target='blank'>
                    Itch.io
                </a>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Contact me</button>
                <button className={styles.button}>Download CV</button>
            </div>
            <div className={styles.profileImageContainer}>
                <Image
                    className={styles.profileImage}
                    src={profilePicture}
                    alt="Picture of the author"
                />
            </div>
        </div>
    </section>
  )
}

export default ProfileSection