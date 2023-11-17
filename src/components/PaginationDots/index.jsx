import styles from "./style.module.css"

const PaginationDots = () => {
    return (
        <div className="center gap-1.5">
            <button
                className={`${styles["carousel-dot"]} ${styles["active"]}`}
            ></button>
            <button className={styles["carousel-dot"]}></button>
            <button className={styles["carousel-dot"]}></button>
        </div>
    );
};

export default PaginationDots;
