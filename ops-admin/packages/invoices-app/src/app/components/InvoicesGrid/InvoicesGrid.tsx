import { useEffect, useState } from 'react';
import { InvoiceI } from '@shared/types/types';
import Invoice from '../Invoice/Invoice';
import { css } from '@emotion/react';
import { Breakpoints } from '@shared/utils/breakpoints';

const fetchInvoices = (
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceI[]>>
) => {
  fetch('https://6383f4dd3fa7acb14fea887c.mockapi.io/invoices')
    .then((res) => res.json())
    .then((json) => setInvoices(json));
};

const styles = {
  wrapper: css({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    padding: 8,
    columnGap: 8,
    rowGap: 30,
    [Breakpoints.sm]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(100%, 1fr))'

    }
  }),
};
const InvoicesGrid = () => {
  const [invoices, setInvoices] = useState<InvoiceI[]>([]);
  useEffect(() => {
    fetchInvoices(setInvoices);
  }, []);
  return (
    <div css={styles.wrapper}>
      {invoices.length > 0 &&
        invoices.map((invoice) => <Invoice key={invoice.id} {...invoice} />)}
    </div>
  );
};

export default InvoicesGrid;
