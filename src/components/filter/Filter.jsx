import styles from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <div className={styles.divFilter}>
      <h4>Find contacts by name</h4>
      <input
        className={styles.inputFilter}
        onChange={onChange}
        value={filter}
        type="text"
      />
    </div>
  );
};
