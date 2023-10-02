import styles from './FormaContacts.module.css';

export const FormaContacts = ({
  number,
  handleChange,
  hendleSubmit,
  value,
}) => {
  return (
    <>
      <form className={styles.form} onSubmit={hendleSubmit} action="">
        <div className={styles.formDivContainer}>
          <label className={styles.label} htmlFor="">
            Name
          </label>
          <input
            className={styles.inputformDivContainer}
            value={value}
            name="name"
            onChange={handleChange}
            type="text"
            required
          />
        </div>

        <div className={styles.formDivContainer}>
          <label className={styles.label} htmlFor="">
            Number
          </label>
          <input
            className={styles.inputformDivContainer}
            value={number}
            type="tel"
            name="number"
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
