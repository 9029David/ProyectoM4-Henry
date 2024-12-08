import { IIcon } from "./IIcon"

import styles from "./Icon.module.css"

const Icon: React.FC<IIcon> = ({ href, imgSrc, imgAlt }) => {
    return (
        <a href={href}> <img className={styles.container} src={imgSrc} alt={imgAlt} /></a>
    )
}

export default Icon