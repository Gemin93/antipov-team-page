import styles from "./Title.module.css";

export const Title = () => {
  return (
    <>
      <div className={styles.titleWrap}>
        <h1 className={styles.h1}>Наша команда</h1>
        <p className={styles.p}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </p>
      </div>
    </>
  );
};
