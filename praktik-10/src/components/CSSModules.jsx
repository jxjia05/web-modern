import      React from 'react';
import styles from './CSSModules.module.css';

function CSSModules() {
  return (
    <div className={styles.cssModulesDemo}>
      <button className={styles.container}>
        CSS Modules Button
      </button>
      <p className={styles.cssModulesText}>
        This is styled with CSS Modules
      </p>
    </div>
  );
}
export default CSSModules;