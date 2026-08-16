/**
 * Payment domain constants - platform commission, webhook events, analytics periods.
 * Students ko pehle ye file share karo taaki payment flow samajhne me asaani ho.
 */
export const PAYMENT_PLATFORM_COMMISSION_RATE = 0.2;
export const PAYMENT_PLATFORM_COMMISSION_PERCENT = '20';
export const PAYMENT_ORDER_RECEIPT_PREFIX = 'order_';
export const PAYMENT_DEFAULT_REFUND_REASON = 'Processed by Razorpay';

export const PAYMENT_WEBHOOK_EVENTS = {
  CAPTURED: 'payment.captured',
  FAILED: 'payment.failed',
  REFUND_PROCESSED: 'refund.processed',
} as const;

export const PAYMENT_ANALYTICS_PERIODS = {
  MONTH: 'month',
  YEAR: 'year',
} as const;
