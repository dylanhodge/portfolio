import styles from './Container.module.scss';

type ContainerProps = {
    children: JSX.Element | JSX.Element[]
};

export const Container = ({
    children
}: ContainerProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};
