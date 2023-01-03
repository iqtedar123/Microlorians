import { css } from '@emotion/react';
import { InvoiceI } from '@shared/types/types';
import { Breakpoints } from '@shared/utils/breakpoints';
import InvoiceDetail from './InvoiceDetail';

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  }),
  image: css({
    borderRadius: 8,
  }),
  content: css({
    display: 'flex',
    flexDirection: 'column',
  }),
  title: css({
    fontWeight: 600,
    fontSize: 24,
    marginBottom: 16,
    color: 'rgb(50, 186, 246)',
  }),
  description: css({
    fontSize: 18,
    textAlign: 'start',
  }),
  price: css({
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'end',
    marginTop: 'auto',
  }),
  invoiceId: css({
    marginLeft: 8,
    border: '1px solid black',
    borderRadius: 8,
    fontWeight: 600,
  }),
  contactWrapper: css({
    display: 'flex',
    gap: 8,
    justifyContent: 'space-between',
    [Breakpoints.sm]: {
      flexDirection: 'column'
    }
  }),
  contactColumn: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }),
};

// TODO ADD Items description
const Invoice = (invoice: InvoiceI) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.invoiceId}>Invoice #{invoice.id}</div>
      <div css={styles.contactWrapper}>
        <div css={styles.contactColumn}>
          From
          <InvoiceDetail label={'Name'} value={invoice.from.name} />
          <InvoiceDetail label={'Email'} value={invoice.from.email} />
          <InvoiceDetail label={'Address'} value={invoice.from.address} />
          <InvoiceDetail label={'GST#'} value={invoice.gst} />
        </div>
        <div css={styles.contactColumn}>
          Bill To
          <InvoiceDetail label={'Name'} value={invoice.from.name} />
          <InvoiceDetail label={'Email'} value={invoice.customer.email} />
          <InvoiceDetail label={'Address'} value={invoice.customer.address} />
          <InvoiceDetail
            label={'Phone'}
            value={invoice.customer?.phone || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
