import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import styles from './cartTab.module.scss';

const CartTab = function () {
  return (
    <div className={styles.tab_container}>
      <div className={styles.tab_content}>
        <a className={styles.active}>1. Shopping Cart</a>
        <i className="fas fa-angle-right" />
        <a className={styles.active}>2. Checkout</a>
        <i className="fas fa-angle-right" />
        <a>3. Order Complete</a>
      </div>
    </div>
  );
};

export default CartTab;
