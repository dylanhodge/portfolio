import styles from './Card.module.scss';

type CardProps = {
    title: string,
    children: string | null | undefined | JSX.Element | JSX.Element[]
};

export const Card = ({
    title,
    children
}: CardProps): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            {children}
        </div>
    );
};
