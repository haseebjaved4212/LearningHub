/**
 * Razorpay integration constants - API base URL, currency, payout/refund literals.
 * Razorpay API contract ke hisaab se ye values mandatory hain.
 */
export const RAZORPAY_API_BASE_URL = 'https://api.razorpay.com/v1';
export const RAZORPAY_DEFAULT_CURRENCY = 'INR';
export const RAZORPAY_DEFAULT_REFUND_REASON = 'Refund requested';
export const RAZORPAY_REFUND_SPEED = 'normal';
export const RAZORPAY_CONTACT_TYPE = 'vendor';
export const RAZORPAY_FUND_ACCOUNT_TYPE = 'bank_account';
export const RAZORPAY_PAYOUT_MODE = 'IMPS';
export const RAZORPAY_PAYOUT_PURPOSE = 'payout';
export const RAZORPAY_PAYOUT_NARRATION = 'Instructor payout';
